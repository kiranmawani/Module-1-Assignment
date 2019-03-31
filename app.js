(function (){

  angular.module('LunchCheck',[])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = [$scope];
  function LunchCheckController($scope){
    $scope.items="";
    $scope.message;
    $scope.len;

    $scope.check = function(){
      var str = $scope.items;
      if(str===""){
        $scope.message="Please enter data first";
      }
      else {
        $scope.len=($scope.items.split(',')).length;
        var a = $scope.len;
        if(a<=3){
          $scope.message="Enjoy!";
        }
        else if (a>3) {
            $scope.message="Too much!";
        }
      }

    }
  }
})();
