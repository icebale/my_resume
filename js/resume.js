(function(window) {
	'use strict';

	var app = angular.module('app', ['ngRoute'])
		//配置路由
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/index', {
				templateUrl: 'tmp1',
				controller: 'ctrl'
			})
			.when('/about', {
				templateUrl: 'tmp2',
				controller: 'ctrl'
			})
			.when('/skill', {
				templateUrl: 'tmp3',
				controller: 'ctrl'
			})
			.when('/project', {
				templateUrl: 'tmp4',
				controller: 'ctrl'
			})
			.when('/contact', {
				templateUrl: 'tmp5',
				controller: 'ctrl'
			})
			.otherwise({
				redirectTo: '/index',
				templateUrl: 'tmp1',
				controller: 'ctrl'
			})
	}])
	app.run(['$rootScope', '$location', function($rootScope, $location) {
		$location = $location;
		$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
			$rootScope.door = false;
			$rootScope.tan = false;
			//			console.log($location.path())
			$rootScope.statusH = '/index';
			switch($location.path()) {
				case '/about':
					$rootScope.statusH = '/about';
					$rootScope.door = false;
					$rootScope.tan = false;
					break;
				case '/skill':
					$rootScope.statusH = '/skill';
					$rootScope.tan = true;
					$rootScope.door = false;
					break;
				case '/project':
					$rootScope.statusH = '/project';
					$rootScope.door = false;
					$rootScope.tan = false;
					break;
				case '/contact':
					$rootScope.statusH = '/contact';
					$rootScope.door = false;
					$rootScope.tan = false;
					break;
				default:
					$rootScope.statusH = '/index';
					$rootScope.door = true;
					$rootScope.tan = false;
					break;
			}
//			if(current.loadedTemplateUrl == 'tmp1') {
//				
//				$rootScope.tan = false;
//
//			}else if(current.loadedTemplateUrl == 'tmp3'){
//				$rootScope.door = false;
//				
//			}else {
//				$rootScope.door = false;
//				$rootScope.tan = false;
//			}

		})
		$rootScope.aboutD = function(obj) {
			obj.addClass('active').siblings().removeClass('active');
		}
		$rootScope.xia = function() {
			$location.path('about');
			document.location.reload();
		}
		$rootScope.hire = function() {
			$location.path('contact');
			document.location.reload();
		}
	}])
	app.factory('nameMeg', function() {
				return {
					type: 'default',
					nameMessages: [{
						name: 'default',
						msg: '请输入你的昵称'
					}, {
						name: 'minlength',
						msg: '最少三位'
					}, {
						name: 'maxlength',
						msg: '非诚勿扰'
					}, {
						name: 'pattern',
						msg: '只能由英文数字、下划线组成'
					}, {
						name: 'required',
						msg: '必须填!!'
					}, {
						name: 'pass',
						msg: 'Thanks, have a good day! ^_^'
					}]
				}
			});
			app.factory('passMeg', function() {
				return {
					type: 'default',
					passMessages: [{
						name: 'default',
						msg: '请留下你的邮箱'
					}, {
						name: 'minlength',
						msg: '也太短了吧'
					}, {
						name: 'maxlength',
						msg: '哪有这么长的邮箱'
					}, {
						name: 'pattern',
						msg: '请输入正确的邮箱格式'
					}, {
						name: 'required',
						msg: '必须填!!'
					}, {
						name: 'pass',
						msg: 'Thanks, have a good day!^_^'
					}]
				}
			})
	app.controller('ctrl', ['$scope', '$location', '$routeParams', 'nameMeg','passMeg','$timeout',function($scope, $location, $routeParams,nameMeg,passMeg,$timeout) {
		$scope.nameobj = nameMeg;
		$scope.passobj = passMeg;
				$scope.sayMsg = function(err, flag) {
					if(flag) {
						for(var item in err) {
							if(err[item] === true) {
								$scope.nameobj.type = item;
								return;
							}
						}
						$scope.nameobj.type = "pass"
					} else {
						for(var item in err) {
							if(err[item] === true) {
								$scope.passobj.type = item;
								return;
							}
						}
						$scope.passobj.type = "pass"
					}

				}
			/*var canvashtml5 = document.querySelector(".html5").getContext('2d')
			var canvascss3 = document.querySelector(".css3").getContext("2d");
			var canvasjs = document.querySelector(".js").getContext("2d");
			var canvasjq = document.querySelector(".jq").getContext("2d");
			var canvasbs = document.querySelector(".bs").getContext("2d");
			var canvasps = document.querySelector(".ps").getContext("2d");
			var canwidth = 160;
			var radius = 70;
			$scope.canhtml5 = function(){
				var deg = 0;
				var html5T = function() {
					var r = 324 * Math.PI / 180;
					canvashtml5.clearRect(0, 0, canwidth, canwidth);
					canvashtml5.beginPath();
					canvashtml5.strokeStyle = "#F1652A";
					canvashtml5.lineWidth = 10;
					canvashtml5.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
					canvashtml5.stroke();
				};
				var time = $interval(function() {
					deg += 4;
					html5T(deg);
					if(deg > 324) {
						$interval.cancel(time);
					}
				}, 20);
			}
			
			$scope.cancss3 = function() {
				var deg = 0;
				var css3T = function(deg) {
					var r = deg * Math.PI / 180;
					canvascss3.clearRect(0, 0, canwidth, canwidth);
					canvascss3.beginPath();
					canvascss3.strokeStyle = "#409AD8";
					canvascss3.lineWidth = 10;
					canvascss3.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
					canvascss3.stroke();
				};
				var time = $interval(function() {
					deg += 4;
					css3T(deg);
					if(deg > 324) {
						$interval.cancel(time);
					}
				}, 20);
			}
			
			$scope.canjs = function() {
				var deg = 0;
				var jsT = function(deg) {
					var r = deg * Math.PI / 180;
					canvasjs.clearRect(0, 0, canwidth, canwidth);
					canvasjs.beginPath();
					canvasjs.strokeStyle = "#ECB12C";
					canvasjs.lineWidth = 10;
					canvasjs.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
					canvasjs.stroke();
				};
				var time = $interval(function() {
					deg += 4;
					jsT(deg);
					if(deg > 252) {
						$interval.cancel(time);
					}
				}, 20);
			}

			$scope.canjq = function() {
				var deg = 0;
				var jqT = function(deg) {
					var r = deg * Math.PI / 180;
					//		canvasjq.clearRect(0, 0, canwidth, canwidth);
					canvasjq.beginPath();
					canvasjq.strokeStyle = "#75B143";
					canvasjq.lineWidth = 10;
					canvasjq.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
					canvasjq.stroke();
				};
				var time = $interval(function() {
					deg += 4;
					jqT(deg);
					if(deg > 288) {
						$interval.cancel(time);
					}
				}, 20);
			}

			$scope.canbs = function() {
				var deg = 0;
				var bsT = function(deg) {
					var r = deg * Math.PI / 180;
					canvasbs.clearRect(0, 0, canwidth, canwidth);
					canvasbs.beginPath();
					canvasbs.strokeStyle = "#583F85";
					canvasbs.lineWidth = 10;
					canvasbs.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
					canvasbs.stroke();
				};
				var time = $interval(function() {
					deg += 4;
					bsT(deg);
					if(deg > 288) {
						$interval.cancel(time);
					}
				}, 20);
			}

			$scope.canps = function() {
				var deg = 0;
				var psT = function(deg) {
					var r = deg * Math.PI / 180;
					canvasps.clearRect(0, 0, canwidth, canwidth);
					canvasps.beginPath();
					canvasps.strokeStyle = "#031A3A";
					canvasps.lineWidth = 10;
					canvasps.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
					canvasps.stroke();
				};
				var time = $interval(function() {
					deg += 4;
					psT(deg);
					if(deg > 288) {
						$interval.cancel(time);
					}
				}, 20);
			}
			
			$scope.hua = function(){
//				canhtml5();
				$scope.canhtml5();
				$scope.cancss3();
				$scope.canjs();
				$scope.canjq();
				$scope.canbs();
				$scope.canps();
			}*/
			}]);
})(window);
$(function() {
		$(".btn-xia i").on('click', function() {
			$(".navbar-right>li").eq(1).addClass('active').siblings().removeClass('active')
		})
		$(".navbar-right>li").on('click', function() {
			window.location.reload();
	})
})
