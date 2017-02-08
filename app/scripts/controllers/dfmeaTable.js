'use strict';

angular.module('sbAdminApp')
    .controller('dfmeaTableCtrl', ['$scope', '$filter', 'dfmeaTableService', function($scope, $filter, dfmeaTableService) {
    dfmeaTableService.query(function(data) {
        $scope.phones = data['part'];
    });
    $scope.selectedPredicate = 'age';
}]);