// nav INIT
function navFunc(){
    var section = $(".scroll-section"),
        sectionTop = [], // [about, service]
        navEl = $(".menu"),
        liEl = navEl.find(".js-scroll")

    setTimeout(function(){
        $.each(section, function(i, val){
            sectionTop[i] = $(val).offset().top
        });

        // 스크롤 이동
        liEl.on("click", function(e){
            let targetIdx = $(this).data("idx")

            $("html, body").animate({"scrollTop": Math.ceil(sectionTop[targetIdx] - navEl.outerHeight())}, 500)
            e.preventDefault()
        })

        $(window).on("resize", function(){
            $.each(section, function(i, val){
                sectionTop[i] = $(val).offset().top
            });
        })

        $(window).on('scroll', function(){
            let winTop = $(window).scrollTop()

            if (winTop >= $(".brand").outerHeight()) {
                navEl.addClass('is-fixed')
                $(".brand").css({"margin-bottom":navEl.outerHeight()})

                $.each(section, function(i, val){
                    if(winTop >= Math.ceil(sectionTop[i] - navEl.outerHeight())){
                        $(".menu_item").attr("src", "./assets/images/menu_on_"+i+".png")
                    }
                })
            } else {
                navEl.removeClass('is-fixed')
                $(".menu_item").attr("src", "./assets/images/menu.png")
                $(".brand").css({"margin-bottom":0})
            }
        })
    }, 300)
    
}
$(function() {
    navFunc()
    $('img[usemap]').rwdImageMaps();
});