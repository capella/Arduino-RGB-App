app
.factory('Bluetooths', function($ionicLoading,$ionicPopup) {
  return {
    all: function() {
        var de;
        bluetoothSerial.list(function(devices) {
          de = devices;
        }, function(){});
        return de;
    },
    connect: function(dispo) {
        $ionicLoading.show({
          template: 'Conectando...'
        });
        console.log(dispo.address);
        bluetoothSerial.connect(dispo.address, function(c){
            $ionicLoading.hide();
            code = dispo.address;
            console.log(c);
            $location.path( '/tab/dash' );
        }, function(x){ 
            $ionicLoading.hide();
            console.log(x);
            $ionicPopup.alert({
                  title: 'Aviso!',
                  content: x
                });
        });
    }
  }
})



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
