$(document).ready(function() {
    
    /* ---------------------------------------------------------- */
    /* Sticky Navigation */
    /* ---------------------------------------------------------- */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    /* ---------------------------------------------------------- */
    /* Navigation & Button scroll */
    /* ---------------------------------------------------------- */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* ---------------------------------------------------------- */
    /* Animations on scroll */
    /* ---------------------------------------------------------- */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated bounceInRight');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* ---------------------------------------------------------- */
    /* Mobile Navigation */
    /* ---------------------------------------------------------- */
    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav');
        let icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });

    /* ---------------------------------------------------------- */
    /* Maps */
    /* ---------------------------------------------------------- */
    let map = new GMaps({
        div: '.map',
        lat: -33.8222092,
        lng: 18.6767243,
        zoom: 15
      });

      map.addMarker({
        lat: -33.8233803,
        lng: 18.6566666,
        title: 'Durbanville',
        infoWindow: {
            content: '<p>Our Durbanville HQ</p>'
          }
      });

});