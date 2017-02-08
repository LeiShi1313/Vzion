'use strict';

angular.module('sbAdminApp')
    .controller('masterEquipmentTableCtrl', function($scope, $filter, masterEquipmentTableService) {
    masterEquipmentTableService.query(function(data) {
        $scope.objects = data['objects'];
    });
});