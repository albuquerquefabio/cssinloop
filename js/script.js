$( function () {

	/* FASTCLICK FOR TOUCH DEVICES */
	FastClick.attach(document.body);

	$('#opn-menu').on('tap click', function () {
		var section = $('#section');
		var bar		= $('.container #bar').each( function () {
							$(this).toggleClass('nav-close nav-open');
						});

		if (section.hasClass('nav-close')) {
			section.toggleClass('nav-close nav-open');
			
			bar;

		} else if (section.hasClass('nav-open')) {
			section.toggleClass('nav-close nav-open');

			bar;

		} else {
			/* do nothing */
		}
	});

});