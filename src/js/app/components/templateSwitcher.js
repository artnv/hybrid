//  Компонент переключения шаблонов.
//  Так же запускает и другие методы при переключении on/after, если есть.
AppHybrid.components.templateSwitcher = (function() {
    
    var
        PUBLIC      = {},
        PRIVATE     = {},
        
        // Массив с шаблонами 
        templateStorage     = [],

        // Шаблон который до этого был активным
        lastTemplateObj,
        
        // Массив с макетами
        layoutStorage       = [],
        
        // Шаблон который до этого был активным
        lastLayoutObj,
        
        // Dependency injection container
        DI;
        
    // End var

    
    // Перемотка страницы наверх
    PUBLIC.scrollUp = function() {
        window.scroll(0, 0);
    };
    
    // Переключает шаблон который находится в макете
    PRIVATE.switchTemplate = function(obj) {

        var
            i = templateStorage.length;
        // --
        
        while(i--) {
            if(obj.tplName == templateStorage[i].tplName) {
                
                // Предыдущий активный шаблон
                if(lastTemplateObj) {
                  
                    // Если был определен метод after у предыдущего шаблона,
                    // то он вызывается при переключении на новый
                    if(lastTemplateObj.after) {
                        lastTemplateObj.after();
                    }
                    
                    // Скрываем предыдущий шаблон
                    lastTemplateObj.$tpl.hide();
                }
                
                // Если определен метод при переключении у текущего шаблона, то запускаем
                if(templateStorage[i].on) {
                    templateStorage[i].on();
                }
                
                templateStorage[i].$tpl.show();
                
                // Предыдущий шаблон меняем на текущий, для следующего переключения
                lastTemplateObj = templateStorage[i];

                PUBLIC.scrollUp();                 
                break;
                
            }
        }
        
    };    
    
    // Переключает макет
    PRIVATE.switchLayout = function(obj) {

        var
            i = layoutStorage.length;
        // --
  
        if(!obj.layoutName) {
            return;
        }

        while(i--) {
            if(obj.layoutName == layoutStorage[i].tplName) {
                
                // Предыдущий активный макет
                if(lastLayoutObj) {
                  
                    // Если был определен метод after у предыдущего макета,
                    // то он вызывается при переключении на новый
                    if(lastLayoutObj.after) {
                        lastLayoutObj.after();
                    }
                    
                    // Скрываем предыдущий макет
                    lastLayoutObj.$tpl.hide();
                }
                
                // Если определен метод при переключении у текущего макета, то запускаем
                if(layoutStorage[i].on) {
                    layoutStorage[i].on();
                }
                
                layoutStorage[i].$tpl.show();
                
                // Предыдущий макет меняем на текущий, для следующего переключения
                lastLayoutObj = layoutStorage[i];
               
                break;
                
            }
        }
        
    };
    
    // Переключает шаблоны и макеты, так же запускает методы on/after если были определены
    PUBLIC.switch = function(obj) {
        PRIVATE.switchTemplate(obj);
        PRIVATE.switchLayout(obj);
    };

    // Регистрирует методы которые исполняются при переключении шаблона
    PUBLIC.register = function(obj) {
 
        // Если обычный шаблон, у которого есть свойство родительского макета
        if(obj.layoutName) {
            templateStorage.push(obj);
        }
        
        // Если это макет, у которого нет свойства родительского макета
        if(!obj.layoutName && obj.tplName) {
            layoutStorage.push(obj);
        }
        
    };
    
    PUBLIC.addDependencies = function(obj) {
        DI = obj;
    };
    
    PUBLIC.initModule = function() {

    };

    return PUBLIC;
    
}());  
