angular.module('starter.controllers', [])

    .controller('myBackCtrl', function ($scope, $ionicHistory) {
        $scope.mygoBack = function () {
            $ionicHistory.goBack();
        };
    })
    .controller('menuCtrl', function ($scope, $state, $localstorage) {
        $scope.exitAccount = function () {
            $localstorage.clear();
            $state.go('login');
        }

    })
    .controller('appCtrl', function ($scope, $ionicModal, $timeout) {

    })
    .controller('loginCtrl', function ($scope, $localstorage, $state, $ionicHistory, $ionicModal, $timeout) {
        $scope.signIn = function (username) {

            if (username == "mike") {

                $ionicHistory.nextViewOptions({
                    disableBack: true
                });

                $localstorage.set("id", 1);
                $localstorage.set("name", "mike");
                $state.go("app.profile");
            } else if (username == "ron") {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });

                $localstorage.set("id", 2);
                $localstorage.set("name", "ron");
                $state.go("app.profile");
            } else {
                $scope.invalidAuthForm = true;
            }

        }
        $scope.hideInvalidBlock = function () {
            $scope.invalidAuthForm = false;
        }
        $scope.changedUser = function (user) {
            var indx = user.index;
            $scope.user.name = $scope.users[indx];
            $scope.hideInvalidBlock();
        }

        $scope.users = ["jimmy", "mike", "ron"];
        $scope.user = {};
        $scope.user.index = 1;
        $scope.user.name = $scope.users[$scope.user.index];
    })
    .controller('feedCtrl', function ($scope) {
    })
    .controller('searchCtrl', function ($scope, $stateParams) {
    })
    .controller('profileCtrl', function ($scope, $localstorage, $ionicScrollDelegate, $ionicHistory) {
        $ionicScrollDelegate.scrollTop();
        $ionicHistory.clearHistory();
        $ionicHistory.clearCache();

        $scope.getProgress = function () {
            var rand = Math.floor(Math.random() * (95 - 10 + 1) + 10);
            console.log(rand);
            return rand;
        };

        $scope.Chart = {};
        $scope.Chart.progress = $scope.getProgress();
        $scope.progressLabel = $scope.Chart.progress + "%";


        $scope.brands = [
            {id: 1, name: 'Лента'},
            {id: 2, name: 'Магнит'},
            {id: 3, name: 'Ашан'},
            {id: 4, name: 'Карусель'}
        ];
        $scope.brand = {};
        $scope.brand.index = 1;

        $scope.progressPercent = 0;

        $scope.profileWall = [
            {url_img: "img/cat.jpeg", text: "Про котЭ", color: "positive"},
            {url_img: "img/dog.jpeg", text: "Про собакЭ", color: "calm"},
            {url_img: "img/sove.jpg", text: "Про совЭ", color: "royal"}
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

        /* 22.05.2016 г */
        $scope.Charts={};

        $scope.profileRewards = [
            {id: 1, orgName: 'Азбука Вкуса',orgLogo: 'img/av.jpg', orgBg: 'img/cezar.jpg', cardChartPercent: 65, dopItems: [
                {id: 1, avatar: 'img/dog.jpeg', description: 'Вино столовое', descriptionPercent: 15}]
            },
            {id: 2, orgName: 'Re Store',orgLogo: 'img/re-store_logo.png', orgBg: 'img/re-store_bg.jpg', cardChartPercent: 25, dopItems: [
                {id: 1, avatar: 'img/sove.jpg', description: 'Приведи друга', descriptionPercent: 50},
                {id: 2, avatar: 'img/cat.jpeg', description: 'Iphone 8G', descriptionPercent: 18}]
            },
        ];


        /***************/


    })
    .controller('messagesCtrl', function ($scope, $state, $localstorage, Items, $timeout, $ionicScrollDelegate, $ionicPopup) {

        $scope.showAlert = function (message) {
            var alertPopup = $ionicPopup.alert({
                title: 'Результаты обмена',
                template: message
            });

            alertPopup.then(function (res) {

            });
        };

        $scope.showConfirm = function () {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Вам предложен обмен!',
                template: 'Вы согласны с предложением? Тогда жмем ОК, либо Cancel чтобы отклонить'
            });

            confirmPopup.then(function (res) {
                var message;
                var i = $scope.activeOffer;
                var f = new Firebase("https://status873854.firebaseio.com/items/" + i.$id);

                console.log();
                if (res) {
                    f.child("statusOffer").set(200);
                    message = "Обмен состоялся!";
                } else {
                    f.child("statusOffer").set(500);
                    message = "Обмен не состоялся =(";
                }
                console.log(Items);
                $scope.items = Items;
                $scope.showAlert(message);
            });
        };

        $scope.iduser = $localstorage.get("id");
        $scope.addItem = function () {
            var text = $scope.message;
            var user = $localstorage.get("id");
            if (text) {
                $scope.items.$add({
                    "from": user,
                    "text": text,
                    "type": 0,
                    "statusOffer": 0
                });
            }
            $scope.message = "";
            $ionicScrollDelegate.scrollBottom();
        };

        $scope.getItems = function () {
            $scope.items = Items;
            $ionicScrollDelegate.scrollBottom();
        }
        $scope.goToExchange = function () {
            $state.go('app.exchange');
        }

        $scope.getItems();
        //$timeout(function(){
        //    $ionicScrollDelegate.scrollBottom();
        //},900);
        //$scope.$on('$ionicView.afterEnter', function(){
        //    $timeout(function(){
        //        console.log("before scrollBottom");
        //        $ionicScrollDelegate.scrollBottom();
        //    },900);//832
        //});
        $scope.onEnd = function (item) {
            $timeout(function () {
                $scope.activeOffer = item;
                if (item.type == 1 && Number(item.from) != $localstorage.get('id')) {
                    $scope.showConfirm();
                }
                $ionicScrollDelegate.scrollBottom();

            }, 1);
        };

        $timeout(function (Items) {
            $scope.getItems();
        }, 1000, true);
    })

    .controller('groupsCtrl', function ($scope, $state, $ionicScrollDelegate) {
        $ionicScrollDelegate.scrollTop();
        $scope.$on('$ionicView.beforeEnter', function () {
            $scope.groups = [
                {
                    id: 1,
                    name: "Любители походов",
                    count: 1000,
                    logo: "http://ctc-kuzbass.ru/wp-content/uploads/2015/06/Kak-pravilno-splanirovat-pohod-na-prirodu.jpg"
                },
                {
                    id: 2,
                    name: "Любители плавать",
                    count: 1000000,
                    logo: "http://www.13min.ru/wp-content/uploads/2012/08/Rebjonok-uchitsja-plavat.jpg"
                },
                {
                    id: 3,
                    name: "Любители любителей походов",
                    count: 3,
                    logo: "http://www.islam.ru/sites/default/files/img/obshestvo/2011/11/ulibka01_b.jpg"
                },
                {
                    id: 4,
                    name: "Любители любителей плавать",
                    count: 10,
                    logo: "http://dobriygu.ru/wp-content/uploads/2013/04/vnutrennyaya-ulyibka.jpg"
                },
                {
                    id: 5,
                    name: "Любители мяса",
                    count: 5000,
                    logo: "http://www.knorr.ru/Images/1032/1032-287437-meet.jpg"
                },
                {
                    id: 6,
                    name: "Любители селедки",
                    count: 78400,
                    logo: "http://www.timeboil.ru/img/site/12969313911307.jpg"
                },
                {
                    id: 7,
                    name: "Любители огурцов",
                    count: 35,
                    logo: "http://mir-ovosey.ru/wp-content/uploads/2011/04/ogurec4.jpg"
                },
                {
                    id: 8,
                    name: "Любители собак",
                    count: 7,
                    logo: "http://dermatyt.ru/wp-content/uploads/2015/02/sobaka-1.jpg"
                },
                {
                    id: 9,
                    name: "Любители собак",
                    count: 7,
                    logo: "http://dermatyt.ru/wp-content/uploads/2015/02/sobaka-1.jpg"
                },
                {
                    id: 10,
                    name: "Любители собак",
                    count: 7,
                    logo: "http://dermatyt.ru/wp-content/uploads/2015/02/sobaka-1.jpg"
                },
            ];


            $scope.goToGroup = function (id, name, logo) {
                $state.go('app.groupProfile', {id: id, name: name, logo: logo});
            }
        });
    })
    //.controller('bookmarkCtrl', function ($scope, $stateParams) {
    //})
    .controller('rewardsCtrl', function ($scope, $stateParams, $timeout) {
        $scope.item = {class: "#D4D4D4", width: 10};

        $scope.rewards = [
            {
                id: 1,
                name: "Reward 1",
                using: false,
                img: "img/nike.jpg",
                percent: {progress: 35, color: 'white'},
                color_line: 'indigo'
            },
            {
                id: 2,
                name: "Reward 2",
                using: false,
                img: "img/milk.jpeg",
                percent: {progress: 30, color: 'black'},
                color_line: 'darkorange'
            },
            {
                id: 3,
                name: "Reward 3",
                using: false,
                img: "img/case.png",
                percent: {progress: 20, color: 'white'},
                color_line: 'blue'
            }
        ];

        $scope.activeTabs = [];
        $scope.showDetails = function (_key) {
            if ($scope.activeTabs.indexOf(_key) > -1) {
                return true;
            } else {
                return false;
            }
        }

        $scope.toogleRating = function (key, percent) {
            if ($scope.showDetails(key)) {
                //if it is, remove it from the activeTabs array
                $scope.activeTabs.splice($scope.activeTabs.indexOf(key), 1);
                $scope.changeWidthMainProgress(percent, false);


            } else {
                // if it's not, add it!
                $scope.activeTabs.push(key);
                $scope.changeWidthMainProgress(percent, true);


            }
        }

        $scope.changeWidthMainProgress = function (percent, add) {
            if (add == true) {
                var i = 1;
                while (i <= percent) {
                    $scope.item.width++;
                    i++;
                }
            } else {
                var i = 1;
                while (i <= percent) {
                    $scope.item.width--;
                    i++;
                }
            }
        }
    })
    .controller('friendsCtrl', function ($scope, $stateParams, $cordovaContacts, $ionicPlatform) {
        var opts = {
            multiple: true,
            fields: ['displayName', 'name']
        };

        if (ionic.Platform.isAndroid()) {
            opts.hasPhoneNumber = true;
        }

        $ionicPlatform.ready(function () {
            $cordovaContacts.find(opts)
                .then(function (allContacts) {
                    $scope.contacts = allContacts;
                    console.log(allContacts);// Do yo thang with all the contacts!
                });
        });
    })
    .controller('settingsCtrl', function ($scope) {
    })
    .controller('rewards2Ctrl', function ($scope, $rootScope, $location) {
        $scope.tabs = [
            {"text": "Home"},
            {"text": "Games"},
            {"text": "Mail"},
            {"text": "Work"},
            {"text": "State"},

        ];
        $scope.activeIndexSlide = 0;
        $scope.mainProgressWidth = 20;
        $scope.onSlideMove = function (data) {

            if (data.index > $scope.activeIndexSlide) {
                $scope.mainProgressWidth += 20;
            } else if (data.index < $scope.activeIndexSlide) {
                $scope.mainProgressWidth -= 20;
            } else {
                $scope.mainProgressWidth -= 0;
            }
            $scope.activeIndexSlide = data.index;
        };

        $scope.rewards = [
            {
                id: 1,
                name: "Мода мода мода",
                using: false,
                img: "img/nike.jpg",
                category: {text: 'Кроссовки Nike', color: 'white'},
                color_line: 'indigo',
                time_to_end: '12:00:00'
            },
            {
                id: 2,
                name: "О здоровье",
                using: false,
                img: "img/milk.jpeg",
                category: {text: 'Молоко из под ...', color: 'white'},
                color_line: 'darkorange',
                time_to_end: '2:05:45'
            },
            {
                id: 3,
                name: "Для девайса",
                using: false,
                img: "img/case.png",
                category: {text: 'Защита Iphone', color: 'white'},
                color_line: 'blue',
                time_to_end: '00:10:01'
            }
        ];

    })
    .controller('mystarsCtrl', function ($scope) {
        $scope.brands = [
            {
                name: "Sportmaster",
                count: 1000,
                imglogo: "http://ugra-live.ru/wp-content/uploads/2016/01/sportmaster_logo.jpg.png"
            },
            {
                name: "Mvideo",
                count: 10,
                imglogo: "https://pbs.twimg.com/profile_images/460779400632344576/29jgX22N.png"
            },
            {name: "Globus", count: 300, imglogo: "http://toplogos.ru/images/logo-globus.jpg"},
            {
                name: "Aushan",
                count: 1,
                imglogo: "http://seeklogo.com/images/A/Auchan_rus-logo-EA4E0BF2F0-seeklogo.com.gif"
            },
            {name: "Lenta", count: 0, imglogo: "https://upload.wikimedia.org/wikipedia/ru/3/30/Lenta_logo.png"},
            {name: "Re:Store", count: 555, imglogo: "http://perm24.net/com_logo/1253091118logo1_big.jpg"}
        ];
    })
    .controller('groupProfileCtrl', function ($scope, $state, $stateParams, swipeMenu, $ionicSideMenuDelegate) {
        $scope.infoGroup = {titleGroup: $stateParams.name, logo: $stateParams.logo};
        $scope.$on('$ionicView.beforeEnter', function () {

            $scope.groupWall = [
                {url_img: "img/cat.jpeg", text: "Про котЭ", color: "positive"},
                {url_img: "img/dog.jpeg", text: "Про собакЭ", color: "calm"},
                {url_img: "img/sove.jpg", text: "Про совЭ", color: "royal"}
            ];
            $scope.showFullInfo = function () {
                //$scope.fullInfo = true;
                if ($scope.fullInfo == true) {
                    $scope.fullInfo = false;
                } else {
                    $scope.fullInfo = true;
                }
            }


            var usersWithStars = [
                {id: 10, name: "Василий Иваныч", stars: 48, city: "Boston"},
                {id: 11, name: "Петька", stars: 48, city: "Roterdam"},
                {id: 12, name: "Анка Пулеметчица", stars: 48, city: "The Rashka"},
                {id: 13, name: "Василий Иваныч", stars: 48, city: "Boston"},
                {id: 14, name: "Петька", stars: 48, city: "Roterdam"},
                {id: 15, name: "Анка Пулеметчица", stars: 48, city: "The Rashka"},
                {id: 16, name: "Василий Иваныч", stars: 48, city: "Boston"},
                {id: 17, name: "Петька", stars: 48, city: "Roterdam"},
                {id: 18, name: "Анка Пулеметчица", stars: 48, city: "The Rashka"},
                {id: 19, name: "Василий Иваныч", stars: 48, city: "Boston"},
                {id: 20, name: "Петька", stars: 48, city: "Roterdam"},
                {id: 21, name: "Анка Пулеметчица", stars: 48, city: "The Rashka"},
                {id: 22, name: "Василий Иваныч", stars: 48, city: "Boston"},
                {id: 23, name: "Петька", stars: 48, city: "Roterdam"},
                {id: 24, name: "Анка Пулеметчица", stars: 48, city: "The Rashka"}
            ];
            $scope.usersListInGroupWithStars = usersWithStars;

            $scope.goToGroupUsers = function () {
                $state.go('app.userGroupList', {group: $stateParams.id, user: 1, isfriend: "0"});
            }
            $scope.goToGroupFriends = function () {
                $state.go('app.userGroupList', {group: $stateParams.id, user: 1, isfriend: "1"});
            }
            //$ionicSideMenuDelegate.canDragContent(true);
        });


    })
    .controller('userGroupListCtrl', function ($scope, $state, $stateParams, swipeMenu, $ionicTabsDelegate) {
        // $scope.$on('$ionicView.beforeEnter', function() {
        var friendsUser1 = [
            {id: 10, name: "Василий Иваныч", old: 48, city: "Boston"},
            {id: 11, name: "Петька", old: 22, city: "Roterdam"},
            {id: 12, name: "Анка Пулеметчица", old: 30, city: "The Rashka"}
        ];
        var allUsers = [
            {id: 10, name: "Василий Иваныч", old: 48, city: "Boston"},
            {id: 11, name: "Петька", old: 48, city: "Roterdam"},
            {id: 12, name: "Анка Пулеметчица", old: 48, city: "The Rashka"},
            {id: 13, name: "Василий Иваныч", old: 48, city: "Boston"},
            {id: 14, name: "Петька", old: 48, city: "Roterdam"},
            {id: 15, name: "Анка Пулеметчица", old: 48, city: "The Rashka"},
            {id: 16, name: "Василий Иваныч", old: 48, city: "Boston"},
            {id: 17, name: "Петька", old: 48, city: "Roterdam"},
            {id: 18, name: "Анка Пулеметчица", old: 48, city: "The Rashka"},
            {id: 19, name: "Василий Иваныч", old: 48, city: "Boston"},
            {id: 20, name: "Петька", old: 48, city: "Roterdam"},
            {id: 21, name: "Анка Пулеметчица", old: 48, city: "The Rashka"},
            {id: 22, name: "Василий Иваныч", old: 48, city: "Boston"},
            {id: 23, name: "Петька", old: 48, city: "Roterdam"},
            {id: 24, name: "Анка Пулеметчица", old: 48, city: "The Rashka"}
        ];

        if ($stateParams.isfriend == "1") {
            $scope.usersListInGroup = friendsUser1;
            $scope.titleUserGroupList = "You friends"
        }
        else {
            $scope.usersListInGroup = allUsers;
            $scope.titleUserGroupList = "All users"
        }
        //});

    })
    .controller('exchangeCtrl', function ($scope, $state, $localstorage, Items, $timeout, nameMagazine) {
        $scope.items = Items;

        $scope.sendExchange = function (exchange) {
            var nameSender = $localstorage.get('name');
            var nameRecepient = ($localstorage.get('id') == 1) ? 'mike' : 'ron';
            var nameMagSender = nameMagazine.get(exchange.selectSend);
            var nameMagRecepient = nameMagazine.get(exchange.selectNeed);
            var text = "Пользователь " + nameSender + " предлагает вам совершить обмен. ";
            text += " Предложение: " + exchange.numberSend + " звезд из " + nameMagSender;
            text += " в обмен на " + exchange.numberNeed + " из " + nameMagRecepient + " .";
            var user = $localstorage.get("id");
            if (text) {
                $scope.items.$add({
                    "from": user,
                    "text": text,
                    "type": 1
                });
            }

            $state.go('app.messages');

        }
    })
    .controller('exitCtrl', function ($scope, $state, $ionicHistory, $localstorage) {

        $localstorage.clear();
        console.log($localstorage);
        $state.go('login');
    })
    .controller('favoritesCtrl', function ($scope, $state, $ionicHistory, $localstorage) {
        $scope.rewardsFavorites = [
            {
                id: 1,
                name: "Мода мода мода",
                using: false,
                img: "img/nike.jpg",
                category: {text: 'Кроссовки Nike', color: 'white'},
                color_line: 'indigo',
                time_to_end: '12:00:00'
            },
            {
                id: 3,
                name: "Для девайса",
                using: false,
                img: "img/case.png",
                category: {text: 'Защита Iphone', color: 'white'},
                color_line: 'blue',
                time_to_end: '00:10:01'
            }
        ];


    })
;
