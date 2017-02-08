'use strict';

angular.module('sbAdminApp')
    .controller('masterProductTableCtrl', ['$scope', '$filter', 'ProductService', 'TokenHandler', function($scope, $filter, ProductService, TokenHandler) {
        var objects = ProductService.GetProduct(function(data) {
        console.log(data);
        $scope.objects = data['objects'];
        });

        $scope.add = function(message) {
            var data = {
                partName: $scope.user.partName,
                partNumber: $scope.user.partNumber
            }
            $scope.user = "";
            ProductService(TokenHandler.get()).AddProduct({}, data, function(data) {
                ProductService.GetProduct(function(data) {
                    $scope.objects = data['objects'];
                    });
            });
        };

        $scope.delete = function(row) {
            ProductService(TokenHandler.get()).DeleteProduct({partId: row.partId}, function(data) {
                ProductService.GetProduct(function(data) {
                    $scope.objects = data['objects'];
                    });
                });
        };

        $scope.current = function(row) {
            $scope.row = row;
            $scope.user = row;
            $scope.user.partNumber = row.partNumber;
            $scope.user.partName = row.partName;
            $scope.user.supplierPartNumber = row.supplierPartNumber;
            $scope.user.owner = row.owner;
        };

        $scope.update = function(partId) {
            var data = {
                partName: $scope.user.partName,
                partNumber: $scope.user.partNumber
            }
            console.log(data);
            ProductService(TokenHandler.get()).UpdateProduct({partId: partId}, data, function(data) {
                ProductService.GetProduct(function(data) {
                    $scope.objects = data['objects'];
                    });
            });

        };
}]);
