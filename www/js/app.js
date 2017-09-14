// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js  , 'gm'
var nodewithionic = angular.module('starter', ['ionic', 'starter.controllers', 'gm', 'ngCordova']);

nodewithionic
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('testing', {
    url:'/testing',
    templateUrl: 'templates/testing.html',
    controller:'testingctrl'
  })
  .state('signup', {
    url:'/signup',
    templateUrl: 'templates/signup.html',
    controller:'signupctrl'
  })
  .state('login', {
    url:'/login',
    templateUrl: 'templates/login.html',
    controller:'loginctrl'
  })
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl:'templates/home.html',
        controller:'homectrl'
      }
    }
  })
  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
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
  .state('app.drivers', {
    url: '/drivers',
    views: {
      'menuContent': {
        templateUrl: 'templates/driver.html',
        controller: 'driversCtrl'
      }
    }
  })
  .state('app.bookdriver', {
    cache: false,
    url: '/bookdriver',
    views: {
      'menuContent': {
        templateUrl: 'templates/bookdriver.html',
        controller: 'bookdriverCtrl'
      }
    }
  })
  .state('app.diptest', {
    cache: false,
    url: '/diptest',
    views: {
      'menuContent': {
        templateUrl: 'templates/diptest.html',
        controller: 'diptestCtrl'
      }
    }
  })
  .state('app.artest', {
    cache: false,
    url: '/artest',
    views: {
      'menuContent': {
        templateUrl: 'templates/artest.html',
        controller: 'artestCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
  //$urlRouterProvider.otherwise('/app/home');
});


//google map api key   AIzaSyA4D0qg-qOPfvbZ-2gESobBMFW5uoz8xEU


