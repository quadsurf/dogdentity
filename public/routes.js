//ROUTES
dogdentityApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'partials/submit.htm',
      controller: 'submitController'
    })
    .when('/result', {
      templateUrl: 'partials/result.htm',
      controller: 'resultController'
    })
    .otherwise({ redirectTo: '/'});

  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.get = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};

}]);
