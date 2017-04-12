(function () {
    angular.module('App')
        .factory('Companies', Companies);
    Companies.$inject = ['$http', '$rootScope', '_'];
    function Companies($http, $rootScope, _) {
        var self = this;

        function render(data) {
            var arr = _.mapObject(data, function (val, key) {
                val.id = key;
            });
            arr = _.values(data);
            $rootScope.companies = arr;
            $rootScope._companies = data;

            return true;
        }
        return {
            get: function () {
                return $http({
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json;charset=utf-8'
                    },
                    url: '/companies'
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
                    url: '/companies'
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
                    url: '/companies'
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
                    url: '/companies'
                })
            }

        }
    }
})();
