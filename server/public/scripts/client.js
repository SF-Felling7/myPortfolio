console.log( 'Working' );

var portFolioApp = angular.module( 'portFolioApp', ['ngRoute'] );


portFolioApp.config(function($routeProvider, $locationProvider) {
 $routeProvider.when('/about', {
   templateUrl: '/views/pages/about.html',
 }).when( '/contact',{
   templateUrl: '/views/pages/contact.html'
 }).when( '/gallery', {
   templateUrl: '/views/pages/gallery.html'
 }).otherwise('/');

 $locationProvider.html5Mode(true);

});
