			
	
			
			
			
			
			
	!function(){"use strict";jQuery(".animate-it").appear(),jQuery(document.body).on("appear",".animate-it",function(){var e,a;jQuery(this).each(function(){jQuery(this).data("delay")?(e=jQuery(this).data("delay"),a=e):a=0,jQuery(this).delay(a).queue(function(){jQuery(this).addClass("animated").clearQueue()})})})}(jQuery);