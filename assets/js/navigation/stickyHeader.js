jQuery(document).ready(function ($) {

    const stickyHeaderHandler = () => {

        let scrollTop = $(window).scrollTop();
        let headerHeight = $('.header').outerHeight();

        if(scrollTop > headerHeight){

            $('.header').addClass('-isStuck');

        } else if($('.header').hasClass('-isStuck') && scrollTop == 0){

            $('.header').removeClass('-isStuck');

        }

    }

    $(window).scroll(() => {
        
        stickyHeaderHandler();

    });

});
