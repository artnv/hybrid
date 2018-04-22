// Родительский шаблон сайта
AppHybrid.layouts.site = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    PUBLIC.template = {
        tplName         : 'site',
        $tpl            : $('#hybrid-layout-site')
    };
    
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {
        
        /* --------------------- Register parent template --------------------- */
        
        DI.app.components.templateSwitcher.register(PUBLIC.template);

        
        /* --------------------- Listeners --------------------- */
        
        //DI.app.eventManager.on('Router@Action', PUBLIC.showMenu);
    };

    return PUBLIC;
    
}());  
