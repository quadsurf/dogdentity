dogdentityApp.controller('submitController', ['$scope', 'uploadService', function($scope, uploadService){

  $scope.submission = {};
  $scope.Submit = function(){
    var uploadUrl = '/uploads';
    uploadService.post(uploadUrl, $scope.submission);
  }

}]);

// $scope.uploadFile = function(){
//     var file = $scope.myFile;
//     console.log('file is ' );
//     console.dir(file);
//     var uploadUrl = "/fileUpload";
//     fileUpload.uploadFileToUrl(file, uploadUrl);
// };
