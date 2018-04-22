// Страница с ошибкой 404
AppHybrid.views.sitePage404 = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    
    PUBLIC.template = {
        layoutName      : 'site',
        tplName         : 'sitePage404',
        $tpl            : $('#hybrid-tpl-site-page404')
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
            DI.app.router.redirectTo('#/site/index');
        });
        
        
        /* --------------------- Register template --------------------- */
        
        PUBLIC.template.on   = function() {
            alert('ON - switch template');
        } 
        
        PUBLIC.template.after   = function() {
            alert('AFTER - switch template');
        }
    
        DI.app.components.templateSwitcher.register(PUBLIC.template);

        
        /* --------------------- Listeners --------------------- */

    };

    return PUBLIC;
    
}());  
