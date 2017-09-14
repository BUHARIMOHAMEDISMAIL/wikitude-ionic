nodewithionic.controller('bookdriverCtrl', function($scope, $stateParams, $rootScope, $http) {
    console.log('book driver controller');
    $scope.baseurl = "http://localhost:3001/uploads/";
    console.log($rootScope.bookdriverdata);
    //$scope.results = $stateParams.result;
    //console.log($scope.results);

    //book driver
    $scope.date = new Date();
    $scope.bookdriver = function(bookingdata , start, desti) {
        console.log(start.gm_accessors_.place.Gc.formattedPrediction);
        console.log(bookingdata);
        var data = {
        name: bookingdata.firstname,
        email: bookingdata.email,
        phonenumber: bookingdata.phonenumber,
        stand:bookingdata.driverstand,
        addresss: bookingdata.address,
        startingpoint: start.gm_accessors_.place.Gc.formattedPrediction,
        destinationpoint: desti.gm_accessors_.place.Gc.formattedPrediction,
        date: $scope.date,
        username: $rootScope.username,
        useremail: $rootScope.useremail
        }
        console.log(data);
        $http.post('http://localhost:3001/driverbooking/bookeddriver', data).success(function() {
            console.log('success');
        }).error(function(err) {
            console.log(err);
        })
    }
});