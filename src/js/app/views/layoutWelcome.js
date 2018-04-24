// Родительский шаблон страницы приветствия
AppHybrid.layouts.welcome = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    
    PUBLIC.template = {
        tplName         : 'welcome',
        $tpl            : $('#hybrid-layout-welcome')
    };
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {
        
        /* --------------------- Register layout --------------------- */
        
        PUBLIC.template.beforeSwitch = function() {
            PUBLIC.template.$tpl.fadeIn();
        }
        
        DI.app.components.templateSwitcher.register(PUBLIC.template);

        
        /* --------------------- Listeners --------------------- */
        
    };

    return PUBLIC;
    
}());  
