/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);

			const ff = new Freezeframe();
			setTimeout(function() {
				$(".ff-container").addClass("ff-ready");
				$(".ff-container").addClass("ff-inactive");
				$(".ff-container").removeClass("ff-loading-icon");
				$(".ff-container").mouseenter(function(e) {
					$(e.delegateTarget).removeClass("ff-inactive");
					$(e.delegateTarget).addClass("ff-active");
				})
				$(".ff-container").mouseleave(function (e) {
					$(e.delegateTarget).addClass("ff-inactive");
					$(e.delegateTarget).removeClass("ff-active");
				})
			}, 100);

			$('#appear-mark').appear(function() {
				var time = 100;
				$('.skill-icon').each(function(idx, ele) {
					setTimeout(function() {
						$(ele).animate({ opacity: 1 }, 700);
					}, time)
					time += 50;
				})
			})
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);