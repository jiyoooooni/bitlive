// main slide
$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow:'',
	nextArrow:''
});

// login tab 
$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
 
    $('ul.tabs li').removeClass('active');
    $('.modal-contents').removeClass('active');
 
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
});

// header event

    $(window).scroll(function(){
        if ( $(window).scrollTop() > 0) {
            $('.header-fix').addClass('active');
        } else {
            $('.header-fix').removeClass('active');
        }
    });