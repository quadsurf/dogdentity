dogdentityApp.controller('submitController', ['$scope', 'uploadService', function($scope, uploadService){

  $scope.submission = {};
  $scope.Submit = function(){
    var uploadUrl = '/uploads';
    uploadService.post(uploadUrl, $scope.submission);
  }

}]);
