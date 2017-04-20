(function ($) {
    'use strict';

    var $domElem = $('.promo_addresses');

    $domElem.on('click', '.promo__address-link', onClick);

    function onClick(event) {
        var $target = $(event.currentTarget);

        $('.promo__address_active', $domElem).removeClass('promo__address_active');
        $('.promo__address-link_active', $domElem).removeClass('promo__address-link_active');
        $target.addClass('promo__address-link_active');
        $('#' + $target.attr('data-id')).addClass('promo__address_active');

        return false;
    }

    $(function () {
        (function (Maps) {
            var map, marker;
            var styles = [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "gamma": 0.5
                        }
                    ]
                }
            ];

            function initialize() {
                var mapOptions = {
                    center: new Maps.LatLng(55.600835, 38.106783),
                    zoom: 16,
                    mapTypeId: Maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                    scrollwheel: false,
                    styles: styles
                };
                map = new Maps.Map(document.getElementsByClassName("page__map")[0], mapOptions);
                marker = new Maps.Marker({
                    map: map,
                    draggable: false,
                    position: new Maps.LatLng(55.600935, 38.108083),
                    title: "Solutions Factory",
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA/CAYAAABNY/BRAAADdElEQVR4AeyZNVjjSxTFH/pWcYg0675b4dDg7u7epcShxt2ddrXH3d2hWXfcae9y/xUWTybI5PtO3H4jV878d3iBSyQKQ2EoDIWhMBSGwlCYKw2jp6cHQUHBUFVVBT09vTA5OSm1FheXIDc3D1RUVMjBBAeHwMjIKOzvH8hUy8vL8OrVKzIz8////+PIyRwCtbu7B3FxceSWWWZmplxAUG/evAV1dXUyMN7e3nID+fTpM9y9e5dMANDU1ITBwSG5wYSEhJKLZh4eHnIDaWxsJBua8/ML5AIyP78AXC6XLExzc7PQP/bnz19ISEgEc3NzMDU1xVuBsrS0PL5PCMGItF8CA4MuRgXQ0dEpEKSiovLilDN1dXV8Qebm5kFfX//iwERERJ4Jsr29A25ubnw/h0lQS0sLQ/spaWhoYA1GHgZHfmFh8RRMeXkF38/o6OjA+/cfoK+vH7q7e44JC9Ourm4m66ekpMKDBw/IVs3h4RHHQGZn5wQur7y8fJFD9Nev34DH44GSkpJiajN3d3e+77O1tYONjU2x8w6GdmIwysrKkJSUjEmU7yjq6urC+PiEREkU96CFhcX56TRLS8ukrp5xoBQOY2RkBDMzs0y4npqaYhq4oaFhJk/19w/Ar1+/Rdo/jx49UjwMhmI1NTW+rz9//hzrMaFATk5OF8PQSE5OEQaDkfNiwOTk5AqFwfZZITCqqqrA4XCAxWKdEuYhdHFQbDYboqOj0bQQChMQEKAYGBxpDKnr6xvHtLa2zrQFP3/+QomcdzY3tzA8k4exs7ODra1tmTZsY2PjWM+RhdHW1sbwK/PuMz09nUDSJNBKYzGL+4soDOYB/ntAMq2srIKNjS1ZrxmXF/rCsrZl/f39yRrnWDOVlJTKFKSlpRUNDvKnANbWNvDjx09cEhJreXmFqd9qa2vB09MTbty4Qc9nKAyFoTAU5nLCWB+q71/1c6DxIBQAUNjNVaIe6ofgH4EgBMIGIQj0dIPYIEKQRUT0EDtgGLOlbt17+B7gGD5xxR9eBagMm6gQ4GMn3DWfuOEfPyUQotZsokYIgcUJRGgOnmgQQWB1FmK0O0+0iGFh8yQSdIonOiSQUJ5Ein7jiR4pJHbPxhnDyokBF9g4PAcZxoUTIzI40C4XOaYvExNyuNA+DwXmt4kZBTwYl48SD5Twoawnj84TBUB2xNsAAAAASUVORK5CYII="
                });
            }

            Maps.event.addDomListener(window, 'load', initialize);
        }(google.maps));
    });
})(jQuery);
