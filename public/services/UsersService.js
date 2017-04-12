(function () {
    angular.module('App')
        .factory('Users', Users);
    Users.$inject = ['$http', '$rootScope', '_'];
    function Users($http, $rootScope, _) {
        var self = this;

        function render(data) {
            $rootScope._users = data;
            var arr = _.mapObject(data, function (val, key) {
                val.id = key;
            });
            arr = _.values(data);
            $rootScope.users = arr;


            return true;
        }
        return {
            get: function () {
                return $http({
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json;charset=utf-8'
                    },
                    url: '/users'
                }).then(function (success) {
                    return render(success.data)
                })
            },
            post: function (data) {
                return $http({
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json;charset=utf-8'
                    },
                    data: {data : data},
                    url: '/users'
                })
            },
            put: function (id, prop, data) {
                return $http({
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json;charset=utf-8'
                    },
                    data: {
                        id: id,
                        prop: prop,
                        data: data
                    },
                    url: '/users'
                })
            },
            remove: function (id) {
                return $http({
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json;charset=utf-8'
                    },
                    data: {
                        id: id
                    },
                    url: '/users'
                })
            }

        }
    }
})();
