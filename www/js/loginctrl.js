nodewithionic.controller('loginctrl', function($scope, $state, $http, ajaxService, $rootScope) {
	$scope.loginData = {};
	$scope.signin = function(item) {
	  ajaxService.signinfunction($scope.loginData).then(function(response) {
	    console.log(response);
			$rootScope.username = response.data.username;
			$rootScope.useremail = response.data.email;
	    console.log(response.statusText);
	    if(response.statusText = 'OK') {
	    	console.log("loggedin successfully");
	    	$state.go('app.profile');
	    }
	    else {
	    	alert("Invalid credential");
	    }
	  });  
	}
	$scope.dip = function() {
			$state.go('app.diptest');
	}
	$scope.ar = function() {
			$state.go('app.artest');
	}
})