(function(){
	angular.module("nuride",["ui.router","ngCookies"])
		.config(function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state("home", {
					url: "/",
					templateUrl: "app/views/home.html",
					controller: "HomeController"
				})
				.state("time", {
					url: "/time",
					templateUrl: "app/views/time.html",
					controller: "TimeController"
				})
				.state("major", {
					url: "/major",
					templateUrl: "app/major/major.html",
					controller: "MajorController"
				});
		})
}());