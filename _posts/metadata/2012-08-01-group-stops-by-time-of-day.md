---
layout: post
title: "Group Stops by Time of Day"
description: ""
category: metadata
tags: 
   - psql script
   - tilemill
   - lgbt
api: ""
parents: "[]"
sql: ""
shp: ""
source: "#"
data: /precinct/_posts/data/2012-08-01-group-stops-by-time-of-day.md
---
{% include JB/setup %}
Use this script to group stops by the time of day when the stop occurred. You can substitute the table you want to analyze by changing the {% highlight sql %}FROM lgbt {% endhighlight %} to your table of interest. Additionally, you can {% highlight sql %}
SELECT 
concat(regexp_replace(timestop,'^([0-9]{2})[0-9]{0,}$', '\1'),':00'),
count(*)
FROM lgbt
WHERE length(timestop) = 4
GROUP BY concat(regexp_replace(timestop,'^([0-9]{2})[0-9]{0,}$', '\1'),':00')
ORDER BY concat(regexp_replace(timestop,'^([0-9]{2})[0-9]{0,}$', '\1'),':00');
{% endhighlight %}

{% highlight sql %}
 concat | count 
--------+-------
 00:00  |  3140
 01:00  |  2971
 02:00  |  2020
 03:00  |  1331
 04:00  |   758
 05:00  |   420
 06:00  |   241
 07:00  |   228
 08:00  |   612
 09:00  |   842
 10:00  |  1765
 11:00  |  2158
 12:00  |  2340
 13:00  |  2626
 14:00  |  2985
 15:00  |  2838
 16:00  |  3033
 17:00  |  3153
 18:00  |  3668
 19:00  |  4590
 20:00  |  5177
 21:00  |  5273
 22:00  |  5264
 23:00  |  4796
 24:00  |    18
 25:00  |     2
 26:00  |     1
 29:00  |     2
(28 rows)
{% endhighlight %}

{% highlight sql %}
nyclu=# select length(timestop), count(length(timestop)) from new_all where timestop ~* '[0-9]{1,}:[0-9]{1,}' group by length(timestop);
### Result
 length | count  
--------+--------
      4 |     71
      5 | 779415
(2 rows)
{% endhighlight %}