angular.module("sts",[]).directive("sis",function(){
				return {
					restrice:"ECMA",
					replace:true,
					template:'<div><div class="left"><ul><li ng-repeat="x in data1.data">{{x.title|fil}}</li></ul></div><div>',
					scope:{data1:"=data"},
				link:function(s,e,a){
					
				}
				}
			}).directive("simg",function(){
				return {
					restrice:"ECMA",
					replace:true,
					template:'<div class="center"><img ng-repeat="x in data3.data" ng-src="{{x.img}}" alt="" /></div>',
					scope:{data3:"=data"},
				link:function(s,e,a){
				}
				}
			}).filter('fil',function(){
	    		return function(arrA){
	    			if(arrA.length>=10){
	    				return arrA.substr(0,10)+'...'
	    			}else{
	    				return arrA
	    			}
	    		}
	    	})

			