$(document).ready(function () {
    /*   اسلاید شدن منو و فیکس منو */
    $("#menu-phone").click(function (e) {
        $(".nav-item").slideToggle(500);
        $("body").toggleClass("resizing");
    });

    $(window).resize(function () { 
        if($(window).width() > 680)
        {
            $(".nav-item").slideDown(0);
        }
    });

    

    $(window).scroll(function () { 
        if($(this).scrollTop() > 200)
        {
            $("#nav").addClass("fixed");
        }
        else{
            $("#nav").removeClass("fixed");
        }
    });
    /* پایان کد اسلاید شدن منو و فیکس منو */
});