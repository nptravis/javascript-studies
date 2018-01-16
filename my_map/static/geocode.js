geocoder = new google.maps.Geocoder();

window.getLatLan = function (address, callback){
	var latLan;
	geocoder.geocode({address: address}, function (results, status){
		latLan = results[0].gemoetry.location;
		callback(latLan);
	});
	return latLan;
}