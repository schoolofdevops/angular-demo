(function(){
	utils = angular.module("MyUtils",[]);
	utils.filter('colorCodeAge', function() {
		return function(user) {
			if(user!==undefined && user.age!==undefined)
				if(user.age<18){
					return '#E6E6E6';
				}else{
					return '#CCD6F5';				
				}
			return input;
		};
	});
	utils.filter('userNameFilter', function($log) {
		return function(users, searchName) {
			if(users!==undefined && searchName!==undefined && searchName!==""){
				var tempUsers = [];
				for(index in users){
					if(users[index]!=-undefined && users[index].name.indexOf(searchName)!=-1){
						tempUsers.push(users[index]);
					}	
				}
				return tempUsers;
			}
			return users;
		};
	});
	
	utils.directive('product', function() {
	    var directive = {};
	    directive.restrict = 'E'; /* restrict this directive to elements */
	    directive.templateUrl = "templates/product.html";
	    directive.scope = {
	            p : "=product"
	    }
	    return directive;
	});
	
	utils.directive('shoppingCart', function() {
	    var directive = {};
	    directive.restrict = 'E'; 
	    directive.templateUrl = "templates/cart.html";
	    directive.transclude = true;
	    directive.scope = {
	            prods : "=products"
	    }
	    return directive;
	});
	
})();

