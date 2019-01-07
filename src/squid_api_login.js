/*! Squid Core Widget */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.LoginView = factory(root.Backbone, root.squid_api);
    }
}(this, function (Backbone, squid_api) {

    var LoginView = Backbone.View.extend({

        el : "#login",
        redirectUri: null,
        autoShow: true,
        hideLogoutLink: null,
        template: squid_api.template.squid_api_login,

        initialize: function(options) {
            if (!this.model) {
                this.model = squid_api.model.login;
            }
            this.model.on("change:login", this.render, this);

            if (options) {
                if (options.autoShow === false) {
                    this.autoShow = false;
                }
                if (options.template) {
                    this.template = options.template;
                }
                if (options.hideLogoutLink) {
                	this.hideLogoutLink = options.hideLogoutLink;
                }
            }
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();
        },

        setRedirectUri: function(d) {
            this.redirectUri = d;
            return this;
        },

        events: {
            "click .sq-signin": "login",
            "click .sq-logout": "logout"
        },

        render: function() {
            var me = this;
            if (this.model) {
                if (!this.model.get("error")) {
                    var userLogin = this.model.get("login");
                    if (userLogin && userLogin !== "") {
                        // logged in
                    } else {
                        if (this.autoShow) {
                            this.login();
                        }
                    }
                    var data = this.model.toJSON();
                    if (data.accessToken) {
                        data.logout = true;
                    } else {
                        // no auth mode
                        data.logout = false;
                    }
                    squid_api.getCustomer().done(function(customer) {
                        if (customer.get("authMode") === "BYPASS" || me.hideLogoutLink === true) {
                            data.logout = false;
                        }
                        var html = me.template(data);
                        me.$el.html(html);
                        if (typeof $.i18n !== "undefined") {
                        	me.$el.localize();
                        }
                    });
                }
           }
            
           return this;
        },

        login: function() {
            var url = squid_api.utils.getLoginUrl(this.redirectUri);
            squid_api.utils.redirect(url);
        },

        logout: function(event) {
            event.preventDefault();
            this.model.logout();
        },
        
        setLogoutFunction : function(f) {
            this.logout = f;
        }
    });

    return LoginView;
}));
