$('document').ready(function () {
    const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
    $.get(url, function(response) {
	if (response.status === 'OK') {
	    $('DIV#api_status').addClass('available');
	} else {
	    $('DIV#api_status').removeClass('available');
	}
    });
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
