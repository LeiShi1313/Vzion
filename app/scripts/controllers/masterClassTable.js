'use strict';

angular.module('sbAdminApp')
    .controller('masterClassTableCtrl', function($scope, $filter, masterClassTableService) {
    masterClassTableService.query(function(data) {
        $scope.objects = data['objects'];
    });
});