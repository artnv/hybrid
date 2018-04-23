AppHybrid.controllers.demoController = (function() {
    
    var
        PUBLIC  = {},
        ACTIONS = {},
        
        MODELS, VIEWS, EVENT_MANAGER,
        
        // Dependency injection container
        DI;
        
    // End vars

    

    ACTIONS.index = function() {
        VIEWS.demoIndex.show();
    };
    
    ACTIONS.about = function() {
        //MODELS.demoAbout.getContent();
        VIEWS.demoAbout.show();
    };
    
    // Страница с ошибкой 404
    ACTIONS.pageNotFound = function() {
        VIEWS.demoPage404.show();
    };
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
 
    PUBLIC.initModule = function() {
        
        MODELS              = DI.app.models;
        VIEWS               = DI.app.views;
        EVENT_MANAGER       = DI.app.eventManager;
  
        
        /* --------------------- Listeners --------------------- */
        
        // Главная страница
        EVENT_MANAGER.on('Router/demo/index', ACTIONS.index);

        // О приложении
        EVENT_MANAGER.on('Router/demo/about', ACTIONS.about);

        // Страница 404
        EVENT_MANAGER.on('Router/demo/pageNotFound', ACTIONS.pageNotFound);

    };
    
    return PUBLIC;
    
}());
