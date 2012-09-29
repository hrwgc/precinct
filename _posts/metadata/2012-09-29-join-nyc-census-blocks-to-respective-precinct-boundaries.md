---
layout: post
title: "Join NYC Census Blocks to Respective Precinct Boundaries"
description: ""
category: metadata
tags: 
   - nypd
   - precincts
   - census blocks
api: 
parents: ""
sql: 
shp: 
csv: 
source: "#"
data: /precinct/_posts/data/2012-09-29-join-nyc-census-blocks-to-respective-precinct-boundaries.md
---
{% include JB/setup %}

NYPD Police Precinct Shapefile 

## NYC Census Block Shapefile
Source: Center for Urban Research, CUNY Graduate Center, [NYC block shapefile with 2000 and 2010 population attributes and plurality codes][2]

[2]: http://www.urbanresearchmaps.org/plurality/methodology.htm#note

{% highlight sql %}
CREATE TABLE precinct_census AS SELECT
census.block AS census_block,
nypp.precinct AS nypd_precinct
FROM census
LEFT JOIN nypp ON
ST_Intersects(ST_Centroid(census.wkb_geometry),nypp.wkb_geometry) = TRUE;
{% endhighlight %}
