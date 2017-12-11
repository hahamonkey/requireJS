/**
 * Created by Administrator on 2017/12/10.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
define(['jquery'],function($){
    return {
        open:function(arg){
            this.defaultValue={
                width:300,
                height:200
            }
            var html='<div id="mask">'
                        +'<div id="container">'
                            +'<div id="title">'
                                +'<h2>弹层</h2>'
                                +'<span class="close">×</span>'
                            +'</div>'
                            +'<div id="content">dfdafsda</div>'
                        +'</div>'
                    +'</div>';
            $('body').append(html);
            var value= $.extend(this.defaultValue,arg);
            $('#container').css({
                width:value.width,
                height:value.height,
            });
            $('#title h2').html(arg.title);
            $('#content').html(arg.content);
        },
        close:function(){

        }
    }
})