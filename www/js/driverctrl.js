nodewithionic.controller('driversCtrl', function($scope, $http, ajaxService, $state, $rootScope) {
    console.log('Driver controller is working');
    $http.get('http://localhost:3001/adddriver/postdrivers').success(function(res) {
    	console.log(res);
        $scope.baseurl = "http://localhost:3001/uploads/";
        $scope.drivers = res;   
    });

    //for getting location
    $scope.result2 = '';
    $scope.options2 = {
      country: 'in',
      types: '(cities)'
    };    
    $scope.details2 = '';
    $scope.submit = function() {
    alert($scope.result2);
    }

    //map location
    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(-25.5349952, 125.8554386),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    $scope.cities = [];
   
    var infoWindow = new google.maps.InfoWindow();


            $scope.cities = [
            {
            "latitude": -31.711802,
            "longitude": 115.791962,
            "city": "Perth",
            "desc": ""
            },
            {
            "latitude": -34.734831,
            "longitude": 138.621551,
            "city": "Adelaide",
            "desc": ""
            },
            {
            "latitude": -33.644338,
            "longitude":  151.409637,
            "city": "Sydney",
            "desc": ""
            }
            ]
            $scope.cities.forEach(function(city) {
                console.log(city);
            var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(city.latitude, city.longitude),
            title: city.city

            });
            marker.content = '<div class="infoWindowContent">' + city.desc + '</div>';

            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
        
            $scope.markers.push(marker);
            });
            
        //book drivers
        $scope.driverdetail = function(driverdata) {
            console.log(driverdata);
            $rootScope.bookdriverdata = driverdata;
            $state.go('app.bookdriver');
            // $state.go('app.bookdriver', {result: driverdata});
        }

});