AppHybrid.moduleManagers.modelsManager = (function() {
    
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
            MODELS  = DI.app.models;
        // --
        
        
        /* --------------------- Dependency injection --------------------- */



        
        /* --------------------- Initialization modules --------------------- */

    };
    
    return PUBLIC;
    
}());
