(function($) {
    "use strict";
    $.fn.extend({
        'addTeeterboard': function(deg, persp) {
            var moveDegree = deg || 3;
            var perspective = persp || 800;
            var formula = function(x) {
                var flag = x >= 0 ? -1 : 1;
                return flag * x * x + 2 * x;
            };
            $(this).on('mouseover mousemove', function(ev) {
                var event = ev || window.event;
                var diffX = ev.pageX - $(this).offset().left - $(this).outerWidth() / 2;
                var diffY = ev.pageY - $(this).offset().top - $(this).outerHeight() / 2;
                var tempX = diffX / ($(this).outerWidth() / 2);
                var tempY = diffY / ($(this).outerHeight() / 2);
                $(this).css({
                    'transform': 'perspective(' + perspective + 'px) rotateY(' + moveDegree * formula(tempX) + 'deg) rotateX(' + -moveDegree * formula(tempY) + 'deg)'
                });
            });
            $(this).on('mouseout', function() {
                $(this).css({
                    'transform': ''
                });
            });
            return $(this);
        }
    });
})(jQuery);
