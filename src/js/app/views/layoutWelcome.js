// Родительский шаблон страницы приветствия
AppHybrid.layouts.welcome = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    
    PUBLIC.template = {
        tplName         : 'welcome',
        $tpl            : $('#hybrid-layout-welcome'),
        $nav            : $('#hybrid-layout-welcome-nav-1')
    };
    
    PUBLIC.showNavBar = function(activeKey) {

        var
            items;
        // --
        
        items = [{
                text    : 'Документация',
                link    : '#/site/doc',
                key     : 'siteDoc'
            },{
                text    : 'Архитектура',
                link    : '#/site/about',
                key     : 'siteAbout'
            },{
                text            : 'GitHub',
                link            : 'https://github.com/artnv/hybrid',
                targetBlank     : true
        }];
        
        if(activeKey != 'siteIndex') {
            items.unshift({
                text    : 'Главная страница',
                link    : '#/site/index',
                key     : 'siteIndex'
            });
        }

        PUBLIC.template.$nav.html(
            DI.app.widgets.nav.make(items, activeKey)
        );
        
    }
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {
        
        /* --------------------- Register layout --------------------- */
        
        DI.app.components.templateSwitcher.register(PUBLIC.template);

        
        /* --------------------- Listeners --------------------- */
        
        DI.app.eventManager.on('Router@Action', PUBLIC.showNavBar);
    };

    return PUBLIC;
    
}());  
