// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.routes', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    //if (window.StatusBar) {
    //  // org.apache.cordova.statusbar required
    //  StatusBar.styleDefault();
    //}
    if (ionic.Platform.isAndroid()) {
      StatusBar.backgroundColorByHexString("#f8f8f8");
    } else {
      StatusBar.styleLightContent();
    }
    //setTimeout(function(){
    //  navigator.splashscreen.hide();
    //},100);
    $timeout(function() {
      navigator.splashscreen.hide();
    }, 500);
  });
});