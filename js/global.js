$(document).ready(function() {
	$("table").each(function() {
		$(this).find("tr:even").addClass("even");
		$(this).find("tr:odd").addClass("odd");
	});
	$("ul").each(function() {
		$(this).find("> li:even").addClass("even");
		$(this).find("> li:odd").addClass("odd");
	});

	// smooth scroll solution from http://css-tricks.com/snippets/jquery/smooth-scrolling/
	$(function() {
		$('a[href*=#]:not([href=#])').click(function(e) {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					e.preventDefault();
				}
			}
		});
	});

	// stop "index.htm#page" from showing in address bar
	$("a.scroll.top").click(function(e) { e.preventDefault(); });
	// scroll to top functionality
	$(window).scroll(function() {
		$("body").toggleClass("scrolled", ($(this).scrollTop() > 0));
		if ($(this).scrollTop() > 10) {
			$("a.scroll.top").fadeIn();
		} else {
			$("a.scroll.top").fadeOut();
		}
	});

	// parallax // example: http://jsfiddle.net/QN9cH/1/
	$(document).ready(function(){
    $('section[data-parallax-effect="fixed"]').each(function(){
				var $section = $(this);
        $(window).scroll(function() {
						$section.css('background-position-y', $(this).scrollTop() + 'px');
        });
    });
});

	// parallax // @TODO fix for our application - maybe use "nav a" as selector?
	$('a[href*=#]').each(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname && this.hash.replace(/#/,'')) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top;
				$(this).click(function() {
		    	$("#nav li a").removeClass("active");
          $(this).addClass('active');
					$('html, body').animate({ scrollTop: targetOffset }, 1000);
					return false;
				});
			}
		}
	});
});
