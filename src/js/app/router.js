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
            'demo/index'        : 'demoIndex',
            'demo/about'        : 'demoAbout',
            'doc/index'         : 'docIndex',
            '404'               : 'demoPageNotFound',
            '*random'           : 'demoPageNotFound'
        },
        
        redirectToIndex     : function() {
            PUBLIC.redirectTo('#/welcome');
        },
        

        /* === demo === */

        demoIndex   : function () {
           EVENT_MANAGER.trigger("Router/demo/index");
        },   
        
        demoAbout   : function () {
           EVENT_MANAGER.trigger("Router/demo/about");
        },
        
        demoPageNotFound    : function () {
           EVENT_MANAGER.trigger("Router/demo/pageNotFound");
        },
        
        
        /* === welcome === */

        welcomeIndex    : function () {
           EVENT_MANAGER.trigger("Router/welcome/index");
        },

    });

    PUBLIC.redirectTo = function (url) {
        PUBLIC.router.navigate(url);     
    };
    
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
