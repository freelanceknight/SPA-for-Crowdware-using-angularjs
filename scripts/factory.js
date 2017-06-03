//responsible for making a http request for json data

angular
	.module('myApp')
	.factory ('myFactory',function($http){
		
		
		
		function getMovieList(){
			
			return $http.get('data/data.json');
		}
		return {
			
			getMovieList: getMovieList
			
		}
		
	});