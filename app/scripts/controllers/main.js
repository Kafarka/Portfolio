app.controller('MainCtrl', function ($scope) {
	$scope.byType;

    $scope.setType = function(type){
		$scope.byType = type;
	}
	    $('.scrollspy').scrollSpy();
$scope.cards = [
	    	{
    		cardTitle:'Recipe Book', 
    		cardContent:'Simple website that holds cards with photos and recipies.', 
    		imgSrc:'images/Screenshotfrom2017-02-0318-00-51.jpg',
    	},{
    		cardTitle:'Wikipedia Viewer', 
    		cardContent:'An app that allows users to search Wikipedia site', 
    		imgSrc:'images/Screenshotfrom2017-02-0219-25-14.jpg',
    	},{
    		cardTitle:'Weather Forecast', 
    		cardContent:"Takes user's location and displays current weather forecast.", 
    		imgSrc:'images/Screenshotfrom2017-02-0219-31-36.jpg',
    	},{
    		cardTitle:'Random Quote Machine', 
    		cardContent:'Generates quotes based on API.', 
    		imgSrc:'images/Screenshotfrom2017-02-0219-23-57.jpg',
    	},
]
  });
