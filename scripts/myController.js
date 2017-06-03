angular
	.module('myApp')
	.controller ('myController',function($scope,myFactory){
		
		//empty newMovie object
		$scope.newMovie = {};
		
		$scope.movieList;
		
		myFactory.getMovieList().then(function(response){
			
			$scope.movieList = response.data;
			//console.log(response.data);
			
		});
		
		$scope.addMovie= function(){
			
			//generate the id
			
			$scope.newMovie.id= "tt" + Math.floor((Math.random()*9999999)+999999);
			
			//get the index of the array
			$scope.newMovie.rank= $scope.movieList.length + 1;
			
			$scope.movieList.push($scope.newMovie);
			//console.log($scope.newMovie);
			$scope.newMovie = {};
			
			
		}
		
		//function to edit movie
		//emplty object for selected movie
		$scope.selectedMovie = {};
		
		$scope.selectMovie=function(movie){
			
			//console.log(movie);
			$scope.selectedMovie=movie;
			//console.log($scope.selectedMovie);
		}

		//function to delete the movie
		
		$scope.deleteMovie=function(movie){
			
			//console.log(movie);
			$scope.movieList.splice($scope.movieList.indexOf(movie),1);
		}
		
	});