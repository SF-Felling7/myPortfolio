var portFolioApp = angular.module('portFolioApp', ['ngRoute']);


portFolioApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<div><header id="main"><h1 class="myBrand">Sean F. Felling</h1><h3 class="myBrand">Full Stack Web Developer</h3></header></div>',
    controller: ''
  }).when('/home', {
    templateUrl: '/views/pages/home.html'
  }).when('/about', {
    templateUrl: '/views/pages/about.html'
  }).when('/contact', {
    templateUrl: '/views/pages/contact.html'
  }).when('/gallery', {
    templateUrl: '/views/pages/gallery.html'
  }).otherwise('/');

  $locationProvider.html5Mode(true);

});
