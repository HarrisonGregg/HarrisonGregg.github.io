angular.module('app', ['ngRoute'])

.controller('HomeController', function($scope) {
    $scope.links = [
        {text:'About Me',url:'about'},
        {text:'Projects',url:'projects'},
        {text:'Blog',url:'blog'}
    ];
    $scope.projects = [
    	{title: 'Spectracer', 			image:'spectracer.png', 		color: 'rgb(100, 47, 53)', url: 'spectracer',		body: 'This is an android app I made.'},
    	{title: 'Spectracer in Unity', 	image:'spectracer-unity.png', 	color: 'rgb(100, 47, 53)', url: 'spectracer-unity', body: 'I started to remake Spectracer using Unity3D.'},
    	{title: 'This Website', 		image:'website.png', 			color: 'rgb(100, 47, 53)', url: 'this-site',		body: 'I made this website using AngualarJS.'},
    	{title: 'Get Off My Lawn', 		image:'get-off-my-lawn.png', 	color: 'rgb(30, 100, 53)', url: 'get-off-my-lawn',	body: 'This is a mobile game that I started making in Unity3D.'},
    	{title: 'Neural Net', 			image:'neural-nets.png', 		color: 'rgb(100, 47, 53)', url: 'neural-net',		body: 'These are the things that I did with a neural net for my Artificial Intelligence class.'},
    	{title: 'Curve Editor', 		image:'curve-editor.png', 		color: 'rgb(30, 47, 100)', url: 'curve-editor',		body: 'This is a project for my Computer Graphics class.'},
    	{title: 'Ray Tracer', 			image:'ray-tracer2.png', 		color: 'rgb(100, 30, 100)',url: 'ray-tracer', 		body: 'This is a project for my Computer Graphics class.'},
    	{title: 'Synthepyzer', 			image:'synthepyzer.png', 		color: 'rgb(100, 47, 53)', url: 'synthepyzer', 		body: 'This is a Python program that I made with my friends for HackPrinceton Fall 2013.'},
    	{title: 'Mr. Burger', 			image:'mr-burger.png', 			color: 'rgb(200, 100, 0)', url: 'mr-burger', 		body: 'This is a silly flash game that I made with my friends.'},
    	{title: 'Corona SDK Games', 	image:'corona.png', 			color: 'rgb(100, 100, 100)', url: 'corona', 		body: 'My first real mobile app programming was done using the Corona SDK.'},
    	{title: 'Senior Thesis',		image:'bcsr.jpg', 				color: 'rgb(100, 100, 100)', url: 'senior-thesis', 	body: 'For my Senior Thesis at Bard College at Simon\'s Rock, I will be starting a business.'}
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
	.when('/projects/:projectId', {
		templateUrl: 'project.html',
		controller: 'HomeController'
	})
	.otherwise({
		redirectTo:'/'
	});
});