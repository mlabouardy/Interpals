angular.module('clientApp')
  .controller('SendMsgModalCtrl', function ($scope, $uibModalInstance) {
    $scope.send = function () {
	    $uibModalInstance.close($scope.selected.item);
	  };

  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
  });
