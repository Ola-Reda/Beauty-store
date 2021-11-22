$(document).ready(function(){
    //shoppingcar
    $(".shopping").on("click",function(){
        $(".hidden").slideToggle(500);
    })
    //scrolltop
    $(window).scroll(function(){
        if($(this).scrollTop() >= 500){
            $(".scroll-top").show();
        }
        else{
            $(".scroll-top").fadeOut();
        }
    })

    $(".scroll-top").on("click", function(){
        $("html,body").animate({scrollTop : 0}, 500)
    })

    //slide
    $(".slick-slider").slick({
        autoplaySpeed:1000,
        infinite: true,
        slidesToShow:4,
        slidesToScroll:1,
      });
    //another slide
    $(".another-slick-slider").slick({
        autoplaySpeed:1000,
        infinite: true,
        slidesToShow:5,
        slidesToScroll:1,
    })  
})