(function () {
    angular.module('App')
        .service('Tasks', Tasks);


    Tasks.$inject = ['$http', '$rootScope', '_'];
    function Tasks($http, $rootScope, _) {
        var self = this;
        this.render = function (data) {
            $rootScope.tasks = [''];
            var arr = _.mapObject(data, function (val, key) {
                val.id = key;
            });
            arr = _.values(data);
            arr.map(function (index) {
                index.date_start = Date.parse(new Date(index.date_start));
                index.date_end = Date.parse(new Date(index.date_end));

                var a = moment($rootScope.time_now);
                var b = moment(index.date_end);


                var total_days = 0;
                if (index.date_end - $rootScope.time_now < 0) {

                    total_days = (a.diff(b, 'days')) * -1;
                } else {
                    total_days = b.diff(a, 'days');
                }

                index.failed = total_days <= 0 && !index.completed;
                index.important = 0 <= total_days && 2 >= total_days;

                index.active = !index.failed && !index.completed;

                index.today = total_days === 0 && index.active;
                index.next_3_days = 0 <= total_days && 3 >= total_days && index.active;
                index.next_7_days = 0 <= total_days && 7 >= total_days && index.active;
                index.next_2_week = 0 <= total_days && 14 >= total_days && index.active;
                index.next_month = 0 <= total_days && 30 >= total_days && index.active;


            });
            $rootScope.tasks = arr;
            $rootScope._tasks = data;
        };
        this.get = function () {
            return $http({
                method: 'get',
                url: '/tasks',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                }
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
                data: {data: data},
                url: '/tasks'
            }).then(function (success) {
                self.get()
            })
        };
        this.put =function (id, prop, data) {
            console.log(id, prop, data);
            return $http({
                method: 'put',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                },
                data: {
                    id: id,
                    prop: prop,
                    data: data
                },
                url: '/tasks'
            }).then(function () {
                self.get()
            })
        };
        this.delete = function (id) {
            return $http({
                method: 'delete',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                },
                data: id,
                url: '/tasks'
            }).then(function () {
                self.get()
            })
        };
    }
})();
