function initMap() {
	var mapDiv = document.getElementById('map');
	
	var map = new google.maps.Map(mapDiv, {
		center: {lat: -24.987629, lng: -53.449123},
		zoom: 18
          
	});

	function putmarker(corner, Lat, Lng ){
		var LatLong = { lat: Lat ,lng: Lng}
		var marker = new google.maps.Marker({
			
			position: LatLong,
			map: map
		});
		var contentString = '<div id="content">'+
	    	'<p><b>esquina:</b></p>' + corner +
	    	'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});

	}
	

	putmarker('TOME DE SOUZA,LUIZ JUSTINO BACKES',-24.987891, -53.449473)
	putmarker('TOME DE SOUZA,LUIZ JUSTINO BACKES',-24.987061, -53.450029)
	putmarker('TOME DE SOUZA,LUIZ JUSTINO BACKES',-24.987810, -53.447953)
	putmarker('TOME DE SOUZA,LUIZ JUSTINO BACKES',-24.987294, -53.448538)
	putmarker('TOME DE SOUZA,LUIZ JUSTINO BACKES',-24.986856, -53.451703)
	putmarker('TOME DE SOUZA,LUIZ JUSTINO BACKES',-24.986852, -53.449777)
// putmarker('TURIM,ANGELO SBARDELA',-24.96757,-53.42081)
// putmarker('TURIM,ITALIA',-24.97178,-53.41852)
// putmarker('VENEZA,ANGELO SBARDELA',-24.96929,-53.42305)
// putmarker('VENEZA,FRANCA',-24.973995,-53.42055)
// putmarker('VENEZA,HOLANDA',-24.97705,-53.41865)
// putmarker('VENEZA,INGLATERRA',-24.976,-53.41922)
// putmarker('VENEZA,ITALIA',-24.97292,-53.4211

	
}