$(document).ready(function () {



    $('.dropdown').hover(function () {
        $('.dropdown-menu').toggle();
         
     }, function () {
         $('.dropdown-menu').toggle();
     }
    );

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });

    $('.ourServices_cards').hover(function () {
          $(this).toggleClass('bg_color');
          $(this).children().css({
            "color":"#fff"
          });   
        }, function () {
            $(this).toggleClass('bg_color');
            $(this).children().css({
                "color":"#000"
              });
              
        }
    );


    //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  





});