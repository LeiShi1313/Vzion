'use strict';

angular.module('sbAdminApp')
    .controller('masterFixtureTableCtrl', function($scope, $filter, masterFixtureTableService) {
    masterFixtureTableService.query(function(data) {
        $scope.objects = data['objects'];
    });
});