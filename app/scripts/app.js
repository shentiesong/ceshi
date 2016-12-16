'use strict';

/**
 * @ngdoc overview
 * @name 1216App
 * @description
 * # 1216App
 *
 * Main module of the application.
 */
angular
  .module('1216App', ["ui.router","sts"]).controller("con",["$scope","$http",function($scope,$http){
  	$http({
  		method:"get",
			url:"http://47.90.20.200:1602/news1/"
  	}).then(function(e){
  		$scope.data1=e
  	},function(){});
  	
  	$http({
  		method:"get",
			url:"http://47.90.20.200:1602/news2/"
  	}).then(function(e){
  		$scope.data2=e
  	},function(){})
  	
  	$http({
  		method:"get",
			url:"http://47.90.20.200:1602/news-img1/"
  	}).then(function(e){
  		$scope.data3=e
  	},function(){})
  	
  	$http({
  		method:"get",
			url:"http://47.90.20.200:1602/news-img2/"
  	}).then(function(e){
  		$scope.data4=e
  	},function(){})
  }])
