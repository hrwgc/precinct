---
layout: post
title: "Race Data Tables"
description: ""
category: 
tags: [psql scripts, race, data definitions]
---
{% include JB/setup %}

{% highlight psql %}

CREATE TEMPORARY TABLE t1 AS SELECT
new_all.ogc_fid AS new_all_fid,
stops_by_block.census_fid AS census_fid,
new_all.year AS YEAR,
regexp_replace(datestop,'([0-9]{1,2})([0-9]{2})([0-9]{4})','\1-\2-\3') AS datestop,
replace(replace(replace(replace(sex,'F','2'),'M','1'),'Z','3'),'','4') AS sex,
replace(replace(replace(new_all.officrid,'0','2'), 'I','1'),'','4') AS officrid,  replace(replace(replace(replace(replace(replace(replace(new_all.forceuse,'DS','5'),'DO','6'),'OR','7'),'OT','8'),'SF','9'),'SW','10'),'','4')  AS forceuse,
replace(replace(replace(new_all.cs_furtv,'N','2'),'Y','1'),'','4') AS cs_furtv,
replace(replace(replace(new_all.rf_rfcmp,'N','2'),'Y','1'),'','4') AS rf_rfcmp,
replace(replace(replace(new_all.ac_cgdir,'N','2'),'Y','1'),'','4') AS ac_cgdir,
replace(replace(replace(new_all.rf_verbl,'N','2'),'Y','1'),'','4') AS rf_verbl,
replace(replace(replace(new_all.cs_vcrim,'N','2'),'Y','1'),'','4') AS cs_vcrim,
replace(replace(replace(new_all.cs_bulge,'N','2'),'Y','1'),'','4') AS cs_bulge,
replace(replace(replace(new_all.cs_other,'N','2'),'Y','1'),'','4') AS cs_other,
new_all.race AS bl_race_total,
new_all.race AS bl_race_11,
new_all.race AS bl_race_10,
new_all.race AS bl_race_09,
new_all.race AS bl_race_08,
replace(replace(replace(new_all.pistol,'N','2'),'Y','1'),'','4')  AS pistol,
replace(replace(replace(new_all.riflshot,'N','2'),'Y','1'),'','4')  AS riflshot,
replace(replace(replace(new_all.asltweap,'N','2'),'Y','1'),'','4')  AS asltweap,
replace(replace(replace(new_all.knifcuti,'N','2'),'Y','1'),'','4')  AS knifcuti,
replace(replace(replace(new_all.machgun,'N','2'),'Y','1'),'','4')  AS machgun,
replace(replace(replace(new_all.othrweap,'N','2'),'Y','1'),'','4')  AS othrweap,
replace(replace(replace(new_all.arstmade,'N','2'),'Y','1'),'','4')  AS arstmade,
replace(replace(replace(new_all.sumissue,'N','2'),'Y','1'),'','4')  AS sumissue,
replace(replace(replace(new_all.offunif,'N','2'),'Y','1'),'','4')  AS offunif,
replace(replace(replace(new_all.frisked,'N','2'),'Y','1'),'','4')  AS frisked,
replace(replace(replace(new_all.searched,'N','2'),'Y','1'),'','4')  AS searched

FROM new_all

LEFT JOIN stops_by_block

ON stops_by_block.new_all_fid = new_all.ogc_fid

AND new_all.race = 'B';
{% endhighlight %}

{% highlight psql %}
CREATE TEMPORARY TABLE t2 AS SELECT
new_all.ogc_fid AS new_all_fid,
stops_by_block.census_fid AS census_fid,

new_all.YEAR AS YEAR,
regexp_replace(datestop,'([0-9]{1,2})([0-9]{2})([0-9]{4})','\1-\2-\3') AS datestop,
replace(replace(replace(replace(sex,'F','2'),'M','1'),'Z','3'),'','4') AS sex,
replace(replace(replace(new_all.officrid,'0','2'), 'I','1'),'','4') AS officrid,
replace(replace(replace(replace(replace(replace(replace(new_all.forceuse,'DS','5'),'DO','6'),'OR','7'),'OT','8'),'SF','9'),'SW','10'),'','4')  AS forceuse,
replace(replace(replace(new_all.cs_furtv,'N','2'),'Y','1'),'','4') AS cs_furtv,
replace(replace(replace(new_all.rf_rfcmp,'N','2'),'Y','1'),'','4') AS rf_rfcmp,
replace(replace(replace(new_all.ac_cgdir,'N','2'),'Y','1'),'','4') AS ac_cgdir,
replace(replace(replace(new_all.rf_verbl,'N','2'),'Y','1'),'','4') AS rf_verbl,
replace(replace(replace(new_all.cs_vcrim,'N','2'),'Y','1'),'','4') AS cs_vcrim,
replace(replace(replace(new_all.cs_bulge,'N','2'),'Y','1'),'','4') AS cs_bulge,
replace(replace(replace(new_all.cs_other,'N','2'),'Y','1'),'','4') AS cs_other,
new_all.race AS lat_race_total,
new_all.race AS lat_race_11,
new_all.race AS lat_race_10,
new_all.race AS lat_race_09,
new_all.race AS lat_race_08,
replace(replace(replace(new_all.pistol,'N','2'),'Y','1'),'','4')  AS pistol,
replace(replace(replace(new_all.riflshot,'N','2'),'Y','1'),'','4')  AS riflshot,
replace(replace(replace(new_all.asltweap,'N','2'),'Y','1'),'','4')  AS asltweap,
replace(replace(replace(new_all.knifcuti,'N','2'),'Y','1'),'','4')  AS knifcuti,
replace(replace(replace(new_all.machgun,'N','2'),'Y','1'),'','4')  AS machgun,
replace(replace(replace(new_all.othrweap,'N','2'),'Y','1'),'','4')  AS othrweap,
replace(replace(replace(new_all.arstmade,'N','2'),'Y','1'),'','4')  AS arstmade,
replace(replace(replace(new_all.sumissue,'N','2'),'Y','1'),'','4')  AS sumissue,
replace(replace(replace(new_all.offunif,'N','2'),'Y','1'),'','4')  AS offunif,
replace(replace(replace(new_all.frisked,'N','2'),'Y','1'),'','4')  AS frisked,
replace(replace(replace(new_all.searched,'N','2'),'Y','1'),'','4')  AS searched

FROM new_all

LEFT JOIN stops_by_block

ON stops_by_block.new_all_fid = new_all.ogc_fid

AND (new_all.race = 'P'
OR new_all.race = 'Q');
{% endhighlight %}

{% highlight psql %}
CREATE TEMPORARY TABLE t3 AS SELECT
new_all.ogc_fid AS new_all_fid,
stops_by_block.census_fid AS census_fid,

new_all.YEAR AS YEAR,
regexp_replace(datestop,'([0-9]{1,2})([0-9]{2})([0-9]{4})','\1-\2-\3') AS datestop,
replace(replace(replace(replace(sex,'F','2'),'M','1'),'Z','3'),'','4') AS sex,
replace(replace(replace(new_all.officrid,'0','2'), 'I','1'),'','4') AS officrid,
replace(replace(replace(replace(replace(replace(replace(new_all.forceuse,'DS','5'),'DO','6'),'OR','7'),'OT','8'),'SF','9'),'SW','10'),'','4')  AS forceuse,
replace(replace(replace(new_all.cs_furtv,'N','2'),'Y','1'),'','4') AS cs_furtv,
replace(replace(replace(new_all.rf_rfcmp,'N','2'),'Y','1'),'','4') AS rf_rfcmp,
replace(replace(replace(new_all.ac_cgdir,'N','2'),'Y','1'),'','4') AS ac_cgdir,
replace(replace(replace(new_all.rf_verbl,'N','2'),'Y','1'),'','4') AS rf_verbl,
replace(replace(replace(new_all.cs_vcrim,'N','2'),'Y','1'),'','4') AS cs_vcrim,
replace(replace(replace(new_all.cs_bulge,'N','2'),'Y','1'),'','4') AS cs_bulge,
replace(replace(replace(new_all.cs_other,'N','2'),'Y','1'),'','4') AS cs_other,
new_all.race AS wht_race_total,
new_all.race AS wht_race_11,
new_all.race AS wht_race_10,
new_all.race AS wht_race_09,
new_all.race AS wht_race_08,
replace(replace(replace(new_all.pistol,'N','2'),'Y','1'),'','4')  AS pistol,
replace(replace(replace(new_all.riflshot,'N','2'),'Y','1'),'','4')  AS riflshot,
replace(replace(replace(new_all.asltweap,'N','2'),'Y','1'),'','4')  AS asltweap,
replace(replace(replace(new_all.knifcuti,'N','2'),'Y','1'),'','4')  AS knifcuti,
replace(replace(replace(new_all.machgun,'N','2'),'Y','1'),'','4')  AS machgun,
replace(replace(replace(new_all.othrweap,'N','2'),'Y','1'),'','4')  AS othrweap,
replace(replace(replace(new_all.arstmade,'N','2'),'Y','1'),'','4')  AS arstmade,
replace(replace(replace(new_all.sumissue,'N','2'),'Y','1'),'','4')  AS sumissue,
replace(replace(replace(new_all.offunif,'N','2'),'Y','1'),'','4')  AS offunif,
replace(replace(replace(new_all.frisked,'N','2'),'Y','1'),'','4')  AS frisked,
replace(replace(replace(new_all.searched,'N','2'),'Y','1'),'','4')  AS searched

FROM new_all

LEFT JOIN stops_by_block

ON stops_by_block.new_all_fid = new_all.ogc_fid

AND new_all.race = 'W';
{% endhighlight %}

{% highlight psql %}
CREATE TABLE t4 AS SELECT
new_all.ogc_fid AS new_all_fid,
stops_by_block.census_fid AS census_fid,
new_all.YEAR AS YEAR,
regexp_replace(datestop,'([0-9]{1,2})([0-9]{2})([0-9]{4})','\1-\2-\3') AS datestop,
replace(replace(replace(replace(sex,'F','2'),'M','1'),'Z','3'),'','4') AS sex,
replace(replace(replace(new_all.officrid,'0','2'), 'I','1'),'','4') AS officrid,
replace(replace(replace(replace(replace(replace(replace(new_all.forceuse,'DS','5'),'DO','6'),'OR','7'),'OT','8'),'SF','9'),'SW','10'),'','4')  AS forceuse,
replace(replace(replace(new_all.cs_furtv,'N','2'),'Y','1'),'','4') AS cs_furtv,
replace(replace(replace(new_all.rf_rfcmp,'N','2'),'Y','1'),'','4') AS rf_rfcmp,
replace(replace(replace(new_all.ac_cgdir,'N','2'),'Y','1'),'','4') AS ac_cgdir,
replace(replace(replace(new_all.rf_verbl,'N','2'),'Y','1'),'','4') AS rf_verbl,
replace(replace(replace(new_all.cs_vcrim,'N','2'),'Y','1'),'','4') AS cs_vcrim,
replace(replace(replace(new_all.cs_bulge,'N','2'),'Y','1'),'','4') AS cs_bulge,
replace(replace(replace(new_all.cs_other,'N','2'),'Y','1'),'','4') AS cs_other,
new_all.race AS api_race_total,
new_all.race AS api_race_11,
new_all.race AS api_race_10,
new_all.race AS api_race_09,
new_all.race AS api_race_08,
replace(replace(replace(new_all.pistol,'N','2'),'Y','1'),'','4')  AS pistol,
replace(replace(replace(new_all.riflshot,'N','2'),'Y','1'),'','4')  AS riflshot,
replace(replace(replace(new_all.asltweap,'N','2'),'Y','1'),'','4')  AS asltweap,
replace(replace(replace(new_all.knifcuti,'N','2'),'Y','1'),'','4')  AS knifcuti,
replace(replace(replace(new_all.machgun,'N','2'),'Y','1'),'','4')  AS machgun,
replace(replace(replace(new_all.othrweap,'N','2'),'Y','1'),'','4')  AS othrweap,
replace(replace(replace(new_all.arstmade,'N','2'),'Y','1'),'','4')  AS arstmade,
replace(replace(replace(new_all.sumissue,'N','2'),'Y','1'),'','4')  AS sumissue,
replace(replace(replace(new_all.offunif,'N','2'),'Y','1'),'','4')  AS offunif,
replace(replace(replace(new_all.frisked,'N','2'),'Y','1'),'','4')  AS frisked,
replace(replace(replace(new_all.searched,'N','2'),'Y','1'),'','4')  AS searched

FROM new_all

LEFT JOIN stops_by_block

ON stops_by_block.new_all_fid = new_all.ogc_fid

AND new_all.race = 'A';
{% endhighlight %}

{% highlight psql %}
CREATE TEMPORARY TABLE t5 AS SELECT
new_all.ogc_fid AS new_all_fid,
stops_by_block.census_fid,
new_all.YEAR AS YEAR,
regexp_replace(datestop,'([0-9]{1,2})([0-9]{2})([0-9]{4})','\1-\2-\3') AS datestop,
replace(replace(replace(replace(sex,'F','2'),'M','1'),'Z','3'),'','4') AS sex,
replace(replace(replace(new_all.officrid,'0','2'), 'I','1'),'','4') AS officrid,
replace(replace(replace(replace(replace(replace(replace(new_all.forceuse,'DS','5'),'DO','6'),'OR','7'),'OT','8'),'SF','9'),'SW','10'),'','4')  AS forceuse,
replace(replace(replace(new_all.cs_furtv,'N','2'),'Y','1'),'','4') AS cs_furtv,
replace(replace(replace(new_all.rf_rfcmp,'N','2'),'Y','1'),'','4') AS rf_rfcmp,
replace(replace(replace(new_all.ac_cgdir,'N','2'),'Y','1'),'','4') AS ac_cgdir,
replace(replace(replace(new_all.rf_verbl,'N','2'),'Y','1'),'','4') AS rf_verbl,
replace(replace(replace(new_all.cs_vcrim,'N','2'),'Y','1'),'','4') AS cs_vcrim,
replace(replace(replace(new_all.cs_bulge,'N','2'),'Y','1'),'','4') AS cs_bulge,
replace(replace(replace(new_all.cs_other,'N','2'),'Y','1'),'','4') AS cs_other,
new_all.race AS amind_race_total,
new_all.race AS amind_race_11,
new_all.race AS amind_race_10,
new_all.race AS amind_race_09,
new_all.race AS amind_race_08,
replace(replace(replace(new_all.pistol,'N','2'),'Y','1'),'','4')  AS pistol,
replace(replace(replace(new_all.riflshot,'N','2'),'Y','1'),'','4')  AS riflshot,
replace(replace(replace(new_all.asltweap,'N','2'),'Y','1'),'','4')  AS asltweap,
replace(replace(replace(new_all.knifcuti,'N','2'),'Y','1'),'','4')  AS knifcuti,
replace(replace(replace(new_all.machgun,'N','2'),'Y','1'),'','4')  AS machgun,
replace(replace(replace(new_all.othrweap,'N','2'),'Y','1'),'','4')  AS othrweap,
replace(replace(replace(new_all.arstmade,'N','2'),'Y','1'),'','4')  AS arstmade,
replace(replace(replace(new_all.sumissue,'N','2'),'Y','1'),'','4')  AS sumissue,
replace(replace(replace(new_all.offunif,'N','2'),'Y','1'),'','4')  AS offunif,
replace(replace(replace(new_all.frisked,'N','2'),'Y','1'),'','4')  AS frisked,
replace(replace(replace(new_all.searched,'N','2'),'Y','1'),'','4')  AS searched

FROM new_all

LEFT JOIN stops_by_block

ON stops_by_block.new_all_fid = new_all.ogc_fid

AND new_all.race = 'I';
{% endhighlight %}

{% highlight psql %}
CREATE  TABLE t6 AS SELECT
new_all.ogc_fid AS new_all_fid,
stops_by_block.census_fid AS census_fid,
new_all.YEAR AS YEAR,
regexp_replace(datestop,'([0-9]{1,2})([0-9]{2})([0-9]{4})','\1-\2-\3') AS datestop,
replace(replace(replace(replace(sex,'F','2'),'M','1'),'Z','3'),'','4') AS sex,
replace(replace(replace(new_all.officrid,'0','2'), 'I','1'),'','4') AS officrid,
replace(replace(replace(replace(replace(replace(replace(new_all.forceuse,'DS','5'),'DO','6'),'OR','7'),'OT','8'),'SF','9'),'SW','10'),'','4')  AS forceuse,
replace(replace(replace(new_all.cs_furtv,'N','2'),'Y','1'),'','4') AS cs_furtv,
replace(replace(replace(new_all.rf_rfcmp,'N','2'),'Y','1'),'','4') AS rf_rfcmp,
replace(replace(replace(new_all.ac_cgdir,'N','2'),'Y','1'),'','4') AS ac_cgdir,
replace(replace(replace(new_all.rf_verbl,'N','2'),'Y','1'),'','4') AS rf_verbl,
replace(replace(replace(new_all.cs_vcrim,'N','2'),'Y','1'),'','4') AS cs_vcrim,
replace(replace(replace(new_all.cs_bulge,'N','2'),'Y','1'),'','4') AS cs_bulge,
replace(replace(replace(new_all.cs_other,'N','2'),'Y','1'),'','4') AS cs_other,
new_all.race AS unk_race_total,
new_all.race AS unk_race_11,
new_all.race AS unk_race_10,
new_all.race AS unk_race_09,
new_all.race AS unk_race_08,
replace(replace(replace(new_all.pistol,'N','2'),'Y','1'),'','4')  AS pistol,
replace(replace(replace(new_all.riflshot,'N','2'),'Y','1'),'','4')  AS riflshot,
replace(replace(replace(new_all.asltweap,'N','2'),'Y','1'),'','4')  AS asltweap,
replace(replace(replace(new_all.knifcuti,'N','2'),'Y','1'),'','4')  AS knifcuti,
replace(replace(replace(new_all.machgun,'N','2'),'Y','1'),'','4')  AS machgun,
replace(replace(replace(new_all.othrweap,'N','2'),'Y','1'),'','4')  AS othrweap,
replace(replace(replace(new_all.arstmade,'N','2'),'Y','1'),'','4')  AS arstmade,
replace(replace(replace(new_all.sumissue,'N','2'),'Y','1'),'','4')  AS sumissue,
replace(replace(replace(new_all.offunif,'N','2'),'Y','1'),'','4')  AS offunif,
replace(replace(replace(new_all.frisked,'N','2'),'Y','1'),'','4')  AS frisked,
replace(replace(replace(new_all.searched,'N','2'),'Y','1'),'','4')  AS searched

FROM new_all

LEFT JOIN stops_by_block

ON stops_by_block.new_all_fid = new_all.ogc_fid

AND (new_all.race = 'X' OR new_all.race = 'Z' OR new_all.race = '');

{% endhighlight %}