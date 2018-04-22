// Страница приветствия
AppHybrid.views.welcomeIndex = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    
    PUBLIC.template = {
        layoutName      : 'welcome',
        tplName         : 'welcomeIndex',
        $tpl            : $('#hybrid-tpl-welcome-index')
    };

    PUBLIC.show = function() {

        DI.app.widgets.title.set('Добро пожаловать!');        
        
        DI.app.components.templateSwitcher.switch(PUBLIC.template);
    };
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {
       
        /* --------------------- Register template --------------------- */

        DI.app.components.templateSwitcher.register(PUBLIC.template);

        
        /* --------------------- Listeners --------------------- */

    };

    return PUBLIC;
    
}());  
