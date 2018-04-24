AppHybrid.views.demoPage404 = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    
    PUBLIC.template = {
        layoutName      : 'demo',
        tplName         : 'demoPage404',
        $tpl            : $('#hybrid-tpl-demo-page404')
    };

    PUBLIC.show = function() {

        DI.app.widgets.title.set(
            DI.app.widgets.title.getDefault() +' / '+ 'Ошибка 404. Страница не найдена'
        );
        
        DI.app.components.templateSwitcher.switch(PUBLIC.template);
    };
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {

        $("#go_to_index").click(function() {
            DI.app.router.redirectTo('#/demo/index');
        });
        
        
        /* --------------------- Register template --------------------- */
    
        DI.app.components.templateSwitcher.register(PUBLIC.template);

        
        /* --------------------- Listeners --------------------- */

    };

    return PUBLIC;
    
}());  
