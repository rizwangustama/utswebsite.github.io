$(window).scroll(function() {    

    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".pertama").addClass("satu");
    } else {
        $(".pertama").removeClass("satu")    
    }
});
