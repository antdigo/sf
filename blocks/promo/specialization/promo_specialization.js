(function ($) {
    'use strict';

    var $domElem = $('.promo_specialization');

    $domElem.on('click', '.promo__footer', onClick);

    function onClick(event) {
        $domElem
            .toggleClass('promo_expanded')
            .find('.promo__content')
            .slideToggle(250);

        return false;
    }
})(jQuery);
