!function(t){var e,n,r={numOfCol:5,offsetX:0,offsetY:0,blockElement:"div"},a=[];Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e=this.length>>>0,n=Number(arguments[1])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=e);e>n;n++)if(n in this&&this[n]===t)return n;return-1});var i=function(){a=[];for(var t=0;t<r.numOfCol;t++)f("empty-"+t,t,0,1,-r.offsetY)},f=function(t,e,n,i,f){for(var o=0;i>o;o++){var u=new Object;u.x=e+o,u.size=i,u.endY=n+f+2*r.offsetY,a.push(u)}},o=function(t,e){for(var n=0;e>n;n++){var r=u(t+n,"x");a.splice(r,1)}},u=function(t,e){for(var n=0;n<a.length;n++){var r=a[n];if("x"==e&&r.x==t)return n;if("endY"==e&&r.endY==t)return n}},s=function(t,e){for(var n=[],r=0;e>r;r++)n.push(a[u(t+r,"x")].endY);var i=Math.min.apply(Math,n),f=Math.max.apply(Math,n);return[i,f,n.indexOf(i)]},h=function(t){if(t>1){for(var e,n,r=a.length-t,i=!1,f=0;f<a.length;f++){var o=a[f],u=o.x;if(u>=0&&r>=u){var h=s(u,t);i?h[1]<e[1]&&(e=h,n=u):(i=!0,e=h,n=u)}}return[n,e[1]]}return e=s(0,a.length),[e[2],e[0]]},d=function(t){!t.data("size")||t.data("size")<0?t.data("size",1):t.data("size")>r.numOfCol&&t.data("size",r.numOfCol);var e=h(t.data("size")),a=n*t.data("size")-(t.outerWidth()-t.width());t.css({width:a-2*r.offsetX,left:e[0]*n,top:e[1],position:"absolute"});var i=t.outerHeight();o(e[0],t.data("size")),f(t.attr("id"),e[0],e[1],t.data("size"),i)};t.fn.BlocksIt=function(f){f&&"object"==typeof f&&t.extend(r,f),e=t(this),n=e.width()/r.numOfCol,i(),e.children(r.blockElement).each(function(e){d(t(this),e)});var o=s(0,a.length);return e.height(o[1]+r.offsetY),this}}(jQuery);