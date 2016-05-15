(function() {
'use strict';	
	angular.module('main.usage', ['nvd3'])
	.controller('usageController', usageController);

	function usageController(serviceLocator, $http, $scope, MockUsageService)
	{		
	
		function graphIt() {
			$scope.options = {
				chart: {
					type: 'discreteBarChart',
					height: 450,
					margin : {
						top: 20,
						right: 20,
						bottom: 90,
						left: 55
					},
					x: function(d){
						//console.log(d);
						return d.date;
					},
					y: function(d){
						return d.usage + (1e-10);
					},
					// showValues: true,
					// valueFormat: function(d){
					// 	return d3.format(',.2f')(d);
					// },
					duration: 500,
					xAxis: {
						axisLabel: 'Date',
						rotateLabels: 60,
						axisLabelDistance: -20
					},
					yAxis: {
						axisLabel: 'kWh',
						axisLabelDistance: -10
					}
				}
			};

		}

		MockUsageService.getUsageData()
			.then(function(graphData)
			{
				$scope.data = [{
					key: "Cumulative Return",
					values: graphData.data
				}]

				graphIt();
				console.log('data', $scope.data);

				$scope.topData = graphData;
				console.log('top data', $scope.topData)
		});

		return {
            graphIt: graphIt
        }



    // $scope.data = [
    //     {
    //         key: "Cumulative Return",
    //         values: [
    //             {
    //                 "label" : "A" ,
    //                 "value" : 29
    //             } ,
    //             {
    //                 "label" : "B" ,
    //                 "value" : 0
    //             }
    //         ]
    //     }
    // ]
	}

})();
