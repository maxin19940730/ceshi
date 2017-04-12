/**
 * Created by 欣 on 2017/4/12.
 */
$(document).ready(function () {
    

    //实现点击图片出现相册的样子轮播图
    $('.neirong>div>ul>li>a').click(function (e) {

        let index=$(this).parent().index();
        if($(this).parent().parent().attr('class')=='next'){
            index=index+12;
        }
        $('.zhezhao').toggle()[0].addEventListener('mousewheel',function (e) {
            e.preventDefault();
        });
        $('.zhezhao').children().removeClass('display').eq(index).addClass('display');
   		 //swiper插件实现轮播
	    var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        spaceBetween: 30
	    	});
	    });
    $('.zhezhao').click(function (e) {
        if(e.target.className=='zhezhao'){
            $(this).hide();
        }

    });


    //实现下一页上一页的点击跳转的选项卡
$('.xuanxiangka a').click(function (e) {
    if($(this).index()==0||$(this).index()==1){
        $('.xuanxiangka a').removeClass('background').eq(1).addClass('background');
        $('.neirong>div>ul').removeClass().eq(0).addClass('before')
    }else {
        $('.xuanxiangka a').removeClass('background').eq(2).addClass('background');
        $('.neirong>div>ul').removeClass().eq(1).addClass('next');
    }
})


});