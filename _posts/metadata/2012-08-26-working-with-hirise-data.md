---
layout: post
title: "Working with HiRISE Data"
description: "tools and scripts that worked in processing HiRISE orthoimagery of Mars"
category: metadata
tags: 
   - astronomy
   - mars
   - gdal
   - scripts
api: 
parents: ""
sql: 
shp: 
csv: 
source: "#"
data: /precinct/_posts/data/2012-08-26-working-with-hirise-data.md
---
{% include JB/setup %}
{% highlight sql %}
{% endhighlight %}

1. Download [HiRise IRB Map Projected](http://hirise.lpl.arizona.edu/ESP_028335_1755) from the JP2 Extras section
2. Download [HiRISE Label](http://hirise-pds.lpl.arizona.edu/PDS/EXTRAS/RDR/ESP/ORB_028300_028399/ESP_028335_1755/ESP_028335_1755_MIRB.LBL)
3. Download [PDS_JP2 Software from HiRISE (free)](http://hirise.lpl.arizona.edu/tools/pds_jp2.php)
4. Instructions for installation can be [viewed here](http://pirlwww.lpl.arizona.edu/software/PDS_JP2/INSTALL-binary.shtml)

Here's what I needed to do in stall it. 
```sh
$ cd PDS_JP2-3.17_Darwin-i386 
$ ./installer

Possible installation location for libraries
  requiring systems administrator assistance:
  /usr/local/lib
  /opt/local/lib
There may be other possibilities on your system.

Where should the libraries be installed?
Pathname: /Users/christopherherwig/local/lib

Possible installation location for applications
  requiring systems administrator assistance:
  /usr/local/bin
  /opt/local/bin
There may be other possibilities on your system.

Where should the applications be installed?
Pathname: /Users/christopherherwig/local/bin

Do you want to install the HTML documentation files? /Users/christopherherwig/local/Library

Installing the libraries in /Users/christopherherwig/local/lib ...
override rwxr-xr-x  root/staff for /Users/christopherherwig/local/lib/libgdal.dylib? (y/n [n]) y
rmdir: /Users/christopherherwig/local/lib/PDS_JP2_libraries: Directory not empty

Installing the applications in /Users/christopherherwig/local/bin ...

The installation has been completed.
```

I had to add the following to my ~/.bash_profile

```
if [ -d /Users/christopherherwig/local/bin ] ; then
  if [ -z $PATH ] ; then
    export PATH=/Users/christopherherwig/local/bin
    export DYLD_LIBRARY_PATH=/Users/christopherherwig/local/lib
  else
    export PATH=/Users/christopherherwig/local/bin:$PATH
    export DYLD_LIBRARY_PATH=/Users/christopherherwig/local/lib:$PATH
  fi
fi
```

```
$ source ~/.bash_profile

$ bin/JP2_to_PDS 
```

### Convert from JP2 to PDS

- warning, the size will increase dramatically. I decreased the resolution 50%.

projection "+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3396190 +units=m +no_defs"

[Fractal Polygons on Ground](http://hirise.lpl.arizona.edu/ESP_016641_2500)