
function Helper(){
    var methods =this;
    
    methods.initSlickCustomerVoice = function (){
        var imgSlick = $(".box_customer_voice .img-slick");
        // if (imgSlick.length) {
        //     if (imgSlick.hasClass('slick-initialized')) {
        //         imgSlick.slick('unslick');
        //     }
        //     imgSlick.slick({
              
        //         arrows: false,
        //         fade: true,
        //         infinite: false,
        //         speed: 300,
        //         slidesToShow: 4,
        //         slidesToScroll: 1,
        //         responsive: [
        //           {
        //             breakpoint: 1024,
        //             settings: {
        //               slidesToShow: 3,
        //               slidesToScroll: 3,
        //               infinite: true,
        //               dots: true
        //             }
        //           },
        //           {
        //             breakpoint: 600,
        //             settings: {
        //               slidesToShow: 2,
        //               slidesToScroll: 2
        //             }
        //           },
        //           {
        //             breakpoint: 480,
        //             settings: {
        //               slidesToShow: 1,
        //               slidesToScroll: 1
        //             }
        //           }
                 
        //         ]
        //     });
        // }
        imgSlick.slick({
          dots: false,
          infinite: true,
          speed: 300,
          autoplay:false,
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
          variableWidth: true,
          centerMode: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll:1
              }
            },
            {
              breakpoint: 400,
              settings: {
                dots: false,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
    }
    methods.initAccordionFooterMenu = function(){
     
      $(".footer_top_sp .col > ul > li > a.has_sub").click(function(e){
        e.preventDefault();
        var href= $(this).attr("href");
        $(href == "#" || href == "" ? 'html' : href);
        $(this).next().slideToggle(500);
        $(this).toggleClass('open');
      })
    }
 
 
    //Khai báo tất cả methods tại đây
    methods.init = function(){
      methods.initSlickCustomerVoice();
      methods.initAccordionFooterMenu();
    }
    return methods;
}
$(function(){
    var helper = new Helper();
    helper.init();
})