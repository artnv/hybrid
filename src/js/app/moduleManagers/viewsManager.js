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
        
        /* Site */
        VIEWS.siteIndex.addDependencies(DI);
        VIEWS.siteAbout.addDependencies(DI);
        VIEWS.sitePage404.addDependencies(DI);
        
        /* Welcome */
        VIEWS.welcomeIndex.addDependencies(DI);
        
        
        /* --------------------- Initialization modules --------------------- */

        /* Site */
        VIEWS.siteIndex.initModule();
        VIEWS.siteAbout.initModule();
        VIEWS.sitePage404.initModule();

        /* Welcome */
        VIEWS.welcomeIndex.initModule();
 
    };

    return PUBLIC;
    
}());  
