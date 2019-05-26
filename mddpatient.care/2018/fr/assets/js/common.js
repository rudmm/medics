$(document).ready(function() {
    function o(o, e) {
        $(o).click(function(o) {
            var l = $(this).attr("href"),
                a = $(l).offset().top;
            a < 0 && (a = 0), $("html, body").animate({ scrollTop: a - e }, "slow"), o.preventDefault()
        })
    }
    // document.ondragstart = noselect;
    // document.onselectstart = noselect;
    // document.oncontextmenu = noselect;


    $('.language-select').hover(function(){
      $(this).toggleClass('open');

    })

    $('.language-select li').click(function(){    
      $('ul li').removeClass('active');
      $(this).toggleClass('active');
    })


    function noselect() { return false; }

        $(window).scroll(function() { $(this).scrollTop() > 30 ? $("header nav").addClass("active-background") : $("header nav").removeClass("active-background") }),
        $(".nav-icon3").click(function() {
            $(this).toggleClass("open"),
                $(".mobile-list").toggleClass("active")
        }),
        $(".mobile-list li a").click(function() {
            $(".nav-icon3").removeClass("open"),
                $(".mobile-list").removeClass("active")
        }), o("a[href='#f1']", 0), o("a[href='#f2']", 72), o("a[href='#f3']", 72), o("a[href='#f4']", 72), o("a[href='#f5']", 72)
});