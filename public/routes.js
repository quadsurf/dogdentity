//ROUTES
dogdentityApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'partials/submitBU.htm',
      controller: 'submitController'
    })
    .when('/result', {
      templateUrl: 'partials/result.htm',
      controller: 'resultController'
    })
    .otherwise({ redirectTo: '/'});

  $locationProvider.html5Mode({enabled:true,requireBase:false});

  // $httpProvider.defaults.headers.common = {};
  // $httpProvider.defaults.headers.get = {};
  // $httpProvider.defaults.headers.post = {};
  // $httpProvider.defaults.headers.put = {};
  // $httpProvider.defaults.headers.patch = {};

  // delete $httpProvider.defaults.headers.common["X-Requested-With"];

}]);
