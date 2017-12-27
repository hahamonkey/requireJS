/**
 * Created by Administrator on 2017/12/23.
 */
define([jQuery],function(){
    function Carousel(){
        this.$container=$('<div id="carousel-container"></div>');
        this.$imgBox=$('<div id="carousel-img-box"></div>');
        this.$tab=$('<ul class="carousel-tab"></ul>');
        this.$prevBtn=$('<span class="carousel-prev-btn carousel-prev-bottom"></span>');
        this.$nextBtn=$('<span class="carousel-next-btn carousel-next-bottom"></span>');
        this.defaultOption={
            buttonType:'squire',//circle squire
            btnPos:'bottom',//center bottom
            speed:'1000'
        }
    }
    Carousel.prototype.init=function(option){
        var _this=this;
        $.extend(this.defaultOption,option);
        this.$container.append(this.$imgBox).append(this.$tab)
            .append(this.$prevBtn).append(this.$nextBtn);
        for(var i=0;i<this.defaultOption.imgDate.length;i++){
            var cls=(i==0)?'selected':'';
            this.$imgBox.append($('<img class=""'+cls+'src=""'+this.defaultOption.imgDate[i])+'"/>');
            this.$tab.append($('<li class="'+this.defaultOption.buttonType+cls+'">'+(i+1)+'</li>'));
        }
        this.$prevBtn.addClass('carousel-prev-'+this.defaultOption.btnPos);
        this.$nextBtn.addClass('carousel-next-'+this.defaultOption.btnPos);
        $(this.defaultOption.selector).append(this.$container);
        $('li',this.$tab).on('click',function(){
            changeImg($(this).index());
            iNow=$(this).index();
        });
        function changeImg(idx){
            $('li',_this.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
            $('img',_this.$imgBox).eq(idx).addClass('selected').siblings().removeClass('selected');
        }
        this.$prevBtn.on('click',function(){
            iNow--;
            if(iNow==-1)
                iNow=_this.defaultOption.imgDate.length-1;
            changeImg(iNow);
        })
        this.$nextBtn.on('click',function(){
            iNow++;
            if(iNow==_this.defaultOption.imgDate.length-1)
                iNow=0;
            changeImg(iNow);
        })
        function run(){
            _this.timer=setInterval(function(){
                _this.$nextBtn.trigger('click');

            },_this.defaultOption.speed);
        }
        run();
        this.$container.hover(function(){
            clearInterval(_this.timer);
        },function(){
            run();
        });
    }
    return Carousel;
})