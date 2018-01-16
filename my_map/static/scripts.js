function getIt(){
$.getJSON(Flask.url_for("articles"), function(data) {

        console.log(data);
    });
console.log("Hiya!");
}

// $("#form").submit(function(event) {
//     user_input = $("#q").val();
//     alert(user_input);
//     event.preventDefault();
//   });
getIt();
function initMap() {

  var myLatLng = {lat: 13.7, lng: 100.54};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 10
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    label: 'Hello World!'
	});

  var marker = new google.maps.Marker({
    position: {lat: 13.5, lng: 100.6},
    map: map,
    label: 'Hello Dogs!'
  });

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Home</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Home</b>, also referred to as <b>Where the Heart is</b>, is a townhouse ' +
    'in Minburi, Bangkok.'+
    '<p>Here is a link about <a href="https://en.wikipedia.org/wiki/Monitor_lizard">monitor lizards.</a></p>'+
    '</div>'+
    '</div>';

	var infowindow = new google.maps.InfoWindow({
  	content: contentString
		});

	marker.addListener('click', function() {
  	infowindow.open(map, marker);
	});

}