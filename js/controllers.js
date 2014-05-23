var APP2 = angular.module('starter.controllers', []);

APP2.controller('DashCtrl', function($scope, Comandos) {
    $scope.comandos = Comandos.all();
    $scope.change = function(comam) { 
      if(comam.value == false){
       console.log(comam.comando+'0');   
      } else {
       console.log(comam.comando+'1');   
      }
    };
});

APP2.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
});

APP2.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
});

APP2.controller('AccountCtrl', function($scope, Dispositivos) {
    $scope.devices  = Dispositivos.all();
});
