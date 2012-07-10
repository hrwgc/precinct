        // Make a new map in #map
        var main = Map('map', {
            api: 'http://a.tiles.mapbox.com/v3/examples.map-20v6611k.jsonp',
            center: {
                    lat: 40.63,
                    lon: -73.9,
                    zoom: 11,
                    ease: 1000
               },
            zoomRange: [10, 18],
            features: [
                'tooltips',        
                'zoompan',
                'legend'
            ]
         });

       main.layers({

            home: {
                api: 'http://a.tiles.mapbox.com/v3/herwig.nyc-006.jsonp',
                center: {
                        lat: 40.63,
                        lon: -73.9,
                        zoom: 11,
                        ease: 1000
                   },
                zoomRange: [10, 17],
                features: [
                    'tooltips',        
                    'zoompan',
                    'legend'
                ],
                initial:true
			}
         });
