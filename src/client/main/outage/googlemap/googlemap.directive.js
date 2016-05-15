(function() {
	'use strict';
	angular
	.module('main.outage.googlemap')
	.directive('ucGoogleMap', ucGoogleMap);

	function ucGoogleMap() {
		return {
			restrict: 'E',
			scope: true,
			transclude: false,
			templateUrl: 'main/outage/googlemap/googlemap.directive.html',
			controller: 'googlemapController',
			controllerAs: 'vm',
			bindToController: {
				zoom: '=',
				lat: '=',
				lon: '='
			},
			link: link
		};
	}

	function link(scope, element, attrs)
	{
		// key AIzaSyDjqdHgOLTF0qGxymEC5iFpx9SlnhAfgMQ
		// $rootScope.map = {center: {latitude: 51, longitude: 4.40}, zoom: 14};
		// console.log("google map's attrs:", attrs);
		// console.log("scope:", scope);
		var latlng = new google.maps.LatLng(39.5, -98.35)
		new google.maps.Map(document.getElementById('googleMapCanvas'), {
			zoom: scope.vm.zoom,
			center: latlng
		});

		// var country = "United States";
		// var geocoder = new google.maps.Geocoder();
		//    geocoder.geocode( { 'address': country }, function(results, status) {
		//        if (status == google.maps.GeocoderStatus.OK) {
		//            map.setCenter(results[0].geometry.location);
		//        } else {
		//            alert("Could not find location: " + location);
		//        }
		//    });
}

})();
