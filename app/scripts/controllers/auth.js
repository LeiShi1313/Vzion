'use strict';

angular.module('sbAdminApp')
    .controller('AuthCtrl', ['$scope', 'Login', 'Register', 'TokenHandler', '$state', function($scope, Login, Register, TokenHandler, state) {
        //alert('Hello World');
        $scope.state = 1;
        $scope.login = function() {
            Login().SignIn({}, $scope.data, function(ret) {
                if (ret.ret == 1) {
                    TokenHandler.set(ret.token);
                    var token = TokenHandler.get();
                    console.log("token "+token+" set!");
                    state.go('select');
                }
                else {
                    alert(ret.message);
                    $scope.data.password = '';
                }

            });
        };
        $scope.isRegister = function() {
            $scope.state = 0;
        };
        $scope.cancel = function() {
            $scope.state = 1;
        };
        $scope.register = function() {
            console.log($scope.data2);
            console.log($scope.repassword);
            if ($scope.repassword != $scope.data2.userPassword) {
                alert("两次输入密码不一致!");
                $scope.data2.userPassword = '';
                $scope.repassword = '';
            }
            else {
                Register.SignUp({}, $scope.data2, function(ret) {
                    console.log(ret);
                    if (ret.ret == 1) {
                        alert('注册成功!')
                        $scope.state = 1;
                    }
                    else {
                        alert(ret.message);
                        $scope.data2 = '';
                        $scope.repassword = '';
                    }
                })
            }
        }
    }]);