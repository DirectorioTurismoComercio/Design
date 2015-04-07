var app = angular.module("CTC", ['ngRoute']);

app.controller('homeViewController', ['$scope', function($scope){

  $scope.MobileMenu = true;
  
  $scope.toggleMobileMenu = function() {
    $scope.MobileMenu = $scope.MobileMenu === false ? true: false;
  };

  $scope.titulo = "Registro de Usuario";

  $scope.paso = 1;

  $scope.tituloPaso = "Define tu rol dentro de la plataforma";

  $scope.roles = [
    {src: '../images/RegistroRolComerciante.png', des: 'Imagen 01'},
    {src: '../images/RegistroRolEmpresario.png', des: 'Imagen 02'},
    {src: '../images/RegistroRolInstitucion.png', des: 'Imagen 03'},
    {src: '../images/RegistroRolUniversidad.png', des: 'Imagen 04'},
    {src: '../images/RegistroRolUniversidad.png', des: 'Imagen 04'},
    {src: '../images/RegistroRolUniversidad.png', des: 'Imagen 04'}
  ];

}]);

app.directive('myHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'header.html'
  };
});

app.directive('myBreadcrumbs', function() {
  return {
    restrict: 'E',
    templateUrl: 'breadCrumbs.html'
  };
});

app.directive('myPasos', function() {
  return {
    restrict: 'E',
    templateUrl: 'pasos.html'
  };
});

app.directive('myRoles', function() {
  return {
    restrict: 'E',
    templateUrl: 'roles.html'
  };
});