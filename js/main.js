// Create a request variable and assign a new XMLHttpRequest object to it.
console.log("sandeep");
//https://api.github.com/orgs/softwareag/repos"
//search : /search/repositories  https://api.github.com/search/repositories?q=


	var app = angular.module('cetApp', []);
	app.controller('cetCtrl', function($scope,$http,$window, $location, $anchorScroll, $timeout) {


  		var reposinfo = {
 			method: 'GET',
    		url: "https://api.github.com/search/repositories?q=org:softwareag+webmethods+in:name+topic:webmethods",
    		//https://api.github.com/repos/:owner/:repo/branches/:branch/protection
    		//https://api.github.com/repos/sandeeplati/test_delete/branches/main/protection
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





//tabls
function connectorTabs(tabName) {
  var i;
  var x = document.getElementsByClassName("wmiotabtype");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

