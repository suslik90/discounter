angular.module('starter.controllers', [])

    .controller('backCtrl', function ($scope, $ionicHistory) {
        $scope.goBack = function () {
            $ionicHistory.goBack();
        };
    })
    .controller('appCtrl', function ($scope, $ionicModal, $timeout) {

    })
    .controller('feedCtrl', function ($scope) {
    })
    .controller('searchCtrl', function ($scope, $stateParams) {
    })
    .controller('profileCtrl', function ($scope, $localstorage, $ionicScrollDelegate) {
        $ionicScrollDelegate.scrollTop();
        $scope.profileWall = [
            {url_img: "img/cat.jpeg",text: "Про котЭ",color: "positive"},
            {url_img: "img/dog.jpeg",text: "Про собакЭ",color: "calm"},
            {url_img: "img/sove.jpg",text: "Про совЭ",color: "royal"}
        ];


        var stateLocalstorageFriendship = $localstorage.get("friendship");
        if (stateLocalstorageFriendship == undefined) {
            $scope.friendshipButton = true;
            $scope.friendshipText = false;
        } else {
            $scope.friendshipButton = false;
            $scope.friendshipText = true;
        }

        $scope.addToFriend = function () {
            $localstorage.set("friendship", 1);
            $scope.friendshipButton = false;
            $scope.friendshipText = true;
        }

    })
    .controller('messagesCtrl', function ($scope, $stateParams) {
    })
    .controller('groupsCtrl', function ($scope) {
    })
    .controller('bookmarkCtrl', function ($scope, $stateParams) {
    })
    .controller('settingsCtrl', function ($scope) {
    })
    .controller('mystarsCtrl', function ($scope) {
        $scope.brands = [
            {name:"Sportmaster",count: 1000, imglogo:"http://ugra-live.ru/wp-content/uploads/2016/01/sportmaster_logo.jpg.png"},
            {name:"Mvideo",count: 10, imglogo:"https://pbs.twimg.com/profile_images/460779400632344576/29jgX22N.png"},
            {name:"Globus",count: 300, imglogo:"http://toplogos.ru/images/logo-globus.jpg"},
            {name:"Aushan",count: 1, imglogo:"http://seeklogo.com/images/A/Auchan_rus-logo-EA4E0BF2F0-seeklogo.com.gif"},
            {name:"Lenta",count: 0, imglogo:"https://upload.wikimedia.org/wikipedia/ru/3/30/Lenta_logo.png"},
            {name:"Re:Store",count: 555, imglogo:"http://perm24.net/com_logo/1253091118logo1_big.jpg"}
        ];
    })
;
