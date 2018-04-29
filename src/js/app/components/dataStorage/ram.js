AppHybrid.components.dataStorage.ram = (function() {
    
    var
        PUBLIC      = {},
        storageArr  = [],
        
        // Dependency injection container
        DI;

    // End var

   
    PUBLIC.setItem = function(key, value) {
        
        var
            ln  = storageArr.length;
        // --

        while(ln--) {
            if(key == storageArr[ln].key) {
                storageArr[ln].value = value;
                return;
            }
        }
        
        // Если не было найдено совпадений, то создаем новый объект
        if(ln < 0) {
            storageArr.push({
                key     : key,
                value   : value
            });
        }

    };
    
    PUBLIC.getItem = function(key) {
        
        var
            ln  = storageArr.length;
        // --

        while(ln--) {
            if(key == storageArr[ln].key) {
                return storageArr[ln].value;
            }
        }
        
    };
    
    PUBLIC.removeItem = function(key) {
        
        var
            ln  = storageArr.length;
        // --

        while(ln--) {
            if(key == storageArr[ln].key) {
                storageArr.splice(ln, 1);
                break;
            }
        }
        
    };
   
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {

    };
    
    return PUBLIC;
    
}());
