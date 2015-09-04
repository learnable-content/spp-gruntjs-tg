angular.module('ui.router.config', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '': {
                        templateUrl: './templates/home.html'
                    },
                    'Header@home': {
                        templateUrl: './templates/nav.html',
                        controller: 'NavController'
                    },
                    'Main-Content@home': {
                        templateUrl: './templates/main-content.html',
                        controller: 'SliderController'
                    },
                    'Footer@home': {
                        templateUrl: './templates/footer.html'
                    }
                }
            })
            .state('about', {
                url: '/this-app',
                views: {
                    '': {
                        templateUrl: './templates/about.html'
                    },
                    'Header@about': {
                        templateUrl: './templates/nav.html',
                        controller: 'NavController'
                    },

                    'Top-Content@about': {
                        templateUrl: './templates/top-content.html'
                    },
                    'Bottom-Content@about': {
                        templateUrl: './templates/bottom-content.html'
                    },
                    'Footer@about': {
                        templateUrl: './templates/footer.html'
                    }
                }
            })
            .state('contact', {
                url: '/contact',
                views: {
                    '': {
                        templateUrl: './templates/contact.html'
                    },
                    'Header@contact': {
                        templateUrl: './templates/nav.html',
                        controller: 'NavController'
                    },

                    'Contact-Form@contact': {
                        templateUrl: './templates/myForm.html',
                        controller: 'MongooseController'
                    },
                    'Footer@contact': {
                        templateUrl: './templates/footer.html'
                    }
                }
            })

        .state('skills', {
                abstract: true,
                url: '/skills',
                templateUrl: './templates/skills.html'
            })
            .state("skills.routing", {
                url: "/routing",
                templateUrl: "./templates/tabs/ui-router.html"
            })
            .state("skills.grunt", {
                url: "/grunt",
                templateUrl: "./templates/tabs/grunt.html"
            })
            .state("skills.mongodb", {
                url: "/mongodb",
                templateUrl: "./templates/tabs/mongodb.html"
            })
            .state("skills.angular", {
                url: "/angular",
                templateUrl: "./templates/tabs/angular.html"
            });


        $locationProvider.html5Mode(true).hashPrefix('!')


        //END ROUTE CONFIGURTATION
    }]);