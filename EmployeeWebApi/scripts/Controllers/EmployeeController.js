/// <reference path="../angular.js" />

var EmpApp = angular.module("EmpApp", [])
                         .controller("EmpController", function ($scope, $http) {

                             $scope.cViews = "EmployeeListView.html";

                             $http.get("/api/Employee")
                                 .then(function (response) {
                                     $scope.AllEmpData = response.data;
                                 })

                         });