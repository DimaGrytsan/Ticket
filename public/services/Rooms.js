(function () {
    angular.module('App')
        .service('Rooms', Rooms);
    Rooms.$inject = ['$http', '$rootScope', '_'];
    function Rooms($http, $rootScope, _) {
        var self = this;

        this.get = function () {
            $http({
                method: 'GET',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                },
                url: '/rooms'
            }).then(function (success) {
                self.render(success.data)
            })
        };
        this.post = function (data) {
            return $http({
                method: 'POST',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                },
                data: {data : data},
                url: '/rooms'
            }).then(function () {
                self.get();
            })
        };
        this.put = function (id, prop, data) {
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
                url: '/rooms'
            }).then(function () {
                self.get();
            })
        };
        this.remove = function (id) {
            return $http({
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                },
                data: {
                    id: id
                },
                url: '/rooms'
            }).then(function () {
                self.get();
            })
        };
        this.render = function (data) {
            var arr = _.mapObject(data, function (val, key) {
                val.id = key;
            });
            arr = _.values(data);
            $rootScope.rooms = arr;
            $rootScope._rooms = data;
        };
    }
})();
