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
                    var html = this.template(this.model.toJSON());
                    this.$el.html(html);
                }
            }

            return this;
        },

        login: function() {
            var url = squid_api.utils.getLoginUrl(this.redirectUri);
            if (!squid_api.debug) {
                window.location = url;
            } else {
                // bypass redirection
                console.log("redirection : "+url);
            }
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
