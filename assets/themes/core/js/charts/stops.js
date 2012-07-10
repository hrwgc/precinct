
$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container1',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [637, 831, 1418, 1967, 1887, 2506, 2585, 2446, 3626],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container5',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [644, 960, 2493, 3378, 2834, 3132, 2880, 2871, 3118],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container6',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [732, 1920, 2210, 2597, 3109, 3311, 2325, 3533, 2954],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container7',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1711, 2609, 3055, 4207, 4935, 4293, 3825, 3224, 4177],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container9',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1695, 2527, 3641, 4450, 4155, 4635, 5196, 5177, 5367],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container10',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1436, 3047, 3865, 3127, 3437, 4213, 2760, 2728, 3089],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container13',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [768, 1751, 2545, 3307, 4250, 5201, 4594, 4047, 5252],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container14',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [3155, 4529, 6773, 9883, 9701, 11258, 10094, 12125, 10665],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container17',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [328, 442, 730, 1429, 1617, 1990, 1611, 1842, 2060],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container18',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [870, 1496, 1840, 2918, 2570, 3485, 2495, 3153, 3633],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container19',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [988, 1248, 3400, 6385, 6898, 5394, 3784, 4260, 5250],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container20',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [840, 1909, 2446, 3584, 3359, 2838, 3041, 4533, 5237],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container22',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [119, 409, 1177, 731, 846, 675, 591, 1246, 1416],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container23',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2982, 5530, 10562, 16652, 15188, 15510, 14501, 17281, 17498],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container24',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1276, 1639, 1926, 3714, 4713, 4147, 3077, 4005, 4918],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container25',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2601, 3667, 4489, 5350, 7915, 8604, 8219, 10696, 9926],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container26',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1130, 2298, 5534, 5302, 4320, 4277, 4059, 4582, 4991],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container28',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1715, 2192, 5731, 11920, 6410, 6369, 7413, 7657, 8738],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container30',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1197, 5382, 6027, 5055, 7211, 3318, 7633, 4836, 7550],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container32',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1970, 5291, 4688, 12838, 9934, 11524, 12127, 10725, 12859],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container33',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2261, 3637, 4075, 4469, 4769, 4525, 5829, 4358, 7041],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container34',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1792, 3737, 3868, 7282, 6717, 7611, 7296, 6800, 11548],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container40',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [4243, 7614, 13049, 15481, 12662, 12616, 15167, 17262, 17690],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container41',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1950, 2150, 3870, 3698, 3386, 7408, 8038, 7838, 11329],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container42',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1720, 4109, 5110, 7390, 7483, 8555, 9471, 11683, 12414],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container43',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2127, 3366, 4104, 9784, 8951, 10222, 9886, 11507, 17281],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container44',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1677, 3232, 5167, 9208, 7997, 8883, 11956, 12898, 16903],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container45',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1161, 1388, 1796, 2551, 2635, 3402, 4285, 4907, 5362],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container46',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2262, 3138, 4063, 5199, 6068, 7697, 8999, 11927, 13718],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container47',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2590, 4364, 3747, 7140, 6961, 7210, 6685, 9689, 10936],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container48',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1317, 2249, 2067, 4867, 3317, 4109, 3533, 3643, 5265],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container49',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1573, 2522, 2769, 4184, 4750, 4647, 6742, 8677, 8495],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container50',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1829, 2215, 2593, 2851, 1766, 2271, 2323, 2659, 2683],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container52',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1610, 2704, 3185, 3471, 5011, 7712, 9172, 9729, 13648],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container60',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2715, 3041, 4977, 5457, 4377, 6659, 8781, 9235, 9952],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container61',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1579, 2174, 5645, 5970, 4472, 6034, 5396, 5439, 6620],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container62',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [585, 1400, 4522, 5215, 4161, 4642, 6040, 4976, 4385],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container63',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1713, 2754, 4311, 3324, 3267, 2218, 2520, 3449, 4585],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container66',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2230, 2495, 4720, 3604, 3236, 3800, 3987, 2779, 3827],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container67',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [4413, 7470, 7274, 6258, 5261, 6860, 12385, 11945, 13093],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container68',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1033, 1136, 2702, 1995, 2671, 3385, 2545, 2639, 2890],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container69',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1427, 2199, 4554, 6122, 4601, 6694, 5667, 6566, 6117],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container70',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2571, 4955, 10146, 9287, 9957, 10479, 10287, 10291, 12304],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container71',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [4447, 3564, 3610, 4194, 4299, 4817, 6865, 7212, 6014],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container72',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2325, 2382, 3762, 4916, 3625, 3743, 3999, 4390, 6977],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container73',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [5974, 15533, 10813, 26294, 21760, 22960, 26710, 19539, 25167],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container75',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [5099, 27078, 31242, 29631, 23538, 27771, 31660, 26938, 31100],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container76',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1173, 2035, 4366, 3960, 4060, 5546, 5421, 5502, 4659],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container77',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [5706, 9662, 17424, 8530, 9099, 8321, 10375, 11045, 11405],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container78',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [803, 1564, 2468, 2762, 2104, 2213, 2432, 3038, 3555],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container79',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2539, 8309, 12810, 15865, 18876, 18609, 20726, 15304, 14495],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container81',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2436, 8578, 4530, 5488, 7938, 9687, 9101, 11155, 13651],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container83',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1944, 5023, 5133, 5745, 6850, 9296, 9436, 9575, 15021],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container84',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1163, 1751, 2049, 3646, 3043, 3509, 4010, 4360, 5214],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container88',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2551, 5221, 4076, 6574, 7911, 6280, 7156, 7487, 7734],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container90',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1607, 7646, 6779, 8348, 5418, 11249, 10398, 10393, 17566],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container94',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [487, 1515, 3632, 2934, 2264, 2370, 1546, 1913, 2023],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container100',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1466, 2078, 1798, 2402, 3364, 2853, 3020, 3468, 5112],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container101',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2291, 5503, 7881, 7874, 8384, 7788, 9159, 10007, 11576],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container102',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [3447, 3747, 5908, 4239, 4428, 7871, 6694, 8406, 9486],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container103',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [6110, 18947, 15234, 19463, 10507, 11706, 11157, 16420, 17152],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container104',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1877, 4236, 5063, 7631, 6412, 7279, 7984, 7591, 6874],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container105',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1885, 3749, 7830, 10972, 7146, 5919, 7953, 9747, 9791],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container106',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2368, 5819, 6742, 5522, 4124, 6465, 7812, 8446, 8643],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container107',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2346, 3998, 2490, 6228, 5035, 5989, 6267, 6723, 5583],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container108',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2003, 3991, 3509, 5321, 7107, 6237, 6920, 6743, 5860],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container109',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [3998, 4417, 6187, 6443, 7405, 8242, 10174, 10200, 12864],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container110',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2271, 3883, 5398, 7452, 8052, 9881, 11652, 14368, 10795],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container111',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1846, 1665, 2035, 4616, 3797, 4200, 4942, 4705, 4680],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container112',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1775, 2551, 2361, 2890, 2366, 2764, 3232, 3195, 3407],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container113',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2647, 3375, 4515, 4910, 6816, 8341, 11045, 9154, 12359],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container114',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [3505, 5034, 7169, 9399, 9898, 11944, 10944, 10887, 10343],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container115',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [1832, 5411, 7227, 9626, 5970, 9742, 12923, 14023, 18156],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container120',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [5354, 7177, 5533, 9954, 10902, 17554, 20798, 18529, 16490],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container122',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [2491, 2738, 3372, 6276, 6784, 10754, 6301, 6601, 9535],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});







$(function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container123',
                type: 'line',
                marginRight: 130,
                marginBottom:90,
				marginTop:60,
                zoomType: 'xy',
				backgroundColor:'rgba(230,230,230,.1)'
            },
            title: {
                text: 'Total Stops in Precinct, 2003-2011',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Stops',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"Helvetica", Arial, "Pt Sans", sans-serif'
					}
                },
                startOnTick: false,
                maxPadding: 0

            },
            plotOptions: {
                series: {
	
                    marker: {
                        enabled: true,
                        states: {
                            hover: {
                                enabled: true
                            }
                        },
						style: {
							radius:'.4',
							symbol:'circle'
						}
                    },
					plotshadow:true
                }
            },
            tooltip: {
				borderRadius:'.25em',
				borderWidth:'.5px',
				backgroundColor:'transparent',
				borderColor:'rgba(65,68,73,.6)',
				shadow:false,
                formatter: function() {
                    return '<span class="top">' + this.y + ' Stops in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif',
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
				     	fontSize:'12pt',
				    	fontFamily:'"Helvetica", Arial, "Pt Sans", sans-serif'
			    	}
        },
		series: [{
			name: 'Stops in Precinct',
			data: [982, 1141, 1583, 2783, 3049, 4083, 2556, 2358, 2027],
			color: 'rgb(54,69,230)',
			marker: {
				symbol: 'circle'
			}

            }]
        });
    });
});





