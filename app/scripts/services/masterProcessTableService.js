angular.module('sbAdminApp')
    .factory('masterProcessTableService', ['$resource', function($resource) {
        return $resource('http://121.199.1.200:8080/vzion/processCommons', {}, {
            query: {method:'GET', isArray:false}
        });
    }]);