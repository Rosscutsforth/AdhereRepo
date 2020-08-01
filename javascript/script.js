
$(document).ready(function(){

  // HEADER Script

  var prevScrollPos = window.pageYOffset;

  var sticky = header.offsetTop;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
      header.classList.add('sticky');
      } else {
      document.getElementById("header").style.top = "-78px";
    }
    prevScrollPos = currentScrollPos;
    if (window.pageYOffset <= 30) {
      header.classList.remove('sticky');
      document.getElementById('header').style.top = '0';
    };
  };

  // SIDE NAV script

  $('#sideNavCircleTop').hover(function() {
    $('#sideNavTextTop').css('display', 'inline');
  },
  function() {
    $('#sideNavTextTop').css('display', 'none');
  });

  $('#sideNavCircleMid').hover(function() {
    $('#sideNavTextMid').css('display', 'inline');
  },
  function() {
    $('#sideNavTextMid').css('display', 'none');
  });

  $('#sideNavCircleBot').hover(function() {
    $('#sideNavTextBot').css('display', 'inline');
  },
  function() {
    $('#sideNavTextBot').css('display', 'none');
  });


  // ABOUT Script

  $('#clickToBryce').click(function() {
    $(this).slideUp(300);
    $('#bryceImage').animate({
      left: '70%',
    },750);
    $('#hiddenBryceText').delay(400).fadeIn(300);
  })

  $('#clickToRoman').click(function() {
    $(this).slideUp(300);
    $('#romanImage').animate({
      left: '70%',
    },750);
    $('#hiddenRomanText').delay(400).fadeIn(300);
  })

  $('#clickToJared').click(function() {
    $(this).slideUp(300);
    $('#jaredImage').animate({
      left: '70%',
    },750);
    $('#hiddenJaredText').delay(400).fadeIn(300);
  })

  $('#clickToRoss').click(function() {
    $(this).slideUp(300);
    $('#rossImage').animate({
      left: '70%',
    },750);
    $('#hiddenRossText').delay(400).fadeIn(300);
  })



  $('#goBackBryce').click(function() {
    $('#hiddenBryceText').fadeOut(300);
    $('#bryceImage').animate({
      left: '1%',
    },750);
    $('#clickToBryce').delay(500).slideDown(300);
  })

  $('#goBackRoman').click(function() {
    $('#hiddenRomanText').fadeOut(300);
    $('#romanImage').animate({
      left: '1%',
    },750);
    $('#clickToRoman').delay(500).slideDown(300);
  })

  $('#goBackJared').click(function() {
    $('#hiddenJaredText').fadeOut(300);
    $('#jaredImage').animate({
      left: '1%',
    },750);
    $('#clickToJared').delay(500).slideDown(300);
  })

  $('#goBackRoss').click(function() {
    $('#hiddenRossText').fadeOut(300);
    $('#rossImage').animate({
      left: '1%',
    },750);
    $('#clickToRoss').delay(500).slideDown(300);
  })


  // CONTACT Script

  $('.seattleImage').hover(function() {
    $('.seattleText').fadeIn(350);
  },
  function() {
    $('.seattleText').fadeOut(100);
  });


  // $('#main').click(function() {
  //   $(this).toggleClass('currentPage');
  // })
  //
  // $('#about').click(function() {
  //   $(this).toggleClass('currentPage');
  // })
  //
  // $('#contact').click(function() {
  //   $(this).toggleClass('currentPage');
  // })

});
