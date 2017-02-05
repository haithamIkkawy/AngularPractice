 var app = angular.module("myApp", []);

 app.controller("myCtrl",function ($scope) {
     $scope.carname = "";
     $scope.parts=["laptop","hardDisk","coffe","lenovo"];
     $scope.moter = ""; 
      $scope.color = ""; 

    $scope.items = 
    [
    {Name: "Soap",  Price: "25",  Quantity: "10"},
    {Name: "Bag",   Price: "100", Quantity: "15"},
    {Name: "Pen",   Price: "15",  Quantity: "13"}
];

   
  $scope.player = {  
    kills: [
        {
            handle: "jk400",
            rank: 14932,
            clan: ["hpburner200", "sputnik", "sololobo21"]
        },
        {
            handle: "dragonbobz",
            rank: 83655,
            clan: ["asdf", "sputnik", "peoplesrepublic"]
        },
        {
            handle: "joeschmoe",
            rank: 9274,
            clan: ["hpburner200", "sputnik", "sololobo21"]
        },
        {
            handle: "sarz",
            rank: 10,
            clan: ["peoplesrepublic", "asdf", "sololobo21"]
        },
        {
            handle: "zikamademethisway",
            rank: 9580,
            clan: ["hpburner200", "peoplesrepublic", "asdf"]
        }
    ]
}

});

