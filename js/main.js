// Create a request variable and assign a new XMLHttpRequest object to it.
console.log("sandeep");
//https://api.github.com/orgs/softwareag/repos"
//search : /search/repositories  https://api.github.com/search/repositories?q=


	var app = angular.module('cetApp', []);
	app.controller('cetCtrl', function($scope,$http,$window, $location, $anchorScroll, $timeout) {


  		var reposinfo = {
 			method: 'GET',
    		url: "https://api.github.com/search/repositories?q=org:softwareag+webmethods+in:name+topic:webmethods",
 			headers: {"Content-Type": "application/json"}
  		}
 		$http(reposinfo).then(function(response){
           $scope.allrows =response.data.items;
           $scope.totalCount=response.data.total_count;
           console.log($scope.totalCount);


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



