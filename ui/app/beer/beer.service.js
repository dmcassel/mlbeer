(function () {
  'use strict';

  angular.module('app.beer')
    .factory('beerService', BeerService);

  BeerService.$inject = ['$rootScope', '$http', '$q'];
  function BeerService($rootScope, $http, $q) {

    function getStyles() {
      return $http({
        method: 'GET',
        url: '/api/beer/styles'
      });
    }

    function getMalts() {
      return $http({
        method: 'GET',
        url: '/api/beer/malts'
      });
    }
    return {
      getStyles: getStyles,
      getMalts: getMalts,
    };
  }
}());
