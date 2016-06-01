// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core',
                           'firebase',
                           'ngCordova',
    'ngSanitize','tabSlideBox',
                           'ionMDRipple',
                           'starter.controllers',
                           'starter.routes',
                           'starter.services',
                           'starter.directives',
    'angular-svg-round-progressbar'])

    .run(function ($ionicPlatform, $cordovaStatusbar, $timeout, $rootScope, $location) {
        $rootScope.$on("$locationChangeStart", function(event, next, current){
            $rootScope.error = null;
            var path = $location.path();
        });

        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
              // org.apache.cordova.statusbar required
              //StatusBar.styleDefault();

                StatusBar.backgroundColorByHexString('#BCBCBC');

                $cordovaStatusbar.overlaysWebView(true);
            }

            ionic.Platform.fullScreen(true,true);
            //ionic.Platform.showStatusBar(true);
            //if (ionic.Platform.isAndroid()) {
            //    StatusBar.backgroundColorByHexString("#f8f8f8");
            //} else {
            //    StatusBar.styleLightContent();
            //}
            //setTimeout(function(){
            //  navigator.splashscreen.hide();
            //},100);


            $ionicPlatform.ready(function() {
                var push = new Ionic.Push({
                    "debug": true
                });

                push.register(function(token) {
                    push.saveToken(token);  // persist the token in the Ionic Platform
                });
            });
        });
    })
    .config(function ($ionicConfigProvider) {
        $ionicConfigProvider.views.transition('platform');
        $ionicConfigProvider.backButton.icon('ion-ios-arrow-back');
        $ionicConfigProvider.backButton.text('');                  // default is 'Back'
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.navBar.alignTitle('center');
        //$ionicConfigProvider.scrolling.jsScrolling(true);
    })
;