/*
*   Хранилище key/value, в local/session/ram.
*   В local/session данные хранятся в формате json с автоматической конвертацией при использовании.
*/
AppHybrid.components.dataStorage = (function() {
    
    var
        PUBLIC  = {},
        PRIVATE = {
            prefix      : 'AppHybrid_'
        },
        
        // Modules
        RAM, LOCAL, SESSION,
        
        // Dependency injection container
        DI;

    // End var

    
    // Private
    
    PRIVATE.keyWithPrefix = function(key) {
        return PRIVATE.prefix + key;
    };
    
    PRIVATE.getInstance = function(storageType) {
        
        switch(storageType) {
            case 'ram':
                return RAM;
            break;
            case 'session':
                return SESSION;
            break;
            case 'local':
                return LOCAL;
            break;
        }
        
    };
    
    
    // Public
    
    PUBLIC.setItem = function(storageType, key, value) {

        if(!storageType || !key || !value) {
            return;
        }
    
        return PRIVATE.getInstance(storageType).setItem(
            PRIVATE.keyWithPrefix(key),
            value
        );

    };
    
    PUBLIC.getItem = function(storageType, key) {
        
        if(!storageType || !key) {
            return;
        }
        
        return PRIVATE.getInstance(storageType).getItem(
            PRIVATE.keyWithPrefix(key)
        );
        
    };
    
    PUBLIC.removeItem = function(storageType, key) {
        
        if(!storageType || !key) {
            return;
        }
        
        return PRIVATE.getInstance(storageType).removeItem(
            PRIVATE.keyWithPrefix(key)
        );
        
    };
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {
        
        RAM         = PUBLIC.ram;
        LOCAL       = PUBLIC.local;
        SESSION     = PUBLIC.session;


        /* --------------------- Dependency injection --------------------- */
        
        RAM.addDependencies(DI);        
        LOCAL.addDependencies(DI);        
        SESSION.addDependencies(DI);        

        
        /* --------------------- Initialization modules --------------------- */
        
        RAM.initModule();
        LOCAL.initModule();
        SESSION.initModule();
        
    };
    
    return PUBLIC;
    
}());
