AppHybrid.views.demoIndex = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    
    PUBLIC.template = {
        layoutName      : 'demo',
        tplName         : 'demoIndex',
        $tpl            : $('#hybrid-tpl-demo-index')
    };

    PUBLIC.show = function() {

        DI.app.widgets.title.set(
            DI.app.widgets.title.getDefault() +' / '+ 'Demo'
        );        
        
        DI.app.components.templateSwitcher.switch(PUBLIC.template);
    };
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {
       
        /* --------------------- Register template --------------------- */
       
        DI.app.components.templateSwitcher.register(PUBLIC.template);

        
        /* --------------------- Listeners --------------------- */
        //app.eventManager.on('Models/productPage/getProductPage', PUBLIC.showProductPage);
    };

    return PUBLIC;
    
}());  
