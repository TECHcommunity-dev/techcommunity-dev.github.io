// Create a request variable and assign a new XMLHttpRequest object to it.
console.log("sandeep");
//https://api.github.com/orgs/softwareag/repos"

	var objectName_u = "Cases_1";
	var currentPagename_u = "currentpage.jsp";
	var siteName_u = "sitename";
	var hostname = "";

	var app = angular.module('cetApp', []);
	app.controller('cetCtrl', function($scope,$http,$window, $location, $anchorScroll, $timeout) {


  		var reposinfo = {
 			method: 'GET',
    		url: "https://api.github.com/orgs/softwareag/repos",
 			headers: {"Content-Type": "application/json"}
  		}
 		$http(reposinfo).then(function(response){
            $scope.allrows =response.data;
            console.log($scope.allrows);

  		}, function(){alert("failed in call1");});




	});


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});