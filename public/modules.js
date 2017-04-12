angular.module('App', [
    'ngAria',
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'angularMoment',
    'angular.filter',
    'ngDraggable',
    'underscore',
    'material.components.eventCalendar',
    'naif.base64'

]).config(function($mdThemingProvider, $mdDateLocaleProvider) {
    $mdThemingProvider.theme('altTheme')
        .primaryPalette('pink');

    $mdThemingProvider.setDefaultTheme('altTheme');

    $mdDateLocaleProvider.formatDate = function(date) {
        return moment(date).format('DD-MM-YYYY');
    };
}).directive('setFocus', function(){
    return{
        scope: {setFocus: '='},
        link: function(scope, element){
            if(scope.setFocus) element[0].focus();
        }
    };
});
