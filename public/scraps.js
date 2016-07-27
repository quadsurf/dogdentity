
  // setInterval(function(){
  //   $scope.img_buf = document.getElementById('image_buf').value
  //   // dragDropService.image_buf = $scope.image_buf
  // },2000);

// range: {
// 'min': 0,
// '25%': 5,
// '50%': 30,
// '75%': 150,
// 'max': 0
// },


{
  rand_samples : [
    { image_url: 'http://www', post_url: 'http://54.205.134.57:5000/v0.0.1/predict?augment=true&image_url=http://www&mixed=true&n_epochs=50&n_preds=3&n_train_images=5000&return_image=true' },
    { image_url: 'http://www', post_url: 'http://54.205.134.57:5000/v0.0.1/predict?augment=true&image_url=http://www&mixed=true&n_epochs=50&n_preds=3&n_train_images=5000&return_image=true' },
    { image_url: 'http://www', post_url: 'http://54.205.134.57:5000/v0.0.1/predict?augment=true&image_url=http://www&mixed=true&n_epochs=50&n_preds=3&n_train_images=5000&return_image=true' },
    { image_url: 'http://www', post_url: 'http://54.205.134.57:5000/v0.0.1/predict?augment=true&image_url=http://www&mixed=true&n_epochs=50&n_preds=3&n_train_images=5000&return_image=true' }
  ]
}



{
thumbs: [
    'http://54.205.134.57:5000/static/full_validation/rottweiler/n02106550_6926.jpg',
    'http://54.205.134.57:5000/static/full_validation/doberman/n02107142_15436.jpg',
    'http://54.205.134.57:5000/static/full_validation/beagle/n02088364_13682.jpg',
    'http://54.205.134.57:5000/static/full_validation/border_collie/n02106166_3473.jpg',
    'http://54.205.134.57:5000/static/full_validation/giant_schnauzer/n02097130_5750.jpg',
    'http://54.205.134.57:5000/static/full_validation/basset_hound/n02088238_9994.jpg'
  ]
}



this.image_url;
this.mixed;
this.n_train_images;
this.n_epochs;
this.augment;
this.n_preds;
this.return_image;

$scope.getBuf(dataImg);
$scope.getBuf = function(data){
  $scope.image_buf=data;
}


$scope.submitData = function(){
  var stringed = JSON.stringify($scope.view.formData);
  $scope.view.redditData.push(JSON.parse(stringed));
};


lightrain
moderaterain
heavyrain
heavyintensityrain
overcastclouds
clearsky
fewclouds


$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?appid=10a8c006e50645f16bb3675ed81bc3c3',
{
  callback: 'JSON_CALLBACK'
}, {
  get: {
    method: 'JSONP'
  }
});
$scope.weatherResult = $scope.weatherAPI.get({
  q: $scope.city,
  cnt: $scope.days
});


<img class="img-responsive" ng-src="{{
    weather.weather[0].description === 'light rain' ? weatherImg.lightrain
  : (weather.weather[0].description === 'moderate rain' ? weatherImg.moderaterain : weatherImg.clearsky)
 }}" alt="{{ weather.weather[0].main }}" />


//SERVICES
weatherApp.service('cityService', function(){
  this.city = "Austin, TX";
});

$scope.city = cityService.city;

$scope.$watch('city', function(){
  cityService.city = $scope.city;
});

$scope.submit = function (){
  $location.path('/forecast');
}
$scope.city = $cityService.city;


<!-- for {{ city }} -->

<!-- <div class="row">
  <div class="col-md-4 col-md-offset-4">
    <h4>Forecast by City</h4>
    <div class="form-group">
      <input type="text" class="form-control">
    </div>
    <a href="#/forecast" class="btn btn-primary">Get Forecast</a>
  </div>
</div> -->


<!-- <form ng-submit="submit()">
  <div class="form-group">
    <input type="text" ng-model="city" class="form-control">
  </div>
    <input type="submit" class="btn btn-primary" value="Get Forecast">
</form> -->


<!-- <script src="routes.js"></script>
<script src="services.js"></script>
<script src="controllers.js"></script>
<script src="directives.js"></script> -->
