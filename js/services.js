angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */

.factory('Dispositivos', function() {
    return {
        all: function() {
            var de;
            bluetoothSerial.list(function(devices) {
              de = devices;
            }, function(){});
            return de;
        }
      }
});
