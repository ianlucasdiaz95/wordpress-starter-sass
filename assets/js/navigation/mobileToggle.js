jQuery(document).ready(function ($) {

    const menuToggleHandler = () => {
        let mobileMenu = $('#mobileMenu');
        let menuToggle = $('#menuToggle');

        $('body').toggleClass('-preventScroll');
        mobileMenu.toggleClass('-hidden -open');
        menuToggle.toggleClass('-menuOpen');
    }

    $('#menuToggle').on('click', () => {
        menuToggleHandler();
    });

});
