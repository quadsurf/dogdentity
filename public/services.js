dogdentityApp.service('uploadService', ['$http', function ($http) {
    this.post = function(uploadUrl, data){
        var formData = new FormData();
        for(var key in data)
          formData.append(key, data[key]);
        $http.post(uploadUrl, formData, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
        })
    }
}]);
