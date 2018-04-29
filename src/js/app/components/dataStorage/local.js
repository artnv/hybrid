AppHybrid.components.dataStorage.local = (function() {
    
    var
        PUBLIC  = {},
        
        // Dependency injection container
        DI;

    // End var

    PUBLIC.setItem = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    
    PUBLIC.getItem = function(key) {
        return JSON.parse(localStorage.getItem(key));
    };
    
    PUBLIC.removeItem = function(key) {
        localStorage.removeItem(key);
    };
   
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {

    };
    
    return PUBLIC;
    
}());
