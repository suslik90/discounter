angular.module('starter.services', [])
    .factory('BlankFactory', [function () {

    }])
    .factory('swipeMenu', ['$ionicSideMenuDelegate', function ($ionicSideMenuDelegate) {
        return {
            swipeLeft: function () {
                $ionicSideMenuDelegate.toggleLeft();
            },
            swipeRight: function () {
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
    .factory("Items", function ($firebaseArray) {
        var itemsRef = new Firebase("https://status873854.firebaseio.com/items");
        return $firebaseArray(itemsRef);
    })
    .factory("nameMagazine", function () {
        return {
            get: function (id) {
                var name = '';
                var magazine = [
                    {id: 1, name: 'Спортмастер'},
                    {id: 2, name: 'Дикси'},
                    {id: 3, name: 'Лента'},
                    {id: 4, name: 'Рив Гош'},
                    {id: 5, name: 'Meга Дилдо'}];

                for (var i = 0; i < magazine.length; i++) {
                    if (magazine[i].id == id) {
                        name = magazine[i].name;
                        break;
                    }
                }
                return name;
            }
        }
})

.
service('BlankService', [function () {

}]);