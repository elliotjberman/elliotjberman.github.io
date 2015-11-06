angular.module('imagerena', [])
  .controller('gameController', ['$scope', function($scope) {
    //DEV CONTROLS
      $scope.speed = 10; //1 is normal time, 10 is 10 times as fast, etc.
      $scope.minutes = 2; // Number of minutes
      $scope.countDownLength = 3; //Number of seconds in countdown
    //

$scope.startButton = function(){
    $("#countdown").fadeIn(1000, function(){
      countDown();
    });
}

$scope.keepGoing = function(){
    $("#finishLine").fadeOut();
}

countDown = function(){
  var preCountdown = setInterval(function(){
    $scope.$apply(function() {$scope.countDownLength -=1});
    console.log($scope.countDownLength);

    if ($scope.countDownLength <= 0){
      clearInterval(preCountdown);
      startGame();
    }
  }, 1000)
}

startGame = function(){
  $("#game").fadeIn(1000, function(){
    $("#countdown").hide();
  });
  countSeconds = $scope.minutes * 60;
  var gameCountdown = setInterval(function(){
    countSeconds -=1;
    console.log(countSeconds);
    if (countSeconds == 60){
      $("#alert").slideDown();
      setTimeout(function(){
        $("#alert").slideUp();
      }, 3000);
    }
    if (countSeconds <= 0){
      clearInterval(gameCountdown);
      $("#finishLine").fadeIn(1000);
    }
  }, 1000/$scope.speed)
}

}]);
