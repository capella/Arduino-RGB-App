var APP2 = angular.module('starter.controllers', []);

APP2.controller('DashCtrl', function($scope, $ionicModal, $location, $ionicLoading, Comandos, Dispositivos) {
    $scope.comandos = Comandos.all();
    $scope.change = function(comam) { 
      if(comam.value == false){
       console.log(comam.comando+'0');
      } else {
       console.log(comam.comando+'1');   
      }
    };
    bluetoothSerial.isConnected(function(){}, function(){ $location.path( '/tab/account' ); });
});

APP2.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
});

APP2.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
});

APP2.controller('AccountCtrl', function($scope, $ionicLoading, $ionicPopup, $location, Dispositivos) {
    $scope.devices  = Dispositivos.all();
    $scope.click = function(dispo) { 
        $ionicLoading.show({
          template: 'Conectando...'
        });
        console.log(dispo.address);
        var status;
        bluetoothSerial.connect(dispo.address, function(c){
            $ionicLoading.hide();
            console.log(c);
            $location.path( '/tab/dash' );
        }, function(x){ 
            $ionicLoading.hide();
            $scope.showAlert = function() {
            $ionicPopup.alert({
                  title: 'Aviso!',
                  content: x
                });
              };
        });
    };
});

function enviar(str){
    bluetoothSerial.write(str,function(c){ console.log(c); }, function(c){ console.log("ERRO: "+c);});
}
