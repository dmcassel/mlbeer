(function () {
  'use strict';

  angular.module('app.create')
    .controller('CreateCtrl', CreateCtrl);

  CreateCtrl.$inject = ['uri', '$scope', '$state', 'userService', 'beerService'];

  function CreateCtrl(uri, $scope, $state, userService, beerService) {
    var ctrl = this;

    angular.extend(ctrl, {
      recipe: {
        name: null,
        source: null,
        description: null,
        style: null,
        subtype: null,
        originalGravity: 0,
        boilTime: 60,
        maltAdditions: [],
        hopAdditions: [],
        yeast: null
      },
      newMalt: {
        iri: null,
        pounds: null,
        remainingMinutes: 60
      },
      newHop: {
        iri: null,
        aau: null,
        remainingMinutes: 60
      },
      currentUser: null,
      editorOptions: {
        plugins : 'advlist autolink link image lists charmap print preview'
      },
      submit: submit,
      addMalt: addMalt,
      addHop: addHop,
      removeMalt: removeMalt,
      removeHop: removeHop,
      beerStyles: []
    });

    beerService.getStyles().then(function(response) {
      ctrl.beerStyles = response.data;
    });

    beerService.getMalts().then(function(response) {
      ctrl.malts = response.data;
    });

    beerService.getHops().then(function(response) {
      ctrl.hops = response.data;
    });

    if (uri !== undefined) {
      beerService.getRecipe(uri).then(function(response) {
        ctrl.recipe = response.data;
      });
    }

    function submit() {
      if (uri === undefined) {
        beerService.createRecipe(ctrl.recipe).then(function(response){
          $state.go('root.view', { uri: response.data.uri });
        });
      } else {
        beerService.updateRecipe(uri, ctrl.recipe).then(function(response){
          $state.go('root.view', { uri: uri });
        });
      }
    }

    function addMalt() {
      if (ctrl.newMalt) {
        ctrl.recipe.maltAdditions.push(ctrl.newMalt);
      }
      ctrl.newMalt = {
        iri: null,
        pounds: null,
        remainingMinutes: parseInt(ctrl.recipe.boilTime)
      };
    }

    function addHop() {
      if (ctrl.newHop) {
        ctrl.recipe.hopAdditions.push(ctrl.newHop);
      }
      ctrl.newHop = {
        iri: null,
        aau: null,
        remainingMinutes: parseInt(ctrl.newHop.remainingMinutes)
      };
    }

    function removeMalt(index) {
      ctrl.recipe.maltAdditions.splice(index, 1);
    }

    function removeHop(index) {
      ctrl.recipe.hopAdditions.splice(index, 1);
    }

    $scope.$watch(userService.currentUser, function(newValue) {
      ctrl.currentUser = newValue;
    });
  }
}());
