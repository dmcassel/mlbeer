(function () {
  'use strict';

  angular.module('app.beer')
    .factory('beerService', BeerService);

  BeerService.$inject = ['$rootScope', '$http', '$q'];
  function BeerService($rootScope, $http, $q) {

    function createRecipe(recipe) {
      return $http.post(
        '/api/recipe',
        recipe
      );
    }

    function updateRecipe(uri, recipe) {
      return $http.put(
        '/api/recipe?uri=' + uri,
        recipe
      );
    }

    function getRecipe(uri) {
      return $http({
        method: 'GET',
        url: '/api/recipe?uri=' + uri
      });
    }

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

    function getHops() {
      return $http({
        method: 'GET',
        url: '/api/beer/hops'
      });
    }

    function getIngredientsByLevel(level) {
      return $http({
        method: 'GET',
        url: '/api/ingredients?level=' + level
      });
    }

    return {
      createRecipe: createRecipe,
      updateRecipe: updateRecipe,
      getStyles: getStyles,
      getMalts: getMalts,
      getHops: getHops,
      getRecipe: getRecipe,
      getIngredientsByLevel: getIngredientsByLevel
    };
  }
}());
