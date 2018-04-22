// Контроллер по умолчанию
AppHybrid.controllers.siteController = (function() {
    
    var
        PUBLIC  = {},
        ACTIONS = {},
        
        MODELS, VIEWS, EVENT_MANAGER,
        
        // Dependency injection container
        DI;
        
    // End vars

    
    // Главная страница
    ACTIONS.index = function() {
        VIEWS.siteIndex.show();
    };
    
    // О приложении
    ACTIONS.about = function() {
        //MODELS.siteAbout.getContent();
        VIEWS.siteAbout.show();
    };
    
    // Страница с ошибкой 404
    ACTIONS.pageNotFound = function() {
        VIEWS.sitePage404.show();
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
        EVENT_MANAGER.on('Router/site/index', ACTIONS.index);

        // О приложении
        EVENT_MANAGER.on('Router/site/about', ACTIONS.about);

        // Страница 404
        EVENT_MANAGER.on('Router/site/pageNotFound', ACTIONS.pageNotFound);

    };
    
    return PUBLIC;
    
}());
