$(document).ready(function () {
	$(document).on("scroll", onScroll);

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		}, 500, 'swing', function () {
			window.location.hash = target;
		});
	});

	$('li.filter').on('click', function (e) {
		e.preventDefault();
		var orig = this;

		$('li.filter').removeClass('underline');
		$(this).addClass('underline');

		$('ul.menu-items > li.item').each(function() {
			var the_element = $(this);
			if ( the_element.hasClass($(orig).attr('data-filter')) ) {
				the_element.removeClass('hidden');
			}
			else if ( !the_element.hasClass('hidden') ) {
				the_element.addClass('hidden');
			}
		});
	});
});

function onScroll(event) {
	var offset = $(window)[0].innerHeight*1/2;
	var scrollPosition = $(document).scrollTop() + offset;
	console.log(scrollPosition);
	$('.nav li a').each(function () {
		var currentLink = $(this);
		var refElement = $(currentLink.attr("href"));
		if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
			$('ul.nav li a').removeClass("navactive");
			currentLink.addClass("navactive");
		}
		else{
			currentLink.removeClass("navactive");
		}
	});
};
