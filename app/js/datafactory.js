'use strict';

var myApp = angular.module('sbAdminApp', [])

myApp.factory('Data', function(){
    return {
        selectedMenu: 'dashboard',
        collapseVar: 0,
        multiCollapseVar: 0,
    };
});
