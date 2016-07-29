


dogdentityApp.controller('navController', ['$scope', 'formService', function ($scope, formService){
  $scope.ResetVals = function(){
    formService.image_url = '';
    formService.image_buf = '';
    console.log('vals reset without page refresh');
  }
}]);


dogdentityApp.controller('submitController', ['$scope', '$http', '$location', '$log', 'formService', 'redirectorService', function ($scope, $http, $location, $log, formService, redirectorService){

// http://54.205.134.57:5000/
  (function(){
    $http({
      method: 'GET',
      url: 'https://crossorigin.me/http://54.236.252.88:5000/v0.0.1/get_thumbnails?n_images=9'
    })
    .then(function(response){
      $scope.samples = response.data;
      console.log($scope.samples);
    });
  })();

  $scope.passResponseToService = function (response) {
    formService.dogResult = response;
    console.log(formService.dogResult);
    $scope.$apply(function(){
      setTimeout(function(){
        $location.path("/result");
      },2500);
    });
  };


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


  // $scope.fileViewer = dragDropService.GetFile();


  $scope.submit = function (sample){
    $log.info('img buf val @ time of submission: ', formService.image_buf);
    $log.info('is sample being passed to this function on thumbnail click? ', sample);
    var headers = {
				'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods' : 'POST, GET, PUT',//OPTIONS
				'Content-Type': 'text/plain',//application/json
				'Accept': 'application/json'
			  };
    // http://54.205.134.57:5000/static/full_validation/yorkshire_terrier/n02094433_3296.jpg
    // old 54.236.252.88
    // new 54.205.134.57
    $http({
      method: 'POST',
      url: 'http://54.205.134.57:5000/v0.0.1/predict',
      // headers: headers,
      params: {
        image_buf: formService.image_buf,
        image_url: sample || $scope.image_url,
        mixed: $scope.mixed,
        n_train_images: $scope.n_train_images,
        n_epochs: $scope.n_epochs,
        augment: $scope.augment,
        n_preds: $scope.n_preds
      }
    }).then(function(response){
      formService.dogResult = response.data;
    }).then(function(){
      $scope.dogResult = formService.dogResult;
    }).then(function(){
      $location.path('/result');
    });

  };

  // $scope.getSample = function(sample){
  //   $log.info('is this click working? ', sample);
  //   $http({
  //     method: 'POST',
  //     url: 'http://54.205.134.57:5000/v0.0.1/predict',
  //     headers: {
  //       'Content-Type': undefined
  //     }
  //     params: {
  //       image_buf: formService.image_buf,
  //       image_url: sample,
  //       mixed: $scope.mixed,
  //       n_train_images: $scope.n_train_images,
  //       n_epochs: $scope.n_epochs,
  //       augment: $scope.augment,
  //       n_preds: $scope.n_preds
  //     }
  //   }).then(function(response){
  //     formService.dogResult = response.data;
  //   }).then(function(){
  //     $scope.dogResult = formService.dogResult;
  //   }).then(function(){
  //     $location.path('/result');
  //   });
  //
  // };

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
