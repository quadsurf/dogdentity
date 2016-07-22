

dogdentityApp.service('formService', function(){
  // data:image/gif;base64,R0lGODlhCAAIAIAAAP//AP///yH5BAAHAP8ALAAAAAAIAAgAAAIHhI+py+1dAAA7
  this.image_buf = ' ';
  this.image_url = ' ';
  this.mixed = false;
  this.n_train_images = 5000;
  this.n_epochs = 50;
  this.augment = false;
  this.n_preds = 3;
  this.return_image = true;
  this.dogResult = {};
});




dogdentityApp.service('dragDropService', ['formService', function(formService){
  var self = this;
  // valueToUpdate
  this.GetFile = function(){
    FileReaderJS.setupDrop(document.getElementById('dropzone'), {
      readAsDefault: "DataURL",
      on: {
        load: function(e, file) {
          var img = new Image();
          img.onload = function() {
            // var oldnode = document.getElementById('dropzone');
            document.getElementById('dropzone').appendChild(img);
            // oldnode.replaceChild(img,oldnode);
          };
    img.src = e.target.result;
    // img.width = 150;
    img.height = 150;
    dataImg = e.target.result;
    document.getElementById('image_buf').value = dataImg;
    formService.image_buf = dataImg;

    // return function update() {
    //   return document.getElementById('image_buf').value
    // }

    // $scope.getBuf(dataImg);
    // $scope.image_buf = dataImg;
    // $scope.$apply(function(){
    //         self.image_buf = dataImg;
    //     });
          }
        }
    });
  }


}]);


dogdentityApp.service('dogAPIService', ['$resource', function($resource){

  this.GetDog = function(image_buf,image_url,mixed,n_train_images,n_epochs,augment,n_preds,return_image){
    // old IP: 54.237.232.115
    var dogAPI = $resource('http://54.205.134.57:5000/v0.0.1/predict',
    { get: { method: 'POST' } });
    // { callback: 'JSON_CALLBACK' },

    // var image_buf2 = document.getElementById('image_buf').value;

    // console.log(image_buf2);

    return dogAPI.get({
      image_buf: image_buf,
      image_url: image_url,
      mixed: mixed,
      n_train_images: n_train_images,
      n_epochs: n_epochs,
      augment: augment,
      n_preds: n_preds,
      return_image: return_image
    });

  }

}]);


dogdentityApp.service('predictService', ['$scope', '$http', '$log', function($scope, $http, $log){

  this.GetDog = function(image_buf,image_url,mixed,n_train_images,n_epochs,augment,n_preds,return_image){

    $http({
      method: 'POST',
      url: 'http://54.205.134.57:5000/v0.0.1/predict',
      param: {
        image_buf: image_buf,
        image_url: image_url,
        mixed: mixed,
        n_train_images: n_train_images,
        n_epochs: n_epochs,
        augment: augment,
        n_preds: n_preds,
        return_image: return_image
      }
    }).then(function(response){
      // $scope.dogResult = response.data;
      $scope.response = response.data;
      $log.info(response);
    });
    return $scope.response;
  }

}]);
