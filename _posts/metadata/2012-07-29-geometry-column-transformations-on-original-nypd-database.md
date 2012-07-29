---
layout: post
title: "Geometry column transformations on original NYPD database"
description: ""
category: metadata
tags: 
   - psql scripts
   - data processing
   - new_all
api: ""
parents: ""
sql: ""
shp: ""
source: "#"
---
{% include JB/setup %}
## Reference Documents

[PostgreSQL Cheatsheet][3]
[Using Regular Expressions in PostgreSQL][4]

-----

# xcoord column maintenance

## Remove wrongly values xcoord column values:

{% highlight sql %}
UPDATE 946155
{% endhiglight %}

### Response:

{% highlight sql %}
nyclu=# update new_all SET xcoord = '' where xcoord ~* '\\N' OR xcoord ~* '[A-Z]{1,}';
UPDATE 946155
{% endhighlight %}

-----

## Verify removal was successful

{% highlight sql %}
nyclu=# select xcoord from new_all where xcoord ~* '[A-Z]{1,}';

xcoord
--------
(0 rows)
{% endhighlight %}

## Remove leading and trailing white space

{% highlight sql %}
update new_all set xcoord =
replace(xcoord, ' ', '')
where xcoord ~* '^[ ]{1,}'
OR xcoord ~* '[ ]{1,}$';
{% endhighlight %}

### Response

{% highlight sql %}
nyclu=# update new_all set xcoord = replace(xcoord, ' ', '') where xcoord ~* '^[ ]{1,}' OR xcoord ~* '[ ]{1,}$';

UPDATE 4259631
{% endhighlight %}

### Verify it was successful

{% highlight sql %}
nyclu=# select xcoord, ycoord from new_all where xcoord != '';
xcoord     | ycoord
---------+---------
1012304 | 0222651
0987555 | 0214890
0990313 | 0215177
0986626 | 0205180
1002692 | 0218421
0930949 | 0133127
1019287 | 0208218
0984103 | 0201020
1021547 | 0247314
1010719 | 0186857
{% endhighlight %}


-----

### Make xcoord null if ycoord is null, ycoord null if xcoord null

- *based off of discussion on stackoverflow discussion on [PostgreSQL - Using a Subquery to Update Multiple Column Values][2]*

{% highlight sql %}

UPDATE new_all
SET xcoord = '',
ycoord = ''
WHERE
ycoord = ''
OR ycoord = '0'
OR ycoord ~* '^0$'
OR ycoord ~* '^[ ]{1,}$'
OR xcoord = ''
OR xcoord = '0'
OR xcoord ~* '^0$'
OR xcoord ~* '^[ ]{1,}$';

{% endhighlight %}

### Response

{% highlight sql %}
nyclu=# update new_all SET xcoord = '', ycoord = ''
where
ycoord ~* '^[ ]{0,}[0]{0,}[ ]{0,}$'
OR xcoord ~* '^[ ]{0,}[0]{0,}[ ]{0,}$';

UPDATE 946320
{% endhighlight %}

### Verify it was successful


{% highlight sql %}
nyclu=# select xcoord, ycoord from new_all
where ycoord ~* '^[ ]{1,}'
OR ycoord ~* '[ ]{1,}$'
OR ycoord ~* '^[ ]{0,}[0]{1,}[ ]{0,}$'
limit 10;

xcoord | ycoord
--------+--------
(0 rows)
{% endhighlight %}


#### Note: Why was this necessary?

Some records only contain an xcoord and a '0' value for the ycoord.
![](https://img.skitch.com/20120707-dauj1s35uei5bks8puaji8k1n7.png)


********


# ycoord column maintenance

## Remove wrongly valued ycoord column values:

{% highlight sql %}
update new_all SET ycoord = '' where ycoord ~* '\\N' OR ycoord ~* '[A-Z]{1,}';
{% endhighlight %}

### Response

{% highlight sql %}
nyclu=# update new_all SET ycoord = '' where ycoord ~* '\\N' OR ycoord ~* '[A-Z]{1,}';
UPDATE 946266
{% endhighlight %}

-----

## Remove leading and trailing white space

{% highlight sql %}
update new_all set ycoord =     replace(ycoord, ' ', '') where ycoord ~* '^[ ]{1,}' OR ycoord ~* '[ ]{1,}$';
{% endhiglight %}

### Response

{% highlight sql %}
nyclu=# update new_all set ycoord =     replace(ycoord, ' ', '') where ycoord ~* '^[ ]{1,}' OR ycoord ~* '[ ]{1,}$';
UPDATE 675555
{% endhighlight %}

### Verify it was successful

{% highlight sql %}
nyclu=# select ycoord from new_all where ycoord ~* '^[ ]{1,}' OR ycoord ~* '[ ]{1,}$';
ycoord
--------
(0 rows)
{% endhighlight %}

-----

<!-- update new_all set xcoord =     replace(xcoord, ' ', ''); where xcoord ~* '^[ ]{1,}' OR xcoord ~* '[ ]{1,}$';
update new_all set ycoord =     replace(ycoord, ' ', '') where ycoord ~* '^[ ]{1,}' OR ycoord ~* '[ ]{1,}$';
update new_all SET ycoord = '' where xcoord = '' or xcoord = '0' or xcoord = 0;
update new_all SET xcoord = '' where ycoord = '' or ycoord = '0' or ycoord = 0; -->


# Add better latitude / longitude pairs

## Create new geometry column (lat\_lon) in table new\_all for reprojected lat/lons

{% highlight sql %}
SELECT AddGeometryColumn ('public','new_all','lat_lon',4326,'POINT',2);
{% endhiglight %}


## Create geom column with geometry from original xcoord/ycoord in NY State Plane projection (EPSG:2263)

{% highlight sql %}
nyclu=# SELECT AddGeometryColumn ('public','new_all','geom',2263,'POINT',2);
addgeometrycolumn
--------------------------------------------------
public.new_all.geom SRID:2263 TYPE:POINT DIMS:2
(1 row)
{% endhighlight %}

## Populate geom with geometry from original xcoord/ycoords

{% highlight sql %}
UPDATE new_all SET geom = ST_GeomFromText('POINT('|| xcoord ||' ' || ycoord || ')', 2263) WHERE coalesce(trim(xcoord),'') <> '' AND coalesce(trim(ycoord),'') <> '';
{% endhighlight %}


## Populate lat_lon with geometry from unprojected WGS84 lat/lon


{% highlight sql %}
UPDATE new_all SET lat_lon = ST_Transform(ST_GeomFromText('POINT('|| xcoord ||' ' || ycoord || ')', 2263), 4326)
WHERE coalesce(trim(xcoord),'')     <> ''
AND coalesce(trim(ycoord),'')     <> '';
{% endhighlight %}

### Response

{% highlight sql %}
nyclu=# UPDATE new_all SET lat_lon = ST_Transform(ST_GeomFromText('POINT('|| xcoord ||' ' || ycoord || ')', 2263), 4326)
WHERE coalesce(trim(xcoord),'')     <> ''
AND coalesce(trim(ycoord),'')     <> '';

UPDATE 3313111
{% endhighlight %}

## Create Spatial Index for quick geo queries

{% highlight sql %}
CREATE INDEX ix_lat_lon ON new_all USING GIST (lat_lon);
{% endhiglight %}

### Response

{% highlight sql %}
nyclu=# CREATE INDEX ix_lat_lon ON new_all USING GIST (lat_lon);
CREATE INDEX
{% endhighlight %}


## Retroactively assign primary key to existing postgres database

- *Thank you to Enrico Stahn for the [excellent tutorial][1]*

{% highlight sql %}
ALTER TABLE "public"."new_all" ADD COLUMN "id" integer;
CREATE sequence "public"."new_all_id_seq";
UPDATE new_all set id = nextval('"public"."new_all_id_seq"');
UPDATE 4259631
{% endhighlight %}

### Unique key (verify)

{% highlight sql %}
nyclu=# select id, pct from new_all where pct = '5' limit 10;

id     | pct
---------+-----
5135229 | 5
5135463 | 5
5136117 | 5
5136577 | 5
5137605 | 5
5137607 | 5
5137631 | 5
5138339 | 5
5139589 | 5
5139987 | 5
(10 rows)
{% endhighlight %}



{% highlight sql %}
ALTER TABLE "public"."new_all"
ALTER COLUMN "id" SET DEFAULT nextval('"public"."new_all_id_seq"');
{% endhighlight %}

{% highlight sql %}
ALTER TABLE "public"."new_all" ALTER COLUMN "id" SET NOT NULL;
ALTER TABLE "public"."new_all" ADD UNIQUE ("id");
ALTER TABLE "public"."new_all" DROP CONSTRAINT "new_all_id_key" RESTRICT;
ALTER TABLE "public"."new_all" ADD PRIMARY KEY ("id");
{% endhighlight %}

Note, this may have been able to be accomplished using "ALTER TABLE your_table ADD COLUMN id serial NOT NULL PRIMARY KEY;"

## Loading into TileMill

- 110 + columns not ideal for most mapping uses, in particular when there are 3 million + rows

{% highlight sql %}
nyclu=# create table coord_conv as
select ogc_fid,
lat_lon,
ST_x(lat_lon) as latitude,
ST_y(lat_lon) as longitude,
race,
year,
datestop,
timestop,
pct
from new_all
where (xcoord <> '' OR ycoord <> '')
OR lat_lon <> '';
{% endhighlight %}

### Response:

{% highlight sql %}
SELECT 3313111
{% endhiglight %}

- This reveals that we have latitude/longitude pairs for 3,313,111 of the 4.4 million + records. The addition of geospatial information to the database came around 2006.

I can use the new condensed table in TileMill and not have to deal with filtering through to the records containing coordinates. I will add a new index to speed it up a bit more.


{% highlight sql %}
nyclu=# CREATE INDEX ix_coord_orig ON coord_conv USING GIST (lat_lon);
{% endhiglight %}

## Remove Antarctica points


### Why

{% highlight sql %}
nyclu=# select ogc_fid, lat_lon, ST_x(lat_lon) as latitude, ST_y(lat_lon) as longitude from new_all where xcoord <> '' and ycoord <> '' and lat_lon <> '' limit 10;

ogc_fid |                      lat_lon                       |     latitude      |    longitude
---------+----------------------------------------------------+-------------------+------------------
2634374 | 0101000020E610000059AB35C4257B52C05045FE55776E4440 | -73.9241800808062 | 40.8630168429905
2634575 | 0101000020E6100000F89F04C6127252C035FC0E43815A4440 | -73.7823958439984 | 40.7070697615785
2642142 | 0101000020E6100000E1FBE473047352C02E01FAC18C5A4440 | -73.7971467720195 | 40.7074205847479
2635640 | 0101000020E6100000D9E52E14637C52C0CCE86F18D3604440 | -73.9435472925174 | 40.7564421221192
2635921 | 0101000020E6100000BDBEBBB7C47C52C0EA6D2300F3694440 | -73.9495066960762 | 40.8277282879825
2637071 | 0101000020E6100000520BCCB6587D52C09C38063D10504440 | -73.9585396759624 | 40.6254955559136
2637295 | 0101000020E6100000CD57D3391A7952C0D4C67C62AA5E4440 |   -73.89222570075 | 40.7395747288953
2637547 | 0101000020E610000089DA1C062D7F52C0E73BCFF90B624440 | -73.9871230394148 | 40.7659904729733
2637641 | 0101000020E61000001EF4535F5F7752C073934E98366C4440 | -73.8651960677966 | 40.8454161056206
2637862 | 0101000020E6100000FD74743F3D7C52C0277CED7BAB604440 | -73.9412382733608 | 40.7552332791895
(10 rows)
{% endhighlight %}


{% highlight sql %}
nyclu=# select * from coord_conv
nyclu-#  WHERE ogc_fid IN ( SELECT ogc_fid FROM new_all WHERE (new_all.xcoord = '' OR new_all.ycoord = '')) limit 10;
ogc_fid |                      lat_lon                       |     latitude      |    longitude     | race | year | datestop | timestop | pct
---------+----------------------------------------------------+-------------------+------------------+------+------+----------+----------+-----
871548 | 0101000020E61000004D7FEBCAF73353C0AFC8F035E6104440 | -76.8119990634707 | 40.1320254731848 | B    | 2010 | 4202010  | 1245     | 1
883797 | 0101000020E61000009E2DC9632D3253C0802937B2FC104440 | -76.7840203728324 | 40.1327116746279 | B    | 2010 | 4252010  | 1238     | 6
686069 | 0101000020E6100000B6D9F4BF813153C0D229B40E05114440 | -76.7735443011396 | 40.1329668407158 | B    | 2010 | 1012010  | 430      | 10
686067 | 0101000020E6100000B6D9F4BF813153C0D229B40E05114440 | -76.7735443011396 | 40.1329668407158 | B    | 2010 | 1012010  | 430      | 10
766093 | 0101000020E6100000719C385A783053C0E7BD82EC11114440 | -76.7573457291453 | 40.1333594931019 | B    | 2010 | 2172010  | 1140     | 14
766094 | 0101000020E6100000719C385A783053C0E7BD82EC11114440 | -76.7573457291453 | 40.1333594931019 | B    | 2010 | 2172010  | 1140     | 14
766095 | 0101000020E6100000719C385A783053C0E7BD82EC11114440 | -76.7573457291453 | 40.1333594931019 | B    | 2010 | 2172010  | 1140     | 14
827377 | 0101000020E61000004FF5C16CBB3953C0206F824C9C104440 |  -76.902064504063 | 40.1297698628316 | 1    | 2010 | 3262010  | 1435     | 72
832293 | 0101000020E61000004D7FEBCAF73353C0AFC8F035E6104440 | -76.8119990634707 | 40.1320254731848 | B    | 2010 | 3302010  | 743      | 1
835290 | 0101000020E61000004D7FEBCAF73353C0AFC8F035E6104440 | -76.8119990634707 | 40.1320254731848 | B    | 2010 | 4062010  | 1630     | 1
(10 rows)
{% endhighlight %}


{% highlight sql %}
nyclu=#  DELETE FROM coord_conv
nyclu-#     WHERE ogc_fid IN ( SELECT ogc_fid FROM new_all WHERE (ST_IsEmpty(lat_lon) = false AND (new_all.xcoord = '' OR new_all.ycoord = '')));

DELETE 46
{% endhighlight %}

[1]:http://blog.enricostahn.com/2010/06/11/postgresql-add-primary-key-to-an-existing-table.html
[2]:http://stackoverflow.com/questions/7460102/postgresql-using-a-subquery-to-update-multiple-column-values
[3]:http://www.petefreitag.com/cheatsheets/postgresql/
[4]:http://www.oreillynet.com/pub/a/databases/2006/02/02/postgresq_regexes.html?page=2