jQuery(document).ready(function ($) {

    const stickyHeaderHandler = () => {

        let scrollTop = $(window).scrollTop();
        let headerHeight = $('.siteHeader').outerHeight();

        if(scrollTop > headerHeight){

            $('.siteHeader').addClass('-isStuck');

        } else if($('.siteHeader').hasClass('-isStuck') && scrollTop == 0){

            $('.siteHeader').removeClass('-isStuck');

        }

    }

    $(window).scroll(() => {

        stickyHeaderHandler();

    });

});
