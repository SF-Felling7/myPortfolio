console.log( 'Working' );

var portFolioApp = angular.module( 'portFolioApp', ['ng-route'] );


portFolioApp.config(function($routeProvider, $locationProvider) {
 $routeProvider.when('/about', {
   templateUrl: '/views/pages/about.html',
   controller: 'aboutController as ac'
 }).when( '/contact',{
   templateUrl: '/views/pages/contact.html',
   controller: 'contactController as cc'
 }).when( '/gallery', {
   templateUrl: '/views/pages/gallery.html',
   controller: 'galleryController as gc'
 }).otherwise('/');

 $locationProvider.html5Mode(true);

});
