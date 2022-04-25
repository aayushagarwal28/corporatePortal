
Highcharts.chart('high-chart', {

    title: {
        text: 'Transactions Graph'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
		        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] ,
        accessibility: {
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
		name: 'Credit',
        type: 'spline',
        data: [70, 169, 220, 145, 182, 215, 252, 165, 233, 183, 139, 96]        
    }, {
		name: 'Debit',
        type: 'spline',
        data: [50, 19, 20, 45, 82, 15, 22, 65, 33, 83, 39, 21]        
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
