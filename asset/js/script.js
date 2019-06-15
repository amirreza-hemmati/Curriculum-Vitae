$(document).ready(function () {
    /*   اسلاید شدن منو و فیکس منو */
    $("#menu-phone").click(function (e) {
        $(".nav-item").slideToggle(500);
        $("body").toggleClass("resizing");
        $("body").toggleClass("scrollMenu");
        if ($("body").hasClass("scrollMenu")) {
            $(window).scroll(function () {
                if ($(window).width() < 1005) {
                    $(".nav-item").slideUp(300);
                }
            });
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 1005) {
            $(".nav-item").slideDown(0);
        }
        else {
            $(".nav-item").slideUp(0);
        }
    });



    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("header").addClass("fixed");
        }
        else {
            $("header").removeClass("fixed");
        }
    });
    /* پایان کد اسلاید شدن منو و فیکس منو */

    /* استارت اضافه شدن عرض با اسکرول  */
    window.onscroll = function () { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    /* پایان اضافه شدن عرض با اسکرول  */
    /*  document.execCommand("copy"); */

    /*افکت های مربع*/
    $(".hover-one").hover(function () {
        // over
        $(".hover-one").css("transform", "scale(0.7)");
        $(this).css("transform", "rotate(-180deg)");
    }, function () {
        // out
        $(".hover-one").css("transform", "scale(1)");
    }
    );


    $(".hover-two").hover(function () {
        // over
        $(".hover-two").css("transform", "scale(0.7)");
        $(this).css("transform", "rotate(180deg)");
    }, function () {
        // out
        $(".hover-two").css("transform", "scale(1)");
    }
    );

    $(".hover-three").hover(function () {
        // over
        $(".hover-three").css("transform", "scale(0.7)");
        $(this).css("transform", "rotate(-180deg)");
    }, function () {
        // out
        $(".hover-three").css("transform", "scale(1)");
    }
    );

    $(".hover-four").hover(function () {
        // over
        $(".hover-four").css("transform", "scale(0.7)");
        $(this).css("transform", "rotate(180deg)");
    }, function () {
        // out
        $(".hover-four").css("transform", "scale(1)");
    }
    );
    /*افکت های مربع*/
    //link1
    //link2
    //link3
    //link4
    //link5
    //link6
    //link7
    //link8
    //لینک های منو
    function ST(event1, event2) {
        if ($(window).width() > 1005) {
            $("html , body").animate({
                "scrollTop": event1 - 80
            }, 1000)
        }
        else {
            $(".nav-item").slideToggle(0);
            $("html , body").animate({
                "scrollTop": event2
            }, 1000)
        }
    }

    $("#link1").click(function (e) {
        ST(0, 430);
    });

    $("#link2").click(function (e) {
        ST(0, 685);
    });

    $("#link3").click(function (e) {
        var WeCall = document.getElementById("sc").offsetTop;
        ST(WeCall, 900);
    });

    $("#link4").click(function (e) {
        var WeCall = document.getElementById("schools").offsetTop;
        ST(WeCall, 1375);
    });

    $("#link5").click(function (e) {
        var WeCall = document.getElementById("english").offsetTop;
        ST(WeCall, 1660);
    });

    $("#link6").click(function (e) {
        var WeCall = document.getElementById("takhasos-mee").offsetTop;
        ST(WeCall, 2200);
    });

    $("#link8").click(function (e) {
        var WeCall = document.getElementById("send-one").offsetTop;
        ST(WeCall, 3400);
    });
    //لینک های منو

    /*scroll full top*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 800) {
            $("#full-scroll-top").css("display","inline");
            $("#full-scroll-top").addClass("full-scroll");
        }
        else {
            $("#full-scroll-top").css("display", "none");
            $("#full-scroll-top").removeClass("full-scroll");
        }
    });
});