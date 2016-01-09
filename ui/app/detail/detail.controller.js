(function () {
  'use strict';
  angular.module('app.detail', ['ngSanitize'])
  .controller('DetailCtrl', DetailCtrl);

  DetailCtrl.$inject = ['$state', '$stateParams', 'beerService'];
  function DetailCtrl($state, $stateParams, beerService) {
    var ctrl = this;

    var uri = $stateParams.uri;

    angular.extend(ctrl, {
      uri : uri,
      edit: function() {
        $state.go('root.edit', { uri: uri });
      }
    });

    beerService.getRecipe(uri).then(function(response) {
      ctrl.recipe = response.data;
    });
  }
}());
