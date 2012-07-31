---
layout: post
title: "Stops resulting in frisking"
description: ""
category: metadata
tags: 
   - map code
   - psql scripts
api: "herwig.stop-and-frisk-frisk-stops"
parents: "[]"
sql: "herwig.stop-and-frisk-frisk-stops"
shp: "herwig.stop-and-frisk-frisk-stops"
source: "#"
data: /precinct/_posts/data/2012-07-31-stops-resulting-in-frisking.md
---
{% include JB/setup %}
### PostGIS layer 

{% highlight psql %}
(select
 cast(100*(cast(frisked as numeric)/cast(total_stops as numeric)) as integer) as pct_frisked,
  concat(cast(round(100*(cast(frisked as numeric) / cast(total_stops as numeric)),0) as text),'%') as txt_pct_frisked,
  cast(100*(cast(offnounif as numeric)/cast(total_stops as numeric))as integer) as pct_nounif,
 concat(cast(round(100*(cast(offnounif as numeric)/cast(total_stops as numeric)),0) as text),'%') as txt_pct_nounif,
 * from pct_nounif where cast(total_stops as integer) > 0) as pct
{% endhighlight %}

### Carto

{% highlight css %}
#pct {
    [zoom < 12] { marker-allow-overlap:false; }
    marker-width:5; 
    marker-fill:black;
    marker-line-color:#fff;
    marker-line-width:4;
    [pct_frisked > 30] { marker-width: 10; }
    [pct_frisked > 40] { marker-width:15; }
    [pct_frisked > 50] { marker-width:20;
      [pct_frisked > 65] { marker-width:30; }
      [zoom >= 12] { marker-width:25; }
      marker-width:20;
      marker-fill:red;
      marker-line-width:.4;
      marker-allow-overlap:true;
      [zoom >= 12] { marker-width:30; }
      [zoom >= 12] { marker-width:30;} 
      [zoom >= 12][pct_frisked > 65] { marker-width:40; }
      text-name:'[txt_pct_frisked]';
      text-face-name:'Open Sans Semibold Italic';
      text-size:10;
      [pct_frisked > 50][zoom < 12]{ text-size:9;} 
      [pct_frisked > 60] { text-size: 12; [zoom < 12]{ text-size:10; } }
      text-fill:#fff; 
      [zoom < 11 ] {text-fill: transparent; text-allow-overlap:true }
      text-allow-overlap:true;
      }
    [zoom <= 10] { marker-allow-overlap:false; }
  }
{% endhighlight %}

### Tooltip

{% highlight html %}
<h3 class='int-title'>Precinct</h3>
<h4 class='int-stat'>{{precinct}}</h4>

<h3 class='int-title'>Frisks</h3>
<h4 class=int-value>{{pct_frisked}}%</h4>
<h4 class='int-value'>{{frisked}} of {{total_stops}} stops resulted in a frisking.</h4>


<div class='hide'>
<h3 class='int-title'>Plainclothes Stops</h3>
<h4 class=int-value>{{pct_nounif}}%</h4>
<h4 class='int-value'>{{offnounif}} of {{total_stops}} stops were conducted by plainclothes officers.</h4>
</div>

{% endhighlight %}
