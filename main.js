(function($) {
    "use strict";

    // تهيئة جميع المكونات عند تحميل الصفحة
    $(document).ready(function() {
        // 1. تهيئة تأثيرات WOW.js
        if (typeof WOW === 'function') {
            new WOW({
                offset: 100,
                mobile: false
            }).init();
        }

        // 2. تهيئة السلايدرات
        initCarousels();

        // 3. تهيئة عداد الإحصائيات
        initCounters();

        // 4. شريط التنقل اللاصق
        $(window).scroll(function() {
            $('.navbar').toggleClass('sticky-top shadow-sm', $(this).scrollTop() > 45);
        });

        // 5. زر العودة للأعلى
        $(window).scroll(function() {
            $('.back-to-top').fadeToggle($(this).scrollTop() > 300);
        });

        $('.back-to-top').click(function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 800);
        });
    });

    // وظائف مساعدة
    function initCarousels() {
        // سلايدر الهيرو الرئيسي
        $(".header-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            dots: true,
            nav: true,
            rtl: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ]
        });

        // سلايدر الأخبار
        $(".news-carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            rtl: true,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            },
            autoplay: true,
            autoplayTimeout: 4000
        });

        // سلايدر الشركاء
        $(".sponsors-carousel").owlCarousel({
            loop: true,
            margin: 24,
            nav: true,
            rtl: true,
            responsive: {
                0: { items: 2 },
                576: { items: 3 },
                768: { items: 4 },
                992: { items: 5 },
                1200: { items: 6 }
            },
            navText: [
                '<i class="fa fa-angle-right"></i>',
                '<i class="fa fa-angle-left"></i>'
            ]
        });
    }

    function initCounters() {
        const counterSection = document.getElementById('stats');
        if (!counterSection) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        observer.observe(counterSection);
    }

    function animateCounters() {
        $('[data-toggle="counter-up"]').each(function() {
            const $this = $(this);
            const target = $this.data('target');
            const duration = parseInt($this.data('duration')) || 2000;
            
            $({ count: 0 }).animate({ count: target }, {
                duration: duration,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.count));
                },
                complete: function() {
                    $this.text(target);
                }
            });
        });
    }

})(jQuery);
