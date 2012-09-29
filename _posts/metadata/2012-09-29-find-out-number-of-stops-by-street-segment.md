---
layout: post
title: "Find out number of stops by street segment"
description: ""
category: metadata
tags: 
   - []
api: 
parents: ""
sql: 
shp: 
csv: 
source: "#"
data: /precinct/_posts/data/2012-09-29-find-out-number-of-stops-by-street-segment.md
---
{% include JB/setup %}

1\. New York DOITT

[Street Centerline Source](https://nycopendata.socrata.com/dataset/Street-Centerline/xh5f-79hn)

> Planimetric basemap layer containing street centerline features

[Roadbed Source](https://nycopendata.socrata.com/Facilities-and-Structures/Roadbed/448k-492a)

> Planimetric basemap polygon layer containing roadbed features.

{% highlight sql %}

CREATE TEMPORARY TABLE street_names
AS 
SELECT distinct
 roadbed.ogc_fid as ogc_fid,
 centerline.ogc_fid as name_fid,
 centerline.name as street_name 
FROM roadbed, centerline
WHERE 
ST_Intersects(centerline.wkb_geometry, roadbed.wkb_geometry) = TRUE
GROUP BY centerline.ogc_fid, roadbed.ogc_fid;
ALTER TABLE roadbed add column road_name varchar;
UPDATE roadbed
 SET road_name =  LOWER(replace(street_names.street_name,'NO NAME',''))
FROM street_names 
WHERE roadbed.ogc_fid = street_names.ogc_fid;
DROP TABLE street_names;

CREATE TEMPORARY TABLE street_counts AS SELECT
new_all.ogc_fid as new_all_fid,
MAX(roadbed.ogc_fid) as roadbed_fid
from new_all
LEFT JOIN 
roadbed
ON ST_Intersects(new_all.lat_lon, roadbed.wkb_geometry) = TRUE
GROUP BY new_all.ogc_fid;


#### Add a column to the original table with the ID of the street segment the stop intersected with. 
ALTER TABLE new_all 
ADD COLUMN street_segment INTEGER;
UPDATE new_all
SET street_segment = street_counts.roadbed_fid
WHERE street_counts.new_all_fid = new_all.ogc_fid;


{% endhighlight %}
