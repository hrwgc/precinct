$('#map').click(

function () {
    $('#drawer').css({
        "width": "300px",
        "height": "450px"
    });
});

$('#map').click(

function () {
    Highcharts.setOptions({
        colors: 
		['rgb(26,19,52)', 'rgb(38,41,74)', 'rgb(1,84,90)', 'rgb(1,115,81)', 'rgb(3,195,131)', 'rgb(170,217,98)', 'rgb(251,191,69)', 'rgb(239,106,50)', 'rgb(237,3,69)', 'rgb(161,42,94)', 'rgb(113,1,98)', 'rgb(17,1,65)']
	    });
    Highcharts.visualize = function (table, options) {
        options.xAxis.categories = [];
        $('tbody th', table).each(function (i) {
            options.xAxis.categories.push(this.innerHTML);
        });
        options.series = [];
        $('tr', table).each(function (i) {
            var tr = this;
            $('th, td', tr).each(function (j) {
                if (j > 0) { // skip first column
                    if (i == 0) { // get the name and init the series
                        options.series[j - 1] = {
                            name: this.innerHTML,
                            data: [],
                            marker: {
                                symbol: 'circle',
                                radius: 2

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
                marginRight: 10,
                marginBottom: 70,
                marginTop: 40,
                marginLeft:45,
                zoomType: 'xy',
                backgroundColor: 'transparent'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Annual Crime Totals',
                align: 'center',
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '16pt',
                    fontFamily: '"OpenSansBold","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }
            },
            xAxis: {
                labels: {
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                }

            },
            yAxis: {
                title: {
                    enabled: false,	
                    text: '',
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'regular',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                labels: {
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                startOnTick: false,
                maxPadding: 0

            },
            tooltip: {
                borderRadius: '.25em',
                borderWidth: '.5px',
                shadow: true,
                formatter: function () {
                    return '<span class="top">' + this.y + ' ' + this.series.name + '</span>';
                },
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '12pt',
                    fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif',
                    padding: '5',
					paddingTop: '5'
                },
                useHTML: false
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',

                borderWidth: 0,
                itemStyle: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'normal',
                    fontSize: '8pt',
                    fontFamily: '"OpenSansLight","OpenSansLight", Arial, "Pt Sans", sans-serif',
                },
                float: true
            }
        };
    Highcharts.visualize(table, options);
});

// First crime-specific 
$('#map').click(

function () {
	Highcharts.setOptions({
	     colors: ['rgb(1,84,90)', 'rgb(1,115,81)', 'rgb(3,195,131)', 'rgb(170,217,98)' ]
	});
    var table = document.getElementById('race'),
        options = {
            chart: {
                renderTo: 'chart1',
                type: 'column',
                marginRight: 10,
                marginBottom: 30,
                marginTop: 10,
                //    zoomType: 'xy',
                backgroundColor: 'transparent'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Races of Individuals Stopped',
                align: 'center',
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '10pt',
                    fontFamily: '"OpenSansSemiBold","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }
            },
            xAxis: {
                labels: {
                    enabled: true,
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '7pt',
                        fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                plotLines: [{
                    color: 'rgba(0,0,0,.4)',
                    width: 2,
                    value: 1998
                }]

            },
            yAxis: {
                title: {
                    enabled: false,
                    text: '',
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'regular',
                        fontSize: '12pt',
                        fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                labels: {
                    enabled: false,
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '12pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                startOnTick: false,
                tickWidth: 0,
                tickColor: 'rgba(255,255,255,0.1)',
                maxPadding: 0,

            },
            tooltip: {
                enabled: false,
                borderRadius: '.25em',
                borderWidth: '.5px',
                backgroundColor: 'transparent',
                borderColor: 'rgba(65,68,73,.6)',
                shadow: false,
                formatter: function () {
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>';
                },
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '22pt',
                    fontFamily: '"OpenSansSemiBold","OpenSansLight", Arial, "Pt Sans", sans-serif',
                    padding: '15',
                    marginBottom: '5',
                    marginTop: '5'
                },
                useHTML: true,
                positioner: function () {
                    return {
                        x: 50,
                        y: 330
                    };
                }
            },
            legend: {
                enabled: false
            }
        };
    Highcharts.visualize(table, options);
});

// Age
$('#map').click(

function () {
	
	Highcharts.setOptions({
		colors: ['rgb(170,217,98)', 'rgb(251,191,69)', 'rgb(239,106,50)', 'rgb(237,3,69)', 'rgb(161,42,94)']
		});
    var table = document.getElementById('age'),
        options = {
            chart: {
                renderTo: 'chart2',
                type: 'column',
                marginRight: 10,
                marginBottom: 30,
                marginTop: 3,
                zoomType: 'xy',
                backgroundColor: 'transparent'
            },
            credits: {
                enabled: false
            },
            title: {
                enabled: false,
                text: 'Ages of Individuals Stopped',
                align: 'center',
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '10pt',
                    fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }
            },
            xAxis: {
                labels: {
                    enabled: true,
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '7pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                plotLines: [{
                    color: 'rgba(0,0,0,.4)',
                    width: 2,
                    value: 1998
                }]

            },
            yAxis: {
                title: {
                    enabled: true,
                    text: '',
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'regular',
                        fontSize: '8pt',
                        fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                labels: {
                    enabled: false,
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '12pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                startOnTick: false,
                tickWidth: 0,
                tickColor: 'rgba(255,255,255,0.1)',
                maxPadding: 0,

            },
            tooltip: {
                enabled: false,
                borderRadius: '.25em',
                borderWidth: '.5px',
                backgroundColor: 'transparent',
                borderColor: 'rgba(65,68,73,.6)',
                shadow: false,
                formatter: function () {
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>';
                },
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '22pt',
                    fontFamily: '"OpenSansSemiBold","OpenSansLight", Arial, "Pt Sans", sans-serif',
                    padding: '15',
                    marginBottom: '5',
                    marginTop: '5'
                },
                useHTML: true,
                positioner: function () {
                    return {
                        x: 50,
                        y: 330
                    };
                }
            },
            legend: {
                enabled: false
            }
        };
    Highcharts.visualize(table, options);
});

// precinct stop and frisk data

$('#map').click(

function () {
	Highcharts.setOptions({
		colors: ['rgb(170,217,98)', 'rgb(251,191,69)', 'rgb(239,106,50)', 'rgb(237,3,69)', 'rgb(161,42,94)']
		});
    Highcharts.visualize = function (table, options) {
        // the categories
        options.xAxis.categories = [];
        $('tbody th', table).each(function (i) {
            options.xAxis.categories.push(this.innerHTML);
        });

        // the data series
        options.series = [];
        $('tr', table).each(function (i) {
            var tr = this;
            $('th, td', tr).each(function (j) {
                if (j > 0) { // skip first column
                    if (i == 0) { // get the name and init the series
                        options.series[j - 1] = {
                            name: this.innerHTML,
                            data: [],
                            marker: {
                                symbol: 'circle',
                                radius: 2
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

    var table = document.getElementById('cpcttot'),
        options = {
            chart: {
                renderTo: 'chart5',
                type: 'spline',
                marginRight: 10,
                marginBottom: 40,
                marginTop: 80,
                zoomType: 'xy',
                backgroundColor: 'transparent'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Total Stops for Precinct',
                x: -20,
                y: 35,
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '16pt',
                    fontFamily: '"OpenSansSemiBold","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }
            },
            xAxis: {
                labels: {
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
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
                        fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                labels: {
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '8pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                startOnTick: false,
                maxPadding: 0

            },
            tooltip: {
                borderRadius: '.25em',
                borderWidth: '.5px',
                shadow: true,
                formatter: function () {
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>';
                },
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '11pt',
                    fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif',
                    padding: '5',
					paddingTop: '5'
                },
                useHTML: false,
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
                float: true,
                borderWidth: 0,
                itemStyle: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'normal',
                    fontSize: '10pt',
                    fontFamily: '"OpenSansLight","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }
            }
        };
    Highcharts.visualize(table, options);
});

$('#map').click(

function () {
	
	Highcharts.setOptions({
		colors: ['rgb(170,217,98)', 'rgb(251,191,69)', 'rgb(239,106,50)', 'rgb(237,3,69)', 'rgb(161,42,94)', 'rgb(113,1,98)', 'rgb(17,1,65)']
		});
    Highcharts.visualize = function (table, options) {
        // the categories
        options.xAxis.categories = [];
        $('tbody th', table).each(function (i) {
            options.xAxis.categories.push(this.innerHTML);
        });

        // the data series
        options.series = [];
        $('tr', table).each(function (i) {
            var tr = this;
            $('th, td', tr).each(function (j) {
                if (j > 0) { // skip first column
                    if (i == 0) { // get the name and init the series
                        options.series[j - 1] = {
                            name: this.innerHTML,
                            data: [],
                            marker: {
                                symbol: 'circle',
                                radius: 2

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

    var table = document.getElementById('ccrmcombined'),
        options = {
            chart: {
                renderTo: 'chart6',
                type: 'spline',
                marginRight: 10,
                marginBottom: 70,
                marginTop: 40,
                marginLeft:45,
                zoomType: 'xy',
                backgroundColor: 'transparent'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'CompStat Crime Reports',
                align: 'center',
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '16pt',
                    fontFamily: '"OpenSansBold","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }
            },
            subtitle: {
                text: '1993, 1995, 1998, 2001, 2011',
                align: 'center',
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '13pt',
                    fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }
            },
            xAxis: {
                labels: {
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                }

            },
            yAxis: {
                title: {
                    text: 'Crimes Reported in CompStat',
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'regular',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                labels: {
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                startOnTick: false,
                maxPadding: 0

            },
            tooltip: {
                borderRadius: '.25em',
                borderWidth: '.5px',
                shadow: true,
                formatter: function () {
                    return '<span class="top">' + this.y + ' reports of ' + this.series.name + ' in ' + this.x + '</span>';
                },
	                style: {
	                    color: 'rgb(65,68,73)',
	                    fontWeight: 'regular',
	                    fontSize: '12pt',
	                    fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif',
	                    padding: '5',
						paddingTop: '5'
	                },
	                useHTML: false
	            },

		            legend: {
		                layout: 'horizontal',
		                align: 'center',
		                verticalAlign: 'bottom',

		                borderWidth: 0,
		                itemStyle: {
		                    color: 'rgb(65,68,73)',
		                    fontWeight: 'normal',
		                    fontSize: '8pt',
		                    fontFamily: '"OpenSansLight","OpenSansLight", Arial, "Pt Sans", sans-serif',
		                },
		                float: true
		            }
		        };
    Highcharts.visualize(table, options);
});


// successful stops 

$('#map').click(

function () {
    Highcharts.setOptions({
        colors:['rgb(26,19,52)', 'rgb(38,41,74)', 'rgb(1,84,90)', 'rgb(1,115,81)', 'rgb(3,195,131)', 'rgb(170,217,98)', 'rgb(251,191,69)', 'rgb(239,106,50)', 'rgb(237,3,69)', 'rgb(161,42,94)', 'rgb(113,1,98)', 'rgb(17,1,65)']
		    });
    Highcharts.visualize = function (table, options) {
        // the categories
        options.xAxis.categories = [];
        $('tbody th', table).each(function (i) {
            options.xAxis.categories.push(this.innerHTML);
        });

        // the data series
        options.series = [];
        $('tr', table).each(function (i) {
            var tr = this;
            $('th, td', tr).each(function (j) {
                if (j > 0) { // skip first column
                    if (i == 0) { // get the name and init the series
                        options.series[j - 1] = {
                            name: this.innerHTML,
                            data: [],
                            marker: {
                                symbol: 'circle',
                                radius: 2

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

    var table = document.getElementById('sumis'),
        options = {
            chart: {
                renderTo: 'chart7',
                type: 'spline',
                marginRight: 10,
                marginBottom: 70,
                marginTop: 60,
                marginLeft:45,
                zoomType: 'xy',
                backgroundColor: 'transparent'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Stops Resulting in a Court Summons',
                align: 'center',
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '15pt',
                    fontFamily: '"OpenSansBold","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }

            },
            subtitle: {
                text: 'Precinct Total by Year',
                align: 'center',
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '13pt',
                    fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }
            },
            xAxis: {
                labels: {
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                }

            },
            yAxis: {
                title: {
                    text: '',
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'regular',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                labels: {
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                startOnTick: false,
                maxPadding: 0

            },
            tooltip: {
                borderRadius: '.25em',
                borderWidth: '.5px',
                shadow: true,
                formatter: function () {
                    return '<span class="top">' + this.y + ' Summonses in ' + this.x + '</span>';
                },
	                style: {
	                    color: 'rgb(65,68,73)',
	                    fontWeight: 'regular',
	                    fontSize: '12pt',
	                    fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif',
	                    padding: '5',
						paddingTop: '5'
	                },
	                useHTML: false
	            },

		            legend: {
		                layout: 'horizontal',
		                align: 'center',
		                verticalAlign: 'bottom',

		                borderWidth: 0,
		                itemStyle: {
		                    color: 'rgb(65,68,73)',
		                    fontWeight: 'normal',
		                    fontSize: '8pt',
		                    fontFamily: '"OpenSansLight","OpenSansLight", Arial, "Pt Sans", sans-serif',
		                },
		                float: true
		            }
		        };
    Highcharts.visualize(table, options);
});

$('#map').click(

function () {
    Highcharts.setOptions({
        colors:[ 'rgb(1,84,90)', 'rgb(1,115,81)', 'rgb(3,195,131)', 'rgb(170,217,98)', 'rgb(251,191,69)', 'rgb(239,106,50)', 'rgb(237,3,69)', 'rgb(161,42,94)', 'rgb(113,1,98)', 'rgb(17,1,65)']
		    });
    Highcharts.visualize = function (table, options) {
        // the categories
        options.xAxis.categories = [];
        $('tbody th', table).each(function (i) {
            options.xAxis.categories.push(this.innerHTML);
        });

        // the data series
        options.series = [];
        $('tr', table).each(function (i) {
            var tr = this;
            $('th, td', tr).each(function (j) {
                if (j > 0) { // skip first column
                    if (i == 0) { // get the name and init the series
                        options.series[j - 1] = {
                            name: this.innerHTML,
                            data: [],
                            marker: {
                                symbol: 'circle',
                                radius: 2

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

    var table = document.getElementById('arrest'),
        options = {
            chart: {
                renderTo: 'chart8',
                type: 'spline',
                marginRight: 10,
                marginBottom: 70,
                marginTop: 60,
                marginLeft:45,
                zoomType: 'xy',
                backgroundColor: 'transparent'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Stops Resulting in an Arrest',
                align: 'center',
                verticalAlign: 'center',
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '15pt',
                    fontFamily: '"OpenSansBold","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }
            },
            subtitle: {
                text: 'Precinct Total by Year',
                align: 'center',
                style: {
                    color: 'rgb(65,68,73)',
                    fontWeight: 'regular',
                    fontSize: '13pt',
                    fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                }
            },
            xAxis: {
                labels: {
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                }

            },
            yAxis: {
                title: {
                    text: '',
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'regular',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                labels: {
                    style: {
                        color: 'rgb(65,68,73)',
                        fontWeight: 'normal',
                        fontSize: '9pt',
                        fontFamily: '"OpenSansItalic","OpenSansLight", Arial, "Pt Sans", sans-serif'
                    }
                },
                startOnTick: false,
                maxPadding: 0

            },
            tooltip: {
                borderRadius: '.25em',
                borderWidth: '.5px',
                shadow: true,
                formatter: function () {
                    return '<span class="top">' + this.y + ' stops ending in arrests in ' + this.x + '</span>';
                },
	                style: {
	                    color: 'rgb(65,68,73)',
	                    fontWeight: 'regular',
	                    fontSize: '12pt',
	                    fontFamily: '"OpenSansRegular","OpenSansLight", Arial, "Pt Sans", sans-serif',
	                    padding: '5',
						paddingTop: '5'
	                },
	                useHTML: false
	            },

		            legend: {
		                layout: 'horizontal',
		                align: 'center',
		                verticalAlign: 'bottom',

		                borderWidth: 0,
		                itemStyle: {
		                    color: 'rgb(65,68,73)',
		                    fontWeight: 'normal',
		                    fontSize: '8pt',
		                    fontFamily: '"OpenSansLight","OpenSansLight", Arial, "Pt Sans", sans-serif',
		                },
		                float: true
		            }
		        };
    Highcharts.visualize(table, options);
});