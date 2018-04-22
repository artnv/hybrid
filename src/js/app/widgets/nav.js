// Виджет для создания меню навигации
AppHybrid.widgets.nav = (function() {
    
    var
        PUBLIC                  = {},

        // Dependency injection container
        DI;
        
    // End var

    
    PUBLIC.make = function(arr, activeKey) {
        
        var
            ln              = arr.length,
            i               = 0 ,
            html            = '',
            addClassActive  = '',
            targetBlank     = '';
        // --
        
        for(;i<ln;i++) {
            
            if(arr[i].key && arr[i].key == activeKey) {
                addClassActive = ' active';
            } else {
                addClassActive = '';
            }

            if(arr[i].targetBlank) {
                targetBlank = 'target="_blank"';
            } else {
                targetBlank = '';
            }
            
            html += '<li class="nav-item"><a class="nav-link'+ addClassActive +'" '+ targetBlank +' href="'+ arr[i].link +'">'+ arr[i].text +'</li>';
        }
        
        return html;
    };    

    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {

    };

    return PUBLIC;
    
}());  
