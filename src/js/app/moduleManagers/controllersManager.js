AppHybrid.moduleManagers.controllersManager = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {
        
        var
            CONTROLLERS     = DI.app.controllers;
        // --
        
       
       /* --------------------- Dependency injection --------------------- */
        
        CONTROLLERS.siteController.addDependencies(DI);
        CONTROLLERS.welcomeController.addDependencies(DI);
  
        
        /* --------------------- Initialization modules --------------------- */
        
        CONTROLLERS.siteController.initModule();
        CONTROLLERS.welcomeController.initModule();

    };

    return PUBLIC;
    
}());  
