$(document).ready(function () {
    /*   اسلاید شدن منو و فیکس منو */
    $("#menu-phone").click(function (e) {
        $(".nav-item").slideToggle(500);
        $("body").toggleClass("resizing");
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
            $("#nav").addClass("fixed");
        }
        else {
            $("#nav").removeClass("fixed");
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

    var stick = document.getElementById("stick");
    stick.style.position = "relative";
    $(window).scroll(function () { 
            stick.style.top = window.scrollY + "px"
            var call = document.getElementById("we-call");
            call.style.top = "-5px";
    });
});