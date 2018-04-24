//  Компонент переключения шаблонов.
//  Так же запускает и другие методы при переключении beforeSwitch/afterSwitch/afterLeaving, если есть.
AppHybrid.components.templateSwitcher = (function() {
    
    var
        PUBLIC      = {},
        PRIVATE     = {},
        
        // Массивы со всеми шаблонами и макетами, которые были зарегистрированы
        templateStorage     = [],
        layoutStorage       = [],
        
        // Шаблон и макет которые ранее были активными
        lastLayoutObj, lastTemplateObj,
        
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
                  
                    // Запускает метод предыдущего шаблона, перед переключением на новый
                    if(lastTemplateObj.afterLeaving) {
                        lastTemplateObj.afterLeaving();
                    }
                    
                    // Скрываем предыдущий шаблон
                    lastTemplateObj.$tpl.hide();
                }
                
                // Метод вызывается до отображения шаблона
                if(templateStorage[i].beforeSwitch) {
                    templateStorage[i].beforeSwitch();
                }
                
                templateStorage[i].$tpl.show();
                
                // Метод вызывается после отображения шаблона
                if(templateStorage[i].afterSwitch) {
                    templateStorage[i].afterSwitch();
                }
                
                // Предыдущий шаблон меняем на текущий, для следующего переключения
                lastTemplateObj = templateStorage[i];

                PUBLIC.scrollUp();                 
                break;
                
            }
        }
        
    };    
    
    // Переключает макет
    PRIVATE.switchLayout = function(tplObj) {

        var
            i = layoutStorage.length;
        // --
  
        // Если макет
        if(!tplObj.layoutName) {
            return;
        }

        while(i--) {
            if(tplObj.layoutName == layoutStorage[i].tplName) {
                
                // Если этот макет уже включен, то выходим без повторного отображения и запуска методов
                if(lastLayoutObj && tplObj.layoutName == lastLayoutObj.tplName) {
                    return;
                }
                
                // Предыдущий активный макет
                if(lastLayoutObj) {
                  
                    // Запускает метод предыдущего макета, перед переключением на новый
                    if(lastLayoutObj.afterLeaving) {
                        lastLayoutObj.afterLeaving();
                    }
                    
                    // Скрываем предыдущий макет
                    lastLayoutObj.$tpl.hide();
                }
                
                // Метод вызывается до отображения макета
                if(layoutStorage[i].beforeSwitch) {
                    layoutStorage[i].beforeSwitch();
                }
                
                layoutStorage[i].$tpl.show();
                
                // Метод вызывается после отображения макета
                if(layoutStorage[i].afterSwitch) {
                    layoutStorage[i].afterSwitch();
                }
                
                // Предыдущий макет меняем на текущий, для следующего переключения
                lastLayoutObj = layoutStorage[i];
               
                break;
                
            }
        }
        
    };
    
    // Переключает шаблоны и макеты
    PUBLIC.switch = function(tplObj) {
        PRIVATE.switchTemplate(tplObj);
        PRIVATE.switchLayout(tplObj);
    };

    // Регистрирует макеты и шаблоны
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
