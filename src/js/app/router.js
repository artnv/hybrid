// Маршрутизатор приложения
AppHybrid.router = (function() {
    
    var 
        PRIVATE     = {},
        PUBLIC      = {},
        
        EVENT_MANAGER,
        
        // Dependency injection container
        DI;

    // End var

    PRIVATE.RoutesObj = new Router({
    
        routes: {
            ''                  : 'welcomeIndex',
            '#/welcome'         : 'welcomeIndex',
            '#/demo/index'      : 'demoIndex',
            '#/demo/index/:id/page/:page'      : 'demoIndex',
            '#/demo/about'      : 'demoAbout',
            '*random'           : 'pageNotFound'
        },
        
        events: {
            firstStartAndHashchange : function(obj) {
                EVENT_MANAGER.trigger("Router@Action", obj);
            },
        },
      
        // Actions

        /* === demo === */

        demoIndex   : function (obj) {
            console.log('demoIndex: obj');
            console.log(obj);
           EVENT_MANAGER.trigger("Router/demo/index", obj);
        },   
        
        demoAbout   : function (obj) {
            console.log(obj);
           EVENT_MANAGER.trigger("Router/demo/about", obj);
        },
        
        pageNotFound: function(obj) {
            EVENT_MANAGER.trigger("Router/demo/pageNotFound", obj);
        },
        
        /* === welcome === */
        welcomeIndex    : function (obj) {
            console.log(obj);
           EVENT_MANAGER.trigger("Router/welcome/index", obj);
        },
    });

    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };

    PUBLIC.initModule = function () {
        
        EVENT_MANAGER = DI.app.eventManager;
        // --

        PUBLIC.router   =  PRIVATE.RoutesObj;
        PUBLIC.router.init();

    };

    return PUBLIC;
    
}());
