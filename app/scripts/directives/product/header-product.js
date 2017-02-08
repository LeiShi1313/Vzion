'use strict';

angular.module('sbAdminApp')
    .directive('headerproduct',function(){
        return {
        templateUrl:'scripts/directives/product/header-product.html',
        restrict: 'E',
        replace: true,
      }
    });


angular.module('sbAdminApp')
    .controller('headerCtrl', ['$scope', function($scope){
        $scope.$broadcast('to-child', 'hello');
        $scope.$on('to-parent', function(d){console.log(d);})
    }]);

