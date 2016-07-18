//ROUTES
dogdentityApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/submit', {
      templateUrl: 'partials/submit.htm',
      controller: 'submitController'
    })
    .when('/eval/:img_id', {
      templateUrl: 'partials/eval.htm',
      controller: 'evalController'
    })
    .otherwise({ redirectTo: '/'});
}]);
