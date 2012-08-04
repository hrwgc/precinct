<script type="text/javascript">

function mmg_google_docs(id, callback) {
    if (typeof reqwest === "undefined") {
    throw "CSV: reqwest required for mmg_csv_url";
    }
    function response(x) {
    var features = [],
        latfield = "",
        lonfield = "";
    if (!x || !x.feed) return features;
    for (var f in x.feed.entry[0]) {
        if (f.match(/\$Lat/i)) latfield = f;
        if (f.match(/\$Lon/i)) lonfield = f;
    }
    for (var i = 0; i  < x.feed.entry.length; i++) {
        var entry = x.feed.entry[i];
        var feature = {
        geometry: {
            type: "Point",
            coordinates: []
        },
          properties: {
            title:


    {% for col in page.cols limit:1 %}
                

				'<h3 class="int-primary"
				


				id="{{ col }}-ref"
				

				>'

    {% if page.col-title != empty %}
        {% for title in page.col-title limit:1 %}
                 + "{{ title }} 

<span class="int-value">'


        {% endfor %}
    {% else %}
                + "{{ col }} 

<span class="int-value">'


    {% endif %}
                 + entry.gsx${{ col }}.$t
               

 + '</span></h3>' 


    {% endfor %}
    {% for col in page.cols offset:1 %}
                

 + '<h3 class="int-primary" 

 id="{{ col }}-ref" 

>'


    {% if page.col-title != empty %}
        {% for title in page.col-title offset:1 %}
                + '{{ title }} 

 <span class="int-value">' 


        {% endfor %}            
    {% else %}
                + '{{ col }} 

<span class="int-value">'


    {% endif %}
                + entry.gsx${{ col }}.$t
               

 + '</span></h3>',


    {% endfor %}
    {% if page.marker-color == empty %}
            "marker-color": entry.gsx$color.$t,
    {% else %}
            "marker-color": {{ page.marker-color }},
    {% endif %}
    {% if page.marker-symbol == empty %}
            "marker-symbol": entry.gsx$symbol.$t,
    {% else %}
            "marker-symbol": {{ page.marker-symbol }},
    {% endif %}
    {% if page.marker-size == empty %}
            "marker-size": entry.gsx$size.$t
    {% else %}
            "marker-size": {{ page.marker-size }}
    {% endif %}
    

        }
        };
        for (var y in entry) {
        if (y === latfield) feature.geometry.coordinates[1] = parseFloat(entry[y].$t);
        else if (y === lonfield) feature.geometry.coordinates[0] = parseFloat(entry[y].$t);
        else if (y.indexOf("gsx$") === 0) {
            feature.properties[y.replace("gsx$", "")] = entry[y].$t;
        }
        }
        if (feature.geometry.coordinates.length == 2) features.push(feature);
    }
    return callback(features);
    }
    var url = "https://spreadsheets.google.com/feeds/list/" + id +
    "/1/public/values?alt=json-in-script&callback=callback";
    reqwest({
    url: url,
    type: "jsonp",
    jsonpCallback: "callback",
    success: response,
    error: response
    });
}


{% if page.scale == "true" %}
    var scale_factory_cache = {};
    function scale_factory(feature) {
    var dim = Math.round(+feature.properties.{{ page.cols[1] }} / 1200);
    if (!scale_factory_cache[dim]) {
        var c = document.createElement("canvas");
        c.width = dim;
        c.height = dim;
        var ctx = c.getContext("2d");
        ctx.fillStyle = "rgba(0, 255, 42, 0.3)";
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.arc(dim/2, dim/2, dim/Math.PI, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        scale_factory_cache[dim] = c.toDataURL();
    }
    var el = document.createElement("img");
    el.width = dim;
    el.height = dim;
    el.src = scale_factory_cache[dim];
    el.style.cssText =
        "width:" + dim + "px;" +
        "height:" + dim + "px;" +
        "margin-left:" + (-dim/2) + "px;" +
        "margin-top:" + (-dim/2) + "px;" +
        "position:absolute";
    return el;
    }
{% endif %}
{% unless page.api == empty %}
     wax.tilejson("http://a.tiles.mapbox.com/v3/{{ page.api }}.jsonp",
       function(tj) {
     var m = new MM.Map("map", new wax.mm.connector(tj));
   {% unless page.gdoc == empty %}
         mmg_google_docs("{{ page.gdoc }}", function(features) {
         var types = {};
         types.All = true;
         features = features.map(function(f) {
             f.properties.title = f.properties.title,
             types[f.properties.title] = true;
             return f;
         });
   {% endunless %}
{% endunless %}  
         var ml = mapbox.markers.layer()
{% if page.scale == "true" %}
         .factory(scale_factory)
{% endif %}
         .features(features);
         m.addLayer(ml);
         m.extent(ml.extent());
         mapbox.markers.interaction(ml);
     });
 });
</script>