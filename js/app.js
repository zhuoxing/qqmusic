var app = angular.module('myApp',['ionic','myController']);


//配置块
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider.state('main',{

      abstract:true,
      templateUrl:'view/main.html',

    }).state('main.recom', {
        url: '/recom',
        views: {
            'main-recom': {
                templateUrl: 'view/main-recom.html',
                controller: 'myCtrl'
            }
        }
    }).state('main.all', {
        url: '/all',
        views: {
            'main-all': {
                templateUrl: 'view/main-all.html',
                controller: 'allCtrl'
            }
        }
    }).state('main.new', {
        url: '/new',
        views: {
            'main-new': {
                templateUrl: 'view/main-new.html',
                controller: 'myCtrl'
            }
        }
    })

    $urlRouterProvider.otherwise('recom');
}])