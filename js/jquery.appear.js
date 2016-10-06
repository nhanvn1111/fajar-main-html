/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
!function(e){"use strict";function r(){n=!1;for(var r=0;r<i.length;r++){var a=e(i[r]).filter(function(){return e(this).is(":appeared")});if(a.trigger("appear",[a]),t){var o=t.not(a);o.trigger("disappear",[o])}t=a}}var t,i=[],a=!1,n=!1,o={interval:250,force_process:!1},f=e(window);e.expr[":"].appeared=function(r){var t=e(r);if(!t.is(":visible"))return!1;var i=f.scrollLeft(),a=f.scrollTop(),n=t.offset(),o=n.left,s=n.top;return s+t.height()>=a&&s-(t.data("appear-top-offset")||0)<=a+f.height()&&o+t.width()>=i&&o-(t.data("appear-left-offset")||0)<=i+f.width()?!0:!1},e.fn.extend({appear:function(t){var f=e.extend({},o,t||{}),s=this.selector||this;if(!a){var p=function(){n||(n=!0,setTimeout(r,f.interval))};e(window).scroll(p).resize(p),a=!0}return f.force_process&&setTimeout(r,f.interval),i.push(s),e(s)}}),e.extend({force_appear:function(){return a?(r(),!0):!1}})}(jQuery);