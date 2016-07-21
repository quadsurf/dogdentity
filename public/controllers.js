

dogdentityApp.controller('submitController', ['$scope', '$location', 'formService', 'dragDropService', function ($scope, $location, formService, dragDropService) {


  setInterval(function(){
    $scope.img_buf = document.getElementById('image_buf').value
    // dragDropService.image_buf = $scope.image_buf
  },2000);


  // $scope.logOutStuff = function() {
  //   console.log( $scope.img_buf );
  // };

  // $scope.image_buf = dragDropService.image_buf;
  // $scope.$watch('image_buf', function(){
  //   dragDropService.image_buf = $scope.image_buf; });


  $scope.image_url = formService.image_url;
  $scope.$watch('image_url', function(){
    formService.image_url = $scope.image_url; });


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

  // $scope.change = function (element) {
  //     $scope.$apply(function() {
  //         $scope.image_buf = document.getElementById('image_buf').length ? document.getElementById('image_buf')[0].name : '';
  //     });
  // };
  // change function: stackoverflow.com/questions/25409734/i-cant-detect-programmatically-value-change-in-angularjs

}]);


dogdentityApp.controller('resultController', ['$scope', 'formService', 'dragDropService', 'dogAPIService', function($scope, formService, dragDropService, dogAPIService){
  $scope.image_buf = dragDropService.image_buf;
  $scope.image_url = formService.image_url;
  $scope.mixed = formService.mixed;
  $scope.n_train_images = formService.n_train_images;
  $scope.n_epochs = formService.n_epochs;
  $scope.augment = formService.augment;
  $scope.n_preds = formService.n_preds;
  $scope.return_image = formService.return_image;

  $scope.dogResult = dogAPIService.GetDog($scope.image_url,$scope.mixed,$scope.n_train_images,$scope.n_epochs,$scope.augment,$scope.n_preds,$scope.return_image);

}]);
