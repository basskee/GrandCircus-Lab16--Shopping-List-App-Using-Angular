var app=angular.module("mymod",[]);   

app.controller("MyController", function($scope){
	$scope.shoppingList=[
	{item: 'Sugar', price: '2.99'}, 
	{item: 'Flour', price: '1.59'}, 
	{item: 'Milk', price: '1.69'},
	{item: 'Butter', price: '4.29'}, 
	{item: 'Snacks', price: '6.99'}
	];

	$scope.clickToAdd=function(){
    	$scope.shoppingList.push({
      		item: $scope.addItem,
      		price: $scope.addPrice
    });
  };


	});







