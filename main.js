var app=angular.module("SampleApp",[]);
//Task2
app.controller("SampleAppCtrl", function ($scope) {
    $scope.items = { name: "Ivan", age: "18", city:"Kiev"};
});
//Task3,4
app.controller("tabCtrl", function ($scope) {
    $scope.list = [{ name: "Иван", age: "18"},
        { name: "Сергей", age: "27"},
        { name: "Олег", age: "38"},
        { name: "Коля", age: "49"},
        { name: "Саша", age: "8"}];
});
//Task5
app.controller("skLang",function ($scope) {
    $scope.skills=['driver license', 'punctuality', 'modesty'];
    $scope.languages=[{lang:"english",level:"low"},
        {lang:"deutsch",level:"low"},
        {lang:"russian",level:"middle"}];

    $scope.showSkills = function () {
        $scope.url = "skills.html";
    };

    $scope.showLang = function () {
        $scope.url = "lang.html";
    };
});




//Task6
app.controller("forTask5Ctrl",function ($scope) {
    $scope.first=false;
    $scope.first2=false;
    $scope.first3=false;
    $scope.click1=function(){
        $scope.first=true;
    };
    $scope.click2=function(){
        $scope.first2=true;
    };
    $scope.click3=function(){
        $scope.first3=true;
    };
});