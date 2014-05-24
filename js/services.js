angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Comandos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Luz 1', comando: 'A'},
    { id: 0, name: 'Luz 2', comando: 'B'}
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Dispositivos', function() {
    return {
        all: function() {
            var de;
            bluetoothSerial.list(function(devices) {
              de = devices;
            }, function(){});
            return de;
        },
        isConnected: function(){
            var  status;
            bluetoothSerial.isConnected(function(){ status = true }, function(){ status = false });
            return status;
        }
      }
});
