app.controller('event_list_ctrl', function($scope, $http, $interval) {
    load_image();
    $interval(function() {
        load_image();
    }, 300);
    
    function load_image() {
        $http.get('http://localhost:4200/load').success(function(data) {
            $scope.image = data;
        });
    }; 
});
