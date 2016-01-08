/* global d3 */

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

        $scope.selectedYear = 1870;
        $scope.years = d3.range(2005, 1865, -5);

        $scope.filters = {};
        $scope.hasFilters = false;

        $scope.tooltip = {};

        // FORMATS USED IN TOOLTIP TEMPLATE IN HTML
        $scope.pFormat = d3.format('.1%');  // PERCENT FORMAT
        $scope.qFormat = d3.format(',.0f'); // COMMAS FOR LARGE NUMBERS

        $scope.updateTooltip = function (data) {
          $scope.tooltip = data;
          $scope.$apply();
        };

        $scope.addFilter = function (name) {
          $scope.hasFilters = true;
          $scope.filters[name] = {
            name: name,
            hide: true
          };
          $scope.$apply();
        };

        $scope.update = function () {
          var data = $scope.master[$scope.selectedYear];

          if (data && $scope.hasFilters) {
            $scope.drawChords(data.filter(function (d) {
              var fl = $scope.filters;
              var v1 = d.importer1, v2 = d.importer2;

              if ((fl[v1] && fl[v1].hide) || (fl[v2] && fl[v2].hide)) {
                return false;
              }
              return true;
            }));
          } else if (data) {
            $scope.drawChords(data);
          }
        };

        beerService.getIngredientsByLevel(ctrl.level).then(function(response){

        });

        var csv = [
          { 'year': 1870, 'importer1': 'Belgium', 'importer2': 'France', 'flow1': 44.42, 'flow2': 54.61 },
          { 'year': 1870, 'importer1': 'Belgium', 'importer2': 'Germany', 'flow1': 23.26, 'flow2': 26.5 },
          { 'year': 1870, 'importer1': 'Belgium', 'importer2': 'Russia', 'flow1': 8.19, 'flow2': 4.36 },
          { 'year': 1870, 'importer1': 'Brazil', 'importer2': 'United Kingdom', 'flow1': 26.82, 'flow2':29.64 },
          { 'year': 1870, 'importer1': 'China', 'importer2': 'Other Trade', 'flow1': 2.03, 'flow2': 3.91 },
          { 'year': 1870, 'importer1': 'France', 'importer2': 'Germany', 'flow1': 20.68, 'flow2': 20.88 },
          { 'year': 1870, 'importer1': 'France', 'importer2': 'Italy', 'flow1': 47.18, 'flow2': 41 },
          { 'year': 1870, 'importer1': 'France', 'importer2': 'Other Trade', 'flow1': 0.85, 'flow2': 2.55 },
          { 'year': 1870, 'importer1': 'France', 'importer2': 'Russia', 'flow1': 23.59, 'flow2': 13.21 },
          { 'year': 1870, 'importer1': 'France', 'importer2': 'Spain', 'flow1': 14.85, 'flow2': 18.27 },
          { 'year': 1870, 'importer1': 'France', 'importer2': 'Sweden', 'flow1': 4.59, 'flow2': 1.1 },
          { 'year': 1870, 'importer1': 'Germany', 'importer2': 'Italy', 'flow1': 0.91, 'flow2': 2.38 },
          { 'year': 1870, 'importer1': 'Germany', 'importer2': 'Russia', 'flow1': 52.57, 'flow2': 94.28 },
          { 'year': 1870, 'importer1': 'Germany', 'importer2': 'Sweden', 'flow1': 2.43, 'flow2': 8.92 },
          { 'year': 1870, 'importer1': 'Italy', 'importer2': 'Russia', 'flow1': 6.02, 'flow2': 4.54 },
          { 'year': 1870, 'importer1': 'Netherlands', 'importer2': 'Belgium', 'flow1': 22.71, 'flow2': 26.88 },
          { 'year': 1870, 'importer1': 'Netherlands', 'importer2': 'Germany', 'flow1': 41.78, 'flow2': 58.42 },
          { 'year': 1870, 'importer1': 'Netherlands', 'importer2': 'Russia', 'flow1': 9.33, 'flow2': 4.11 },
          { 'year': 1870, 'importer1': 'Netherlands', 'importer2': 'Sweden', 'flow1': 1.19, 'flow2': 2.75 },
          { 'year': 1870, 'importer1': 'Other Trade', 'importer2': 'Belgium', 'flow1': 0, 'flow2': 9.53 },
          { 'year': 1870, 'importer1': 'Other Trade', 'importer2': 'Germany', 'flow1': 0.42, 'flow2': 2.99 },
          { 'year': 1870, 'importer1': 'Other Trade', 'importer2': 'Italy', 'flow1': 0, 'flow2': 26.91 },
          { 'year': 1870, 'importer1': 'Other Trade', 'importer2': 'Russia', 'flow1': 2.38, 'flow2': 8.98 },
          { 'year': 1870, 'importer1': 'Other Trade', 'importer2': 'United Kingdom', 'flow1': 36.79, 'flow2': 33.7 },
          { 'year': 1870, 'importer1': 'Peru', 'importer2': 'United Kingdom', 'flow1': 8.52, 'flow2': 23.61 },
          { 'year': 1870, 'importer1': 'Russia', 'importer2': 'China', 'flow1': 1.3, 'flow2': 0.14 },
          { 'year': 1870, 'importer1': 'Russia', 'importer2': 'Sweden', 'flow1': 2.42, 'flow2': 2.6 },
          { 'year': 1870, 'importer1': 'Russia', 'importer2': 'Turkey', 'flow1': 6.12, 'flow2': 6.6 },
          { 'year': 1870, 'importer1': 'Spain', 'importer2': 'Other Trade', 'flow1':1.91, 'flow2': 1.91 },
          { 'year': 1870, 'importer1': 'Spain', 'importer2': 'Russia', 'flow1': 0.27, 'flow2': 1.2 },
          { 'year': 1870, 'importer1': 'Sweden', 'importer2': 'Other Trade', 'flow1': 8.38, 'flow2': 2.43 },
          { 'year': 1870, 'importer1': 'Switzerland', 'importer2': 'Italy', 'flow1': 24.71, 'flow2': 8.97 }
        ];

        csv.forEach(function (d) {
          d.year  = +d.year;
          d.flow1 = +d.flow1;
          d.flow2 = +d.flow2;

          if (!$scope.master[d.year]) {
            $scope.master[d.year] = []; // STORED BY YEAR
          }
          $scope.master[d.year].push(d);
        });
        // $scope.update();

        ctrl.load = function() {
          $scope.update();
        };

        $scope.$watch(userService.currentUser, function(newValue) {
          ctrl.currentUser = newValue;
        });
      }
  ]);
}());
