app
.factory('Bluetooths', function($ionicLoading,$ionicPopup,$location) {
  var device;
  var factory = {}; 
    
  factory.all = function() {
        var de;
        bluetoothSerial.list(function(devices) {
          de = devices;
        }, function(){});
        return de;
    }
    
    factory.connect = function(dispo) {
        $ionicLoading.show({
          template: 'Conectando...'
        });
        console.log(dispo.address);
        bluetoothSerial.connect(dispo.address, function(c){
            $ionicLoading.hide();
            device = dispo;
            console.log(c);
            $location.path( '/controles' );
        }, function(x){ 
            $ionicLoading.hide();
            console.log(x);
            $ionicPopup.alert({
                  title: 'Aviso!',
                  content: x
                });
        });
    }
    
    factory.send = function(data){
        if(device != undefined)
            bluetoothSerial.isConnected(function(){
                bluetoothSerial.write(data,function(c){ 
                    console.log(c); 
                }, factory.connect(device) });
            });
        else {
            $location.path( '/dispositivos' );
        }
    }
    
    factory.sendRGB = function(r,g,b){
        var en = r+","+g+","+b+",";
        factory.send(en);
    }
    
    return  factory;
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
