AppHybrid.components.dataStorage.session = (function() {
    
    var
        PUBLIC  = {},
        
        // Dependency injection container
        DI;

    // End var

    PUBLIC.setItem = function(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    
    PUBLIC.getItem = function(key) {
        return JSON.parse(sessionStorage.getItem(key));
    };
    
    PUBLIC.removeItem = function(key) {
        sessionStorage.removeItem(key);
    };
   
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {

    };
    
    return PUBLIC;
    
}());
