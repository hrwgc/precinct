---
layout: post
title: "Data Processing"
description: "early processing of the data to get it out of SPSS .por format"
category: "metadata"
tags: [data, documentation, processing, wget, r, hmisc, how-to, tutorial]
api: ""
parents: ""
sql: ""
shp: ""
source: ""
data: "{{BASE_PATH}}/_posts/data/2012-07-29-data-processing.md"
---
{% include JB/setup %}

## Grab NYC Precinct-level Crime Statistics

#### Problem 1

- NYPD offers [crime data as pdf reports](http://www.nyc.gov/html/nypd/html/crime_prevention/crime_statistics.shtml) for each precinct as well as monthly one-page [citywide crime reports](http://www.nyc.gov/html/nypd/downloads/pdf/crime_statistics/cscity.pdf).

- PDF reports have structure, but need to be processed to allow for cross precinct and across-time comparisons.

#### Solution - wget + pdftotext + regular expressions


1. Go to [NYPD crime statistics page](http://www.nyc.gov/html/nypd/html/crime_prevention/crime_statistics.shtml)

2. View source of page, copy out the tables containing the ** .pdf ** files. Note that the links are relative.

3. In a text editor, or Google Refine, or many other tools, remove all html formatting via regular expressions or other extraction methods. I used regex. My main searches included removing all **<tr><td></td></tr> ** elements. I also replaced all the target="..."> instances with \t, the end product [is available here](https://github.com/hrwgc/nyc/blob/gh-pages/data/crime-pdfs/nypd-crime-report-pdfs.csv)

4. Copy the first column and past it into a new text document, save as [download.txt](https://github.com/hrwgc/nyc/blob/gh-pages/data/crime-pdfs/pdf/download.txt)

5. Use [wget](http://www.gnu.org/software/wget/) to download all of the pdfs into /pdfs folder

{% highlight sh %}
cd pdf
wget -i ../download.txt 
{% endhighlight %}


6.  Convert pdf files into .txt documents in ../txt folder using [pdftotext](http://www.bluem.net/en/mac/packages/)

{% highlight sh %}
pdftotext -layout [filename].pdf
{% endhighlight %}


7. Move all .txt files into ../text folder

8. Make a single combined text file of all precinct reports

{% highlight sh %}
cd ../text
cat * > combined.txt
{% endhighlight %}


9. Remove extra spaces and repeated lines of meaningless text using regular expressions like

{% highlight sh %}
Find: ([0-9a-zA-Z\.,\*\-]+)[ ]+([0-9a-zA-Z\.,\*\-]+)
{% endhighlight %}

{% highlight sh %}
Replace: \1\t\2
{% endhighlight %}

10. To be Continuted ...



#### See [Previous work done with NYPD Stop and Frisk data](http://wiki.datawithoutborders.cc/index.php?title=Project:Current_events:NYC_DD:NYCLU)

*This section is potentially outdated and irrelevant, given the availability of the databases in CSV format*

## PostGIS database creation for Stop and Frisk

### Software Required:

- [Quantum GIS (QGIS)](http://qgis.org)

- [PostgreSQL](http://www.postgresql.org/), [Documentation for PostgreSQL 9.1](http://www.postgresql.org/docs/9.1/)

- You may want to view

- [Installing PostgreSQL 9.1.3 on Mac OS X Lion](http://frombelvideres4thfloor.blogspot.com/2012/03/installing-postgresql-913-on-mac-os-x.html)

- [Increasing Shared Memory for Postgres on Mac OS X](http://benscheirman.com/2011/04/increasing-shared-memory-for-postgres-on-os-x)

- [PostGIS](http://postgis.refractions.net)

- Relevant Guides

- [Documentation](http://postgis.refractions.net/docs/using_postgis_dbmanagement.html)

- [Working with PostGIS | MapBox](http://mapbox.com/tilemill/docs/guides/postgis-work/)

## Initial conversion from SPSS .por to CSV

Software required: R with "foreign" "Hmisc" and "


### Method 1 - R "foreign" library

{% highlight r %}

install.packages("foreign")
library(foreign)
write.csv(nypd2008.df, "/{PATH}/nypd2008.csv")

{% endhighlight %}


### Method 2 - R "Hmisc" library


{% highlight r %}
install.packages("Hmisc")
library(Hmisc)
{% endhighlight %}

- install and load package containing the spss.get function


{% highlight r %}
nypd2008 <- spss.get("/{path}/2008.por", datevars = FALSE,
use.value.labels = FALSE, to.data.frame = FALSE,
max.value.labels = 2, force.single=TRUE,
charfactor=FALSE)
write.table(frisk2008.df, "/{path}/nypd2008.csv", quote = FALSE, sep = ";")
{% endhighlight %}

- import the spss database into R as a dataframe


### Method 3 - R "memisc" library

**This method seemed to work the best, in that it converted all the files, whereas the others ran into encoding errors on some. (2006, 2008, 2010 (?))**

{% highlight r %}
# install and load package containing the spss.portable.file function
install.packages("memisc")
library(memisc)
# import the spss database into R as a dataframe
frisk2008.df <- spss.portable.file("/{path}/2008.por")
# convert the dataframe into a dataset
frisk2008data.df <- as.data.set(frisk2008.df) 
# write the dataset into a semicolon-delimited text file
write.table(frisk2008data.df, "/{path}/nypd2008.csv", quote = FALSE, sep = ";")
{% endhighlight %}

- NOTE: Lines 3 and 4 could be combined like below. I have not tried it yet, so I am leaving it commented.

{% highlight r %}
frisk2008.df <- as.data.set(spss.portable.file('/{path}/2008.por'))
{% endhighlight %}

- in which case the next step would look like

{% highlight r %}
write.table(frisk2008.df, "~/{path}/nypd2008.csv", quote = FALSE, sep = ";")
{% endhighlight %}

----------

#### To Do for this section:

- review spss.portable.file documentation to see about removing extra spaces around delimiters on conversion

- evaluate potential data loss during conversion

- Consider if this is necessary given the great work done by datawithoutborders.



### Things that worked once loaded into PostGIS

*This is related to the database loading scripts [here](https://github.com/hrwgc/nyc/blob/gh-pages/data/postgis.md)*


1\. shp2pgsql did not add the SRID information for the database from the .prj file. The prj file contained the following projection information:

{% highlight psql %}
PROJCS["NAD83_New_York_Long_Island_ftUS",GEOGCS["GCS_North_American_1983",DATUM["D_North_American_1983",SPHEROID["GRS_1980",6378137,298.257222101]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Lambert_Conformal_Conic"],PARAMETER["standard_parallel_1",41.03333333333333],PARAMETER["standard_parallel_2",40.66666666666666],PARAMETER["latitude_of_origin",40.16666666666666],PARAMETER["central_meridian",-74],PARAMETER["false_easting",984250.0000000002],PARAMETER["false_northing",0],UNIT["Foot_US",0.30480060960121924]]
{% endhighlight %}



2\. Verify you have PROJ4:

{% highlight psql %}
SELECT PostGIS_Full_Version();
{% endhighlight %}
Response:

{% highlight psql %}
postgis_full_version
--------------------------------------------------------------------------------------------------------------------------------------------
POSTGIS="2.0.0 r9605" GEOS="3.3.2-CAPI-1.7.2" PROJ="Rel. 4.8.0, 6 March 2012" GDAL="GDAL 1.9.0, released 2011/12/29" 
LIBXML="2.7.3" RASTER
(1 row)
{% endhighlight %}


3\. Check to see if the SRID information made it into the database; see [OSGEO Workshop article](http://workshops.opengeo.org/postgis-intro/projection.html) for additional help.

{% highlight psql %}
SELECT ST_SRID(geom) FROM mydb LIMIT 1;
{% endhighlight %}

(Meaning the SRID did not carry over from the shapefile).


4\. Update SRID in PostGIS

{% highlight psql %}
psql -d gis
SELECT UpdateGeometrySRID('mydb', 'geom', 2263);
{% endhighlight %}



5\. To transform from State Plane to latitude/longitude (wgs84): See [OpenGeo Workshop for additional information](http://workshops.opengeo.org/postgis-intro/projection.html)

{% highlight psql %}
SELECT srtext FROM spatial_ref_sys WHERE srid = 4326;
{% endhighlight %}

{% highlight psql %}
SELECT ST_AsText(ST_Transform(geom,4326))
FROM mytable
WHERE XCOORD IS NOT NULL; 
{% endhighlight %}

Set the SRID after the fact(?)


{% highlight psql %}
SELECT ST_AsText(ST_Transform(ST_SetSRID(geom,2263),4326))FROM geometries;
{% endhighlight %}


6\. Make new column with WGS84 coordinates: (Adapted from [Cartometric](http://cartometric.com/blog/2011/11/19/prepare-a-shapefile-for-openscales-using-ogr2ogr-and-postgresql/))


{% highlight psql %}
ALTER TABLE mytable ADD COLUMN wgs_geom GEOMETRY;
UPDATE mytable SET wgs_geom = ST_Transform(geom, 4326);
{% endhighlight %}


7\. Verify the coordinate transformation was successful:


{% highlight psql %}
SELECT ST_SRID(wgs_geom) FROM mytable; 
{% endhighlight %}


8\. Add NYPD precincts to postgis database

- convert to WGS84


{% highlight sh %}
ogr2ogr -t_srs WGS84 nypd-precincts.shp nypp.shp 
{% endhighlight %}


- import to PostGIS


{% highlight sh %}
shp2pgsql -D -s 4326 -I nypd-precincts.shp precincts | psql -d gis 
{% endhighlight %}



9\. Import crime data csv

{% highlight psql %}
CREATE TABLE crime (  geoid varchar(11),
 precinct integer,
 fyburg93 integer,
 fyburg95 integer,
 fyburg98 integer,
 fyburg2001 integer,
 fyburg2011 integer,
 fypctfel integer,
 fyfelassault93 integer,
 fyfelassault95 integer,
 fyfelassault98 integer,
 fyfelassault2001 integer,
 fyfelassault2011 integer,
 fypctgla integer,
 fygla93 integer,
 fygla95 integer,
 fygla98 integer,
 fygla2001 integer,
 fygla2011 integer,
 fypctgrlarceny integer,
 fygrlarceny93 integer,
 fygrlarceny95 integer,
 fygrlarceny98 integer,
 fygrlarceny2001 integer,
 fygrlarceny2011 integer,
 fypctmurder integer,
 fymurder93 integer,
 fymurder95 integer,
 fymurder98 integer,
 fymurder2001 integer,
 fymurder2011 integer,
 fypctrape integer,
 fyrape93 integer,
 fyrape95 integer,
 fyrape98 integer,
 fyrape2001 integer,
 fyrape2011 integer,
 fypctrobbery integer,
 fyrobbery93 integer,
 fyrobbery95 integer,
 fyrobbery98 integer,
 fyrobbery2001 integer,
 fyrobbery2011 integer,
 fypcttotal integer,
 fytotal93 integer,
 fytotal95 integer,
 fytotal98 integer,
 fytotal2001 integer,
 fytotal2011 integer,
 burg2012 integer,
 burg2011 integer,
 felassault2012 integer,
 felassault2011 integer,
 gla2012 integer,
 gla2011 integer,
 grlarceny2012 integer,
 grlarceny2011 integer,
 misdassault2012 integer,
 misdassault2011 integer,
 misdsexcr2012 integer,
 misdsexce2011 integer,
 murder2012 integer,
 murder2011 integer,
 petlarceny2012 integer,
 petlarceny2011 integer,
 rape2012 integer,
 rape2011 integer,
 robbery2012 integer,
 robbery2011 integer,
 total2012 integer,
 total2011 integer);
{% endhighlight %}

{% highlight psql %}
cat 2011-2012-precinct-data-all.csv | bin/psql -d gis -c 'COPY crime FROM STDIN WITH CSV HEADER' 
{% endhighlight %}