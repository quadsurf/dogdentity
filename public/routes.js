//ROUTES
dogdentityApp.config(['$routeProvider', function($routeProvider){
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
}]);
