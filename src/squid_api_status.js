/*! Squid Core Widget */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.StatusView = factory(root.Backbone, root.squid_api);
    }
}(this, function (Backbone, squid_api) {

    /*
     * Widget which displays the global status set in it model (typically squid_api.model.status)
     */
    var View = Backbone.View.extend({

        el : "#status",
        viewInitialized : false,
        template : squid_api.template.squid_api_status,
        format : null,
        runningMessage : "Computing in progress",
        failedMessage : "An error has occurred",
        displayTime: 5000,
        ignoreStatusChange : null,

        initialize: function(options) {
            var me = this;
            if (!this.model) {
                this.model = squid_api.model.status;
            }
            if (options) {
                if (options.template) {
                    this.template = options.template;
                }
                if (options.runningMessage) {
                    this.runningMessage = options.runningMessage;
                }
                if (options.failedMessage) {
                    this.failedMessage = options.failedMessage;
                }
                if (options.ignoreStatusChange) {
                    this.ignoreStatusChange = options.ignoreStatusChange;
                }
                if (options.displayTime) {
                	this.displayTime = options.displayTime;
                }
            }
            if (! this.ignoreStatusChange) {
                this.model.on('change:status', this.renderDelayed, this);
            }
            this.model.on('change:error', this.render, this);
            this.model.on('change:message', this.renderDelayed, this);
            if (typeof $.i18n !== "undefined") {
            	this.runningMessage = $.i18n.t("runningMessage");
            	this.failedMessage = $.i18n.t("failedMessage");
            }
        },

        events: {
            'click .status-error .close' : 'removeError'
        },

        removeError: function(item) {
            this.model.set({'error' : null}, {'silent' : true});
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();
        },

        renderDelayed: function() {
            // delay rendering (to avoid flickering when action is very short)
            var delay = this.model.get("delayMillis") || 300; // 300ms by default
            var me = this;
            setTimeout(function() {
                me.render();
            }, delay);
        },

        render: function() {
            var me = this;

            // init viewport
            if (this.$el.html() === "") {
                this.$el.html("<div class='squid-api-core-widgets-status'></div>");
            }

            var error = this.model.get("error");
            var status = this.model.get("status");
            var message = this.model.get("message");
            var displayTime = this.displayTime;
            if (this.model.has("displayTime")) {
            	displayTime = this.model.get("displayTime");
            }
            var running = ((status === this.model.STATUS_RUNNING) || (status === this.model.STATUS_PENDING));
            var failed = false;
            var level = "info", dismissible = true;
            var fadeOut = true;
            var notification = null;

            if (error) {
                failed = true;
                level = "danger";
                fadeOut = false;
            }
            
            if (running) {
                fadeOut = false;
            }

            var jsonData = this.model.toJSON();
            var errorData = null;
            if (running && ! this.ignoreStatusChange) {
                message = this.runningMessage;
                level = "warning";
                dismissible = false;
            } else if (jsonData.error) {
                if (jsonData.error.message) {
                    message = jsonData.error.message;
                } else if (jsonData.error.responseJSON && jsonData.error.responseJSON.error) {
                   message = jsonData.error.responseJSON.error;
                   if (jsonData.error.status === 403 && typeof jsonData.error.responseJSON.redirectURL !== "undefined") {
                	   message += "\nPlease <a href=\""+jsonData.error.responseJSON.redirectURL+"\" rel=\"noopener noreferrer\" target=\"_blanck\"> link with the data source</a>";
                   }
                } else if (typeof jsonData.error === "string") {
                    errorData = {message: jsonData.error};
                }
                if (jsonData.error.dismissible === false) {
                    dismissible = false;
                } else {
                    dismissible = true;
                }
            } else if (jsonData.type === "notification") {
                fadeOut = false;
                message = null;
                level = "warning";
                notification = jsonData.data;
                // by default do not display meta-model notifications (T1684)
                if (notification.objectType) {
                    console.log(notification.objectType + " '" + notification.name +"' was modified by user : "+notification.emitter.userId);
                    return;
                }
            }
            
            // display
            var html;
            if (message || errorData || notification) {
                if (message) {
                    message = message.replace("\n","<br>");
                }
                html = this.template({
                    "level" : level,
                    "dismissible" : dismissible,
                    "message" : message,
                    "errorData" : errorData,
                    "notification" : notification
                });
                // view message for 15 seconds unless it is an error
                if (fadeOut) {
                    setTimeout(function() {
                        var me1 = me;
                        me.$el.find(".status-error").fadeOut(function() {
                            me1.$el.empty();
                        });
                    }, displayTime);
                }
            } else {
                html = "";
            }
            if (this.model.has("displayTime")) {
            	this.model.unset("displayTime");
            }
            this.$el.find(".squid-api-core-widgets-status").html(html);   
            return this;
        }

    });

    return View;
}));
