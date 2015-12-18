(function () {
  'use strict';

  angular.module('app.beer')
    .factory('beerService', BeerService);

  BeerService.$inject = ['$rootScope', '$http', '$q'];
  function BeerService($rootScope, $http, $q) {

    var styles = null;

    function loadStyles() {
      return $http({
        method: 'GET',
        url: '/api/beer/styles'
      });
    }

    function getStyles() {
      return $http({
        method: 'GET',
        url: '/api/beer/styles'
      });
    }

    function getSubtypes(type) {
    }

    return {
      getStyles: getStyles,
      getSubtypes: getSubtypes
    };
  }
}());
