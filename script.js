projects = [
	{title: 'Spectracer', 			image:'spectracer.png', 		color: 'rgb(100, 47, 53)', url: 'spectracer',		body: 'This is an android app I made.'},
	{title: 'Spectracer in Unity', 	image:'spectracer-unity.png', 	color: 'rgb(100, 47, 53)', url: 'spectracer-unity', body: 'I started to remake Spectracer using Unity3D.'},
	{title: 'This Website', 		image:'website.png', 			color: 'rgb(100, 47, 53)', 	url: 'this-site',		body: 'I made this website using AngualarJS.'},
	{title: 'Get Off My Lawn', 		image:'get-off-my-lawn.png', 	color: 'rgb(30, 100, 53)', 	url: 'get-off-my-lawn',	body: 'This is a mobile game that I started making in Unity3D.'},
	{title: 'Neural Net', 			image:'neural-nets.png', 		color: 'rgb(100, 47, 53)', 	url: 'neural-net',		body: 'These are the things that I did with a neural net for my Artificial Intelligence class.'},
	{title: 'Curve Editor', 		image:'curve-editor.png', 		color: 'rgb(30, 47, 100)', 	url: 'curve-editor',	body: 'This is a project for my Computer Graphics class.'},
	{title: 'Ray Tracer', 			image:'ray-tracer2.png', 		color: 'rgb(100, 30, 100)',	url: 'ray-tracer', 		body: 'This is a project for my Computer Graphics class.'},
	{title: 'Synthepyzer', 			image:'synthepyzer.png', 		color: 'rgb(100, 47, 53)', 	url: 'synthepyzer', 	body: 'This is a Python program that I made with my friends for HackPrinceton Fall 2013.'},
	{title: 'Mr. Burger', 			image:'mr-burger.png', 			color: 'rgb(200, 100, 0)', 	url: 'mr-burger', 		body: 'This is a silly flash game that I made with my friends.'},
	{title: 'Corona SDK Games', 	image:'corona.png', 			color: 'rgb(100, 100, 100)',url: 'corona', 			body: 'My first real mobile app programming was done using the Corona SDK.'},
	{title: 'Senior Thesis',		image:'bcsr.jpg', 				color: 'rgb(100, 100, 100)',url: 'senior-thesis', 	body: 'For my Senior Thesis at Bard College at Simon\'s Rock, I will be starting a business.'}
];

posts = [
	{title: 'Senior Thesis: Beginning the Journey', 	url: 'post1',	date:'September 17, 2014', 	datestamp:'2014-09-17', description: "This is the first of what will be weekly updates on my Senior Thesis.  I've decided on my thesis project, and turned in my thesis proposal.  I'm preparing to do market research. This post includes a description of my project, and where I imagine it going."},
	{title: 'Senior Thesis: Blog, JIRA, and HRRC', 		url: 'post2',	date:'September 24, 2014', 	datestamp:'2014-09-24', description: "This past week, I've set up a basic version of my blog, so I can actually post these updates, I've started setting up JIRA to use for project organization, and I'm just waiting on someone to get back to me about the Human Research Review Committee guidelines I need to follow before I can send out my survey."},
	{title: 'Senior Thesis: More HRRC, Lean Canvas, and Trello',
														url: 'post3',	date:'October 1, 2014', 	datestamp:'2014-10-01', description: "This week, I found out how long the HRRC process can be, I started creating a Lean Canvas, and I decided on the free project management tool, Trello."},
	{title: 'Senior Thesis: Even more HRRC, Lean Canvas, and Trello',
														url: 'post4',	date:'October 8, 2014', 	datestamp:'2014-10-08', description: "The HRRC process stretches on, I've made small updates to the Lean Canvas, and I've started using Trello."},
	{title: 'Senior Thesis: Final HRRC, FOLEYTech Summit, and PhoneGap',
														url: 'post5',	date:'October 22, 2014', 	datestamp:'2014-10-22', description: "The HRRC process seems like it's almost done.  I attended a tech summit on mHealth and information security, and I started learning how to use PhoneGap."},
	{title: 'Senior Thesis: Survey responses, HRRC Round 2, and Connected Health Symposium',
														url: 'post6',	date:'October 29, 2014', 	datestamp:'2014-10-29', description: "This past week, I sent out the market survey, sent in the HRRC Proposal for doing User Interface Testing, and I attended the Connected Health Symposium hosted by the Center for Connected Health in Boston."},
];

$(document).ready(function () {
		$("#navbar li a").click(function(event) {
				// check if window is small enough so dropdown is created
				$("#nav-collapse").removeClass("in").addClass("collapse");
		});
});

angular.module('app', ['ngRoute'])

.controller('HomeController', ['$scope', '$route', function($scope, $route) {
    $scope.route = $route;
		$scope.projects = projects;
		$scope.posts = posts;
}])

.controller('ProjectController', function($scope, $route, $routeParams) {
	$scope.route = $route;
	var i;
		$scope.project = null;
	for(i = 0; i < projects.length; i++){
		if(projects[i].url==$routeParams.projectId){
			$scope.project = projects[i];
		}
	}
})

.controller('BlogController', function($scope, $route, $routeParams) {
	$scope.route = $route;
	var i;
		$scope.post = null;
	for(i = 0; i < posts.length; i++){
		if(posts[i].url==$routeParams.postId){
			$scope.post = posts[i];
		}
	}
})

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home.html',
		controller: 'HomeController',
    activetab: ''
	})
	.when('/about', {
		templateUrl: 'about.html',
		controller: 'HomeController',
		activetab: 'about'
	})
	.when('/projects', {
		templateUrl: 'projects.html',
		controller: 'HomeController',
		activetab: 'projects'
	})
	.when('/blog', {
		templateUrl: 'blog.html',
		controller: 'HomeController',
		activetab: 'blog'
	})
	.when('/projects/:projectId', {
		templateUrl: 'project.html',
		controller: 'ProjectController',
		activetab: 'projects'
	})
	.when('/blog/:postId', {
		templateUrl: 'post.html',
		controller: 'BlogController',
		activetab: 'blog'
	})
	.otherwise({
		redirectTo:'/'
	});
});
