/*! flyin - v0.0.1 - 2013-10-24
* https://github.com/sillypog/flyin
* Copyright (c) 2013 Peter Hastie; Licensed MIT */
(function($){

    $.fn.flyin = function(content, parent, direction){
        parent = parent instanceof jQuery ? parent : $(parent);

        function display(element){
            element.width();  // This ensures that the width value is defined so that the show animation plays
            if (direction == 'top' || direction == 'bottom'){
                element.css('height', element.height());    // Height must be set explicitly on container for vertical positioning of content by percent
            }
            element.trigger('ready');
        }

        return this.each(function(){
            var $this = $(this).addClass('flyin_container ' + direction);
            if (content instanceof jQuery){
                 $this.append(content).appendTo(parent);
                 display($this);
            } else {
                $this.load(content, function(response, status){
                    if (status == 'success'){
                        $this.appendTo(parent);
                        display($this);
                    } else {
                        $this.trigger('error');
                    }
                });
            }
        });
    };

})(jQuery);