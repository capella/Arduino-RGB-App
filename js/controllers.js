app

.controller('ControlesCtrl', function($scope, Bluetooths) {
    $scope.muda = function() { 
      Bluetooths.sendRGB(document.getElementById("corr").value,document.getElementById("corg").value,document.getElementById("corb").value);
    };
})

.controller('DispositivosCtrl', function($scope, Bluetooths) {
    $scope.devices  = Bluetooths.all();
    $scope.click = function(dispo) { 
        Bluetooths.connect(dispo);
    };
});

