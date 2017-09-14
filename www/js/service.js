nodewithionic.factory('ajaxService', function($http) {
	return {
		postfunction: function(datas) {
			  return $http.post('http://localhost:3001/testapi/apicontroller', datas).success(function(result) {
                    return result.data;
              });
		},
		signupfunction: function(datas) {
			  return $http.post('http://localhost:3001/signupapi/signupapicontroller', datas).success(function(result) {
                    return result.data;
              });
		},
		getfunction: function() {
			return $http.get('http://localhost:3001/testapi/apicontroller').success(function(result) {
				return result.data;
			})
		},
		//for testing in testing controller
		loginfunction: function(datas) {
			return $http.post('http://localhost:3001/loginapi/logincontroller', datas).success(function(result) {
				return result.data;
			})
		},
		//for signup production
		signinfunction: function(datas) {
			return $http.post('http://localhost:3001/signinapi/signinapicontroller', datas).success(function(result) {
				return result.data;
			})
		}
	}
});
nodewithionic.directive('ngAutocomplete', function($parse) {
    return {

      scope: {
        details: '=',
        ngAutocomplete: '=',
        options: '='
      },

      link: function(scope, element, attrs, model) {

        //options for autocomplete
        var opts

        //convert options provided to opts
        var initOpts = function() {
          opts = {}
          if (scope.options) {
            if (scope.options.types) {
              opts.types = []
              opts.types.push(scope.options.types)
            }
            if (scope.options.bounds) {
              opts.bounds = scope.options.bounds
            }
            if (scope.options.country) {
              opts.componentRestrictions = {
                country: scope.options.country
              }
            }
          }
        }
        initOpts()

        //create new autocomplete
        //reinitializes on every change of the options provided
        var newAutocomplete = function() {
          scope.gPlace = new google.maps.places.Autocomplete(element[0], opts);
          google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
            scope.$apply(function() {
//              if (scope.details) {
                scope.details = scope.gPlace.getPlace();
//              }
              scope.ngAutocomplete = element.val();
            });
          })
        }
        newAutocomplete()

        //watch options provided to directive
        scope.watchOptions = function () {
          return scope.options
        };
        scope.$watch(scope.watchOptions, function () {
          initOpts()
          newAutocomplete()
          element[0].value = '';
          scope.ngAutocomplete = element.val();
        }, true);
      }
    };
  });

// http://localhost:3001/testapi/apicontroller
// http://192.168.0.196:3001/testapi/apicontroller

