angular.module('starter.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',

                templateUrl: 'templates/menu.html',
                controller: 'appCtrl'
            })

            .state('app.feed', {
                url: '/feed',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/feed.html',
                        controller: 'feedCtrl'
                    }
                }
            })
            .state('app.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/search.html',
                        controller: 'searchCtrl'
                    }
                }
            })
            .state('app.profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/profile.html',
                        controller: 'profileCtrl'
                    }
                }
            })
            .state('app.messages', {
                url: '/messages',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/messages.html',
                        controller: 'messagesCtrl'
                    }
                }
            })
            .state('app.groups', {
                url: '/groups',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/groups.html',
                        controller: 'groupsCtrl'
                    }
                }
            })
            .state('app.bookmark', {
                url: '/bookmark',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/bookmark.html',
                        controller: 'bookmarkCtrl'
                    }
                }
            })
            .state('app.settings', {
                url: '/settings',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings.html',
                        controller: 'settingsCtrl'
                    }
                }
            })
            .state('app.mystars', {
                url: '/mystars',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/mystars.html',
                        controller: 'mystarsCtrl'
                    }
                }
            })
            .state('app.groupProfile', {
                url: '/groupProfile/:id/:name/:logo',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/groupProfile.html',
                        controller: 'groupProfileCtrl'
                    }
                }
            })
            .state('app.userGroupList', {
                url: '/userGroupList/:group/:user/:isfriend',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/userGroupList.html',
                        controller: 'userGroupListCtrl'
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
                //views: {
                //    'menuContent': {
                //        templateUrl: 'templates/login.html',
                //        controller: 'loginCtrl'
                //    }
                //}
            })
            .state('exit', {
                url: '/exit',
                //templateUrl: 'templates/exit.html',
                controller: 'exitCtrl'
            })

            .state('app.exchange', {
                url: '/exchange',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/exchange.html',
                        controller: 'exchangeCtrl'
                    }
                }
            })
            .state('app.rewards', {
                url: '/rewards',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/rewards.html',
                        controller: 'rewardsCtrl'
                    }
                }
            })
            .state('app.friends', {
                url: '/friends',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/friends.html',
                        controller: 'friendsCtrl'
                    }
                }
            })
        ;
        // if none of the above states are matched, use this as the fallback
        //$urlRouterProvider.otherwise('/app/messages');
       $urlRouterProvider.otherwise('/login');
    });
