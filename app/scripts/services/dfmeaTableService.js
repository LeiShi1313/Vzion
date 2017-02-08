angular.module('sbAdminApp')
    .factory('dfmeaTableService', ['$resource', function($resource) {
        return $resource('http://121.199.1.200:8088/part', {}, {
            query: {method:'GET', isArray:false}
        });
    }]);