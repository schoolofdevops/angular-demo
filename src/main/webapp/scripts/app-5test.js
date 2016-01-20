describe('UserController Testing ', function() {
	beforeEach(module('Airlines'));

	var $controller;
	var $http;
	var $log;
	var userService;
	var userServiceMock={};

	beforeEach(angular.mock.inject(function(_$controller_, _$log_, _userService_, _$httpBackend_) {
		// The injector unwraps the underscores (_) from around the parameter
		// names when matching
		$controller = _$controller_;
		$log = _$log_;
		userService = _userService_;
		$http = _$httpBackend_;
        $http.when('GET', 'rest/user').respond([{id:1, name:'Maruthi', age: 15},{id:2, name:'Venkat', age: 29}]);

	}));

	describe('Retrieval testing', function() {
		var $scope, controller;

		beforeEach(function() {
			$scope = {};
			console.log("Testing get all users");
	        //declare the controller and inject our empty scope
			controller = $controller('UserController', {
				$scope : $scope,
				$http : $http,
				$log : $log,
				userService: userService
			});
			console.log(userService.getUsers);

		});

		it('Loading should be true.', function() {
	        expect($scope.loading == true).toBe(true);
	    });

	    it('Users should be empty', function() {
	        expect($scope.users.length == 0).toBe(true);
	    });
	    
	    it('Should contain two users', function() {
	    	$http.flush();
	        expect($scope.users.length).toBe(2);
	        expect($scope.users[0].name).toBe('Maruthi');
	    });
	});
});