(function () {
    angular.module('App')
        .controller('TaskController', TaskController);

    TaskController.$inject = ['$scope', '$rootScope', '$mdDialog', 'Tasks'];
    function TaskController($scope, $rootScope, $mdDialog, Tasks) {

        // ================== SHOW TASK =====================

        $scope.showTask = function (ev, task) {
            $mdDialog.show({
                controller: ShowTaskController,
                templateUrl: '/components/show-task.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals : {
                    task : task
                }
            })
        };
        function ShowTaskController($scope, $mdDialog, task) {
            $scope.task = task;
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        }

        // =================== UPDATE TASK ==============

        $rootScope.refactorTask = function (id, prop, data) {
            Tasks.put(id, prop, data);
        };

        // ================== DELETE TASK ==============
        $rootScope.deleteTask = function (id) {
            Tasks.delete(id);
        };


    }
})();
