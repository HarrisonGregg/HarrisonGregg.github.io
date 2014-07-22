angular.module('app', ['ngRoute'])

.controller('HomeController', function($scope) {
    $scope.links = [
        {text:'About Me',url:'about'},
        {text:'Projects',url:'projects'},
        {text:'Blog',url:'blog'}
    ];
})

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home.html',
		controller: 'HomeController'
	})
	.when('/about', {
		templateUrl: 'about.html',
		controller: 'HomeController'
	})
	.when('/projects', {
		templateUrl: 'projects.html',
		controller: 'HomeController'
	})
	.when('/blog', {
		templateUrl: 'blog.html',
		controller: 'HomeController'
	})
	.otherwise({
		redirectTo:'/'
	});
});