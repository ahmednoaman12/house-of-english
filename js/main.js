$(function () {
    'use strict'

    // start offcanvas
    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
    // end offcanvas

    // Back-To-School owl slider
    $('.Back-To-School .owl-carousel').owlCarousel({
        loop: true,
        rtl: false,
        margin: 20,
        // center: true,
        nav: true,
        navText: [
            // `<img src='${egy_tempurl}/images/owl_right_arrow.svg' >`,`<img src='${egy_tempurl}/images/owl_left_arrow.svg' >`
            // `<img class ='arrow-circle' src='images/Icon ionic-ios-arrow-back-1.png' >`,`<img class ='arrow-circle' src='images/Icon ionic-ios-arrow-back-1.png' >`
            `<div class ='arrow-circle   mx-2' ><i class="arrows bi bi-chevron-left"></i> </div>`, `<div class =' mx-2 arrow-circle  ' ><i class="arrows bi bi-chevron-right"></i> </div>`
        ],
        autoplay: true,
        // autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });
    // search
    $('.header').on('click', '.search-toggle', function (e) {
        var selector = $(this).data('selector');

        $(selector).toggleClass('show').find('.search-input').focus();
        $(this).toggleClass('active');

        e.preventDefault();
    });
    // move backgrond
    $('html').mousemove(function (e) {

        var wx = $(window).width();
        var wy = $(window).height();

        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        var newx = x - wx / 2;
        var newy = y - wy / 2;

        $('.grades .move').each(function () {
            var speed = $(this).attr('data-speed');
            if ($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {
                x: (1 - newx * speed),
                y: (1 - newy * speed)
            });
        });
    });

});