(function () {
  'use strict';

  angular.module('app.create')
    .controller('CreateCtrl', CreateCtrl);

  CreateCtrl.$inject = ['$scope', 'MLRest', '$state', 'userService'];

  function CreateCtrl($scope, mlRest, $state, userService) {
    var ctrl = this;

    angular.extend(ctrl, {
      recipe: {
        name: null,
        source: null,
        description: null,
        type: null,
        subtype: null,
        originalGravity: 0,
        boilTime: 60,
        maltAdditions: [],
        hopAdditions: [],
        yeast: null
      },
      newMalt: {
        iri: null,
        label: null,
        pounds: null,
        remainingMinutes: 60
      },
      newTag: null,
      currentUser: null,
      editorOptions: {
        plugins : 'advlist autolink link image lists charmap print preview'
      },
      submit: submit,
      addMalt: addMalt,
      removeMalt: removeMalt
    });

    function submit() {
      mlRest.createDocument(ctrl.recipe, {
        format: 'json',
        directory: '/content/',
        extension: '.json',
        collection: ['data', 'data/recipe']
        // TODO: add read/update permissions here like this:
        // 'perm:sample-role': 'read',
        // 'perm:sample-role': 'update'
      }).then(function(response) {
        $state.go('root.view', { uri: response.replace(/(.*\?uri=)/, '') });
      });
    }

    function addMalt() {
      if (ctrl.newMalt) {
        ctrl.recipe.maltAdditions.push(ctrl.newMalt);
      }
      ctrl.newMalt = {
        iri: null,
        label: null,
        pounds: null,
        remainingMinutes: 60
      };
    }

    function removeMalt(index) {
      ctrl.recipe.maltAdditions.splice(index, 1);
    }

    $scope.$watch(userService.currentUser, function(newValue) {
      ctrl.currentUser = newValue;
    });
  }
}());
