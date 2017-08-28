var myctrl = angular.module('myController',[]);

myctrl.controller('myCtrl',['$scope','$http',function($scope,$http){
  
}]);

myctrl.controller('allCtrl',['$scope','$http',function($scope,$http){

  var arr = [3,5,6,16,17,18,19,23,26];

  /*[
    {
      'id': id,
      'name': '内地',
      'list': [
        {

        },
        {

        },
        {
        
        }
      ]
    }
  ]*/
  $scope.arr2 =[];
  console.log(arr);
  var arr2 = [];
  for(i=0;i<arr.length;i++){
    ( function(i){
      $http.get('http://route.showapi.com/213-4?showapi_appid=27867&showapi_sign=73e8c85038b140ffa81fb15aa8bff196&topid='+arr[i]).success(function(data) {
        /*$scope.songList = data.showapi_res_body.pagebean.songlist;*/
       /* console.log(data);*/
        $scope.arr2.push(data);
        for(j=0;j<arr2.length;j++){
          $scope.songList = arr2[j].showapi_res_body.pagebean.songlist;
        }
      });
    })(i);
    
  }

  
  

 
}]);

myctrl.controller('newCtrl',['$scope','$http',function($scope,$http){
    
      $scope.showBtn = function(){
        var oDiv = document.getElementById('seaBox');
        oDiv.style.width = 252 + 'px';
        oDiv.style.right = 54 + 'px';
        oDiv.style.left = 0;
        var oBtn = document.getElementById('cancel');
        oBtn.style.display = 'block';
        var oBox = document.getElementById('hotBox');
        oBox.style.display = 'none';
      }
      $scope.hideBtn = function(){
        var oDiv = document.getElementById('seaBox');
        oDiv.style.width = 300 + 'px';
        oDiv.style.right = 0 + 'px';
        oDiv.style.left = 0;
        var oBtn = document.getElementById('cancel');
        oBtn.style.display = 'none';
        var oBox = document.getElementById('hotBox');
        oBox.style.display = 'block';
      }

}]);