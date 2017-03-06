app.controller('MainCtrl', function ($scope) {
	$scope.byType;

    $scope.setType = function(type){
		$scope.byType = type;
	}
	    $('.scrollspy').scrollSpy();
$scope.cards = [
    {
            cardTitle:'comparecover.com', 
            cardContent:'Clean and simple website design built for insurance company.', 
            imgSrc:'images/comparecover.jpg',
            link: 'https://comparecover-c0be6.firebaseapp.com/',
            linkTitle: 'See Website',
        },{
    		cardTitle:'Recipe Book', 
    		cardContent:'Simple website that holds cards with photos and recipies.', 
    		imgSrc:'images/Screenshotfrom2017-02-0318-00-51.jpg',
            link: 'https://qumam-a6649.firebaseapp.com',
            linkTitle: 'See Website',
    	}, {
    		cardTitle:'Wikipedia Viewer', 
    		cardContent:'An app that allows users to search Wikipedia site', 
    		imgSrc:'images/Screenshotfrom2017-02-0219-25-14.jpg',
            link: 'https://codepen.io/Kafarka/full/ORxPKZ/',
            linkTitle: 'CodePen',
    	}, {
    		cardTitle:'Weather Forecast', 
    		cardContent:"Takes user's location and displays current weather forecast.", 
    		imgSrc:'images/Screenshotfrom2017-02-0219-31-36.jpg',
            link: 'https://codepen.io/Kafarka/full/GjAxqw/',
            linkTitle: 'CodePen',
    	}, {
    		cardTitle:'Random Quote Machine', 
    		cardContent:'Generates quotes based on API.', 
    		imgSrc:'images/Screenshotfrom2017-02-0219-23-57.jpg',
            link: 'https://codepen.io/Kafarka/full/RGAYRr/',
            linkTitle: 'CodePen',
    	},
]
$scope.tools = [
        {
            text: 'Angular.js',
        }, {
            text: 'JavaScript',
        }, {
            text: 'Bootstrap',
        }, {
            text: 'Materialize',
        }, {
            text: 'HTML',
            logo: '<i class="fa fa-html5" aria-hidden="true"></i>'
        }, {
            text: 'CSS',
        }, {
            text: 'Ajax and APIs',
        }, {
            text: 'jQuery',
        }

]
  });

