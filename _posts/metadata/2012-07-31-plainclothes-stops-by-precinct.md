---
layout: post
title: "Plainclothes Stops by Precinct"
description: ""
category: metadata
tags: 
   - map codes
   - psql script
api: herwig.stop-and-frisk-no-uniform-precinct
parents: ""
sql: ""
shp: ""
source: "#"
data: ""
---
{% include JB/setup %}

### PSQL Statement
{% highlight psql %}

(select
 cast(100*(cast(frisked as numeric)/cast(total_stops as numeric)) as integer) as pct_frisked,
  concat(cast(round(100*(cast(frisked as numeric) / cast(total_stops as numeric)),0) as text),'%') as txt_pct_frisked,
  cast(100*(cast(offnounif as numeric)/cast(total_stops as numeric))as integer) as pct_nounif,
 concat(cast(round(100*(cast(offnounif as numeric)/cast(total_stops as numeric)),0) as text),'%') as txt_pct_nounif,
 * from pct_nounif where cast(total_stops as integer) > 0) as pct

{% endhighlight %}

### Tooltip
{% highlight html %}

<h3 class='int-title'>Precinct</h3>
<h4 class='int-stat'>{{precinct}}</h4>

<h3 class='int-title'>Plainclothes Stops</h3>
<h4 class=int-value>{{pct_nounif}}%</h4>
<h4 class='int-value'>{{offnounif}} of {{total_stops}} stops were conducted by plainclothes officers.</h4>


<div class='hide'>
<h3 class='int-title'>Frisks</h3>
<h4 class=int-value>{{pct_frisked}}%</h4>
<h4 class='int-value'>{{frisked}} of {{total_stops}} stops resulted in a frisking.</h4>
</div>

{% endhighlight %}
### Carto
{% highlight css %}
#pct {
    [zoom < 12] { marker-allow-overlap:false; }
    marker-width:5; 
    marker-fill:black;
    marker-line-color:#fff;
    marker-line-width:4;
    [pct_nounif > 30] { marker-width: 15; }
    [pct_nounif > 40] { marker-width:15;
      [zoom >= 12] { marker-width:25; }
      marker-width:20;
      marker-fill:red;
      marker-line-width:.4;
      marker-allow-overlap:true;
      [zoom >= 12] { marker-width:30; }
      [zoom >= 12] { marker-width:30;} 
      text-name:'[txt_pct_nounif]';
      text-face-name:'Open Sans Semibold Italic';
      text-size:10;
      [pct_nounif > 40][zoom < 12]{ text-size:9;} 
      [pct_nounif > 50] { text-size: 12; [zoom < 12]{ text-size:10; } }
      text-fill:#fff; 
      text-allow-overlap:true;
      }
    [zoom <= 10] { marker-allow-overlap:false; }
  }
{% endhighlight %}