nodewithionic.controller('diptestCtrl', function($scope, $http, ajaxService, $ionicModal, $cordovaFile, $cordovaFileTransfer, $cordovaCamera) {
    console.log('diptestCtrl is working');
      var me = this;
        me.current_image = 'img/koro-sensei.png';
        me.image_description = '';
        me.detection_type = 'LABEL_DETECTION';

        me.detection_types = {
          LABEL_DETECTION: 'label',
          TEXT_DETECTION: 'text',
          LOGO_DETECTION: 'logo',
          LANDMARK_DETECTION: 'landmark'
        };

        var api_key = 'AIzaSyAm58dQb36Pkd6dNMAkt56OOnss4dadlqM';

        $scope.takePicture = function(){

            var options = {
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                targetWidth: 500,
                targetHeight: 500,
                correctOrientation: true,
                cameraDirection: 0,
                encodingType: Camera.EncodingType.JPEG
            };

            $cordovaCamera.getPicture(options).then(function(imagedata){

                me.current_image = "data:image/jpeg;base64," + imagedata;
                me.image_description = '';
                me.locale = '';

                var vision_api_json = {
                  "requests":[
                    {
                      "image":{
                        "content": imagedata
                      },
                      "features":[
                        {
                          "type": me.detection_type,
                          "maxResults": 1
                        }
                      ]
                    }
                  ]
                };

                var file_contents = JSON.stringify(vision_api_json);

                $cordovaFile.writeFile(
                    cordova.file.applicationStorageDirectory,
                    'file.json',
                    file_contents,
                    true
                ).then(function(result){

                    var headers = {
                        'Content-Type': 'application/json'
                    };

                    options.headers = headers;

                    var server = 'https://vision.googleapis.com/v1/images:annotate?key=' + api_key;
                    var filePath = cordova.file.applicationStorageDirectory + 'file.json';

                    $cordovaFileTransfer.upload(server, filePath, options, true)
                        .then(function(result){

                            var res = JSON.parse(result.response);
                            var key = me.detection_types[me.detection_type] + 'Annotations';

                            me.image_description = res.responses[0][key][0].description;
                      }, function(err){
                        alert('An error occurred while uploading the file');
                      });
                }, function(err){
                    alert('An error occurred while trying to write the file');
                });

            }, function(err){
              alert('An error occurred getting the picture from the camera');
            });
        }
    });