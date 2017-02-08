'use strict';

angular.module('sbAdminApp')
    .controller('ProductSelect', ['$scope', 'ProductService', 'TokenHandler', function($scope, ProductService, TokenHandler) {
        console.log(TokenHandler.get());
        var objects = ProductService(TokenHandler.get()).GetProduct(function(data) {
        console.log(data);
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey'];
        $scope.objects = data['objects'];
        for (var i=0;i < $scope.objects.length; i++) {
            $scope.objects[i].color = colors[i%colors.length]+'-panelhead';
        };
    });
}]);
