(function () {
    angular.module('App')
        .factory('Corporations', Corporations);
    Corporations.$inject = ['$http', '$rootScope', '_'];
    function Corporations($http, $rootScope, _) {
        var self = this;

        function render(data) {
            $rootScope._corporations = data;
            var arr = _.mapObject(data, function (val, key) {
                val.id = key;
            });
            arr = _.values(data);
            $rootScope.corporations = arr;

            return true;
        }
        return {
            get: function () {
                 return $http({
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json;charset=utf-8'
                    },
                    url: '/corporations'
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
                    url: '/corporations'
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
                    url: '/corporations'
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
                    url: '/corporations'
                })
            }

        }
    }
})();
