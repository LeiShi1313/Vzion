'use strict';

angular.module('sbAdminApp')
    .controller('masterToolTableCtrl', function($scope, $filter, $http, masterToolTableService) {
    masterToolTableService.query(function(data) {
        $scope.objects = data['objects'];
    });
    $scope.add = function(message) {
        var data = $.param($scope.tool);

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var res = $http.post('http://121.199.1.200:8080/vzion/toolCommon', data, config);
        res.success(function(data, status, headers, config) {
            masterToolTableService.query(function(data) {
                $scope.objects = data['objects'];
            });
        })

    };
});