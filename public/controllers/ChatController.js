(function () {
    angular.module('App')
        .controller('ChatController', ChatController);

    ChatController.$inject = ['$scope', '$rootScope', '$mdDialog', 'Tasks', 'MessagesService', 'Rooms', '$mdSidenav', '$mdDialog'];
    function ChatController($scope, $rootScope, $mdDialog, Tasks, MessagesService, Rooms, $mdSidenav, $mdDialog) {
        $scope.reloadRooms = true;
        $scope.togglerRomms = true;
        $scope.toggleRooms = function(){
            $scope.togglerRomms = !$scope.togglerRomms;

            return $scope.togglerRomms ? $mdSidenav('rooms').open() : $mdSidenav('rooms').close()
        };

        // =================== GET ROOMS ==============

        Rooms.get();
        MessagesService.get();
        Tasks.get();


        // =================== UPDATE ROOM ==============

        $rootScope.updateRoom = function (id, prop, data) {
            Rooms.put(id, prop, data);
        };

        // ================== DELETE ROOM ==============
        $rootScope.deleteRoom = function (id) {
            Rooms.delete(id);
        };

        // ================== ADD ROOM ==============
        $scope.openAddRoom = function (ev, users, departaments, _companies) {
            $mdDialog.show({
                controller: AddRoomController,
                templateUrl: '/components/add-room.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals : {
                    users : users,
                    departaments: departaments,
                    _companies: _companies
                }
            })
        };

        function AddRoomController($scope, $mdDialog, Rooms, users, departaments, _companies) {
            console.log(users, departaments, _companies);
            $scope.users = users;
            $scope.departaments = departaments;
            $scope._companies = _companies;
            $scope.addRoom = function (valid, title, users) {

                if (valid) {
                    $scope.reloadRooms = false;
                    Rooms.post({
                        title: title,
                        users: users
                    });
                    $scope.reloadRooms = true;
                    $mdDialog.hide();

                }


            };

            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        }

        $scope.files = [];
        $scope.sendMessage = function (form, id_room, text, files) {
            if(form.$valid) {
                var data = {
                    text: text,
                    room: id_room,
                    date: new Date(),
                    files: files,
                    user: $rootScope.myId
                };
                MessagesService.post(data);
                $scope.text = '';
                $scope.files = [];
            }
        };
        $scope.removeFile = function (index) {
            $scope.files.splice(index, 1);
        };

        $scope.deleteMessage = function (id) {
            MessagesService.remove(id);
        };












        $scope.selectedRoom = '';
        $scope.filterMessagesChange = function (filter) {
            $scope.selectedRoom = filter;
        };


        // // =================== GET MESSAGE ==============
        //
        // $rootScope.getMessages = function (id_room) {
        //     Messages.get(id_room);
        // };
        //
        // // =================== ADD MESSAGE ==============
        //
        // $rootScope.addMessage = function (id_room, data) {
        //     Messages.post(id_room, data);
        // };
        //
        // // =================== UPDATE MESSAGE ==============
        //
        // $rootScope.updateMessage = function (id, prop, data) {
        //     Messages.put(id, prop, data);
        // };
        //
        // // ================== DELETE MESSAGE ==============
        // $rootScope.deleteMessage = function (id) {
        //     Messages.delete(id);
        // };


    }
})();
