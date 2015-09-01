$(document).on("ready page:load", function() {

	 // create a LatLng object containing the coordinate for the center of the map
	var latlng = new google.maps.LatLng(45.421530, -75.697193);

	// prepare the map properties
	var options = {
		zoom: 15,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		navigationControl: true,
		mapTypeControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true
	};

	// initialize the map object
	var map = new google.maps.Map(document.getElementById('google_map'), options);

	// add Marker
	var marker1 = new google.maps.Marker({
		position: latlng, map: map
	});

	// add listener for a click on the pin
	google.maps.event.addListener(marker1, 'click', function() {
		infowindow.open(map, marker1);
	});

	// add information window
	var infowindow = new google.maps.InfoWindow({
		content:  '<div class="info"><strong><h1>Atelier Ruderal 5</h1></strong>My company address is:<br> 125 Albert St.</div>'
	});  

	google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
    });

});