/**
 * Created by Administrator on 2017/12/10.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
require(['jquery','dialog_'],function($,Dialog){
    $('#btn').on('click',function(){
        Dialog.open({
            width:500,
            title:'asdfsaf',
            content:'content.html'
        });
    });
});