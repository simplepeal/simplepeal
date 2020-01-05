

$(function() {
    var topMenu = $('.logo');
    topMenu.hide();
    $(this).scroll(function () {
        if ($(this).scrollTop() > 520) {
            topMenu.fadeIn();
        } else {
            topMenu.fadeOut();
        }
    });
});

$(function() {
    var topMenu = $('.menu');
    topMenu.hide();
    $(this).scroll(function () {
        if ($(this).scrollTop() > 520) {
            topMenu.fadeIn();
        } else {
            topMenu.fadeOut();
        }
    });
});

$(function(){
        var sp_nav = $('.menu');
        var nav =$('.nav');


        sp_nav.on('click',function(){
            nav.slideToggle();
            sp_nav.toggleClass('active');
        });

});
