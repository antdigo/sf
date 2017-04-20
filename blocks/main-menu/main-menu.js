(function ($) {
    'use strict';

    var $toggle = $('.header__menu-toggle');
    var $domElem = $('.header__menu > .main-menu');

    $toggle.on('click', onClick);

    function onClick(event) {
        $toggle.toggleClass('header__menu-toggle_close');
        $domElem.slideToggle(250);

        return false;
    }
})(jQuery);
