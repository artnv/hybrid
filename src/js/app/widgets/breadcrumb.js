// Виджет для работы с хлебными крошками
AppHybrid.widgets.breadcrumb = (function() {
    
    var
        PUBLIC      = {},
        
        // Dependency injection container
        DI;
        
    // End var
    
    
    PUBLIC.make = function(arr) {

        var
            ln          = arr.length,
            i           = 0,
            html        = '',
            active      = '';
        // --
        
        for(i=0; i<ln; i++) {
            
            if(arr[i].active) { active = ' active'; } else { active = ''; }
            
            if(arr[i].link && arr[i].text) {
 
                html += '<li class="breadcrumb-item'+ active +'"><a href="'+ arr[i].link +'">'+ arr[i].text +'</a></li>';
                
            } else if (arr[i].text) {
                html += '<li class="breadcrumb-item'+ active +'">'+ arr[i].text +'</li>';
            }

        }
    
        html = '<nav><ol class="breadcrumb">'+ html +'</ol></nav>';
        return html;

    };

    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {

    };

    return PUBLIC;
    
}());  
