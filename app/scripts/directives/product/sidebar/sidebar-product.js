'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('sidebarproduct',['$location',function() {
    return {
      templateUrl:'scripts/directives/product/sidebar/sidebar-product.html',
      restrict: 'E',
      replace: true,
    }
  }]);

angular.module('sbAdminApp')
  .controller('sidebarCtrl', ['$scope', function($scope){
        var menus = ['dashboard','master', 'product'];
        $scope.selectedMenu = menus[0];
        $scope.text = '';
        $scope.check = function(x){
            $scope.selectedMenu = menus[x];
        };
        $scope.search = function() {
          alert($scope.text);
        }
  }])
