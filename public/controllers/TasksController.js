(function () {
    angular.module('App')
        .controller('TasksController', TasksController);

    TasksController.$inject = ['$scope', '$rootScope', '$mdDialog', 'Tasks', 'Tags', '$filter', '$interval', 'moment', '$timeout', '_'];
    function TasksController($scope, $rootScope, $mdDialog, Tasks, Tags, $filter, $interval, moment, $timeout, _) {

        // ==================== GET TAGS ==================
        Tags.get();

        // ==================== TASKS ==================
        Tasks.get();

        // ==================== ORDERS ==================

        $scope.orders = [
            {
                title: "Start Date",
                val: 'date_start'
            },
            {
                title: "End Date",
                val: 'date_end'
            },
            {
                title: "Important",
                val: 'important'
            },
            {
                title: "Starred",
                val: 'starred'
            }
        ];

        $scope.orderName = 'date_start';
        $scope.reverse = true;
        $scope.sortBy = function (orderName) {
            $scope.orderName = orderName;
        };


        // ==================== FILTERS ==================
        $scope.body_nextDate = [
            {
                title: "Next 3 days",
                val: "next_3_days"
            },
            {
                title: "Next 7 days",
                val: "next_7_days"
            },
            {
                title: "Next 2 weeks",
                val: "next_2_week"
            },
            {
                title: "Next Month",
                val: "next_month"
            }
        ];

        $scope.tagFilter = '';

        $scope.tagFilterChange = function (prop) {
            console.log(prop);
            $scope.tagFilter = prop;
        };


        $scope.filter = "$";
        $scope.filterTasks = {
            completed: '',
            starred: '',
            active: '',
            tag: '',
            important: '',
            today: '',
            next_3_days: '',
            next_7_days: '',
            next_2_week: '',
            next_month: '',
            failed: '',
            $: ''
        };
        $scope.activeFilter = 'all';
        $scope.filterChange = function (pr, name) {
            $scope.filterTasks = {
                completed: '',
                starred: '',
                active: '',
                tag: '',
                important: '',
                today: '',
                next_3_days: '',
                next_7_days: '',
                next_2_week: '',
                next_month: '',
                failed: '',
                $: ''
            };

            if (pr !== 'all') {
             if (pr === 'tag') {
                    $scope.filterTasks[pr] = name.toString();
                } else {
                 $scope.filterTasks[pr] = true;
             }
            }
            $scope.activeFilter = pr;
        };



        // ==================== DRAGGABLE ==================

        $scope.onDropComplete = function (id, prop, data) {
            console.log(id, prop, data);
            Tasks.put(id, prop, data);
            Tags.get();
            Tasks.get();
        };


        // ==================== ADD TASK MODAL ==================
        $scope.openAddTask = function (ev) {

            $mdDialog.show({
                controller: AddTaskController,
                templateUrl: '/components/add-task.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                skipHide: true,
                clickOutsideToClose: true,
                closeTo: angular.element(document.querySelector('#tasksList'))
            })
        };

        function AddTaskController($scope, $rootScope, $mdDialog, Tasks) {

            $scope.companies = $rootScope.companies;
            $scope.users = $rootScope.users;
            $scope.departaments = $rootScope.departaments;
            $scope.corporations = $rootScope.corporations;

            $scope._companies = $rootScope._companies;
            $scope._users = $rootScope._users;
            $scope._departaments = $rootScope._departaments;
            $scope._corporations = $rootScope._corporations;

            $scope.date_now = new Date();
            $scope.date_start = new Date();
            $scope.date_end = new Date();
            $scope.files = [];


            $scope.changeStartDate = function(time) {
                if (time != undefined) {
                    function addZero(i) {
                        if (i < 10) {
                            i = "0" + i;
                        }
                        return i;
                    }
                    var hours = addZero(time.getHours());
                    var minutes = addZero(time.getMinutes());
                    $scope.date_start.setHours(hours);
                    $scope.date_start.setMinutes(minutes);
                }
            };

            $scope.changeEndDate = function(time) {
                if (time != undefined) {
                    function addZero(i) {
                        if (i < 10) {
                            i = "0" + i;
                        }
                        return i;
                    }
                    var hours = addZero(time.getHours());
                    var minutes = addZero(time.getMinutes());
                    $scope.date_end.setHours(hours);
                    $scope.date_end.setMinutes(minutes);
                }
            };

            $scope.removeFile = function (index) {
                $scope.files.splice(index, 1);
            };

            $scope.addTask = function (valid, title, task_for, date_start, date_end, text, files) {
                console.log(date_start);
                if(valid) {
                    Tasks.post({
                        "from": "Дима Грицан",
                        "title": title,
                        "completed": false,
                        "task_for": task_for,
                        "tag": "",
                        "important": "",
                        "starred": "",
                        "date_start": date_start,
                        "date_end": date_end,
                        "sub_tasks": [],
                        "text": text,
                        "files": {
                            "data": files
                        }
                    });
                    Tasks.get();
                    $scope.hide();
                }
            };


            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }

        // ================== DELETE TAG =====================
        $scope.deleteTag = function (tag) {
            var id = tag.id;
            Tags.remove(id);
            Tags.get();
            Tasks.get();
        };



        // ================== ADD TAG =====================

        $scope.openAddTag = function (ev) {
            $mdDialog.show({
                controller: AddTagsController,
                templateUrl: '/components/add-tags.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                closeTo: angular.element(document.querySelector('#add-tags'))
            })
        };
        function AddTagsController($scope, $rootScope, $mdDialog, $mdColorPalette, Tags) {
            $scope.colors = Object.keys($mdColorPalette);
            $scope.errorTagName = false;
            $scope.addTag = function (validForm, name, color) {
                var valid = function () {
                    return $rootScope.tags.some(function (index) {
                        return index.name == name
                    });
                };
                console.log(valid());
                if (!valid() && validForm) {
                    var data = {
                        name: name,
                        color: color
                    };

                    Tags.post(data);
                    Tags.get();
                    $scope.hide();

                }
            };
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        }
    }
})();
