(function ($) {
    "use strict";

   
    
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


// الاحصائيات 
const counters = document.querySelectorAll('.counter');

function animateCounters() {
  counters.forEach(counter => {
    counter.innerText = '0';
    const update = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 200;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(update, 15);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

let started = false;
window.addEventListener('scroll', () => {
  const section = document.getElementById('stats');
  const sectionTop = section.getBoundingClientRect().top;
  if (!started && sectionTop < window.innerHeight) {
    animateCounters();
    started = true;
  }
});






// فك الضغط التلقائي عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', async () => {
  if (!document.querySelector('img[src^="img/"]')) return;
  
  const response = await fetch('img.zip');
  const zipData = await response.blob();
  const zip = await JSZip.loadAsync(zipData);
  
  zip.forEach(async (relativePath, file) => {
    if (!file.dir) {
      const content = await file.async('blob');
      const url = URL.createObjectURL(content);
      document.querySelectorAll(`img[src="img/${relativePath}"]`).forEach(img => {
        img.src = url;
      });
    }
  });
});

















    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // attractions carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    
  $('.sponsors-carousel').owlCarousel({
  rtl: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2800,
  autoplayHoverPause: true,
  smartSpeed: 900,
  margin: 24,
  dots: true,
  nav: true,

  // RTL: أول نص للسابق (يمين) – ثاني نص للالتالي (يسار)
  navText: [
    '<i class="fa fa-angle-right"></i><span>السابق</span>',
    '<span>التالي</span><i class="fa fa-angle-left"></i>'
  ],

  responsive: {
    0:    { items: 2 },
    576:  { items: 3 },
    768:  { items: 4 },
    992:  { items: 5 },
    1200: { items: 6 }
  }
});




//news 
   $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            },
            autoplay: true,
            autoplayTimeout: 3000,
            rtl: true
        });
    });




























    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);


