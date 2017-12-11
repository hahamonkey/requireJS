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
            var _this=this;
            this.defaultValue={
                width:300,
                height:200
            }
            var value= $.extend(this.defaultValue,arg);
            this.$mask=$('<div id="mask"></div>');
            this.$container=$('<div id="container"></div>');
            this.$title=$('<div id="title"></div>');
            this.$h2=$('<h2></h2>').html(value.title);
            this.$close=$('<span class="close">×</span>').on('click',function(){
                _this.close();
            });
            this.$content=$('<div id="content"></div>');
            this.$container.appendTo(this.$mask).append(this.$title).append(this.$content).css({
                width:value.width,
                height:value.height
            });
            this.$title.append(this.$h2).append(this.$close);
            this.$content.load(value.content);
            $('body').append(this.$mask);
        },
        close:function(){
            this.$mask.remove();
        }
    }
})