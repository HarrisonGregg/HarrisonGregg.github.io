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
		templateUrl: 'content.html',
		controller: 'HomeController'
	});
});