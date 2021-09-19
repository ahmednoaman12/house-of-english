
// start offcanvas
(function () {
  'use strict'
  
  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })


      // Back-To-School owl slider
      $('.Back-To-School .owl-carousel').owlCarousel({
        loop: true,
        rtl: false,
        // margin: 110, 
        nav: true,
        navText: [
            // `<img src='${egy_tempurl}/images/owl_right_arrow.svg' >`,`<img src='${egy_tempurl}/images/owl_left_arrow.svg' >`
            // `<img class ='arrow-circle' src='images/Icon ionic-ios-arrow-back-1.png' >`,`<img class ='arrow-circle' src='images/Icon ionic-ios-arrow-back-1.png' >`
            `<div class ='arrow-circle   mx-2' ><i class="arrows bi bi-chevron-left"></i> </div>`,`<div class =' mx-2 arrow-circle  ' ><i class="arrows bi bi-chevron-right"></i> </div>`
        ],
        autoplay: true,
        // autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });


})()

// end offcanvas
