'use strict';

angular.module('sbAdminApp')
    .controller('masterProcessTableCtrl', function($scope, $filter, $http, masterProcessTableService) {
    masterProcessTableService.query(function(data) {
        $scope.objects = data['objects'];
    });
    $scope.add = function(message) {
        var data = $.param($scope.process);

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var res = $http.post('http://121.199.1.200:8080/vzion/processCommon', data, config);
        res.success(function(data, status, headers, config) {
            masterProcessTableService.query(function(data) {
                $scope.objects = data['objects'];
            });
        })

    };
});