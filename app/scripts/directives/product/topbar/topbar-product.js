'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('topbarproduct',['$location',function() {
    return {
      templateUrl:'scripts/directives/product/topbar/topbar-product.html',
      restrict: 'E',
      replace: true,
    }
  }]);

angular.module('sbAdminApp')
  .controller('topbarCtrl', ['$scope', function($scope){
    $scope.$on('to-child', function(d){console.log(d);});
    $scope.count = 0;
    $scope.focus = false;
    $scope.displaystyle = 'none';
    // console.log(Data);
    // $scope.selectedmenu = Data.selectedmenu;
    // $scope.collapseVar = Data.collapseVar;

    $scope.f = function() {
        $scope.focus = ~$scope.focus;
        $scope.displaystyle = $scope.focus?'block':'none';
        $scope.$emit('to-parent', 'Hi');
    };
    $scope.b = function() {
        $scope.focus = false;
        $scope.displaystyle = 'none';
    }; 
  }])
