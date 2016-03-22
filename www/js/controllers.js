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
    .controller('groupsCtrl', function ($scope, $state, $ionicScrollDelegate) {
        $ionicScrollDelegate.scrollTop();
        $scope.groups = [
            {id: 1, name: "Любители походов",count: 1000, logo: "http://ctc-kuzbass.ru/wp-content/uploads/2015/06/Kak-pravilno-splanirovat-pohod-na-prirodu.jpg"},
            {id: 2, name: "Любители плавать",count: 1000000, logo: "http://www.13min.ru/wp-content/uploads/2012/08/Rebjonok-uchitsja-plavat.jpg"},
            {id: 3, name: "Любители любителей походов",count: 3, logo: "http://www.islam.ru/sites/default/files/img/obshestvo/2011/11/ulibka01_b.jpg"},
            {id: 4, name: "Любители любителей плавать",count: 10, logo: "http://dobriygu.ru/wp-content/uploads/2013/04/vnutrennyaya-ulyibka.jpg"},
            {id: 5, name: "Любители мяса",count: 5000, logo: "http://www.knorr.ru/Images/1032/1032-287437-meet.jpg"},
            {id: 6, name: "Любители селедки",count: 78400, logo: "http://www.timeboil.ru/img/site/12969313911307.jpg"},
            {id: 7, name: "Любители огурцов",count: 35, logo: "http://mir-ovosey.ru/wp-content/uploads/2011/04/ogurec4.jpg"},
            {id: 8, name: "Любители собак",count: 7, logo: "http://dermatyt.ru/wp-content/uploads/2015/02/sobaka-1.jpg"},
        ];

        $scope.goToGroup = function(id, name, logo){
            $state.go('app.groupProfile',{id:id,name:name,logo:logo});
        }
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
    .controller('groupProfileCtrl', function ($scope, $state, $stateParams) {
        $scope.infoGroup = {titleGroup:$stateParams.name, logo: $stateParams.logo};
        $scope.groupWall = [
            {url_img: "img/cat.jpeg",text: "Про котЭ",color: "positive"},
            {url_img: "img/dog.jpeg",text: "Про собакЭ",color: "calm"},
            {url_img: "img/sove.jpg",text: "Про совЭ",color: "royal"}
        ];
        $scope.showFullInfo = function(){
            //$scope.fullInfo = true;
            if($scope.fullInfo == true){
                $scope.fullInfo = false;
            }else{
                $scope.fullInfo = true;
            }
        }
    })
;
