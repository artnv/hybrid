AppHybrid.moduleManagers.viewsManager = (function() {

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
            VIEWS   = DI.app.views;
        // --
        
        
        /* --------------------- Dependency injection --------------------- */
        
        /* Demo */
        VIEWS.demoIndex.addDependencies(DI);
        VIEWS.demoAbout.addDependencies(DI);
        VIEWS.demoPage404.addDependencies(DI);
        
        /* Welcome */
        VIEWS.welcomeIndex.addDependencies(DI);
        
        
        /* --------------------- Initialization modules --------------------- */

        /* Demo */
        VIEWS.demoIndex.initModule();
        VIEWS.demoAbout.initModule();
        VIEWS.demoPage404.initModule();

        /* Welcome */
        VIEWS.welcomeIndex.initModule();
 
    };

    return PUBLIC;
    
}());  
