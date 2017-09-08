/*
 * jQuery FlexSlider v2.2.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
 (function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,o="click touchend",u="",a,f=r.vars.direction==="vertical",l=r.vars.reverse,c=r.vars.itemWidth>0,h=r.vars.animation==="fade",p=r.vars.asNavFor!=="",d={};focused=true;e.data(t,"flexslider",r);d={init:function(){r.animating=false;r.currentSlide=r.vars.startAt;r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;if(r.vars.animation==="slide")r.vars.animation="swing";r.prop=f?"top":"marginLeft";r.args={};r.manualPause=false;r.stopped=false;r.transitions=!r.vars.video&&!h&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t){if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return true}}return false}();if(r.vars.controlsContainer!=="")r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer);if(r.vars.manualControls!=="")r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls);if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();if(p)d.asNav.setup();r.setup("init");if(r.vars.controlNav)d.controlNav.setup();if(r.vars.directionNav)d.directionNav.setup();if(r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)){e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):false;r.flexAnimate(n,r.vars.pauseOnAction)}})}if(r.vars.mousewheel){r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)})}if(r.vars.pausePlay)d.pausePlay.setup();if(r.vars.slideshow){if(r.vars.pauseOnHover){r.hover(function(){if(!r.manualPlay&&!r.manualPause)r.pause()},function(){if(!r.manualPause&&!r.manualPlay&&!r.stopped)r.play()})}r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()}if(s&&r.vars.touch)d.touch();if(!h||h&&r.vars.smoothHeight)e(window).bind("resize focus",d.resize);setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=true;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");r.slides.click(function(t){t.preventDefault();var n=e(this),s=n.index();var o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide")){r.flexAnimate(r.getTarget("prev"),true)}else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,false,true,true)}})}},controlNav:{setup:function(){if(!r.manualControls){d.controlNav.setupPaging()}else{d.controlNav.setupManual()}},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1){for(var a=0;a<r.pagingCount;a++){s=r.vars.controlNav==="thumbnails"?'<img2 src="'+r.slides.eq(a).attr("data-thumb")+'"/>':"<a>"+n+"</a>";r.controlNavScaffold.append("<li>"+s+"</li>");n++}}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);d.controlNav.set();d.controlNav.active();r.controlNavScaffold.delegate("a, img2",o,function(t){t.preventDefault();if(u===""||u===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}if(u===""){u=t.type}d.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;d.controlNav.active();r.controlNav.bind(o,function(t){t.preventDefault();if(u===""||u===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}if(u===""){u=t.type}d.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img2":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){if(r.pagingCount>1&&t==="add"){r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>"))}else if(r.pagingCount===1){r.controlNavScaffold.find("li").remove()}else{r.controlNav.eq(n).closest("li").remove()}d.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):d.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}d.directionNav.update();r.directionNav.bind(o,function(t){t.preventDefault();var n;if(u===""||u===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}if(u===""){u=t.type}d.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";if(r.pagingCount===1){r.directionNav.addClass(e).attr("tabindex","-1")}else if(!r.vars.animationLoop){if(r.animatingTo===0){r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1")}else if(r.animatingTo===r.last){r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1")}else{r.directionNav.removeClass(e).removeAttr("tabindex")}}else{r.directionNav.removeClass(e).removeAttr("tabindex")}}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}d.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(o,function(t){t.preventDefault();if(u===""||u===t.type){if(e(this).hasClass(i+"pause")){r.manualPause=true;r.manualPlay=false;r.pause()}else{r.manualPause=false;r.manualPlay=true;r.play()}}if(u===""){u=t.type}d.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").text(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").text(r.vars.pauseText)}},touch:function(){function p(o){if(r.animating){o.preventDefault()}else if(o.touches.length===1){r.pause();s=f?r.h:r.w;u=Number(new Date);i=c&&l&&r.animatingTo===r.last?0:c&&l?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:c&&r.currentSlide===r.last?r.limit:c?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:l?(r.last-r.currentSlide+r.cloneOffset)*s:(r.currentSlide+r.cloneOffset)*s;e=f?o.touches[0].pageY:o.touches[0].pageX;n=f?o.touches[0].pageX:o.touches[0].pageY;t.addEventListener("touchmove",d,false);t.addEventListener("touchend",v,false)}}function d(t){o=f?e-t.touches[0].pageY:e-t.touches[0].pageX;a=f?Math.abs(o)<Math.abs(t.touches[0].pageX-n):Math.abs(o)<Math.abs(t.touches[0].pageY-n);if(!a||Number(new Date)-u>500){t.preventDefault();if(!h&&r.transitions){if(!r.vars.animationLoop){o=o/(r.currentSlide===0&&o<0||r.currentSlide===r.last&&o>0?Math.abs(o)/s+2:1)}r.setProps(i+o,"setTouch")}}}function v(f){t.removeEventListener("touchmove",d,false);if(r.animatingTo===r.currentSlide&&!a&&!(o===null)){var c=l?-o:o,p=c>0?r.getTarget("next"):r.getTarget("prev");if(r.canAdvance(p)&&(Number(new Date)-u<550&&Math.abs(c)>50||Math.abs(c)>s/2)){r.flexAnimate(p,r.vars.pauseOnAction)}else{if(!h)r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,true)}}t.removeEventListener("touchend",v,false);e=null;n=null;o=null;i=null}var e,n,i,s,o,u,a=false;t.addEventListener("touchstart",p,false)},resize:function(){if(!r.animating&&r.is(":visible")){if(!c)r.doMath();if(h){d.smoothHeight()}else if(c){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(f){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{if(r.vars.smoothHeight)d.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!f||h){var t=h?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,false,true);break;case"play":if(!n.playing&&!n.asNav){n.play()}break;case"pause":n.pause();break}},setToClearWatchedEvent:function(){clearTimeout(a);a=setTimeout(function(){u=""},3e3)}};r.flexAnimate=function(t,n,o,u,a){if(p&&r.pagingCount===1)r.direction=r.currentItem<t?"next":"prev";if(!r.animating&&(r.canAdvance(t,a)||o)&&r.is(":visible")){if(p&&u){var v=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;v.flexAnimate(t,true,false,true,a);r.direction=r.currentItem<t?"next":"prev";v.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1!==r.currentSlide&&t!==0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}else{r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return false}}r.animating=true;r.animatingTo=t;r.vars.before(r);if(n)r.pause();if(r.syncExists&&!a)d.sync("animate");if(r.vars.controlNav)d.controlNav.active();if(!c)r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;if(r.vars.directionNav)d.directionNav.update();if(t===r.last){r.vars.end(r);if(!r.vars.animationLoop)r.pause()}if(!h){var m=f?r.slides.filter(":first").height():r.computedW,g,y,b;if(c){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else if(r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"){y=l?(r.count+r.cloneOffset)*m:0}else if(r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"){y=l?0:(r.count+1)*m}else{y=l?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m}r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=false;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else{r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}}else{if(!s){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.animating=false;r.currentSlide=r.animatingTo}}if(r.vars.smoothHeight)d.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){if(!h&&!c){if(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop){r.setProps(e,"jumpEnd")}else if(r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop){r.setProps(e,"jumpStart")}}r.animating=false;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){if(!r.animating&&focused)r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=false;if(r.vars.pausePlay)d.pausePlay.update("play");if(r.syncExists)d.sync("pause")};r.play=function(){r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.playing=true;if(r.vars.pausePlay)d.pausePlay.update("pause");if(r.syncExists)d.sync("play")};r.stop=function(){r.pause();r.stopped=true};r.canAdvance=function(e,t){var n=p?r.pagingCount-1:r.last;return t?true:p&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?true:p&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?false:e===r.currentSlide&&!p?false:r.vars.animationLoop?true:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?false:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?false:true};r.getTarget=function(e){r.direction=e;if(e==="next"){return r.currentSlide===r.last?0:r.currentSlide+1}else{return r.currentSlide===0?r.last:r.currentSlide-1}};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(c){return t==="setTouch"?e:l&&r.animatingTo===r.last?0:l?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n}else{switch(t){case"setTotal":return l?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return l?e:e;case"jumpEnd":return l?e:r.count*e;case"jumpStart":return l?r.count*e:e;default:return e}}}();return i*-1+"px"}();if(r.transitions){i=f?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n)}r.args[r.prop]=i;if(r.transitions||n===undefined)r.container.css(r.args)};r.setup=function(t){if(!h){var n,o;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(l){o=e.makeArray(r.slides).reverse();r.slides=e(o);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!c){r.cloneCount=2;r.cloneOffset=1;if(t!=="init")r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"))}r.newSlides=e(r.vars.selector,r);n=l?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(f&&!c){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});if(r.vars.smoothHeight)d.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});if(t==="init"){if(!s){r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing)}else{r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2})}}if(r.vars.smoothHeight)d.smoothHeight()}if(!c)r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide")};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(c){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!c){if(e<r.currentSlide){r.currentSlide+=1}else if(e<=r.currentSlide&&e!==0){r.currentSlide-=1}r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls){if(t==="add"&&!c||r.pagingCount>r.controlNav.length){d.controlNav.update("add")}else if(t==="remove"&&!c||r.pagingCount<r.controlNav.length){if(c&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}d.controlNav.update("remove",r.last)}}if(r.vars.directionNav)d.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;if(f&&l){n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i)}else{n!==undefined?r.slides.eq(n).before(i):r.container.append(i)}r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;if(isNaN(t)){e(t,r.slides).remove()}else{f&&l?r.slides.eq(r.last).remove():r.slides.eq(t).remove()}r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};d.init()};e(window).blur(function(e){focused=false}).focus(function(e){focused=true});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:false,pauseOnAction:true,pauseOnHover:false,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};e.fn.flexslider=function(t){if(t===undefined)t={};if(typeof t==="object"){return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1){i.fadeIn(400);if(t.start)t.start(n)}else if(n.data("flexslider")===undefined){new e.flexslider(this,t)}})}else{var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),true);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),true);break;default:if(typeof t==="number")n.flexAnimate(t,true)}}}})(jQuery)