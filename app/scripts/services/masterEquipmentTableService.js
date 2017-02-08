angular.module('sbAdminApp')
    .factory('masterEquipmentTableService', ['$resource', function($resource) {
        return $resource('http://121.199.1.200:8080/vzion/equipmentCommons', {}, {
            query: {method:'GET', isArray:false}
        });
    }]);