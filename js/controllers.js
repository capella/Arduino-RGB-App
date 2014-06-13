app

.controller('ControlesCtrl', function($scope) {

})

.controller('DispositivosCtrl', function($scope, $location, Bluetooths) {
    $scope.devices  = Bluetooths.all();
    $scope.click = function(dispo) { 
        Bluetooths.connect(dispo);
    };
});

