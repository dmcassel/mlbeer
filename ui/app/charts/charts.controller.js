(function () {
  'use strict';

  angular.module('app.charts')
    .controller('ChartsCtrl', ['$scope', 'userService', 'beerService',

      function ($scope, userService, beerService) {
        var ctrl = this;

        angular.extend(ctrl, {
          level: 'type'
        });

        $scope.master = {}; // MASTER DATA STORED BY YEAR

        $scope.filters = {};
        $scope.hasFilters = false;

        $scope.addFilter = function (name) {
          $scope.hasFilters = true;
          $scope.filters[name] = {
            name: name,
            hide: true
          };
          $scope.$apply();
        };

        $scope.update = function () {
          var data = $scope.master;

          $scope.setKeys(['style', 'ingredient']);

          $scope.drawChords(data);
        };

        beerService.getIngredientsByLevel(ctrl.level).then(function(response){
          $scope.master = response.data;
        });

        ctrl.load = function() {
          $scope.update();
        };

        $scope.$watch(userService.currentUser, function(newValue) {
          ctrl.currentUser = newValue;
        });
      }
  ]);
}());
