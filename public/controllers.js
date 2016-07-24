

dogdentityApp.controller('submitController', ['$scope', '$http', '$location', '$log', 'formService', 'dragDropService', function ($scope, $http, $location, $log, formService, dragDropService) {


  // setInterval(function(){
  //   $scope.img_buf = document.getElementById('image_buf').value
  //   // dragDropService.image_buf = $scope.image_buf
  // },2000);


  $scope.image_buf = formService.image_buf;
  $scope.$watch('image_buf', function(){
    formService.image_buf = $scope.image_buf;
  });


  $scope.image_url = formService.image_url;
  $scope.$watch('image_url', function(){
    formService.image_url = $scope.image_url;
  });


  $scope.mixed = formService.mixed;
  $scope.$watch('mixed', function(){
    formService.mixed = $scope.mixed;
  });


  $scope.n_train_images = formService.n_train_images;
  $scope.$watch('n_train_images', function(){
    formService.n_train_images = $scope.n_train_images;
  });


  $scope.n_epochs = formService.n_epochs;
  $scope.$watch('n_epochs', function(){
    formService.n_epochs = $scope.n_epochs;
  });


  $scope.augment = formService.augment;
  $scope.$watch('augment', function(){
    formService.augment = $scope.augment;
  });


  $scope.n_preds = formService.n_preds;
  $scope.$watch('n_preds', function(){
    formService.n_preds = $scope.n_preds;
  });


  $scope.fileViewer = dragDropService.GetFile();

  $scope.submit = function (){
    console.log('img buf val @ time of submission: ', formService.image_buf);
    $http({
      method: 'POST',
      url: 'http://54.205.134.57:5000/v0.0.1/predict',
      params: {
        image_buf: formService.image_buf,
        image_url: $scope.image_url,
        mixed: $scope.mixed,
        n_train_images: $scope.n_train_images,
        n_epochs: $scope.n_epochs,
        augment: $scope.augment,
        n_preds: $scope.n_preds
      }
    }).then(function(response){
      formService.dogResult = response.data;
      $log.info('formServiceDogResult: ', formService.dogResult);
    }).then(function(){
      $scope.dogResult = formService.dogResult;
      $log.info('controllerDogResult: ', $scope.dogResult);
    }).then(function(){
      $location.path('/result');
    });

  };

  // $scope.change = function (element) {
  //     $scope.$apply(function() {
  //         $scope.image_buf = document.getElementById('image_buf').length ? document.getElementById('image_buf')[0].name : '';
  //     });
  // };
  // change function: stackoverflow.com/questions/25409734/i-cant-detect-programmatically-value-change-in-angularjs

}]);


dogdentityApp.controller('resultController', ['$scope', 'formService', function($scope, formService){
  $scope.image_buf = formService.image_buf;
  $scope.dogResult = formService.dogResult;

  console.log('After formService Update: ',$scope.image_buf);

  $scope.image_url = formService.image_url;
  $scope.mixed = formService.mixed;
  $scope.n_train_images = formService.n_train_images;
  $scope.n_epochs = formService.n_epochs;
  $scope.augment = formService.augment;
  $scope.n_preds = formService.n_preds;

  $scope.formattedperc = function(numb){
    return numb * 100;
  }
  // $scope.newNumb = formattedperc($scope.dogResult.probs.prob1.prob);

  

}]);
