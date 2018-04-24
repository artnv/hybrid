// Родительский шаблон demo сайта
AppHybrid.layouts.demo = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    PUBLIC.template = {
        tplName         : 'demo',
        $tpl            : $('#hybrid-layout-demo'),
        $nav            : $('#hybrid-layout-demo-nav-1')
    };
    
    PUBLIC.showNavBar = function(activeKey) {

        var
            items;
        // --
        
        items = [{
                text    : 'Demo index',
                link    : '#/demo/index',
                key     : 'demoIndex'
            },{
                text    : 'Demo about',
                link    : '#/demo/about',
                key     : 'demoAbout'
            }];

        PUBLIC.template.$nav.html(
            DI.app.widgets.nav.make(items, activeKey)
        );
        
    }
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {
        
        /* --------------------- Register parent template --------------------- */

        DI.app.components.templateSwitcher.register(PUBLIC.template);

        
        /* --------------------- Listeners --------------------- */
        
        DI.app.eventManager.on('Router@Action', PUBLIC.showNavBar);
    };

    return PUBLIC;
    
}());  
