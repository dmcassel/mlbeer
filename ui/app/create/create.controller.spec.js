/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('Controller: CreateCtrl', function () {

    var controller;
    var nextState;

    beforeEach(function() {
      bard.appModule('app.create');
      bard.inject('$controller', '$q', '$rootScope', 'MLRest', '$state', 'userService');

      bard.mockService(MLRest, {
        createDocument: $q.when('/?uri=blah')
      });

      bard.mockService($state, {
        go: function(state, params) {
          nextState = {
            state: state,
            params: params
          };
        }
      });
    });

    beforeEach(function () {
      // stub the current user
      controller = $controller('CreateCtrl', { $scope: $rootScope.$new() });
      $rootScope.$apply();
    });

    it('should be created successfully', function () {
      expect(controller).to.be.defined;
    });

    it('should add malts', function() {
      var malt = {
        iri: 'http://davidcassel.net/beer/malt#pale-ale',
        label: 'Pale Ale',
        pounds: 5,
        remainingMinutes: 90
      };
      expect(controller.recipe.maltAdditions.length).to.eq(0);
      controller.newMalt = malt;
      controller.addMalt();
      expect(controller.recipe.maltAdditions.length).to.eq(1);
      expect(controller.recipe.maltAdditions[0]).to.eq(malt);
      expect(controller.newMalt).to.eq.null;
    });

    it('should show the detail view when submitted', function() {
      controller.submit();
      $rootScope.$apply();
      expect(nextState).to.deep.eq({
        state: 'root.view',
        params: {
          uri: 'blah'
        }
      });
    });
  });
}());
