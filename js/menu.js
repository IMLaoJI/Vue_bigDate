+ function($) {
    'use strict';

    var Menu = function(element, options) {        
        var that = this;
        this.$element = $(element);
        this.options = $.extend(Menu.DEFAULTS, options || {});
    
        this.$element.find('li.active').has('ul').children('ul').collapse('show');
        this.$element.find('li').not('.active').has('ul').children('ul').collapse('hide');

        this.$element.on('click', 'a', function(e) {
            e.preventDefault();
            var $li = $(this).parent('li');
            if ($li.has('ul').length) {
                $li.toggleClass('active').children('ul').collapse('toggle');
                $li.siblings().removeClass('active').children('ul').collapse('hide');
            } else {
                $li.addClass('active');
                $li.siblings().removeClass('active');
                that.options.onClick(this);
            }
        });
    }

    Menu.DEFAULTS = {
        onClick: $.noop
    }

    function Plugin(option, param) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('menu');

            if (!data) $this.data('menu', (data = new Menu(this, option)));
            if (typeof option == 'string') data[option](param);
        });
    }

    $.fn.menu = Plugin;
    $.fn.menu.Constructor = Menu;
}(jQuery);