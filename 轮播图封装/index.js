/**
 * Created by Administrator on 2017/12/23.
 */
requirejs.config({
    paths:{
        jquery:'../µ¯²ã/jquery-1.12.4'
    }
});
require(['jquery','Carousel'],function(Carousel){
    var carousel1=new Carousel();

    carousel1.init({
        selector:'#content1',
        imgDate:['../img/1.jpg','../img/2.jpg','../img/3.jpg','../img/4.jpg'],
        btnPos:'bottom',
        speed:'2000',
        buttonType:'squire'


    });
    var carousel2=new Carousel();
    carousel2.init({
        selector:'#content2',
        imgDate:['../img/1.jpg','../img/2.jpg','../img/3.jpg','../img/4.jpg'],
        btnPos:'bottom',
        speed:'2000',
        buttonType:'squire'


    });
})