app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise(function(){
    window.location = "/#!/";
  });

  $stateProvider
    .state({
      name: "main",
      url: "/",
      templateUrl: "views/main.html",
      controller: "MainCtrl"
    })
    .state({
      name: "me",
      url: "/me",
      templateUrl: "views/me.html",
      controller: "MeCtrl"
    })
    .state({
      name: "work",
      url: "/work",
      templateUrl: "views/work.html",
      controller: "WorkCtrl"
    })
    .state({
      name: "contact",
      url: "/contact",
      templateUrl: "views/contact.html",
      controller: "ContactCtrl"
    });
});