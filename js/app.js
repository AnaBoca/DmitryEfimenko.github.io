window.app = angular.module('app', []);

window.app.controller('homeController', function($scope){
	function isIE() {
	  return window.ActiveXObject || "ActiveXObject" in window;
	}

	$('html').addClass(isIE() ? 'ie' : 'noie')

	var img1 = $('.img-proj')[0];
	var back1 = $('#b1');
	var img2 = $('.img-proj')[1];
	var back2 = $('#b2');
	var img3 = $('.img-proj')[2];
	var back3 = $('#b3');
	var img4 = $('.img-proj')[3];

	$scope.w1 = $scope.w2 = $scope.w3 = 526;
	function getHeight(){
		$scope.$apply(function(){
			$scope.h1 = Math.max(img1.height,back1.height())+10;
			$scope.w1 = img1.width+10;
			$scope.h2 = Math.max(img2.height,back2.height())+10;
			$scope.w2 = img2.width+10;
			$scope.h3 = Math.max(img3.height,back3.height())+10;
			$scope.w3 = img3.width+10;
			console.log($scope.h1);

			$scope.s1 = { height: $scope.h1 + 'px', width: $scope.w1 + 'px' };
			$scope.s2 = { height: $scope.h2 + 'px', width: $scope.w2 + 'px' };
			$scope.s3 = { height: $scope.h3 + 'px', width: $scope.w3 + 'px' };
		});
	};
	window.onresize = getHeight;
	window.onload = getHeight;

	$(document).on('click', '#proj1', function(e){
		e.preventDefault();
		$(document).scrollTo($('#proj1-t'), 500);
	});

	$(document).on('click', '#proj2', function(e){
		e.preventDefault();
		$(document).scrollTo($('#proj2-t'), 500);
	});

	$(document).on('click', '#proj3', function(e){
		e.preventDefault();
		$(document).scrollTo($('#proj3-t'), 500);
	});

	$(document).on('click', '#proj4', function(e){
		e.preventDefault();
		$(document).scrollTo($('#proj4-t'), 500);
	});

	$(document).on('swipe', '.flip-container', function(){
		$(this).trigger('hover');
	});
});

