(function () {
    angular.module('App')
        .service('MessagesService', MessagesService);
    MessagesService.$inject = ['$http', '$rootScope', '_'];
    function MessagesService($http, $rootScope, _) {
        var self = this;

        this.get = function () {
            $http({
                method: 'GET',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                },
                url: '/messages'
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
                url: '/messages'
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
                url: '/messages'
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
                url: '/messages'
            }).then(function () {
                self.get();
            })
        };
        this.render = function (data) {
            var arr = _.mapObject(data, function (val, key) {
                val.id = key;
            });
            arr = _.values(data);
            $rootScope.messages = arr;
            $rootScope._messages = data;
        };
    }
})();
