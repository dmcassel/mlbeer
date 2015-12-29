(function () {
  'use strict';
  angular.module('app.detail', ['ngSanitize'])
  .controller('DetailCtrl', DetailCtrl);

  DetailCtrl.$inject = ['$stateParams', 'beerService'];
  function DetailCtrl($stateParams, beerService) {
    var ctrl = this;

    var uri = $stateParams.uri;

    angular.extend(ctrl, {
      uri : uri,
      edit: function() {
        alert('click');
      }
    });

    beerService.getRecipe(uri).then(function(response) {
      ctrl.recipe = response.data;
    });
  }
}());
