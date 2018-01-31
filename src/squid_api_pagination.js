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
