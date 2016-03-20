angular.module('starter.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
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
        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/feed');
        //$urlRouterProvider.otherwise('/profile');
    });