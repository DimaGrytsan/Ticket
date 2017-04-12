(function () {
    angular.module('App')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$window', '$rootScope', '$interval', '$timeout', '$mdDialog', 'Users', 'Companies', 'Departaments', 'Corporations', 'Tasks'];
    function AppController($scope, $window, $rootScope, $interval, $timeout, $mdDialog, Users, Companies, Departaments, Corporations, Tasks) {

        // =================== ROUTE TITLE ================
        switch ($window.location.pathname) {
            case '/ticket':
                $scope.titlePage = 'TICKET';
                break;
            case '/chat':
                $scope.titlePage = 'CHAT';
                break;
            case '/contacts':
                $scope.titlePage = 'CONTACTS';
                break;
            default:
                $scope.titlePage = '';
        }

        $rootScope.myId = "0adf11";





        Companies.get();
        Tasks.get();
        Users.get();
        Departaments.get();
        Corporations.get();


        // ==================== TIMER ==================
        $rootScope.time_now =  Date.parse(new Date());

        $interval(function () {
            $rootScope.time_now =  Date.parse(new Date());
        }, 1000);
















        // ===================== OPEN CALENDAR ==========

        $scope.openCalendar = function (ev) {
            $mdDialog.show({
                controller: CalendarController,
                templateUrl: '/components/calendar.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
                // closeTo: angular.element(document.querySelector('#calendar'))
            })
        };
        function CalendarController($scope, $rootScope, $mdDialog, $mdColorPalette) {

            $scope.events = [];
            $rootScope.tasks.map(function (index) {
                $scope.events.push({
                    title: index.title,
                    start: new Date(index.date_start),
                    end: new Date(index.date_end),
                    allDay: false
                })
            });




            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        }

    }
})();
