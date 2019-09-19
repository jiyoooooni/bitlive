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

// emoji 

  $(document).ready(function() {
    $("#example1").emojioneArea();
  });


// upbit

  $('.upbit-area .sound').click(function(){
    $(this).toggleClass('active');
  });

  $('.upbit-area .youtube-btn').click(function(){
    $('#btn-text').toggleClass('active');
  });

  $('.upbit-area .b_point .point-btn').click(function(){
    $('.upbit-area .b_point .point-btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.upbit-area .r_point .point-btn').click(function(){
    $('.upbit-area .r_point .point-btn').removeClass('active');
    $(this).addClass('active');
  });
