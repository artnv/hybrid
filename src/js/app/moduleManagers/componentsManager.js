AppHybrid.moduleManagers.componentsManager = (function() {
    
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
            COMPONENTS     = DI.app.components;
        // --
        
        
        /* --------------------- Dependency injection --------------------- */
        
        COMPONENTS.templateSwitcher.addDependencies(DI);
        COMPONENTS.dataStorage.addDependencies(DI);
        
        
        /* --------------------- Initialization modules --------------------- */
        
        COMPONENTS.templateSwitcher.initModule();
        COMPONENTS.dataStorage.initModule();

        
    };

    return PUBLIC;
    
}());
