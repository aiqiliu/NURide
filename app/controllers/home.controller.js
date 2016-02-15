(function(){
	angular.module("nuride")
	.controller("HomeController",["$scope", "$state", "$http", "$cookies", function($scope, $state, $http, $cookies){
		$scope.findRide = function(source, destination) {
			$scope.locations = "source:" + source + " destination: " + destination;
			// $http.get("/api/school/" + school).success(function(data){
			// 	$scope.majors = data[0].majors;
			// });
		}
		// $scope.selectMajor = function(school,major){
		// 	DataFactory.query = {
		// 		school: school,
		// 		major: major
		// 	}
		// 	$cookies.putObject("query",DataFactory.query);
		// 	$state.go("graph");
		// }
	}]);
}());