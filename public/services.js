

dogdentityApp.service('formService', function(){
  this.n_epochs;
  // this.img_buf;
});




dogdentityApp.service('dragDropService', ['$rootScope', function($rootScope){
  this.img_buf;
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
    img.width = 150;
    img.height = 150;
    dataImg = e.target.result;
    console.log(dataImg);
    document.getElementById('image_buf').value = dataImg;
    // $rootScope.img_buf = dataImg;
    $rootScope.$apply(function(){
            this.image_buf = dataImg;
        });
          }
        }
    });
  }


}]);


dogdentityApp.service('dogService', ['$resource', function($resource){

  this.GetDog = function(image_buf,image_url,mixed,n_train_images,n_epochs,augment,n_preds,return_image){

    var dogAPI = $resource('http://54.237.232.115:5000/v0.0.1/predict',
    { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' } });

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
