angular.module('starter.services', [])
    .factory('BlankFactory', [function () {

    }])
    .factory('swipeMenu', ['$ionicSideMenuDelegate', function ($ionicSideMenuDelegate) {
        return {
            swipeLeft: function(){
                $ionicSideMenuDelegate.toggleLeft();
            },
            swipeRight: function(){
                $ionicSideMenuDelegate.toggleRight();
            }
        }
    }])
    .factory('$localstorage', ['$window', function ($window) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            deleteItem: function (key) {
                return $window.localStorage.removeItem(key);
            },
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            },
            clear: function () {
                $window.localStorage.clear();
            }
        }
    }])

    .service('BlankService', [function () {

    }]);