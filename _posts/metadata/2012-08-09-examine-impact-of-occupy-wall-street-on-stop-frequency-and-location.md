---
layout: post
title: "Examine impact of Occupy Wall Street on stop frequency and location"
description: ""
category: metadata
tags: 
   - Occupy Wall Street
   - 2011
   - new_all
api: 
parents: ""
sql: 
shp: 
csv: 
source: "#"
---
{% include JB/setup %}
{% highlight sql %}
create table sf11 as 
select
ogc_fid,
lat_lon as wkb_geometry,
race,
sex,
age,
crimsusp,
arstmade,
sumissue,
sumoffen,
cast(regexp_replace(regexp_replace(datestop,'(.*)20\d\d$','\1'),'([0-9]{1,2})([0-9]{2})','\2') as integer) as daystop, cast(regexp_replace(regexp_replace(datestop,'(.*)20\d\d$','\1'),'([0-9]{1,2})([0-9]{2})','\1') as integer) as monthstop, 
cast(regexp_replace(datestop,'^.*(20[0-9]{2})$','\1') as integer) as yearstop
from new_all where year = '2011';
{% endhighlight %}

{% highlight sql %}
create table sf11month as select
max(census.wkb_geometry),
cast(count(census.block) as integer) as total_stops,
max(census.block) as block,
sf11.monthstop
from sf11
left join 
stops_by_block
 ON 
sf11.ogc_fid = stops_by_block.new_all_fid
left join 
census
 ON
stops_by_block.census_fid = census.ogc_fid
 group by census.block, sf11.monthstop;
{% endhighlight %}

