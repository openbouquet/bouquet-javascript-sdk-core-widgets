(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', '_', 'squid_api'], factory);
    } else {
        factory(root.Backbone, _, root.squid_api);
    }
}(this, function (Backbone, _, squid_api) {

    /**
        Store specific application routes
    */

    squid_api.routes = [];

    /**
        Define Squid router object
    */

    squid_api.view.Router = Backbone.Router.extend({
        initialize: function($el) {
            this.$el = $el;
        },

        ContentView: Backbone.View.extend({
            initialize: function(options) {
                this.template = options.template;
            },

            render: function() {
                var content = $(this.template).html();
                $(this.el).html(content);
                return this;
            }
        }),

        routes: {
            "*notfound": "notFound"
        },

        views: {},

        switchView: function(view) {
            var newView;
            // view creation
            if (!this.views[view]) {
                newView = new this.ContentView({template: view});
                this.views[view] = newView.$el;
                newView.render();
                this.$el.append(newView.$el);
            }
            // show only selected view
            for (var v in this.views) {
                if (v === view) {
                    this.views[v].show();
                } else {
                    this.views[v].hide();
                }
            }
            return newView;
        },
        notFound: function() {
            this.navigate("/", { trigger: true });
        }
    });

    return squid_api;
}));
