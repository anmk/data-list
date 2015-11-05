/** ===================================================================================
 *  Project: Blacklist
 *  Author: Andrzej Kałowski
 *  $id: main.js
 *  ===================================================================================
 */

(function(){

'use strict';

/**
 * @ngdoc function
 * @name blacklistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blacklistApp
 */

angular.module('blacklistApp')
  .controller('MainCtrl', function ($scope) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /* Initial data */
    $scope.blacklist = {
      headerText: 'Blacklist',
      value: 'Value',
      joined: 'Blacklisted on',
      items: [{ mail: 'palpatine@empire.sw', dateStamp: '28-02-2015' },
              { mail: 'luke@rebel.com', dateStamp: '12-03-2015' },
              { mail: 'yoda@dagobah.com', dateStamp: '23-03-2015' },
              { mail: 'vader@bestdad.com', dateStamp: '21-07-2015' },
              { mail: 'chewie@uuuaaaarrr.com', dateStamp: '07-09-2015' }]
    };

    /* Current date */
    $scope.blacklist.date = new Date();

    /* List header visibility */
    $scope.listHeaderVisibility = function() {
      if ($scope.blacklist.items.length > 0) {
        $scope.listHeader = {'visibility': 'visible'}; // then list header will visible.
      } else {
        $scope.listHeader = {'visibility': 'hidden'}; // then list header will hidden.
      }
    };

    /* Adding line */
    $scope.addNewItem = function (item) {
      $scope.blacklist.items.push({ mail: item, dateStamp: $scope.blacklist.date });
      $scope.listHeaderVisibility();
    };

    /* Remove of the line */
    $scope.removeItem = function(item) {
      $scope.blacklist.items.splice($scope.blacklist.items.indexOf(item),1);
      $scope.listHeaderVisibility();
    };
    
  });

})();