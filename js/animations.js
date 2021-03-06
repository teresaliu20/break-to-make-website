$(document).ready(function() {
  var x = 0;
  var y = 0;

  $(document).on('scroll', function(){
    if ($(window).scrollTop() > $(window).height() * 1 &&
        $(window).scrollTop() < $(window).height() * 5 &&
        $(window).width() > 700) {
      $(".image-overlay").css({
        'display': 'block'
      })
    }
    else {
      $(".image-overlay").css({
        'display': 'none'
      })
    }
  })

  $(document).on('mousewheel', function() {
    x += event.deltaX;
    y += event.deltaY;
    var scissorAnimationMax = $(window).height() * 1.3
    var splittingAnimationMax = $(window).height() * 3.2
    var width = $(document).width()
    var height = $(document).height()
    // ************ Move scissors across page ************
    if (y < scissorAnimationMax) {
      $('#scissors').css({
        'bottom': (y * height)/800,
        'left': (y * width)/800
      })
    }
    // ************ Split screen after cutting ************
    else if (y < splittingAnimationMax) {
      $('.triangle-topleft').css({
          'right': y - scissorAnimationMax
      })
      $('.triangle-bottomright').css({
          'left': y - scissorAnimationMax
      })
      $('#title-main').css({
        'opacity': 1 - ((y - scissorAnimationMax) / 200)
      })
    }
    // ************ Reveal main website ************
    else {
      $('.white-overlay').fadeOut(800);
      $('.page').css ({
        'opacity': 1,
        'display': 'flex'
      })
      $('.triangle-topleft').css({
          'display': 'none'
      })
      $('.triangle-bottomright').css({
          'display': 'none'
      })
      $('#scissors').css({
        'display': 'none'
      })
      $('#title').css({
        'display': 'none'
      })
      $('#brushes').css({
        'display': 'block'
      })
      $('#brushes-img-wrapper').css({
        'display': 'block'
      })
      if ($(window).width() > 500) {
        $('#bulb').css({
          'bottom': (Math.pow(((y - scissorAnimationMax) / 100), 1.6)) - 70 +'%'
        })
      }
      $('#hidden-scroll').css({
        'display': 'none'
      })
    }
  })
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    $('.page').css ({
      'opacity': 1,
      'display': 'flex'
    })
    $('#hidden-scroll').css({
      'display': 'none'
    })
    $('.white-overlay').css({
      'display': 'none'
    })
  }
})