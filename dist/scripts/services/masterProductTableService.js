angular.module("sbAdminApp").factory("masterProductTableService",["$resource",function($resource){return $resource("http://121.199.1.200:8088/part",{},{query:{method:"GET",isArray:!1}})}]);