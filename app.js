$(function() {

    var header = $("#header"),
        introH = $("#home").innerHeight(),
        scrollOffset = $(window).scrollTop();

        $(window).on("scroll", function() {
            scrollOffset = $(this).scrollTop();//обновление значения
    
            checkScroll(scrollOffset);
    
        });

    function checkScroll(scrollOffset){
        if(scrollOffset >= introH){
            header.addClass("fixed__header");
        }else{
            header.removeClass("fixed__header");
        }
    }

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),//значение нажатой ссылки
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;//позиция элемента от верха страницы

        $("nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);  
    });

    /* About Us */
    $("[data-slider]").slick({
        dots: true,
        dotsClass: "my-dots",
        fade: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /* Gallery */
    $("[gallery-scroll]").slick({
        fade: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });

});