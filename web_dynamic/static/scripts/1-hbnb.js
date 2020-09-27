$('document').ready(function () {
    let amenities = {};
    $('INPUT[type="checkbox"]').change(function () {
	if ($(this).is(':checked')) {
	    amenitites[$(this).attr('data_id')] = $(this).attr('data-name');
	} else {
	    delete amenitites[$(this).attr('data_id')];
	}
	$('.amenitites H4').text(Object.values(amenitites).join(', '));
    });
});
