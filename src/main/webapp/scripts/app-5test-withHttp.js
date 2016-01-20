
angular.mock.http = {};

angular.mock.http.init = function() {

  angular.module('ngMock', ['ng', 'ngMockE2E']).provider({
    $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
    $log: angular.mock.$LogProvider,
    $interval: angular.mock.$IntervalProvider,
    $rootElement: angular.mock.$RootElementProvider
  }).config(['$provide', function($provide) {
    $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
    $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
    $provide.decorator('$$asyncCallback', angular.mock.$AsyncCallbackDecorator);
    $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
    $provide.decorator('$controller', angular.mock.$ControllerDecorator);
  }]);

};

angular.mock.http.reset = function() {

  angular.module('ngMock', ['ng']).provider({
    $browser: angular.mock.$BrowserProvider,
    $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
    $log: angular.mock.$LogProvider,
    $interval: angular.mock.$IntervalProvider,
    $httpBackend: angular.mock.$HttpBackendProvider,
    $rootElement: angular.mock.$RootElementProvider
  }).config(['$provide', function($provide) {
    $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
    $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
    $provide.decorator('$$asyncCallback', angular.mock.$AsyncCallbackDecorator);
    $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
    $provide.decorator('$controller', angular.mock.$ControllerDecorator);
  }]);

};
describe('UserController Testing', function() {
	beforeEach(angular.mock.http.init);
	afterEach(angular.mock.http.reset);
	  
	//beforeEach(module('Airlines'));

	var $controller;
	var $http;
	var $log;
	var userService;
	

	beforeEach(angular.mock.inject(function(_$controller_, _$log_, _userService_, _$httpBackend_) {
		// The injector unwraps the underscores (_) from around the parameter
		// names when matching
		$controller = _$controller_;
		$http = _$httpBackend_;
		$log = _$log_;
		userService = _userService_;
		console.log(userService);
		$http.whenGET('rest/user').passThrough();
		var userServiceMock={
				getUsers: function(){
					console.log("Calling service via mock");
					//Call the original getUsers
					var promise= _userService_.getUsers();
					//Create resolve/reject functions to trap the call path
					var mockResolve = function(actualResolve){
						return function(data){
							//Log the call with data here
							console.log("Service resolved with data: "+data);
							actualResolve(data);	
						}
					}
					var mockReject = function(actualReject){
						return function(data){
							//Log the call with data here
							actualReject(data);	
						}
					}
					//Create a mock promise with these mock resolve functions and return this
					var mockPromise = {
							then: function(resolve,reject){
								promise.then(mockResolve(resolve), mockReject(reject));
							}
					}
					return mockPromise;
				}
		};
		userService = userServiceMock;
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