// Главный файл приложения и начало пространства имен
var AppHybrid = (function() {
    
    var
        PUBLIC = {
            
            eventManager        : _.clone(Backbone.Events),
            router              : undefined,
            
            // Namespace
            configs             : {},
            moduleManagers      : {},
            components          : {},
            widgets             : {},
            controllers         : {},
            models              : {},
            views               : {},
            layouts             : {}

        };
        
    // End vars
    
    PUBLIC.initModule = function() {

        var
            ROUTER              = PUBLIC.router,
            MODULE_MANAGERS     = PUBLIC.moduleManagers;
        // --

       
       /* --------------------- Dependency injection --------------------- */
        
        MODULE_MANAGERS.widgetsManager.addDependencies({
            app      : PUBLIC
        });        
        
        MODULE_MANAGERS.componentsManager.addDependencies({
            app      : PUBLIC
        });
        
        MODULE_MANAGERS.viewsManager.addDependencies({
            app      : PUBLIC
        });        
        
        MODULE_MANAGERS.layoutsManager.addDependencies({
            app      : PUBLIC
        });
        
        MODULE_MANAGERS.modelsManager.addDependencies({
            app      : PUBLIC
        });        
        
        MODULE_MANAGERS.controllersManager.addDependencies({
            app      : PUBLIC
        });        
        
        ROUTER.addDependencies({
            app      : PUBLIC
        });


        /* --------------------- Initialization modules --------------------- */
        
        MODULE_MANAGERS.componentsManager.initModule();
        MODULE_MANAGERS.widgetsManager.initModule();
        MODULE_MANAGERS.layoutsManager.initModule();
        MODULE_MANAGERS.viewsManager.initModule();
        MODULE_MANAGERS.modelsManager.initModule();
        MODULE_MANAGERS.controllersManager.initModule();
        
        ROUTER.initModule();

    };

    return PUBLIC;
    
}());
