angular.module('starter.directives', [])
    .directive("repeatEnd", function(){
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                if (scope.$last) {
                    scope.$eval(attrs.repeatEnd);
                }
            }
        };
    })
    .directive('blankDirective', [function(){

}]);