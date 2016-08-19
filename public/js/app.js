angular.module("InphinityN1", ["ui.router"])
.config( function($stateProvider, $urlRouterProvider){
    $urlRouterProvider
        .otherwise('/home')
    $stateProvider
    
    .state('client-dashboard',{
        url: "/client-dashboard:id",
        templateUrl: "/views/client-dashboard.html"
    })
    .state('admin-dashboard', {
        url: "/admin-dashboard:id",
        templateUrl: "./views/admin-dashboard.html"
    })
    .state('home', {
        url: "/home",
        templateUrl: "./views/home.html"
    })
    .state('about', {
        url:"/about",
        templateUrl: "./views/about.html"
    })
    .state('contact', {
        url: "/contact",
        templateUrl: "./views/contact.html"
    })
    .state('services', {
        url: "/services",
        templateUrl: "./views/services.html"
    })
    .state('packages', {
        url: "/packages",
        templateUrl: "./views/packages.html"
    })
    .state('music', {
        url: "/music",
        templateUrl: "./views/music.html",
        controller: "musicCtrl"
    })
    .state('modeling', {
        url: "/modeling",
        templateUrl: "./views/modeling.html"
    })
    .state('brand-marketing', {
        url: "/brand-marketing",
        templateUrl: "./views/brand-marketing.html"
    })
})