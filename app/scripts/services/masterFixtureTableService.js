angular.module('sbAdminApp')
    .factory('masterFixtureTableService', ['$resource', function($resource) {
        return $resource('http://121.199.1.200:8080/vzion/fixtureCommons', {}, {
            query: {method:'GET', isArray:false}
        });
    }]);