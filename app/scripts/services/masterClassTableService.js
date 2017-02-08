angular.module('sbAdminApp')
    .factory('masterClassTableService', ['$resource', function($resource) {
        return $resource('http://121.199.1.200:8080/vzion/characterClassifications', {}, {
            query: {method:'GET', isArray:false}
        });
    }]);