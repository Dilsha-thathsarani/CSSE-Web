//get start and end point of the route from the database and draw the route on the map according to the start and end point 

function getRoute() {
    var start = new google.maps.LatLng(37.3352, -121.8811);
    var end = new google.maps.LatLng(37.3352, -121.8811);
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

