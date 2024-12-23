(function ($) {
    "use strict";
  
    // Header Type = Fixed
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var box = $('.header-text').height();
      var header = $('header').height();
  
      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });
  
    // Owl Carousel
    $('.loop').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      margin: 0,
      responsive: {
        1200: { items: 5 },
        992: { items: 3 },
        760: { items: 2 }
      }
    });
  
    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
      $(".menu-trigger").on('click', function () {
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
      });
    }
  
    // Tabs Functionality
    const tabs = document.querySelectorAll('.menu .thumb');
    const contents = document.querySelectorAll('.nacc li');
  
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
  
        tab.classList.add('active');
        contents[index].classList.add('active');
      });
    });
  
    // Smooth Scroll
    $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          var width = $(window).width();
          if (width < 991) {
            $('.menu-trigger').removeClass('active');
            $('.header-area .nav').slideUp(200);
          }
          $('html,body').animate({
            scrollTop: (target.offset().top) + 1
          }, 700);
          return false;
        }
      }
    });
  
    // Risk Factor Buttons
    $(document).ready(function () {
      // Toggle Sections
      $("#modifiable-button").on("click", function () {
        $("#modifiable-section").show();
        $("#non-modifiable-section").hide();
      });
  
      $("#non-modifiable-button").on("click", function () {
        $("#non-modifiable-section").show();
        $("#modifiable-section").hide();
      });
  
      // Initialize to show non-modifiable by default
      $("#modifiable-section").hide();
      $("#non-modifiable-section").show();
    });
  
    // Scroll to Section Function
    window.scrollToSection = function (sectionId) {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    // Highlight Active Menu on Scroll
    $(document).on("scroll", function () {
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav ul li a').removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      });
    });
  
    // Page Loading Animation
    $(window).on('load', function () {
      $('#js-preloader').addClass('loaded');
    });
  
    // Stats Display
    document.addEventListener("DOMContentLoaded", function () {
      const totalRecords = 319795;
      const totalHeartDisease = 27373;
      const totalEthnicities = 6;
      const totalRiskFactor = 6;
      const totalBMI = 28.33;
  
      const recordsElem = document.getElementById("total-records");
      const heartDiseaseElem = document.getElementById("total-HeartDisease");
      const ethnicitiesElem = document.getElementById("total-Ethnicities");
      const riskFactorElem = document.getElementById("total-RiskFactor");
      const bmiElem = document.getElementById("total-BMI");
  
      if (recordsElem) recordsElem.textContent = totalRecords;
      if (heartDiseaseElem) heartDiseaseElem.textContent = totalHeartDisease;
      if (ethnicitiesElem) ethnicitiesElem.textContent = totalEthnicities;
      if (riskFactorElem) riskFactorElem.textContent = totalRiskFactor;
      if (bmiElem) bmiElem.textContent = totalBMI;
    });
  })(window.jQuery);
  