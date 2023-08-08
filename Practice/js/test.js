var app = angular.module("myApp", []);
        app.controller("myCtrl", function($scope) {
            console.log("My controller ......");
            $scope.products = [
                {name: "Product One", price: 22.50},
                {name: "Product Two", price: 15.00},
                {name: "Product Four", price: 123.82},
                {name: "Product Five", price: 123.75}
            ];

            $scope.addProduct = function() {
                $scope.products.push($scope.newProduct);
                $scope.newProduct = {};
                $scope.message = "New product have been added"
            };

            $scope.selectProduct = function(product) {
                console.log(product);
                $scope.clickedProduct = product;
            };

            $scope.editProduct = function() {
                $scope.message = "Product have been edited";
            };

            $scope.deleteProduct = function() {
                $scope.products.splice($scope.products.indexOf($scope.clickedProduct), 1);
                $scope.message = "Product have been deleted";
            };

            $scope.clearMessage = function() {
                $scope.message = "";
            };
        });