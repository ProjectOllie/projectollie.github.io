
function scroll_nav(){
    // Cache selectors
    var lastId,
    topMenu = $(".navbar-nav"),
    header_h = $('#Header').height(),
    topMenuHeight = header_h,
    // All list items
    menuItems = topMenu.find("a:not(.off)"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 800);
        e.preventDefault();
    });
    //Scroll top
    $('#Pagetop a').click(function() {
        var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 800);
    });

    function get_pos(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;
        
        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        
        if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems.parents('ul').find('li').removeClass("active")
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
        } 
    }

    get_pos();

    // Bind to scroll
    $(window).scroll(function(){
        get_pos();
    }); 
}

$(document).ready(function(){
    scroll_nav();
    $(".navbar-toggle").on("click", function () {
        if(!$(this).hasClass("active")){
            $(this).addClass("active")
        }
        else {
            $(this).removeClass('active')
        }
    });


    if($(".main-slide .slide-list").length > 0){        
        $('.slide-list').slick({
            dots: false,
            arrows: false,
            autoplay: false,
            infinite: true,
            speed: 1500,
            fade: true,
            pauseOnHover: false,
            autoplaySpeed: 5000,
            cssEase: 'linear'

        });
    }
    //background slide
    $('.slide-list li').each(function() {
        var imgSrc = $(this).children('p').find('img').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('p').find('img').hide();
        $(this).css('background-position', 'initial');
    });

    var width = $(window).width();
    if(width <= 767){
        $('#Header .nav a').bind('click', function(){
            $('.btn-navbar').click();
            $('.navbar-toggle').click();
            $('.navbar-toggle').removeClass('active');
        });
    }

    //stream-video
    $('.stream-video a').bind('click', function(e) {
        e.preventDefault();
        $('.stream-video li').removeClass('active');
        $(this).parent('li').addClass('active');
        var video_data = $(this).attr('data-link');
        $(this).parents('.block-stream').find('#Stream-video').attr('src', video_data);

    });

    //Slide logo
    if($('.logo-slide').length > 0){
        $(".logo-list").slick({
          // normal options...
          autoplay: true,
          autoplaySpeed: 2500,
          infinite: true,
          slidesToShow: 5,
          arrows: true,
          nextArrow: '<p class="btn-slick btn-next"><i class="fa fa-angle-right" aria-hidden="true"></i></p>',
          prevArrow: '<p class="btn-slick btn-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></p>',
          responsive: [{
            breakpoint: 991,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 639,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 479,
            settings: {
              slidesToShow: 1
            }
          }]
        });
    }
    
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $('#Pagetop').show();
    } else {
        $('#Pagetop').hide();
    }
});

$(window).resize(function(event) {
    $('#Header .nav a').unbind('click');
    scroll_nav();
    var width = $(window).width();
    if(width <= 767){
        $('#Header .nav a').bind('click', function(){
            $('.btn-navbar').click();
            $('.navbar-toggle').click();
            $('.navbar-toggle').removeClass('active');
        });
    }
    else {

    }
});

