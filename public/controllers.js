

dogdentityApp.controller('submitController', ['$scope', '$location', 'formService', 'dragDropService', function ($scope, $location, formService, dragDropService) {

  $scope.img_buf = dragDropService.img_buf;
  $scope.$watch('img_buf', function(){
      dragDropService.img_buf = $scope.img_buf; });


  $scope.img_url = formService.img_url;
  $scope.$watch('img_url', function(){
    formService.img_url = $scope.img_url; });


  $scope.mixed = formService.mixed;
  $scope.$watch('mixed', function(){
    formService.mixed = $scope.mixed; });


  $scope.n_train_images = formService.n_train_images;
  $scope.$watch('n_train_images', function(){
    formService.n_train_images = $scope.n_train_images; });


  $scope.n_epochs = formService.n_epochs;
  $scope.$watch('n_epochs', function(){
    formService.n_epochs = $scope.n_epochs; });


  $scope.augment = formService.augment;
  $scope.$watch('augment', function(){
    formService.augment = $scope.augment; });


  $scope.n_preds = formService.n_preds;
  $scope.$watch('n_preds', function(){
    formService.n_preds = $scope.n_preds; });


  $scope.return_image = formService.return_image;
  $scope.$watch('return_image', function(){
    formService.return_image = $scope.return_image; });


  $scope.fileViewer = dragDropService.GetFile();

  $scope.submit = function (){
      $location.path('/result');
  };

  $scope.change = function (element) {
      $scope.$apply(function() {
          // $scope.img_buf = document.getElementById('img_buf').length ? document.getElementById('img_buf')[0].name : '';
      });
  };
  // stackoverflow.com/questions/25409734/i-cant-detect-programmatically-value-change-in-angularjs

}]);


dogdentityApp.controller('resultController', ['$scope', 'formService', 'dragDropService', 'dogService', function($scope, formService, dragDropService, dogService){
  $scope.img_buf = dragDropService.img_buf;
  $scope.img_url = formService.img_url;
  $scope.mixed = formService.mixed;
  $scope.n_train_images = formService.n_train_images;
  $scope.n_epochs = formService.n_epochs;
  $scope.augment = formService.augment;
  $scope.n_preds = formService.n_preds;
  $scope.return_image = formService.return_image;

  $scope.dogResult = dogService.GetDog($scope.img_buf,$scope.img_url,$scope.mixed,$scope.n_train_images,$scope.n_epochs,$scope.augment,$scope.n_preds,$scope.return_image);

}]);
