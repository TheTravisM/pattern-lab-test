(function(w){
	var sw = document.body.clientWidth,
		sh = document.body.clientHeight;

	$(w).resize(function(){ //Update dimensions on resize
		sw = document.body.clientWidth;
		sh = document.body.clientHeight;

		//updateAds();
	});
})(this);

/*-------------------*\
	Picture Fill
\*-------------------*/
picturefill();

/*-------------------*\
	TWITTER WIDGET
\*-------------------*/
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});

jQuery(document).ready(function($){

	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 1024;
	//move nav element position according to window width
	// moveNavigation();
	// $(window).on('resize', function(){
	// 	(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	// });

	//mobile - open lateral menu clicking on the menu icon
	$('.js-nav-trigger').on('click', function(event){
		event.preventDefault();
		if( $('.js-page').hasClass('nav-is-visible') ) {
			closeNav();
			$('.js-overlay').removeClass('is-visible');
		} else {
			$(this).addClass('nav-is-visible');
			$('.js-nav-mobile').addClass('nav-is-visible');
			$('.js-main-header').addClass('nav-is-visible');
			$('.js-page').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
			toggleSearch('close');
			$('.js-overlay').addClass('is-visible');
		}
	});

	//open search form
	$('.c-search-trigger').on('click', function(event){
		event.preventDefault();
		toggleSearch();
		closeNav();
		closeLoginBox();
	});

	//close lateral menu on mobile
	$('.js-overlay').on('swiperight', function(){
		if($('.js-nav-mobile').hasClass('nav-is-visible')) {
			closeNav();
			$('.js-overlay').removeClass('is-visible');
		}
	});

	$('.nav-on-left .js-overlay').on('swipeleft', function(){
		if($('.js-nav-mobile').hasClass('nav-is-visible')) {
			closeNav();
			$('.js-overlay').removeClass('is-visible');
		}
	});

	$('.js-overlay').on('click', function(){
		closeNav();
		toggleSearch('close')
		$('.js-overlay').removeClass('is-visible');
	});


	//prevent default clicking on direct children of .js-nav-mobile
	$('.js-nav-mobile').children('.has-children').children('a').on('click', function(event){
		event.preventDefault();
	});

	//open submenu
	$('.has-children').children('a').on('click', function(event){
		if( !checkWindowWidth() ) event.preventDefault();
		var selected = $(this);
		if( selected.next('ul').hasClass('is-hidden')) {
			//desktop version only
			selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
			selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
			$('.js-overlay').addClass('is-visible');
		} else {
			selected.removeClass('selected').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul').removeClass('moves-out');
			$('.js-overlay').removeClass('is-visible');
		}
		toggleSearch('close');
	});

	//submenu items - go back link
	$('.c-nav-mobile__go-back').on('click', function(){
		$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});
	//mobile - ensure that second level nav is open when not on main level page
	function mobileNavStateLocation() {

		function moveOut() {
			$('.js-main-nav').addClass('moves-out');
		}

		if($('.js-primary-personal').length > 0) {
			moveOut();
			$('.js-primary-personal').removeClass('is-hidden');
		} 
		else if($('.js-primary-small').length > 0) {
			moveOut();
			$('.js-primary-small').removeClass('is-hidden');
		}
		else if($('.js-primary-commercial').length > 0) {
			moveOut();
			$('.js-primary-commercial').removeClass('is-hidden');

		}
		else if($('.js-primary-wam').length > 0) {
			moveOut();
			$('.js-primary-wam').removeClass('is-hidden');
		}
		else {
			return;
		}
	};
	mobileNavStateLocation();

	function closeNav() {
		$('.js-nav-trigger').removeClass('nav-is-visible');
		$('.js-main-header').removeClass('nav-is-visible');
		$('.js-nav-mobile').removeClass('nav-is-visible');
		$('.has-children ul').addClass('is-hidden');
		$('.has-children a').removeClass('selected');
		$('.moves-out').removeClass('moves-out');
		$('.js-page').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$('body').removeClass('overflow-hidden');
		});
	}

	function toggleSearch(type) {
		if(type=="close") {
			//close serach
			$('.c-search').removeClass('is-visible');
			$('.c-search-trigger').removeClass('search-is-visible');
			$('.js-overlay').removeClass('search-is-visible');
			//$('.js-overlay').removeClass('is-visible');
		} else {
			//toggle search visibility
			$('.c-search').toggleClass('is-visible');
			$('.c-search-trigger').toggleClass('search-is-visible');
			$('.js-overlay').toggleClass('search-is-visible');
			if($(window).width() > MqL && $('.c-search').hasClass('is-visible')) $('.c-search').find('input[type="search"]').focus();
			($('.c-search').hasClass('is-visible')) ? $('.js-overlay').addClass('is-visible') : $('.js-overlay').removeClass('is-visible') ;
		}
	}

	function checkWindowWidth() {
		//check window width (scrollbar included)
		var e = window,
            a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        if ( e[ a+'Width' ] >= MqL ) {
			return true;
		} else {
			return false;
		}
	}

	function moveNavigation(){
		var navigation = $('.js-nav-primary');
  		var desktop = checkWindowWidth();
        if ( desktop ) {
			navigation.detach();
			navigation.insertBefore('.js-header-buttons');

			if($('.c-local-nav > .js-local-nav').length < 1){
				//$(".js-local-nav").wrap("<div class='c-local-nav'></div>");
			}
			if($('.js-main-header ~ .c-local-nav').length < 1){
				//$(".c-local-nav").clone().insertAfter( ".js-main-header" );
			}

		} else {
			navigation.detach();
			navigation.insertAfter('.js-page');
			$('.c-local-nav > .js-local-nav').unwrap();
		}
	}

	/*-------------------*\
		Log In
	\*-------------------*/

	function showLoginOnLoad(){
		var shouldReveal = $('body').hasClass("has-login-reveal");
		if(shouldReveal){
			toggleLogin();
		}
	}

	function toggleLogin(){
		$(".js-login").toggleClass("is-active");
	  $(".js-login__box").toggleClass("is-active");
	}

	$(".js-login").on( "click", function() {
		toggleSearch('close');
		$('.js-overlay').removeClass('is-visible');
		$(".js-login__box").addClass("has-been-closed");
	  toggleLogin();
	});

	function closeLoginBox(){
		$(".js-login").removeClass("is-active");
		$(".js-login__box").removeClass("is-active");
	}

	setTimeout(function(){
		if ($('.js-login__box').length > 0) {
			var isHovered = $('.js-login__box:hover').length > 0;
			var searchOpen = $('.js-search').hasClass("is-visible");
			var shouldReveal = $('body').hasClass("has-login-reveal");
			var hasBeenClosed = $(".js-login__box").hasClass("has-been-closed");
			if(!isHovered && !searchOpen && !hasBeenClosed && shouldReveal){
				toggleLogin();
			}
		}
	}, 3000);

	$(".js-demo-login-btn").on( "click", function() {
		$(this).addClass('is-loading');
	});
	
	$(".js-login__drowdown").change(function () {
	    $(".js-login__online").toggleClass("is-hidden");
	  	$(".js-login__commercial").toggleClass("is-active");
	});

	showLoginOnLoad();

	/*--------------*\
	  STEP NAV
	\*--------------*/
	function stickyStepNav() {
		var stepNav = $('.js-step');
		var stepSection = $('.js-step__section');

		//the initial top offset of the navigation 
		if(stepNav.length === 0) return;
		var	elementOffset = stepNav.offset().top;

		$(window).on('scroll', function() {
			var currentPosition = $(this).scrollTop();
			if(currentPosition > elementOffset) { 
				stepNav.addClass("c-step--fixed");
			}
			else {
				stepNav.removeClass("c-step--fixed");
			}

			stepSection.each(function() {
				var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();
 
		    if (currentPosition >= top && currentPosition<= bottom) {
		      stepNav.find('li').removeClass('is-active');
		      stepSection.removeClass('is-active');
		 
		      $(this).addClass('is-active');
		      stepNav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('is-active');
		    }
			});

		});

		$('.js-step__item').on('click', function() {
			$('.js-step__item').removeClass("is-active");
			$(this).addClass('is-active');
		});

	}

	stickyStepNav();


	/*--------------*\
	  TABS
	\*--------------*/
	function toggleTabs() {

		if($(".js-tabs").length > 0) {

			$(".js-tabs").each(function() {

				var $tabs = $(this);

	  		var $content = $tabs.find(".js-tabs__content");
	  		var $first = $tabs.find(".js-tabs__content:first");
	  		var $item = $tabs.find(".js-tabs-item");
	  		var $accordion = $tabs.find(".js-tabs--accordion");

				$content.hide();
				$first.show();

				$item.on('click', function() {

					var activeTab = $(this).attr("rel");

					$content.hide();
					$("#"+activeTab).fadeIn(100);

					$item.removeClass("is-active");
					$(this).addClass("is-active");

					$(".js-tabs--accordion").removeClass("is-active");
					$(".js-tabs--accordion[rel^='"+activeTab+"']").addClass("is-active");

				});

				/* TABS ACCORDION MOBILE */
				$accordion.on('click', function(e) {
					//Grabs the clicked accordions rel attribute
				  var activeTabAccordion = $(this).attr("rel");

				  if($(e.target).is('.is-active')) {
				  	$(".js-tabs--accordion").removeClass("is-active");
				  	$(".js-tabs__content").slideUp(600);
			  	}
			  	else
			  	{
			  		$(".js-tabs--accordion").removeClass("is-active");
				  	$(".js-tabs__content").slideUp(600);

					  $(this).addClass("is-active");

						$("#"+activeTabAccordion).slideDown(300);

					  $item.removeClass("is-active");
					  $(".js-tabs-item[rel^='"+activeTabAccordion+"']").addClass("is-active");

					}
					e.preventDefault();
						  
				});

			});

		}
	}

	toggleTabs();

	/*--------------*\
	  ACCORDION
	\*--------------*/

	function toggleAccordion() {

		$(".js-accordion-group").each(function() {
			$(this).find('.js-accordion__title').on('click', function(e) {
			  // Grab js-accordion value
			  var currentValue = $(this).attr('data-target');
			  var closestGroup = $(this).closest('.js-accordion-group');

			  if($(e.target).is('.is-active')) {
					// Close accordion content
					closestGroup.find('.js-accordion__title').removeClass('is-active');
					closestGroup.find('.js-accordion__content').slideUp(300);
			  }else {
					// Close accordion content
					closestGroup.find('.js-accordion__title').removeClass('is-active');
					closestGroup.find('.js-accordion__content').slideUp(300);

			  	// Add is-active class to the content title
			  	$(this).addClass('is-active');
			  	// Open the content panel
			  	$('.js-accordion ' + currentValue).slideDown(300);
			  }

			  e.preventDefault();
			});

		});
	}

	toggleAccordion();



	/*-------------------*\
		SLICK SLIDER
	\*-------------------*/

	function twitterSlider (){
			$('.js-slick-slider').slick({
			infinite: true,
			pauseOnHover: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 6000,
		});
	}

	twitterSlider();

	/*-------------------*\
			EQUAL HEIGHT
	\*-------------------*/
	function zeroHeightTabs() {
		$('.js-vertical-tab-height').removeAttr("style");
	}

	function zeroHeightContent() {
		$('.js-content-block-height').removeAttr("style");
		$('.js-content-block-height--small').removeAttr("style");
	}

	function equalHeight(verticalTabHeight, contentBlockHeight) {

		var container = $(verticalTabHeight, contentBlockHeight).map(function() {
			return $(this).height();
		}).get();
		var maxHeight = Math.max.apply(null, container);

		if($(window).width() < 1023 && $('.js-selector__wrapper').length === 0) {
			zeroHeightContent();
			zeroHeightTabs();
		} else if ($(window).width() > MqL || $('.js-selector__wrapper').length > 0) {
			$(verticalTabHeight, contentBlockHeight).height(maxHeight);
		}

	}

	/* on page load */
	equalHeight(".js-vertical-tab-height");


	if($(".js-content-block").length > 0){
		$(".js-content-block").each(function() {
	  	var row = $(this);
	  	var blocks = row.find(".js-content-block-height");
	  	equalHeight(blocks);
		});
	}

	//equalHeight(".js-content-block-height--small");

	$(window).on('resize', function() {
		if($(window).width() > MqL || $('.js-selector__wrapper').length > 0) {
			zeroHeightTabs();
			zeroHeightContent();
			equalHeight(".js-vertical-tab-height");
			equalHeight(".js-content-block-height");
			equalHeight(".js-content-block-height--small");
		} else if ($(window).width() < 1023) {
			zeroHeightContent();
			zeroHeightTabs();
		}
	});

	/*-------------------*\
		SELECTOR TOOL FORM
	\*-------------------*/
	var checkingAccountSelector = function() {

	  var accStudent = false;
	  var accMilitary = false;
	  var tier1 = false;
	  var tier2 = false;
	  var tier3 = false;
	  var tier4 = false;
	  var accExpress = false;
	  var next;


	  
	  // Show selection wizard
	  $( ".js-show-selector" ).on( "click", function(e) {
	    e.preventDefault();
	    $( ".js-selector__wrapper" ).toggleClass('is-open');
	    $('html, body').animate({
	          scrollTop: $(".js-selector__wrapper").offset().top
	      }, 500);
	  });
	  
	  // Show next question
	  $( ".js-selector__next").on( "click", function(e) {
	    e.preventDefault();
	    nextQuestion();
	  });

	  // Set Flags
	  $( ".js-selector__acct-student" ).on( "click", function(e) {
	    e.preventDefault();
	    accStudent = true;
	  });
	  $( ".js-selector__acct-military" ).on( "click", function(e) {
	    e.preventDefault();
	    accMilitary = true;
	  });
	  $( ".js-selector__tier-1" ).on( "click", function(e) {
	    e.preventDefault();
	    tier1 = true;
	  });
	  $( ".js-selector__tier-2" ).on( "click", function(e) {
	    e.preventDefault();
	    tier2 = true;
	  });
	  $( ".js-selector__tier-3" ).on( "click", function(e) {
	    e.preventDefault();
	    tier3 = true;
	  });
	  $( ".js-selector__tier-4" ).on( "click", function(e) {
	    e.preventDefault();
	    tier4 = true;
	  });
	  
	 
	  // Handle Unique Flows
	  $( ".js-selector__acct-military" ).on( "click", function(e) {
	    e.preventDefault();
	    var active = $( ".is-active" );
	    var next = $('.js-selector__question-tier');
	    goToQuestion(active,next,false);
	  });

	  $( ".js-selector__acct-essential" ).on( "click", function(e) {
	    e.preventDefault();
	    var next = $('.js-selector__results-essential');
	    hideQuestionShowResults(next);
	    highlightRecommended($('.js-selector__essential'));
	  });

	  $( ".js-selector__acct-express" ).on( "click", function(e) {
	    e.preventDefault();
	    var next = $('.js-selector__results-express');
	    hideQuestionShowResults(next);
	    highlightRecommended($('.js-selector__express'));
	  });

	  // Final logic to decide the correct account based on money tier
	  $( ".js-selector__decide" ).on( "click", function(e) {
	    e.preventDefault();
	    if(tier4===true){
	      hideQuestionShowResults($('.js-selector__results-preferred'));
	      highlightRecommended($('.js-selector__preferred'));
	    }else if(tier3===true){
	      hideQuestionShowResults($('.js-selector__results-enhanced'));
	      highlightRecommended($('.js-selector__enhanced'));
	    }else if((tier2===true || tier1===true) && accMilitary===true){
	      hideQuestionShowResults($('.js-selector__results-military'));
	      highlightRecommended($('.js-selector__military'));
	    }else if(tier2===true  && accMilitary===false){
	      hideQuestionShowResults($('.js-selector__results-essential'));
	      highlightRecommended($('.js-selector__essential'));
	    }else if(tier1===true && accStudent===true){
	      hideQuestionShowResults($('.js-selector__results-student'));
	      highlightRecommended($('.js-selector__student'));
	    }else if(tier1===true && accStudent===false && accMilitary===false){
	      hideQuestionShowResults($('.js-selector__results-essential'));
	      highlightRecommended($('.js-selector__essential'));
	    }else{
	      // Catch All
	      hideQuestionShowResults($('.js-selector__results-essential'));
	      highlightRecommended($('.js-selector__essential'));
	    }
	  });


	  var nextQuestion = function(){
	    var active = $( ".is-active" );
	    var next = active.next('li');
	    goToQuestion(active,next,false);
	  }

	  // Selector tool specific functions
	  var hideQuestionShowResults = function(next){
	    var active = $( ".is-active" );
	    goToQuestion(active,next,false);
	  }

	  var highlightRecommended = function(highlight){

	  	if ($(window).width() > MqL) {
	  		var selectorTool = $('.js-selector__wrapper');
	  		var	elementOffset = selectorTool.offset().top;
	  		// Add recommend class to entire box 
		    if (highlight.length > 0){
		     highlight.find('.js-product-card').addClass('c-selector__recommended');
		    }
		    
		    // Scroll to Results Section
		    if ($('.js-selector__essential > .c-selector__recommended').length > 0) {
		    	$('html, body').stop().animate(
		    		{
		       	 scrollTop: highlight.offset().top - 321
		    		}, 1000);
		    }
		    else {
			    $('html, body').stop().animate(
				    {
				       scrollTop: highlight.offset().top - 240
				    }, 1000);
		    }


		    selectorTool.addClass('c-selector--fixed');


			
		    $(window).on('scroll', function() {
					var currentPosition = $(this).scrollTop();
					if(currentPosition > elementOffset) { 
						selectorTool.addClass("c-selector--fixed");
						$('.c-selector-offset').css({height: '220px'});
					}
					else {
						selectorTool.removeClass("c-selector--fixed");
						$('.c-selector-offset').css({height: ''});
					}
		  	});
		  }
	    
	  }

	  var goToQuestion = function(currentQuestion,nextQuestion,startOver){
	    $( ".c-selector__list" ).addClass('c-selector__display-next');
	    nextQuestion.addClass('is-active');
      currentQuestion.removeClass('is-active');
      currentQuestion.addClass('is-hidden');
      var navCurrent = $('.c-selector__dot.is-active');
      var navNext = navCurrent.next('button');
      navCurrent.removeClass('is-active');
      navNext.addClass('is-active');
      $( ".c-selector__list" ).removeClass('c-selector__display-next');
	   
	    
	  }

	  	  // Start over
	  $(".js-selector-reset").on( "click", function(e) {
	    e.preventDefault();
	    accStudent = false;
	    accMilitary = false;
	    tier1 = false;
	    tier2 = false;
	    tier3 = false;
	    tier4 = false;
	    accExpress = false;
	    var active = $('.is-active');
	    var next = $( ".c-selector__list li" ).first();
	    // Remove existing highlight
	    $('.js-product-card').removeClass('c-selector__recommended');
	    // Remove fixed position for selector tool
	    $('.js-selector__wrapper').removeClass('c-selector--fixed');
	    // Scroll back to selector tool
	    $('html, body').animate({
	        scrollTop: $('.js-selector__wrapper').offset().top
	    }, 1000);
	    // Show next question
	    goToQuestion(active,next,true);
	    // Remove is-hidden class
	    $('.c-selector__item').removeClass('is-hidden');
	    // Reset first dot
	    $('.c-selector__nav .c-selector__dot').first().addClass('is-active');
	    // Show Nav
	    var nav = $('.c-selector__nav');
	    nav.removeClass('is-hidden');
	    // Show all rows
	    $('.js-selector__row-first').removeClass('is-hidden');
	  });
	}
	checkingAccountSelector();

	/*-------------------*\
	PAGINATION WITH ISOTOPE
	\*-------------------*/
		// QueryString getter
	function getUrlParameter(name) {
	    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	    var results = regex.exec(location.search);
	    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	};

	/**** Begin Isotope ****/
	// Filtering example: http://codepen.io/Igorxp5/pen/ojJLQE

	var $container = $('#js-isotope__container'),
	    $select = $('.js-filters'),
	    filters = {};
	var itemSelector = '.js-item-selector',
	    filterPrefix = '.js-filter--';

	var categories = [];
	if($select && $select.length > 0 ){
		$.each($select,function(i,select){
			categories.push($(select).data('filter-group'));
		});
	}
	// Filters must exist in the array for query string pram to work
	var filterArray = [];
	if($select && $select.length > 0 ){
		$.each($select,function(i,select){
			var options = $(select).find('option');
			$.each(options,function(i,option){
				filterArray.push($(option).data("filterValue"));
			});
		});
	}

	// Assign items per page - currently only using the default
	var responsiveIsotope = [
		[480, 4],
		[720, 6]
	];

	// Vars for Pagination 
	var itemsPerPageDefault = 6;
	var itemsPerPage = defineItemsPerPage();
	var currentNumberPages = 1;
	var currentPage = 1;
	var currentFilter = '*';
	var filterAtribute = 'data-filter';
	var pageAtribute = 'data-page';
	var dateAttribute = 'data-date';
	var pagerClass = 'c-pager';
	// Isotope Load more button
	var initShow = 3; //number of items loaded on init & onclick load more button
	var counter = initShow; //counter for load more button

	// Functions for Isotope
	function sortIsotope(containerId) {

		

	  var toSort = $('#'+containerId).children();

	  toSort.sort(function(a, b) {
	  	if($container.length === 0) return;
	    var date1 = $(a).attr('data-date');
	    date1 = date1.split('/');
	    date1 = new Date(date1[2], date1[0]-1, date1[1]);
	    var date2 = $(b).attr('data-date');
	    date2 = date2.split('/');
	    date2 = new Date(date2[2], date2[0]-1, date2[1]);

	    return date1 < date2 ? 1 : -1;
	  });

	  var parent = $('#'+containerId);
	  parent.empty();

	  for(var i = 0, l = toSort.length; i < l; i++) {
	      parent.append(toSort[i]);
	  }
	}

	function changeFilter(selector) {
		if($container.length > 0){
	    $container.isotope({
				filter: selector,
			});
	  }
	}
	
	function queryStringFilter(){
		if(window.location.search != ""){
			var filter = getUrlParameter('filter');
			var group = getUrlParameter('group');
			if (filter.length > 0 && group.length > 0) {
				if(categories && categories.length > 0){
					var groupIndex = $.inArray(group,categories);
					if((groupIndex > -1)){
						var newFilter = filterPrefix+filter;
						if($.inArray(newFilter,filterArray) > -1){
							var selectedValue = $('select option[data-filter-value="'+newFilter+'"]');
							if(selectedValue && selectedValue.length > 0){
								$('select[data-filter-group="'+categories[groupIndex]+'"').val(selectedValue.val());
								filters[categories[groupIndex]] = newFilter;
								currentFilter = newFilter;
								$select.trigger('change');
							}
						}
					}
				}
			}
		}
	}

	function goToPage(n) {
		currentPage = n;

		var selector = itemSelector;
	  //selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
		selector += ( currentFilter != '*' && currentFilter != '' ) ? (currentFilter.replace("*", "")) : '';
	  // selector += '['+dateAttribute+'="'+sortDescending+'"]';
	  selector += '['+pageAtribute+'="'+currentPage+'"]';

	  if(currentPage===1){
	    $('.c-pager__number:first-of-type').addClass('is-active');
	  }
		changeFilter(selector);
	}

	function defineItemsPerPage() {
		var pages = itemsPerPageDefault;

		for( var i = 0; i < responsiveIsotope.length; i++ ) {
			if( $(window).width() <= responsiveIsotope[i][0] ) {
				pages = responsiveIsotope[i][1];
				break;
			}
		}

		return pages;
	}

	function scrollToPage(){
	  $('html,body').animate({
	     scrollTop: $(".js-scroll-to").offset().top
	  });
	}

	function setPagination() {

		var SettingsPagesOnItems = function(){

			var itemsLength = $container.children(itemSelector).length;
			
			var pages = Math.ceil(itemsLength / itemsPerPage);
			var item = 1;
			var page = 1;
			// This selector is based on the data-filter attr
	    var selector = itemSelector;
	    // This selector is based on the data-filter attr
				//selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
	      selector += ( currentFilter != '*' && currentFilter != '') ? (currentFilter.replace("*", "")) : '';
			
	    var items = $container.children(selector);


	    if(items.length > 0){
	      $('.js-no-results').hide();
	      $('.c-pager').show();
	      items.each(function(){
	        if( item > itemsPerPage ) {
	          page++;
	          item = 1;
	        }
	        $(this).attr(pageAtribute, page);
	        item++;
	      });
	    }
	    else{
	      // No results
	      $('.js-no-results').show();
	      $('.c-pager').hide();
	    }

			currentNumberPages = page;

		}();

		var CreatePagers = function() {

			var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);

			$isotopePager.html('');
			
			for( var i = 0; i < currentNumberPages; i++ ) {
				var $pager = $('<a href="javascript:void(0);" class="c-pager__number" '+pageAtribute+'="'+(i+1)+'"></a>');
					$pager.html(i+1);
					
					$pager.click(function(){
						var page = $(this).eq(0).attr(pageAtribute);
	          scrollToPage();
	          $('.c-pager__number').removeClass('is-active');
	          $(this).addClass('is-active');
						goToPage(page);
					});

				$pager.appendTo($isotopePager);
			}

			$('.js-isotope__grid').after($isotopePager);

		}();
	}

	function loadMore(toShow, iso) {
	  $container.find(".is-hidden").removeClass("is-hidden");

	  if(iso.$element.length > 0){
	    
	    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
	      return item.element;
	    });

	    $(hiddenElems).addClass('is-hidden');
	    $container.isotope('layout');

	    //when no more to load, hide show more button
	    if (hiddenElems.length == 0) {
	      jQuery("#js-article__load-more").hide();
	    } else {
	      jQuery("#js-article__load-more").show();
	    };

	  }
	}
	// Init Isotope when container exists
	if($container.length > 0){
	  // Init Lazy Load
	  $(".js-article__image").lazyload({
	    effect : "fadeIn"
	  });

	  // Sort Node List before isotope init
	  sortIsotope('js-isotope__container');

	  // Get Querystring Pram if it exists and set as the current filter
	  queryStringFilter();

	  // Init Desktop - Sort, Open Filter, Set up Pagination, go to page 1
	  if ($(window).width() >= 748) {
	    setPagination();
	    goToPage(1);
	  }

	  // Init Mobile - Setup load more and sticky filter
	  if ($(window).width() < 748) {
	    closeAccordion();
	    changeFilter(currentFilter);
	    var iso = $container.data('isotope'); // get Isotope instance
	    // Set Inital items to show, hide the rest
	    loadMore(initShow, iso); 
	    // append load more button
	    $container.after('<button id="js-article__load-more" class="c-btn c-btn--primary btn-fifth-third"> Load More</button>');
	    // when load more button clicked, show more
	    $("#js-article__load-more").click(function() {
	      if ($('#filters').data('clicked')) {
	        //when filter button clicked, set initial value for counter
	        counter = initShow;
	        $('#filters').data('clicked', false);
	      } else {
	        counter = counter;
	      };

	      counter = counter + initShow;

	      loadMore(counter, iso);
	    });
	    // Fix mobile filter to top when scrolled to
	    $(window).scroll(function(){
	      var filer = $(".c-filter");
	      var scroll = $(this).scrollTop();
	      if (scroll > 340 ){
	        filer.addClass("u-fix--to-top");
	      } else {
	        filer.removeClass("u-fix--to-top");
	      }
	    });
	  }
	  // Bind filter on select change for mulitple filters
	  $select.change(function() {
	      var $this = $(this);
	      var $optionSet = $this;
	      var group = $optionSet.attr('data-filter-group');
	      filters[group] = $this.find('option:selected').attr('data-filter-value');

	      var isoFilters = [];
	      for (var prop in filters) {
	          isoFilters.push(filters[prop])
	      }
	      var selector = isoFilters.join('');

	      var selectorNew = selector;
	      currentFilter = selectorNew;
	      
	      if ($(window).width() < 748) {
	          closeAccordion();
	          scrollToPage();
	          changeFilter(currentFilter);
	          loadMore(initShow,iso);
	      }

	      if ($(window).width() >= 748) {
	          setPagination();         
	          scrollToPage();
	          goToPage(1);
	      }

	      return false;
	  });
	}
	/**** End Isotope ****/



	/*-------------------*\
			MODAL ANIMATION
	\*-------------------*/

	modalEvents();
	function modalEvents() {

		function addClassToBody() {
			$('body').addClass('c-modal--opened');
		}

		function removeHiddenClass() {
			$('.c-modal').removeClass('is-hidden');
			$('.c-modal__signup').removeClass('is-hidden');
		}

		function addClassSignUp() {
			$('.c-modal').addClass('is-visible');
		}

		function removeActiveClass() {
			$('.c-modal').removeClass('is-visible');
		}


		function removeBodyClass() {
			$('body').removeClass('c-modal--opened');
		}

		function showSignUpModal() {
			$('.js-signup-open').on('click', function() {
				addClassToBody();
				removeHiddenClass();
				addClassSignUp();
			});
		}
		showSignUpModal();

		// close modal
		function closeModal() {
			$('.js-close-button').on('click', function() {
				removeActiveClass();
				removeBodyClass();

			});
		}

		closeModal();

	}


	/*-------------------*\
			EXTERNAL LINKS
	\*-------------------*/
	function externalLinks() {
	  $('.c-icon__footer--social').addClass('ext_link');
  	$('.ext_link').on('click', function(e) {
  		if ($('.ext_link').hasClass('#url_link')) {
  			return
  		} else {
  			e.preventDefault();
  			$('body').addClass('c-modal--opened');
  			$('.c-modal').removeClass('is-hidden');
  			$('.c-modal').addClass('is-visible');
  			$('.c-modal__speedbump').removeClass('is-hidden');
  			$('.c-modal__speedbump').addClass('is-visible');
  			$('.c-modal__signup').addClass('is-hidden');
  			$('.speedbump-modal-continue-button').attr('href',e.currentTarget.href);
  		}
  	});
	}
	externalLinks();

	/*-------------------*\
			SCROLL TO TOP
	\*-------------------*/
	function returnToTop() {

		// browser window scroll (in pixels) after which the "back to top" link is shown
		var offset = 1200;

		// browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		var	offset_opacity = 1200;

		//duration of the top scrolling animation (in ms)
		var	scroll_top_duration = 700;

		//grab the "back to top" link
		var	$back_to_top = $('.js-scroll-top');



		//hide or show the "back to top" link
		$(window).scroll(function(){
			( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
			if( $(this).scrollTop() > offset_opacity ) {
				$back_to_top.addClass('fade-out');
			}
		});

		//smooth scroll to top
		$back_to_top.on('click', function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0 ,
			 	}, scroll_top_duration
			);
		});
	}

	returnToTop();

	/*-------------------*\
			PHOTO GALLERY
	\*-------------------*/
	function photoGallerySlider() {

		$('.c-gallery__nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  cssEase: 'ease-in-out',
		  asNavFor: '.c-gallery__main',
		  centerMode: true,
		  focusOnSelect: true,
		  centerPadding: '75px',
		  infinite: true,
		  variableWidth: true,
		  lazyLoad: 'ondemand',

		  responsive : [
		  	{
			  	breakpoint: 1200,
			  	settings: {
			  	  arrows: false
			  	}
			  },
			  {

			  	breakpoint: 1025,
			  	settings: {
			  	  slidesToShow: 3,
			  	  slidesToScroll: 3,
			  	  infinite: true,
			  	  arrows: false
			  	}
			  },

			  {
			    breakpoint: 600,
			    settings: {
			      slidesToShow: 3,
			      slidesToScroll: 1,
			      arrows: false
			    }
			  },

			  {
			    breakpoint: 320,
			    settings: {
			      slidesToShow: 3,
			      slidesToScroll: 1,
			      arrows: false
			    }
			  }
		  ]
		});

		$('.c-gallery__main').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.c-gallery__nav'
		});


	}
	photoGallerySlider();

	/*-------------------*\
			Events Filter
	\*-------------------*/

	function eventFilter() {
		var $event = $('.js-event');

		$('#event-filter').on('change', function() {
			$event.hide();
	    $('#' + $(this).val()).show();
	    console.log($(this).val());
		});
	}
	eventFilter();


	/*-------------------*\
			Alert Close
	\*-------------------*/
	function alertClose() {
		if($('.js-alert-close').length > 0){
			$('.js-alert-close').on('click', function(event) {
				event.preventDefault();
				$('.js-alert').addClass('is-hidden');
			});
		}
	}

	alertClose();

	// end js

});
