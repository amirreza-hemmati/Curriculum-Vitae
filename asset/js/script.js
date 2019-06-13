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
        else{
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
});