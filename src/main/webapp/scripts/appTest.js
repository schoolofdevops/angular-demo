describe('UserController', function() {

	var scope;//we'll use this scope in our tests
	 
    //Mock the app module
    beforeEach(angular.mock.module('Airlines'));
    //Mock inject the controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', 'rest/user').respond([{id:1, name:'Maruthi', age: 15},{id:2, name:'Venkat', age: 29}]);
        //declare the controller and inject our empty scope
        $controller('UserController', {$scope: scope, $http: $httpBackend});
    }));

    it('Loading should be true.', function() {
        expect(scope.loading == true);
    });

    it('Users should be empty', function() {
        expect(scope.users.length == 0);
    });
    
    it('Should contain two users', function() {
    	$httpBackend.flush();
        expect(scope.users.length).toBe(2);
        expect(scope.users[0].name).toBe('Maruthi');
    });

});