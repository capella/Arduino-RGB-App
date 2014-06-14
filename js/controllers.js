app

.controller('ControlesCtrl', function($scope, Bluetooths) {
    $scope.muda = function() { 
      Bluetooths.sendRGB(document.getElementById("corr").value,document.getElementById("corg").value,document.getElementById("corb").value);
    };
    Bluetooths.connectsave();
})

.controller('DispositivosCtrl', function($scope, Bluetooths) {
    $scope.devices  = Bluetooths.all();
    
    $scope.click = function(dispo) { 
        Bluetooths.connect(dispo.address);
    };
    
    $scope.desconectar = function(){
        Bluetooths.disconnect();
    }
})

.controller('CoresCtrl', function($scope, Bluetooths, Cores_data) {
    $scope.cores = Cores_data.all();
    $scope.slideChanged = function(index){
        Bluetooths.sendRGB($scope.cores[index].R,$scope.cores[index].G,$scope.cores[index].B);
    }
    Bluetooths.connectsave();
});
