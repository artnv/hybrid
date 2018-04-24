AppHybrid.controllers.welcomeController = (function() {
    
    var
        PUBLIC  = {},
        ACTIONS = {},
        
        VIEWS, EVENT_MANAGER,
        
        // Dependency injection container
        DI;
        
    // End vars

    
    // Главная страница
    ACTIONS.welcomeIndex = function() {
        VIEWS.welcomeIndex.show();
    };
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
 
    PUBLIC.initModule = function() {
        
        VIEWS               = DI.app.views;
        EVENT_MANAGER       = DI.app.eventManager;
  
        
        /* --------------------- Listeners --------------------- */
        
        // Главная страница
        EVENT_MANAGER.on('Router/welcome/index', ACTIONS.welcomeIndex);

    };
    
    return PUBLIC;
    
}());
