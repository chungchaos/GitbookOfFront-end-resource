# jQuery 插件深入

## 对 JQuery 本身拓展的插件 ----`$.MethodsName()`方式调用的插件--工具插件开发

    $.extend({
        pluginName:function(opt){
            // codes....
        }
    })

## 对 JQuery 对象拓展的插件--简易模式

    形式一:
    (function($){
        $.fn.extend({
            pluginName:function(opt, callback){
                // codes...
            }
        })
    })(jQuery)

    形式二:
    (function($){
        $.fn.pluginName = function(){
            // codes...
        }
    })(jQuery)

    // 增加参数配置:
    (function($){
        $.fn.pluginName = function(options){
            // 默认参数
            var defaults = {
                // ...
            }
            // 合并配置项
            var options = $.extend(defaults,options)
            // other codes ....    
        }
    })(jQuery)

## 面向对象

    (function($,window,document,underfined){
    // 构造函数
    var Oop = function(ele,opt){
        this.$ele = ele;
        this.defaults = {
            'color':'red',
            'fontSize': '12px'
        }
        this.options = $.extend({},this,defaults,opt)
    }
    // 定义方法
    Oop.prototype = {
        change:function(){
            return this.$ele.css({
                'color': 'red',
                'fontSize':'20px' 
            })
        }
    }
    $.fn.myPlugin = function(options){
        var ooper = new Oop(this,options) 
        return ooper.change();
    }

    })(jQuery,window,document)

    //使用
    $('div').myPlugin({
    'color': 'red',
    'fontSize':'20px' 
    })

## 数据持久化的jquery插件构造

    ;(function($){

    var privateFunc = function(){
        //私有方法
        // code...
    }
    var methods = {
        init:function(options){
            return this.each(function(){
                var $this = $(this)
                    // 获取setting
                var settings = $this.data('myPlugin');
                  // setting为空时使用默认设置
                if(typeof(settings) == 'undefined'){
                    var defaults = {
                        propertyA:'a',
                        propertyB:'b',
                        funcC:function(){

                        }
                    };
                    settings = $.extend({}, defaults, options)
                    $this.data('myPlugin', settings);
                } else {
                    settings = $.extend({}, settings, options)
                    // $this.data('myPlugin', settings); 可选,将总是对options进行保存
                }

                // code....其他代码执行
                // privateFunc() 私有方法等
            })
        },
        destroy:function(options){
            return $(this).each(function(){
                var $this =$(this)
                $this.removeData('myPlugin')
            })
        },
        val:function(options){
            // eq(0)获取了选择器中第一个元素
            var someValue = this.eq(0).html()
            return someValue;
        }
    }

    $.fn.myPlugin = function(){
        var method= argument[0];
        // 检测方法是否存在
        if(methods[method]){
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments,1)
        } else if (typeof(method) == 'object' || !method){
            method = methods.init;
        } else {
            $.error('Method' + method + ' does not exist on jQuery.myPlugin')
            return this;
        }

        return method.apply(this,arguments);
    }


    })(jQuery)