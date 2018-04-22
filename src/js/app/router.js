// Маршрутизатор приложения
AppHybrid.router = (function() {
    
    var 
        PRIVATE     = {},
        PUBLIC      = {},
        
        EVENT_MANAGER,
        
        // Dependency injection container
        DI;

    // End var
    
    
    PRIVATE.RoutesObj = Backbone.Router.extend({
        
        initialize : function() {
            this.on('all', function(trigger, args) {
                var routeData = trigger.split(":");
                if(routeData[0] == 'route' && routeData[1]) {
                    // Генерирует событие с названием колбека из routes, при его срабатывании
                    EVENT_MANAGER.trigger("Router@Action", routeData[1]);
                }
            });
        },
        
        routes: {
            ''                  : 'redirectToIndex',
            'welcome'           : 'welcomeIndex',
            'site/index'        : 'siteIndex',
            'site/about'        : 'siteAbout',
            'doc/index'         : 'docIndex',
            '404'               : 'sitePageNotFound',
            '*random'           : 'sitePageNotFound'
        },
        
        redirectToIndex     : function() {
            PUBLIC.redirectTo('#/welcome');
        },
        

        /* === site === */

        siteIndex   : function () {
           EVENT_MANAGER.trigger("Router/site/index");
        },   
        
        siteAbout   : function () {
           EVENT_MANAGER.trigger("Router/site/about");
        },
        
        sitePageNotFound    : function () {
           EVENT_MANAGER.trigger("Router/site/pageNotFound");
        },
        
        
        /* === doc === */

        docIndex    : function () {
           EVENT_MANAGER.trigger("Router/doc/index");
        },        
        
        
        /* === welcome === */

        welcomeIndex    : function () {
           EVENT_MANAGER.trigger("Router/welcome/index");
        },

    });

    PUBLIC.redirectTo = function (url) {
        PUBLIC.router.navigate(url);     
    };
    
    /* --------------------- Dependency injection --------------------- */
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };

    PUBLIC.initModule = function () {
        
        EVENT_MANAGER = DI.app.eventManager;
        // --

        PUBLIC.router   = new PRIVATE.RoutesObj();
        Backbone.history.start();

    };

    return PUBLIC;
    
}());
