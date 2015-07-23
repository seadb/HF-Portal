var app = angular.module('directivesModule', ['ui.bootstrap']);

app.controller('viewController', function($scope, $modal){

	$scope.companies = [

		{ "name": "Company 1" },
		{ "name": "Company 2" },
		{ "name": "Company 3" },
		{ "name": "Company 4" },
		{ "name": "Company 5" },
		{ "name": "Company 6" }

	];

	$scope.openModal = function (company) {


		var modalInstance = $modal.open({

			templateUrl: 'partials/company_detail_modal_template.html',
			controller: 'ModalInstanceCtrl',
			size: 'lg',
			resolve: {
				company: function () {
					return company;
				}
			}

		});

	};



});

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, company) {

	$scope.company = company;

	$scope.ok = function () {
		$modalInstance.close($scope.company);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});


app.directive('companyView', function() {
	return {
		restrict: 'AE',
		replace: 'true',
		templateUrl:'partials/company_detail_view_template.html'
	};

});


