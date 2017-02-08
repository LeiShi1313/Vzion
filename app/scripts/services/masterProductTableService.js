var WEBROOT = "http://121.199.1.200:8080";

angular.module('sbAdminApp')
    .factory('ProductService', ['$resource', function($resource) {
        return function(token) {
            console.log(WEBROOT);
            var src = $resource('http://121.199.1.200:8080/vzion/part:s/:partId/',
                {s: "@s", partId: "@partId"},
                {
                    GetProduct: {
                        method: "GET",
                        params: {s: "s"},
                        headers: {'Authorization': token}
                    },
                    AddProduct: {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': token
                        },
                        transformRequest: function (data, headersGetter) {
                            var str = [];
                            for (var d in data)
                                str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
                            return str.join("&");
                        },
                        params: {}
                    },
                    UpdateProduct: {
                        method: "PUT",
                        params: {},
                        headers: {'Authorization': token}
                    },
                    DeleteProduct: {
                        method: "DELETE",
                        params: {},
                        headers: {'Authorization': token}
                    }
                });
            return src;
        }
    }]);
