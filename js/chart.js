$('#map').click(
    function() {
        $('#drawer').css({"width":"300px", "height":"100%"});
});
$('#map').click(
function () {
        /**
         * Visualize an HTML table using Highcharts. The top (horizontal) header
         * is used for series names, and the left (vertical) header is used
         * for category names. This function is based on jQuery.
         * @param {Object} table The reference to the HTML table to visualize
         * @param {Object} options Highcharts options
         */
       	Highcharts.setOptions({
			colors:['rgb(242,92,91)','rgb(229,171,157)','rgb(50,12,1)','rgb(97,165,90)','rgb(166,151,130)','rgb(106,57,87)']
					});
 		Highcharts.visualize = function(table, options) {
            // the categories
            options.xAxis.categories = [];
            $('tbody th', table).each( function(i) {
                options.xAxis.categories.push(this.innerHTML);
            });
    
            // the data series
            options.series = [];
            $('tr', table).each( function(i) {
                var tr = this;
                $('th, td', tr).each( function(j) {
                    if (j > 0) { // skip first column
                        if (i == 0) { // get the name and init the series
                            options.series[j - 1] = {
                                name: this.innerHTML,
                                data: [],
								marker: {
									symbol: 'circle',
									radius:2
									
								}
                            };
                        } else { // add values
                            options.series[j - 1].data.push(parseFloat(this.innerHTML));
                        }
                    }
                });
            });
    
            var chart = new Highcharts.Chart(options);
        };
    
        var table = document.getElementById('combinedcrime'),
        options = {
            chart: {
                renderTo: 'chart4',
                type: 'spline',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'transparent'
            },
 	       title: {
	            text: 'Annual Crime Totals',
	            x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'regular',
	            	fontSize: '19pt',
	            	fontFamily: '"OpenSansSemiBold","Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
	        },
            xAxis: {
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansItalic","Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}

            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'regular',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansRegular","Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansItalic","Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'regular',
						fontSize:'22pt',
						fontFamily:'"OpenSansSemiBold","Helvetica", Arial, "Pt Sans", sans-serif',
						padding:'15',
						marginBottom:'5',
						marginTop: '5'
				},
				useHTML: true,
				positioner: function () {
	                return { x: 50, y:330 };
	            }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: 5,
                y: 100,
                borderWidth: 0,
				itemStyle: {
					color:'rgb(65,68,73)',
					fontWeight:'normal',
					fontSize:'10pt',
					fontFamily:'"OpenSansLight","Helvetica", Arial, "Pt Sans", sans-serif'
				}
            }
		};
        Highcharts.visualize(table, options);
    });


	$('#map').click(
		function () {
	    var table = document.getElementById('rape'),
	    options = {
	        chart: {
	            renderTo: 'chart1',
	            type: 'spline',
	            marginRight: 10,
	            marginBottom:10,
				marginTop:30,
	        //    zoomType: 'xy',
				backgroundColor:'transparent'
	        },
	       title: {
	            text: 'Reported Rapes',
	            x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'regular',
	            	fontSize: '19pt',
	            	fontFamily: '"OpenSansSemiBold","Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
	        },
	        xAxis: {
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansItalic","Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}

	        },
	        yAxis: {
	            title: {
	                text: '',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'regular',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansRegular","Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansItalic","Helvetica", Arial, "Pt Sans", sans-serif'
					}
	            },
	            startOnTick: false,
	            maxPadding: 0

	        },
	        tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
	            formatter: function() {
	                return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'regular',
						fontSize:'22pt',
						fontFamily:'"OpenSansSemiBold","Helvetica", Arial, "Pt Sans", sans-serif',
						padding:'15',
						marginBottom:'5',
						marginTop: '5'
				},
				useHTML: true,
				positioner: function () {
	                return { x: 50, y:330 };
	            }
	        }
			};
	    Highcharts.visualize(table, options);
	});
