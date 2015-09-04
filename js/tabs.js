var tabs = angular.module('tabs.controller', [])

tabs.controller("TabController", function($rootScope, $scope, $state) {        
    
    $scope.tabs = [
        { heading: "Tab 1", route:"skills.tab1", active:true },
        { heading: "Tab 2", route:"skills.tab2", active:false },
        { heading: "Tab 3", route:"skills.tab3", active:false },
        { heading: "Tab 4", route:"skills.tab4", active:false }
    ];
 
    $scope.go = function(route){
        $state.go(route);
    };
 
    $scope.active = function(route){
        return $state.is(route);
    };
 
    $scope.$on("$stateChangeSuccess", function() {
        $scope.tabs.forEach(function(tab) {
            tab.active = $scope.active(tab.route);
        });
    });
});