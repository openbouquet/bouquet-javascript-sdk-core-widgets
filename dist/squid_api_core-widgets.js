this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

this["squid_api"]["template"]["squid_api_login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<span class='sq-welcome'>Welcome </span><span class='sq-login'>";
  if (helper = helpers.login) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.login); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.logout), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<a href=\"#\" class=\"sq-logout\">logout</a>";
  }

function program4(depth0,data) {
  
  
  return "\n<a href=\"#\" class=\"sq-signin\">sign-in</a>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.login), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["squid_api"]["template"]["squid_api_pagination"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"pagination-container\">\n	<ul class=\"pagination\">\n\n		<li class=\"clickable previous\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.prev)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><a href=\"#\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.firstPage), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.startSpacers), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.pages), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.endSpacers), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.lastPage), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		<li class=\"clickable\" class=\"next\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.next)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><a  href=\"#\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.program(4, program4, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n\n	</ul>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<i class=\"fa fa-arrow-left\"></i>";
  }

function program4(depth0,data) {
  
  
  return "&nbsp;";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<li class=\"clickable ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.firstPage)),stack1 == null || stack1 === false ? stack1 : stack1.selected), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstPage)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><a href=\"#\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstPage)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n		";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return " active ";
  }

function program9(depth0,data) {
  
  
  return "\n		<li><a style=\"pointer-events: none; cursor: default;\">...</a></li>\n		";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<li class=\"clickable ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><a href=\"#\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n		";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<li class=\"clickable ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.lastPage)),stack1 == null || stack1 === false ? stack1 : stack1.selected), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.lastPage)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><a href=\"#\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.lastPage)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n		";
  return buffer;
  }

function program15(depth0,data) {
  
  
  return "<i class=\"fa fa-arrow-right\"></i>";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasPages), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_selector"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <select class=\"sq-select form-control\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.multiple), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </select>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "multiple";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </option>\r\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "selected";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <!-- just name -->\r\n    <label>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n    <span>-</span>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selAvailable), {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_status"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "alert-dismissible";
  }

function program3(depth0,data) {
  
  
  return "\r\n	<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n	";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.errorData)),stack1 == null || stack1 === false ? stack1 : stack1.reason), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.errorData)),stack1 == null || stack1 === false ? stack1 : stack1.message), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.errorData)),stack1 == null || stack1 === false ? stack1 : stack1.statusText), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.errorData)),stack1 == null || stack1 === false ? stack1 : stack1.reason)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\r\n		";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.errorData)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\r\n		";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.errorData)),stack1 == null || stack1 === false ? stack1 : stack1.statusText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\r\n		";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.notification)),stack1 == null || stack1 === false ? stack1 : stack1.objectType)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " \""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.notification)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" was modified by an external action. <br>\r\n	Please <a href=\"javascript:location.reload();\" style=\"color: #fff; text-decoration: underline;\">refresh your page</a> to reflect this change.\r\n	";
  return buffer;
  }

  buffer += "<div class=\"status-error alert alert-";
  if (helper = helpers.level) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.level); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dismissible), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dismissible), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.message), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.errorData), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.notification), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_switch"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return " checked ";
  }

  buffer += "<div class=\"checkbox\">\n	<label>\n		<input type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.checked), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n	</label>\n</div>";
  return buffer;
  });
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

(function (root, factory) {
    root.squid_api.view.PaginationView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        config : null,
        
        pagesRangeSize : 10,
        
        pageIndex: 0, 

        initialize : function(options) {
            this.config = options.config || squid_api.model.config;
            this.config.on("change:startIndex", this.render, this);
            this.config.on("change:pageLength", this.render, this);
            this.model.on("change:results", this.render, this);
        },
        
        events : { 
            "click li.clickable" : function(event) {
                event.preventDefault();
                var pageId = $(event.currentTarget).data("id");
                this.pageIndex = this.config.get("pageIndex") || 0;
                var startIndex = this.config.get("startIndex");
                var pageSize = this.config.get("maxResults");
                var results = this.model.get("results");
                var totalSize, totalPages;
                if (pageId === "prev") {
                	this.pageIndex = Math.max( this.pageIndex - 10,0);
                	this.config.set("pageIndex", this.pageIndex);
                	this.config.set("startIndex", this.pageIndex * pageSize);
                } else if (pageId === "next") {
                    if (results) {
                    	totalSize = results.totalSize;
                        totalPages = Math.ceil(totalSize/pageSize);
                        this.pageIndex = Math.min(this.pageIndex + 10,totalPages - 10);
                    	this.config.set("pageIndex", this.pageIndex);
                 		this.config.set("startIndex", this.pageIndex * pageSize);
                    }
                } else if (pageId === "first") {
                    	this.pageIndex = 0;
                    	this.config.set("pageIndex", this.pageIndex);
                    	this.config.set("startIndex", this.pageIndex * pageSize);
                } else if (pageId === "last") {
                	if (results) {
                		totalSize = results.totalSize;
                		totalPages = Math.ceil(totalSize/pageSize);
                		this.pageIndex = totalPages - 10;
                		this.config.set("pageIndex", this.pageIndex);
                		this.config.set("startIndex", (totalPages - 1) * pageSize);
                    }
                } else {
                	if (this.config.get("pageIndex")>=0) {
                		this.pageIndex = this.config.get("pageIndex");
                	}
                	this.config.set("startIndex", pageId * pageSize);
                }
            }
        },

        render : function() {
            var pageSize = this.config.get("maxResults") || 10;
            // ignore pageSize Index
            var startIndex = this.config.get("startIndex") || 0;
            //var this.pageIndex = this.model.get("pageIndex") || 0;
            var results = this.model.get("results");
            if (results) {
            	
                if ((this.pageIndex > 0 && startIndex) === 0 || this.pageIndex === null) {
                 	this.pageIndex = 0;
            		this.config.set("pageIndex", 0);
                }
                
                var totalSize = results.totalSize;
                var currentPageId = Math.floor(startIndex/pageSize);
                var totalPages = Math.ceil(totalSize/pageSize);
                /* commented for now
                if (totalPages<=currentPageId) {
                	currentPageId = 0;
                	this.pageIndex = 0;
                	startIndex = 0;
                }
				*/
                var pages = [];
                var pageId = this.pageIndex;

                // prev
                var prev;
                if (this.pageIndex>0) {
                    prev = { "id" : "prev"};
                }

                // first page
                var firstPage = { "id" : "first", "label" : 1, "selected" :  (0 === currentPageId)};
                if (this.pageIndex === 0) {
                	firstPage = null;
                }
                // last page
                var selected = (totalPages-1 == currentPageId);
                var lastPage = { "id" : "last", "label" : totalPages, "selected" :  selected};

                // Spacers
                var startSpacers, endSpacers;
                if (totalPages > 10) {
                    endSpacers = true;
                } 
                if (this.pageIndex + 10 >= totalPages) {
                    lastPage = null;
                    endSpacers = false;
                }

                // pages
                var pageAfterStart = 0;
                for (var i=0; ((i<this.pagesRangeSize) && (i<totalPages)); i++) {
                    pageId = this.pageIndex+i;
                    selected = (pageId == currentPageId);
                    if (this.pageIndex>0) {
                        startSpacers = true;
                    } else if (pageId === totalPages - 2) {
                        endSpacers = false;
                    }
                    pages.push({ "id" : pageId, "label" : (pageId+1), "selected" :  selected});
                    pageAfterStart = pageId;
             }

                // next
                var next;
                if (this.pageIndex<totalPages-11) {
                    next = { "id" : "next"};
                }

                var html = squid_api.template.squid_api_pagination({
                    "prev" : prev,
                    "firstPage" : firstPage,
                    "startSpacers" : startSpacers,
                    "pages" : pages,
                    "endSpacers" : endSpacers,
                    "lastPage" : lastPage,
                    "next" : next,
                    "hasPages": totalPages>1
                });
                    
                this.$el.html(html);
            }

        }
    });

    return View;
}));

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
            if (squid_api.options.enableTracking === true){
                if (typeof ga !== "undefined") {
                    this.bind("route", this._track);
                }
            }
        },
        
        _track: function() {
            ga("send","pageview",{page: "/"+Backbone.history.getFragment()});
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

(function (root, factory) {
    root.squid_api.view.Selector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_selector);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        onChange : null,
        configName : null,

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            
            if (options.onChange) {
                this.onChange = options.onChange;
            }
            
            if (options.configName) {
                this.configName = options.configName;
                // listen to config update
                this.listenTo(squid_api.model.config, "change:"+this.configName, this.render);
            } else {
                console.error("No options.configName defined : selection will not work");
            }

            this.listenTo(this.model, "change", this.render);
        },

        events: {
            "change .sq-select": function(event) {
                var selectedOid = event.target.value;
                if (this.onChange) {
                    // call the onChange function
                    this.onChange(event);
                } else {
                    // update the current selection
                    squid_api.model.config.set(this.configName,selectedOid);
                }
            }
        },

        render: function() {
            var items,item, selected, selectedItem, jsonData = {"selAvailable" : true, "options" : []};
            items = this.model.get("items");
            selectedItem = squid_api.model.config.get(this.configName);

            for (var i=0; i<items.length; i++) {
                item = items[i];
                if (item) {
                    selected = false;
                    if (item.oid === selectedItem) {
                        selected = true;
                    }
                    var option = {"label" : item.name, "value" : item.oid, "selected" : selected};
                    jsonData.options.push(option);
                }
            }

            var html = this.template(jsonData);
            this.$el.html(html);
            this.$el.show();

            return this;
        }

    });

    return View;
}));

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

(function(root, factory) {
    root.squid_api.view.Switch = factory(root.Backbone,
            squid_api.template.squid_api_switch);
}(this, function(Backbone, template) {

    var View = Backbone.View.extend({

        template : template,
        modelAttribute : null,
        label : null,

        initialize : function(options) {
            
            if (options.template) {
                this.template = options.template;
            }

            this.modelAttribute = options.modelAttribute;
            this.label = options.label;

            if (!this.model) {
                this.model = squid_api.model.config;
            }
            this.listenTo(this.model, "change:" + this.modelAttribute,
                    this.render);
            
            this.render();
        },

        events : ({
            "change input[type=checkbox]" : function(item) {
                if (item.currentTarget.checked) {
                    this.model.set(this.modelAttribute, true);
                } else {
                    this.model.set(this.modelAttribute, false);
                }
            }
        }),

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        setTemplate : function(t) {
            if (t) {
                this.template = t;
            }
        },

        render : function() {
            var data = {
                "checked" : false,
                "label" : this.label
            };

            if (this.model) {
                data.checked = this.model.get(this.modelAttribute);
            }

            this.$el.html(this.template(data));

            return this;
        }

    });

    return View;
}));