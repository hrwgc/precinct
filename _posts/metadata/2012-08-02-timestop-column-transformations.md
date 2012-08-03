---
layout: post
title: "Timestop column transformations"
description: ""
category: metadata
tags: 
   - psql statement
   - time
   - timestop
   - new_all
api: ""
parents: "[]"
sql: ""
shp: ""
source: "#"
data: /precinct/_posts/data/2012-08-02-timestop-column-transformations.md
---
{% include JB/setup %}
{% highlight sql %}
nyclu=# select length(replace(timestop,':','')), count(*) from new_all 
WHERE length(replace(timestop,':','')) = 4 group by length(replace(timestop,':',''));

 length |  count  
--------+---------
      0 |    2473
    222 |       1
      1 |   11345
      2 |   68827
      4 | 3935858
      3 |  241127
	(6 rows)
{% endhighlight %}

{% highlight sql %}
CREATE TABLE timestop AS
SELECT
new_all.ogc_fid AS ogc_fid,
max(census.blockce10) AS blockce10,
max(nypp_single.precinct) AS precinct,
max(regexp_replace(new_all.timestop,'^([0-9]{2})([0-9]{2})$','\1:\2:00')) AS timestop_orig, max(regexp_replace(replace(new_all.timestop,':',''),'^([0-9]{2})([0-9]{2})$','\1:00')) AS timestop_group
FROM new_all
LEFT JOIN
census
ON
ST_Intersects(new_all.lat_lon,census.wkb_geometry) = TRUE
LEFT JOIN
nypp_single
ON
ST_Intersects (new_all.lat_lon,nypp_single.wkb_geometry) = TRUE
WHERE length(replace(timestop,':','')) = 4
GROUP BY new_all.ogc_fid;
{% endhighlight %}

### Date manipulations

#### Background

{% highlight sql %}
nyclu=# SELECT
length(datestop),
year,
count(*)
FROM new_all
GROUP BY
year,
length(datestop);

 length | year | count  
--------+------+--------
      8 | 2003 | 160851
      8 | 2004 | 313523
      7 | 2005 | 308134
      8 | 2005 |  90057
      0 | 2006 |      2
     10 | 2006 | 506489
      8 | 2007 | 472096
      8 | 2008 | 540302
      7 | 2009 | 455006
      8 | 2009 | 126162
      7 | 2010 | 456799
      8 | 2010 | 144486
      7 | 2011 | 515767
      8 | 2011 | 169957
(14 rows)
{% endhighlight %}

{% highlight sql %}
nyclu=# select datestop from new_all where year = '2003' limit 10;
 datestop 
----------
 01092003
 02052003
 02062003
 02072003
 04102003
 04252003
 04292003
 05272003
 07172003
 07282003
(10 rows)
{% endhighlight %}

{% highlight sql %}
nyclu=# select datestop from new_all where year = '2004' limit 10;
 datestop 
----------
 12082004
 07282004
 01072004
 02052004
 07182004
 10212004
 11052004
 03192004
 07012004
 01232004
(10 rows)
{% endhighlight %}

{% highlight sql %}
nyclu=# select datestop from new_all where year = '2005' limit 10;
 datestop 
----------
 4102005
 4102005
 4102005
 4102005
 4102005
 4102005
 4102005
 4102005
 10072005
 4102005
(10 rows)
{% endhighlight %}

{% highlight sql %}
nyclu=# select datestop from new_all where year = '2006' limit 10;
  datestop  
------------
 2006-09-18
 2006-10-07
 2006-10-31
 2006-11-23
 2006-12-28
 2006-01-05
 2006-01-31
 2006-01-10
 2006-02-01
 2006-02-03
{% endhighlight %}

{% highlight sql %}
nyclu=# select datestop from new_all where year = '2007' limit 10;
 datestop 
----------
 10232007
 01012007
 01022007
 01022007
 01032007
 01032007
 01042007
 01052007
 01062007
 01062007
(10 rows)
{% endhighlight %}


{% highlight sql %}
nyclu=# select datestop from new_all where year = '2008' limit 10;
 datestop 
----------
 11252008
 11272008
 11272008
 11272008
 11282008
 11282008
 11292008
 11292008
 11302008
 12012008
(10 rows)
{% endhighlight %}

{% highlight sql %}
nyclu=# select datestop from new_all where year = '2009' limit 10;
 datestop 
----------
 1292009
 10092009
 11042009
 11042009
 11242009
 12042009
 1072009
 6142009
 6262009
 10092009
(10 rows)
{% endhighlight %}

{% highlight sql %}
nyclu=# select datestop from new_all where year = '2010' limit 10;
 datestop 
----------
 10282010
 10292010
 10292010
 10292010
 10292010
 10292010
 10292010
 10292010
 10292010
 10292010
(10 rows)
{% endhighlight %}

{% highlight sql %}
nyclu=# select datestop from new_all where year = '2011' limit 10;
 datestop 
----------
 1032011
 1042011
 1042011
 1042011
 1052011
 1052011
 1062011
 1062011
 1062011
 1062011
(10 rows)
{% endhighlight %}


*unfinished*

{% highlight sql %}
select regexp_replace(datestop,'^([0-9]{1,2})([0-9]{2})(20[0-9]{2})','\1|\2|20\3')),
max(regexp_replace(datestop,'^([0-9]{2}).*','\1'))
{% endhighlight %}

