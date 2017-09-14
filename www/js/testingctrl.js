nodewithionic
.controller('testingctrl', function($scope, $ionicModal, $timeout, $http, ajaxService) {
  //////////////////////////
  //post data to database //
  //////////////////////////
  $scope.dmcnt = {};
  $scope.submt = function(item) {
  ajaxService.postfunction($scope.dmcnt).then(function(response) {
    console.log(response);
  });  
  }

  ///////////////////////////
  ///Get data to database////
  ///////////////////////////
  ajaxService.getfunction().then(function(response) {
    console.log(response);
  })


  ///////////////////////////
  ///login function//////////
  ///////////////////////////
  $scope.login = {}
  $scope.loginchck = function(items) {
    console.log(items)
    ajaxService.loginfunction($scope.login).then(function(response) {
      console.log(response);
      $scope.login = {
        name: '',
        password:''
      }
    })
  }
});