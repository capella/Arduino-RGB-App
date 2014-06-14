app
.factory('Bluetooths', function($ionicLoading,$ionicPopup,$location) {
  var factory = {}; 
    
  factory.all = function() {
        var de;
        bluetoothSerial.list(function(devices) {
          de = devices;
        }, function(){});
        return de;
    }
    
    factory.connect = function(dispo) {
        bluetoothSerial.disconnect(function(){
            $ionicLoading.show({
              template: 'Conectando...'
            });
            console.log(dispo);
            bluetoothSerial.connect(dispo, function(c){
                $ionicLoading.hide();
                localStorage.device = dispo;
                console.log(c);
                $location.path( '/controles' );
            }, function(x){ 
                $ionicLoading.hide();
                console.log(x);
                $ionicPopup.alert({
                      title: 'Aviso!',
                      content: x
                    });
                $location.path( '/dispositivos' );
            });
        });
    }
    
    factory.connectsave = function() {
         if(localStorage.device != undefined){
            bluetoothSerial.isConnected(function(connected){
            }, function(){
                factory.connect(localStorage.device);
            });
         } else {
            $location.path( '/dispositivos' );
        }
    }
    
    factory.disconnect = function(){
        bluetoothSerial.disconnect(function(){
            localStorage.removeItem("device");
            $location.path( '/dispositivos' );
        });
    }
    
    factory.send = function(data){
        if(localStorage.device != undefined){
            bluetoothSerial.isConnected(function(connected){
                bluetoothSerial.write(data);
            }, function(){
                factory.connect(localStorage.device);
            });
        } else {
            $location.path( '/dispositivos' );
        }
    }
    
    factory.sendRGB = function(r,g,b){
        var en = r+","+g+","+b+",";
        factory.send(en);
    }
    
    return  factory;
})

.factory('Cores_data', function() {
    var factory = {};
    factory.all = function() {
        var de = [
            {R: 255, B: 0, G: 0},
            {R: 0, B: 255, G: 0},
            {R: 0, B: 0, G: 255}
        ];
        return de;
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
