---
layout: post
title: "sample dataset"
description: ""
category: Dataset
tags: [arm, left]
sql: ""
shp: ""
csv: ""
parents: "a sample parent"
source: "http://hotmail.com"
metadata: "{{BASE_PATH}}/_posts/metadata/2012-07-28-sample-dataset.md"
---
{% include JB/setup %}
<div>
{% highlight psql %}
replace(replace(replace(replace(sex,'F','2'),'M','1'),'Z','3'),'','4') AS sex,
{% endhighlight %}
</div>