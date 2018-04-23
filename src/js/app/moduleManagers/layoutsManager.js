AppHybrid.moduleManagers.layoutsManager = (function() {

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
            LAYOUTS   = DI.app.layouts;
        // --
        
        
        /* --------------------- Dependency injection --------------------- */
        
        LAYOUTS.demo.addDependencies(DI);
        LAYOUTS.welcome.addDependencies(DI);

        
        /* --------------------- Initialization modules --------------------- */
        
        LAYOUTS.demo.initModule();
        LAYOUTS.welcome.initModule();


    };

    return PUBLIC;
    
}());  
