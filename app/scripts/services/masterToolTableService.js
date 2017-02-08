angular.module('sbAdminApp')
    .factory('masterToolTableService', ['$resource', function($resource) {
        return $resource('http://121.199.1.200:8080/vzion/toolCommons', {}, {
            query: {method:'GET', isArray:false}
        });
    }]);