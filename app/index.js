import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import angular from 'angular';
var ngModule = angular.module('app', []);
console.log(ngModule);

const homeController = function($scope) {
    $scope.movies = [
        {title:"przeminelo z wiatrem", desc:"spoko"},
        {title:"przeminelo z szalem", desc:"oszalamiajacy"},
        {title:"przeminelo z porazka", desc:"porazka"},
        {title:"przeminelo z balaganem", desc:"w porzadku"}
        ];
}

ngModule.controller('homeController', homeController);