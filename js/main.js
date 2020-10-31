// Create a request variable and assign a new XMLHttpRequest object to it.
console.log("sandeep");
//https://api.github.com/orgs/softwareag/repos"


	var app = angular.module('cetApp', []);
	app.controller('cetCtrl', function($scope,$http,$window, $location, $anchorScroll, $timeout) {


  		var reposinfo = {
 			method: 'GET',
    		url: "https://api.github.com/orgs/softwareag/repos",
 			headers: {"Content-Type": "application/json"}
  		}
 		$http(reposinfo).then(function(response){
            $scope.allrows =response.data;
           // console.log($scope.allrows);

  		}, function(){alert("failed in call1");});

    //substring
  $scope.getData = function (updatedDate) {
          return updatedDate.substr(0, 10);;

      }

	});




$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myrepos div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



