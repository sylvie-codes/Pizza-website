// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Main Section Loading Animation
//  2. YTPlayer Settings
//  3. Vegas Settings
//  4. KBW-Countdown Settings
//  5. Mailchimp Notify Form
//  6. Say Hello Form
//  7. ParticlesJS Backgrounds
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    $(".loader").addClass('fade-dark');
    $(".loader__logo").removeClass('slideInDown').addClass('flipOutY');
    $(".loader__caption").removeClass('slideInUp').addClass('fadeOutDown');
  },1000);

  setTimeout(function(){
    $(".loader").addClass('loaded');
  },1700);

  setTimeout(function(){
    $("#main").addClass('loaded');
  },1900);
  // --------------------------------------------- //
  // Loader & Main Section Loading Animation End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // YTPlayer Settings Start
  // --------------------------------------------- //
  var bgndVideo = $("#bgndVideo");

  if(bgndVideo.length){
    bgndVideo.mb_YTPlayer({
      mute: true,
      containment: '#video-wrapper',
      showControls:false,
      autoPlay:true,
      loop:true,
      startAt:0,
      quality:'default'
    });
  };
  // --------------------------------------------- //
  // YTPlayer Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "../img/backgrounds/background-1.jpg" },
        { src: "../img/backgrounds/background-2.jpg" },
        { src: "../img/backgrounds/background-3.jpg" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2021, 12, 19), format: 'D'});
  $('#countdown-large').countdown({until: $.countdown.UTCDate(+10, 2021, 12, 19), format: 'DHMS'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Custom Scrollbar Start
  // --------------------------------------------- //
  $(window).on("load resize",function(){
    var selector=".section-inner", //your element(s) selector
      cssFlag=window.getComputedStyle(document.querySelector(selector),":after").getPropertyValue("content").replace(/"/g,'');
    if(cssFlag){
      $(selector).mCustomScrollbar();
    }else{
      $(selector).mCustomScrollbar("destroy");
    }
  });
  // --------------------------------------------- //
  // Custom Scrollbar End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    // url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Stay-in-touch Form Start
  // --------------------------------------------- //
  $("#stayintouch-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.stayintouch').find('.form').addClass('is-hidden');
      $('.stayintouch').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.stayintouch').find('.reply-group').removeClass('is-visible');
        $('.stayintouch').find('.form').removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Stay-in-touch Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.contact').find('.reply-group').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

});
