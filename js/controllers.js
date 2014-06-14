app

.controller('ControlesCtrl', function($scope, Bluetooths, Cores_data) {
    $scope.muda = function() { 
      Bluetooths.sendRGB(document.getElementById("corr").value,document.getElementById("corg").value,document.getElementById("corb").value);
    };
    Bluetooths.connectsave();
    $scope.save = function(){
        Cores_data.save(document.getElementById("corr").value,document.getElementById("corg").value,document.getElementById("corb").value);
    }
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
    
    $scope.deletar = function(key){
        if(Cores_data.remove(key)==true){
            alert(1);
            $scope.cores.splice(index, 1);
        }
    }
    
    Bluetooths.connectsave();
});
