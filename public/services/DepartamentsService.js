(function () {
    angular.module('App')
        .factory('Departaments', Departaments);
    Departaments.$inject = ['$http', '$rootScope', '_'];
    function Departaments($http, $rootScope, _) {
        var self = this;

        function render(data) {
            var arr = _.mapObject(data, function (val, key) {
                val.id = key;
            });
            arr = _.values(data);
            $rootScope.departaments = arr;
            $rootScope._departaments = data;

            return true;
        }
        return {
            get: function () {
                return $http({
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json;charset=utf-8'
                    },
                    url: '/departaments'
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
                    url: '/departaments'
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
                    url: '/departaments'
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
                    url: '/departaments'
                })
            }

        }
    }
})();
