var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
 
});

app.controller('BlogController', function($scope) {
    $scope.s1=76;
    $scope.s2=76;
    $scope.s3=76;
    $scope.s4=76;
  $scope.avg = ($scope.s1+$scope.s2+$scope.s3+$scope.s4)/4;
});

app.controller('AboutController', function($scope) {
  $scope.message = 'THE END';
});