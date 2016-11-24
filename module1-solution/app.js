(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
	$scope.lunchMenu = "";
	$scope.message = "";
	$scope.messageColor = {};

	//check list comma-separated items usually eat for lunch
	$scope.checkIfTooMuch = function(){

		//check if text box is Empty. NOT consider an empty item, i.e., , ,
		if($scope.lunchMenu == ""){
			$scope.messageColor.style = {"color":"red"};
			$scope.message = "Please enter data first";
		} else {
			//break items
			var items = $scope.lunchMenu.split(",");

			$scope.messageColor.style = {"color":"green"};

			//check number of items	
			if(items.length <= 3)
				$scope.message = "Enjoy!";
			else
				$scope.message = "Too much!";
		}
	}
}

})();