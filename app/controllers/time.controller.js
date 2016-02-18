(function(){
	angular.module("nuride")
	.controller("TimeController",["$scope", "$state", "$http", "$cookies", function($scope, $state, $http, $cookies){
		$(function() {
		    $( "#datepicker" ).datepicker();
		  });
	}]);
}());