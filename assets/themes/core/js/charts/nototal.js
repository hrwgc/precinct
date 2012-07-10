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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [911, 609, 571, 426, 155],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [186, 218, 166, 167, 95],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [897, 529, 308, 157, 59],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [3872, 3333, 2749, 2100, 983],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [11, 2, 1, 1, 0],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [11, 5, 7, 5, 13],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [869, 533, 334, 192, 102],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [787, 570, 331, 236, 121],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [303, 226, 239, 136, 117],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [337, 244, 148, 97, 27],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1587, 1228, 919, 657, 562],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [10, 6, 3, 3, 0],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [12, 12, 6, 3, 11],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [827, 515, 319, 250, 127],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [810, 813, 380, 294, 184],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [307, 232, 221, 140, 112],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [773, 487, 267, 165, 48],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [2574, 1736, 1622, 1222, 1004],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [1, 4, 4, 1, 1],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [12, 8, 6, 8, 15],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [861, 593, 446, 290, 156],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [392, 352, 108, 185, 83],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [222, 242, 162, 121, 120],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [398, 226, 125, 129, 40],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [458, 393, 283, 233, 318],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [11, 6, 2, 3, 5],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [20, 17, 15, 13, 14],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [823, 492, 242, 209, 129],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [942, 766, 385, 316, 208],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [580, 448, 272, 198, 141],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [545, 337, 200, 151, 50],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1704, 1440, 1239, 738, 750],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [17, 4, 4, 2, 1],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [38, 22, 17, 12, 13],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1000, 642, 424, 246, 186],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [639, 439, 298, 108, 119],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [249, 253, 197, 103, 94],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [512, 449, 312, 127, 46],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [828, 766, 576, 447, 635],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [8, 6, 4, 3, 3],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [27, 19, 12, 5, 13],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [617, 496, 272, 135, 138],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1649, 1139, 692, 552, 245],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [303, 248, 205, 177, 126],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1286, 701, 444, 216, 42],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [2765, 2184, 1878, 1753, 1419],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [6, 7, 2, 2, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [21, 17, 7, 10, 17],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1050, 691, 433, 308, 189],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2687, 1893, 1020, 876, 327],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [670, 470, 397, 318, 178],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [356, 253, 188, 103, 26],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [9365, 6315, 5133, 4245, 2174],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [11, 4, 3, 4, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [41, 39, 15, 12, 15],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [2520, 1329, 881, 528, 177],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1230, 940, 548, 265, 96],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [161, 151, 79, 103, 53],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [639, 408, 203, 111, 21],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [2287, 2164, 1490, 1312, 703],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [0, 0, 0, 0, 0],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [14, 11, 7, 8, 10],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [619, 309, 247, 149, 63],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2161, 1647, 993, 462, 185],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [496, 366, 343, 251, 112],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [511, 377, 331, 201, 28],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [7683, 5288, 4242, 3966, 1754],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [11, 7, 3, 5, 0],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [26, 18, 22, 17, 11],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1388, 841, 595, 394, 137],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [3019, 2028, 1028, 701, 251],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [295, 275, 185, 127, 108],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [3457, 1996, 997, 320, 83],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [3792, 2807, 2167, 2208, 1238],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [5, 1, 6, 1, 3],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [30, 18, 17, 9, 15],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1378, 884, 459, 359, 137],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [921, 573, 324, 162, 74],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [99, 151, 95, 112, 49],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1153, 648, 393, 160, 19],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1798, 1316, 813, 877, 635],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [1, 2, 3, 1, 0],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [20, 13, 17, 7, 11],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [610, 420, 283, 174, 77],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [34, 4, 5, 7, 1],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [37, 19, 21, 10, 10],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [11, 3, 0, 0, 0],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [176, 90, 76, 69, 70],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [2, 1, 1, 1, 0],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [11, 7, 4, 3, 2],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [204, 146, 80, 37, 18],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [489, 431, 362, 190, 95],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [579, 585, 478, 329, 243],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [410, 261, 156, 134, 32],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [567, 291, 300, 249, 263],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [27, 23, 15, 9, 5],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [64, 51, 37, 31, 28],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [933, 704, 479, 379, 209],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1071, 694, 419, 251, 89],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [460, 413, 271, 181, 126],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [990, 551, 356, 193, 43],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1126, 733, 523, 522, 451],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [23, 4, 2, 3, 5],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [35, 31, 17, 12, 12],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [889, 644, 430, 341, 187],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [540, 464, 286, 172, 118],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [670, 500, 342, 296, 227],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [342, 193, 111, 110, 35],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [387, 356, 277, 165, 243],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [37, 23, 6, 7, 9],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [41, 44, 41, 27, 23],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [925, 668, 399, 275, 231],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [624, 448, 271, 124, 57],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [290, 268, 198, 132, 100],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [360, 188, 114, 133, 27],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [663, 496, 386, 326, 274],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [14, 4, 3, 1, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [26, 25, 16, 9, 7],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [772, 523, 339, 220, 155],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [877, 627, 291, 141, 127],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [724, 671, 439, 282, 214],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [151, 125, 75, 112, 16],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [483, 352, 248, 155, 313],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [35, 30, 8, 7, 6],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [44, 50, 28, 21, 18],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [892, 602, 410, 244, 224],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [785, 567, 391, 209, 135],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [680, 578, 416, 380, 189],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [323, 194, 134, 126, 25],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [348, 263, 171, 163, 179],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [56, 37, 13, 11, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [45, 37, 27, 28, 21],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [715, 571, 466, 290, 246],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [974, 666, 388, 243, 152],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [968, 880, 666, 474, 322],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [258, 199, 138, 148, 52],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [432, 326, 264, 207, 301],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [56, 30, 6, 22, 10],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [89, 67, 42, 33, 27],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [958, 850, 568, 435, 244],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [186, 556, 366, 199, 129],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [155, 371, 379, 315, 182],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [133, 415, 283, 194, 61],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [99, 370, 269, 199, 248],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [0, 22, 6, 8, 7],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [16, 44, 35, 19, 26],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [142, 506, 327, 273, 230],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1921, 1183, 748, 419, 275],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [839, 425, 334, 273, 237],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1830, 854, 386, 367, 89],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1184, 546, 330, 290, 376],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [50, 18, 9, 7, 8],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [89, 45, 34, 27, 18],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1312, 599, 363, 316, 287],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1364, 1020, 530, 317, 241],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [1082, 845, 673, 484, 455],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [653, 446, 270, 293, 131],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [766, 612, 451, 376, 412],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [70, 27, 15, 27, 21],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [80, 75, 60, 46, 23],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1908, 1116, 793, 577, 397],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1055, 711, 279, 224, 207],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [512, 494, 801, 548, 432],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [437, 262, 142, 181, 93],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [446, 296, 179, 175, 297],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [42, 18, 8, 12, 5],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [32, 37, 26, 18, 18],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [858, 602, 314, 239, 300],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1100, 791, 443, 355, 178],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [961, 802, 526, 439, 315],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [475, 334, 221, 239, 140],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [363, 324, 210, 211, 249],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [37, 32, 12, 18, 10],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [76, 65, 52, 44, 28],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1293, 946, 572, 339, 325],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1944, 1440, 741, 734, 387],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [950, 877, 742, 605, 541],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2052, 1420, 866, 779, 285],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [790, 706, 500, 536, 601],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [69, 35, 13, 14, 19],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [69, 86, 72, 64, 21],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [2057, 1473, 933, 594, 534],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2137, 1672, 844, 515, 342],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [1361, 1251, 780, 677, 557],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1279, 950, 519, 472, 201],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [802, 655, 447, 431, 446],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [69, 44, 18, 31, 19],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [99, 121, 82, 63, 35],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [2044, 1487, 970, 702, 473],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [803, 516, 387, 370, 286],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [231, 242, 238, 183, 162],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2185, 1379, 1089, 629, 193],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [415, 398, 412, 472, 408],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [17, 12, 4, 5, 6],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [22, 36, 29, 22, 13],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [457, 416, 318, 212, 214],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2365, 1857, 1022, 619, 247],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [1036, 1085, 681, 654, 401],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [875, 588, 412, 427, 126],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [961, 646, 451, 422, 383],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [64, 43, 21, 17, 20],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [82, 100, 87, 63, 31],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [2132, 1591, 870, 548, 406],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1851, 1366, 976, 549, 412],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [850, 720, 569, 417, 489],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1617, 1272, 823, 597, 295],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [545, 576, 426, 248, 296],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [35, 46, 21, 17, 21],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [79, 85, 73, 50, 34],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1417, 1055, 656, 460, 434],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1313, 957, 669, 431, 201],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [698, 430, 513, 430, 343],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [603, 445, 298, 316, 141],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [463, 359, 292, 282, 364],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [40, 15, 23, 13, 12],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [59, 56, 40, 36, 19],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1173, 779, 578, 421, 413],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1511, 1053, 655, 576, 393],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [346, 358, 264, 227, 265],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1919, 1482, 986, 576, 231],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [581, 500, 405, 397, 455],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [15, 11, 8, 5, 3],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [36, 28, 30, 22, 18],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [690, 569, 404, 284, 372],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1151, 860, 599, 357, 207],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [271, 177, 146, 147, 115],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1786, 1305, 917, 458, 107],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [457, 445, 306, 295, 379],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [11, 2, 3, 8, 4],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [24, 17, 22, 21, 9],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [622, 425, 292, 199, 192],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2344, 1991, 1102, 766, 449],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [627, 698, 541, 524, 397],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1464, 992, 626, 555, 146],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [922, 734, 582, 528, 634],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [43, 19, 20, 23, 8],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [60, 57, 60, 53, 22],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1727, 1228, 871, 603, 519],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [993, 789, 481, 302, 200],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [735, 566, 572, 312, 281],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1174, 753, 493, 262, 88],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [691, 579, 605, 436, 487],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [20, 24, 16, 11, 6],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [42, 54, 45, 27, 12],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1074, 845, 554, 462, 251],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2146, 1343, 1086, 728, 256],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [314, 292, 272, 178, 152],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [3298, 1998, 1281, 636, 146],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1463, 875, 912, 671, 467],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [8, 10, 7, 5, 14],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [23, 30, 30, 13, 11],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [893, 669, 492, 365, 192],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1693, 1213, 812, 678, 251],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [303, 272, 271, 193, 162],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1830, 1265, 903, 511, 158],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [774, 551, 570, 501, 461],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [10, 4, 2, 4, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [24, 20, 17, 20, 11],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [753, 481, 332, 300, 173],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1165, 673, 537, 339, 257],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [314, 270, 208, 161, 190],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2730, 1621, 845, 497, 125],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [653, 537, 566, 536, 522],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [14, 7, 4, 3, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [24, 19, 25, 17, 16],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [708, 462, 413, 265, 235],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1692, 979, 795, 552, 336],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [314, 261, 215, 212, 164],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1821, 1313, 805, 445, 130],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [661, 434, 416, 353, 453],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [10, 3, 4, 1, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [19, 22, 20, 17, 8],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [747, 431, 406, 282, 191],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2127, 1730, 1141, 827, 473],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [1234, 1069, 974, 735, 634],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2042, 1255, 692, 702, 276],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [781, 673, 527, 611, 521],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [55, 43, 25, 21, 22],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [101, 90, 82, 58, 46],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [2377, 1390, 913, 669, 530],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1144, 793, 598, 456, 209],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [281, 253, 198, 169, 145],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1946, 1362, 837, 408, 122],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [479, 475, 363, 440, 371],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [4, 4, 1, 0, 1],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [28, 17, 14, 17, 9],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [552, 365, 267, 198, 102],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [640, 552, 387, 291, 233],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [275, 238, 289, 267, 200],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2178, 1029, 631, 449, 126],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [414, 334, 352, 340, 275],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [10, 5, 6, 7, 6],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [24, 18, 28, 35, 16],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [712, 562, 472, 363, 232],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2915, 1549, 1291, 914, 338],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [866, 708, 605, 503, 338],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2391, 1336, 879, 629, 124],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1120, 863, 826, 680, 704],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [46, 19, 9, 13, 10],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [111, 69, 61, 64, 21],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [2157, 1296, 1008, 883, 380],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1873, 1297, 899, 511, 236],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [926, 892, 707, 490, 385],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1383, 927, 431, 481, 122],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [689, 638, 602, 514, 382],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [37, 11, 15, 14, 9],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [73, 79, 52, 38, 20],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1690, 1140, 878, 603, 301],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1163, 960, 804, 545, 205],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [516, 452, 397, 259, 255],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [975, 818, 484, 403, 99],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [469, 420, 344, 285, 391],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [18, 11, 7, 6, 5],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [38, 30, 30, 32, 24],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1045, 690, 511, 410, 243],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [789, 632, 501, 522, 341],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [1143, 955, 816, 665, 628],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [713, 416, 309, 296, 129],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [949, 636, 418, 409, 448],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [74, 28, 26, 26, 26],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [88, 72, 74, 54, 31],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [2252, 1470, 879, 625, 542],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1854, 1531, 1170, 568, 517],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [1474, 1280, 1068, 1053, 880],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2662, 1717, 1020, 845, 322],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [965, 918, 651, 737, 826],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [126, 44, 41, 35, 29],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [122, 144, 112, 89, 54],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [3152, 2397, 1628, 1146, 779],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [438, 294, 269, 203, 98],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [307, 236, 167, 131, 96],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [401, 351, 201, 106, 38],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [235, 180, 161, 152, 267],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [8, 12, 7, 4, 3],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [15, 12, 14, 4, 8],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [398, 283, 199, 132, 126],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1582, 1291, 722, 575, 373],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [1190, 727, 648, 498, 361],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [774, 738, 291, 347, 105],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [599, 526, 346, 387, 396],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [82, 30, 9, 19, 10],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [71, 77, 52, 43, 22],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [2202, 1546, 772, 487, 356],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [797, 577, 498, 344, 134],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [268, 218, 158, 108, 70],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1034, 705, 370, 244, 75],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [510, 386, 452, 369, 413],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [7, 3, 1, 1, 0],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [26, 13, 12, 11, 8],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [865, 553, 464, 251, 173],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1268, 1293, 555, 449, 355],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [1131, 974, 716, 599, 444],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [558, 463, 224, 332, 91],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [858, 573, 354, 288, 410],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [55, 37, 17, 25, 13],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [76, 76, 67, 42, 33],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [2086, 1436, 838, 636, 514],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [863, 733, 448, 377, 301],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [850, 793, 547, 421, 289],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [588, 296, 154, 197, 85],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [386, 294, 219, 226, 430],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [26, 35, 10, 18, 12],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [79, 55, 29, 31, 16],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1229, 853, 584, 410, 334],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1386, 1250, 677, 522, 481],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [845, 721, 498, 537, 359],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [942, 672, 334, 334, 118],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [566, 414, 284, 280, 376],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [44, 17, 12, 12, 17],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [62, 69, 46, 57, 30],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1528, 1164, 700, 551, 446],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [820, 641, 392, 312, 146],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [432, 375, 280, 200, 127],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [733, 572, 273, 149, 45],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1136, 831, 732, 736, 560],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [11, 9, 1, 3, 1],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [22, 22, 16, 5, 3],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1314, 764, 462, 279, 172],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1099, 568, 229, 232, 127],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [479, 357, 188, 209, 156],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [748, 592, 310, 319, 80],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [544, 436, 207, 331, 446],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [25, 13, 10, 11, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [32, 44, 18, 16, 14],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1188, 775, 399, 419, 295],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1322, 943, 490, 484, 314],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [579, 461, 314, 279, 235],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [941, 662, 465, 336, 189],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [556, 436, 300, 372, 588],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [22, 14, 2, 12, 5],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [34, 40, 29, 24, 23],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1297, 883, 585, 507, 385],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1128, 659, 301, 223, 157],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [267, 211, 146, 108, 93],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [919, 538, 421, 258, 114],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [369, 250, 178, 173, 320],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [9, 4, 7, 5, 1],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [8, 6, 16, 4, 3],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [597, 356, 213, 197, 129],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [432, 359, 177, 115, 143],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [212, 180, 142, 93, 133],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [310, 177, 88, 71, 21],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [194, 195, 115, 94, 148],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [5, 1, 0, 1, 1],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [13, 11, 11, 10, 5],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [278, 190, 133, 63, 87],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [768, 614, 370, 216, 134],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [524, 448, 418, 301, 182],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [460, 338, 184, 158, 46],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [330, 291, 203, 189, 123],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [16, 14, 9, 6, 8],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [42, 24, 32, 17, 17],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [710, 577, 413, 247, 128],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1503, 1485, 965, 622, 298],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [362, 401, 440, 309, 260],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [3495, 2150, 1303, 803, 253],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [583, 523, 538, 378, 419],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [12, 11, 3, 2, 6],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [34, 35, 23, 21, 23],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1238, 908, 672, 459, 269],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1166, 1055, 598, 449, 261],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [853, 787, 611, 406, 359],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1591, 1088, 602, 472, 204],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1214, 985, 578, 587, 415],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [28, 16, 16, 10, 11],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [74, 69, 45, 27, 37],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1742, 1488, 751, 530, 436],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1955, 1760, 1024, 790, 402],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [305, 251, 261, 262, 250],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [3418, 2041, 1374, 892, 249],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [678, 620, 485, 551, 544],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [19, 6, 7, 5, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [21, 16, 24, 15, 14],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1027, 765, 490, 359, 262],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1640, 1485, 854, 630, 494],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [409, 406, 400, 329, 279],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [3476, 2423, 1360, 913, 420],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [593, 642, 444, 456, 455],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [23, 19, 7, 18, 5],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [41, 48, 52, 35, 27],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1082, 824, 557, 395, 343],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1230, 978, 662, 417, 331],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [408, 308, 297, 241, 221],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [3304, 1918, 1370, 778, 283],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [595, 527, 440, 381, 378],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [21, 14, 7, 4, 4],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [33, 31, 40, 19, 10],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [891, 756, 545, 344, 267],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1425, 1187, 862, 632, 269],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [239, 241, 226, 153, 126],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [4902, 2527, 1560, 802, 214],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [616, 591, 614, 572, 435],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [8, 4, 5, 4, 3],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [32, 27, 30, 15, 13],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1039, 732, 514, 375, 238],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1563, 1396, 971, 564, 292],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [317, 235, 248, 147, 123],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2123, 1653, 942, 704, 180],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [914, 733, 605, 570, 510],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [10, 11, 5, 3, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [12, 23, 24, 18, 11],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1026, 685, 464, 313, 155],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2378, 1485, 1440, 964, 399],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [350, 308, 363, 327, 242],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [4153, 2481, 1668, 1075, 287],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1367, 988, 993, 1175, 695],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [11, 22, 3, 5, 8],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [34, 21, 28, 22, 19],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1217, 826, 480, 388, 252],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2165, 1547, 720, 485, 316],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [497, 458, 383, 315, 268],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2302, 1535, 814, 493, 123],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1280, 986, 665, 605, 552],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [29, 29, 11, 9, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [34, 26, 27, 44, 22],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1541, 1121, 718, 614, 332],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [965, 792, 580, 348, 204],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [130, 98, 88, 58, 49],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [3301, 1791, 1169, 640, 107],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [575, 500, 261, 325, 386],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [4, 7, 2, 1, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [15, 8, 6, 2, 6],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [341, 280, 151, 154, 79],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1391, 769, 605, 350, 150],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [126, 135, 84, 98, 62],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [3382, 1973, 925, 622, 103],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1028, 789, 741, 668, 493],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [5, 2, 2, 0, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [10, 7, 7, 3, 9],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [659, 453, 272, 213, 105],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1150, 962, 651, 461, 495],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [758, 616, 488, 401, 482],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1833, 1526, 793, 520, 241],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [3982, 2046, 1049, 855, 690],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [39, 28, 10, 10, 17],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [78, 76, 66, 48, 29],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1177, 890, 562, 355, 416],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [2345, 1897, 1043, 855, 467],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [748, 607, 445, 385, 347],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2684, 1566, 1152, 873, 188],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1129, 1058, 783, 744, 647],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [26, 21, 8, 5, 5],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [45, 42, 33, 33, 27],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1713, 1102, 801, 586, 332],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1979, 1558, 829, 503, 321],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [424, 448, 376, 311, 364],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2214, 1399, 791, 606, 189],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [1432, 1306, 982, 875, 575],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [21, 18, 13, 5, 4],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [36, 39, 22, 24, 42],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1316, 969, 609, 435, 347],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1705, 1402, 708, 581, 371],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [791, 700, 517, 451, 386],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [1347, 847, 525, 320, 168],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [589, 511, 439, 424, 410],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [21, 17, 9, 7, 12],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [56, 48, 38, 30, 42],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [1016, 826, 359, 272, 248],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [1351, 737, 401, 258, 260],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [313, 271, 166, 132, 129],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [2809, 1920, 889, 524, 117],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [839, 654, 371, 443, 386],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [3, 4, 2, 4, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [19, 21, 13, 6, 10],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [317, 232, 151, 77, 112],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
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
                text: 'Annual Crime Totals',
                x: -20,
				y:35,
	         	style: {
	            	color: 'rgb(65,68,73)',
	            	fontWeight: 'bold',
	            	fontSize: '18pt',
	            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
	         	}
            },
            xAxis: {
				categories:   ['1993', '1995', '1998', '2001', '2011'],
				labels: {
					style: {
	            		color: 'rgb(65,68,73)',
	            		fontWeight: 'normal',
	            		fontSize: '12pt',
	            		fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
					}
	         	}
            },
            yAxis: {
                title: {
                    text: 'Number of Reported Crimes',
		         	style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'bold',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
		         	}
				},
				labels: {
					style: {
		            	color: 'rgb(65,68,73)',
		            	fontWeight: 'normal',
		            	fontSize: '12pt',
		            	fontFamily: '"OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>' ;
					},
				style: {
						color: 'rgb(65,68,73)',
						fontWeight:'bold',
						fontSize:'22pt',
						fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif',
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
					fontFamily:'"OpenSansLight", Arial, "Pt Sans", sans-serif'
				}
				
            },

series: [{
	name: 'Burglary',
	data: [341, 248, 186, 149, 101],
	color: 'rgb(242,92,91)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Assault',
	data: [114, 80, 62, 54, 49],
	color: 'rgb(229,171,157)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny Auto',
	data: [720, 533, 315, 179, 47],
	color: 'rgb(50,12,1)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Grand Larceny',
	data: [243, 177, 154, 96, 175],
	color: 'rgb(97,165,90)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Murder',
	data: [1, 5, 1, 2, 2],
	color: 'rgb(166,151,130)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Rape',
	data: [4, 5, 4, 2, 1],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
}, {
	name: 'Robbery',
	data: [64, 53, 25, 32, 37],
	color: 'rgb(106,57,87)',
	marker: {
		symbol:'circle'
	}
	            }]
	        });
	    });
	});