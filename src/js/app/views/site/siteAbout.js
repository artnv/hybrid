// О приложении
AppHybrid.views.siteAbout = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    
    PUBLIC.template = {
        layoutName      : 'site',
        tplName         : 'siteAbout',
        $tpl            : $('#hybrid-tpl-site-about')
    };

    PUBLIC.show = function() {

        DI.app.widgets.title.set(
            DI.app.widgets.title.getDefault() +' / '+ 'О приложении'
        );        
        
        var x = DI.app.widgets.breadcrumb.make([
            {
                text    : 'Hybrid'
            },
            {
                text    : 'Главная страница',
                link    : '#/site/index'
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
