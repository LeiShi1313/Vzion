var app = angular.module('sbAdminApp');
var WEBROOT = 'http://121.199.1.200:8080/vzion';


app.factory('Login', ['$resource', function($resource) {
    return function(token) {
        var src = $resource(WEBROOT + '/login',
            {},
            {
                SignIn: {
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data, headersGetter) {
                        var str = [];
                        for (var d in data)
                            str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
                        return str.join("&");
                    },
                    params: {}
                },
                GetRole: {
                    method: "GET",
                    headers: {'Authorization': token}
                }
            });
        //var ret = TokenHandler.wrapActions(src, ['GetRole']);
        return src;
    }
}]);

app.factory('Register', ['$resource', function($resource) {
    var src = $resource(WEBROOT + '/register',
        {},
        {
            SignUp: {
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function (data, headersGetter) {
                    var str = [];
                    for (var d in data)
                        str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
                    return str.join("&");
                }
            }
        });
    return src;
}]);