(function($){

    $.fn.flyin = function(content, parent, direction){
        parent = parent instanceof $ ? parent : $(parent);

        function display(element){
            element.width();  // This ensures that the width value is defined so that the show animation plays
            if (direction == 'top' || direction == 'bottom'){
                element.css('height', element.height());    // Height must be set explicitly on container for vertical positioning of content by percent
            }
            element.trigger('ready');
        }

        return this.each(function(){
            var $this = $(this).addClass('flyin_container ' + direction);
            if (content instanceof $){
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

            $this.on('transitionend webkitTransitionEnd', function(){
                var status = $this.hasClass('show') ? 'showComplete' : 'hideComplete';
                $this.trigger(status);
            });
        });
    };

})(jQuery);
