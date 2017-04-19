(function ($) {
    'use strict';

    var $domElem = $('.promo_clients');
    var $clients = $('.promo__clients', $domElem);

    $clients.flickity({
        draggable: false,
        cellAlign: 'left',
        contain: true,
        adaptiveHeight: true
    });
})(jQuery);
