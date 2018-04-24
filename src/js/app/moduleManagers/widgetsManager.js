AppHybrid.moduleManagers.widgetsManager = (function() {
    
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
            WIDGETS     = DI.app.widgets;
        // --
        
        
        /* --------------------- Dependency injection --------------------- */
        
        WIDGETS.title.addDependencies(DI);
        WIDGETS.breadcrumb.addDependencies(DI);
        WIDGETS.nav.addDependencies(DI);
        
        
        /* --------------------- Initialization modules --------------------- */
        
        WIDGETS.title.initModule();
        WIDGETS.breadcrumb.initModule();
        WIDGETS.nav.initModule();
        
    };

    return PUBLIC;
    
}());
