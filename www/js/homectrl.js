nodewithionic.controller('homectrl', function($scope, $http, ajaxService) {
    console.log('home controller is working');
    $http.get('http://localhost:3001/adddriver/postdrivers').success(function(result) {
        console.log(result);
    });
});
