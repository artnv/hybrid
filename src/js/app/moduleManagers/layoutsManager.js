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
        
        LAYOUTS.site.addDependencies(DI);
        LAYOUTS.welcome.addDependencies(DI);

        
        /* --------------------- Initialization modules --------------------- */
        
        LAYOUTS.site.initModule();
        LAYOUTS.welcome.initModule();


    };

    return PUBLIC;
    
}());  
