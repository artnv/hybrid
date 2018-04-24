AppHybrid.views.demoAbout = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    
    PUBLIC.template = {
        layoutName      : 'demo',
        tplName         : 'demoAbout',
        $tpl            : $('#hybrid-tpl-demo-about')
    };

    PUBLIC.show = function() {

        DI.app.widgets.title.set(
            DI.app.widgets.title.getDefault() +' / '+ 'О приложении'
        );        
        
        var x = DI.app.widgets.breadcrumb.make([
            {
                text    : 'Главная страница',
                link    : '#/welcome'
            },            
            {
                text    : 'Demo'
            },
            {
                active  : true,
                text    : 'О приложении'
            }
        ]);
        
        PUBLIC.template.$tpl.html(x);
        
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
