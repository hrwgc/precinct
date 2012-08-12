#! /bin/bash

/usr/local/bin/ogr2ogr -f CSV ~/git/precinct/data/year/stop_2003.csv PG:"dbname='nyclu' host='localhost' port='5432' user='postgres' password='postgres'"  -lco SEPARATOR=TAB -lco CREATE_CSVT=YES -lco GEOMETRY=AS_WKT -sql  "SELECT t2003.ogc_fid, stops_by_block.blockce10 as census_blockce10, nypp_single.precinct as precinct, t2003.year, t2003.pct, t2003.ser_num, t2003.datestop, t2003.timestop, t2003.recstat, t2003.inout, t2003.trhsloc, t2003.perobs, t2003.crimsusp, t2003.perstop, t2003.typeofid, t2003.explnstp, t2003.othpers, t2003.arstmade, t2003.arstoffn, t2003.sumissue, t2003.sumoffen, t2003.compyear, t2003.comppct, t2003.offunif, t2003.officrid, t2003.frisked, t2003.searched, t2003.contrabn, t2003.adtlrept, t2003.pistol, t2003.riflshot, t2003.asltweap, t2003.knifcuti, t2003.machgun, t2003.othrweap, t2003.pf_hands, t2003.pf_wall, t2003.pf_grnd, t2003.pf_drwep, t2003.pf_ptwep, t2003.pf_baton, t2003.pf_hcuff, t2003.pf_pepsp, t2003.pf_other, t2003.radio, t2003.ac_rept, t2003.ac_inves, t2003.rf_vcrim, t2003.rf_othsw, t2003.ac_proxm, t2003.rf_attir, t2003.cs_objcs, t2003.cs_descr, t2003.cs_casng, t2003.cs_lkout, t2003.rf_vcact, t2003.cs_cloth, t2003.cs_drgtr, t2003.ac_evasv, t2003.ac_assoc, t2003.cs_furtv, t2003.rf_rfcmp, t2003.ac_cgdir, t2003.rf_verbl, t2003.cs_vcrim, t2003.cs_bulge, t2003.cs_other, t2003.ac_incid, t2003.ac_time, t2003.rf_knowl, t2003.ac_stsnd, t2003.ac_other, t2003.sb_hdobj, t2003.sb_outln, t2003.sb_admis, t2003.sb_other, t2003.repcmd, t2003.revcmd, t2003.rf_furt, t2003.rf_bulg, t2003.offverb, t2003.offshld, t2003.forceuse, t2003.sex, t2003.race, t2003.dob, t2003.age, t2003.ht_feet, t2003.ht_inch, t2003.weight, t2003.haircolr, t2003.eyecolor, t2003.build, t2003.othfeatr, t2003.addrtyp, t2003.rescode, t2003.premtype, t2003.premname, t2003.addrnum, t2003.stname, t2003.stinter, t2003.crossst, t2003.aptnum, t2003.city, t2003.state, t2003.zip, t2003.addrpct, t2003.sector, t2003.beat, t2003.post,  t2003.dettypcm, t2003.linecm, t2003.detailcm, ST_x(t2003.geometry) AS longitude, ST_y(t2003.geometry) AS latitude from t2003 
LEFT JOIN 
stops_by_block
ON
t2003.ogc_fid = stops_by_block.new_all_fid
LEFT JOIN
census
ON
stops_by_block.census_fid = census.ogc_fid
LEFT JOIN
pct_census
ON
stops_by_block.census_fid = pct_census.census_fid
LEFT JOIN
nypp_single
ON
pct_census.pct_fid = nypp_single.ogc_fid"

/usr/local/bin/ogr2ogr -f CSV ~/git/precinct/data/year/stop_2004.csv  PG:"dbname='nyclu' host='localhost' port='5432' user='postgres' password='postgres'"  -lco SEPARATOR=TAB -lco CREATE_CSVT=YES -lco GEOMETRY=AS_WKT -sql  "SELECT t2004.ogc_fid, stops_by_block.blockce10 as census_blockce10, nypp_single.precinct as precinct, t2004.year, t2004.pct, t2004.ser_num, t2004.datestop, t2004.timestop, t2004.recstat, t2004.inout, t2004.trhsloc, t2004.perobs, t2004.crimsusp, t2004.perstop, t2004.typeofid, t2004.explnstp, t2004.othpers, t2004.arstmade, t2004.arstoffn, t2004.sumissue, t2004.sumoffen, t2004.compyear, t2004.comppct, t2004.offunif, t2004.officrid, t2004.frisked, t2004.searched, t2004.contrabn, t2004.adtlrept, t2004.pistol, t2004.riflshot, t2004.asltweap, t2004.knifcuti, t2004.machgun, t2004.othrweap, t2004.pf_hands, t2004.pf_wall, t2004.pf_grnd, t2004.pf_drwep, t2004.pf_ptwep, t2004.pf_baton, t2004.pf_hcuff, t2004.pf_pepsp, t2004.pf_other, t2004.radio, t2004.ac_rept, t2004.ac_inves, t2004.rf_vcrim, t2004.rf_othsw, t2004.ac_proxm, t2004.rf_attir, t2004.cs_objcs, t2004.cs_descr, t2004.cs_casng, t2004.cs_lkout, t2004.rf_vcact, t2004.cs_cloth, t2004.cs_drgtr, t2004.ac_evasv, t2004.ac_assoc, t2004.cs_furtv, t2004.rf_rfcmp, t2004.ac_cgdir, t2004.rf_verbl, t2004.cs_vcrim, t2004.cs_bulge, t2004.cs_other, t2004.ac_incid, t2004.ac_time, t2004.rf_knowl, t2004.ac_stsnd, t2004.ac_other, t2004.sb_hdobj, t2004.sb_outln, t2004.sb_admis, t2004.sb_other, t2004.repcmd, t2004.revcmd, t2004.rf_furt, t2004.rf_bulg, t2004.offverb, t2004.offshld, t2004.forceuse, t2004.sex, t2004.race, t2004.dob, t2004.age, t2004.ht_feet, t2004.ht_inch, t2004.weight, t2004.haircolr, t2004.eyecolor, t2004.build, t2004.othfeatr, t2004.addrtyp, t2004.rescode, t2004.premtype, t2004.premname, t2004.addrnum, t2004.stname, t2004.stinter, t2004.crossst, t2004.aptnum, t2004.city, t2004.state, t2004.zip, t2004.addrpct, t2004.sector, t2004.beat, t2004.post,  t2004.dettypcm, t2004.linecm, t2004.detailcm, ST_x(t2004.geometry) AS longitude, ST_y(t2004.geometry) AS latitude from t2004 
LEFT JOIN 
stops_by_block
ON
t2004.ogc_fid = stops_by_block.new_all_fid
LEFT JOIN
census
ON
stops_by_block.census_fid = census.ogc_fid
LEFT JOIN
pct_census
ON
stops_by_block.census_fid = pct_census.census_fid
LEFT JOIN
nypp_single
ON
pct_census.pct_fid = nypp_single.ogc_fid"


/usr/local/bin/ogr2ogr -f CSV ~/git/precinct/data/year/stop_2005.csv  PG:"dbname='nyclu' host='localhost' port='5432' user='postgres' password='postgres'"  -lco SEPARATOR=TAB -lco CREATE_CSVT=YES -lco GEOMETRY=AS_WKT -sql  "SELECT t2005.ogc_fid, stops_by_block.blockce10 as census_blockce10, nypp_single.precinct as precinct, t2005.year, t2005.pct, t2005.ser_num, t2005.datestop, t2005.timestop, t2005.recstat, t2005.inout, t2005.trhsloc, t2005.perobs, t2005.crimsusp, t2005.perstop, t2005.typeofid, t2005.explnstp, t2005.othpers, t2005.arstmade, t2005.arstoffn, t2005.sumissue, t2005.sumoffen, t2005.compyear, t2005.comppct, t2005.offunif, t2005.officrid, t2005.frisked, t2005.searched, t2005.contrabn, t2005.adtlrept, t2005.pistol, t2005.riflshot, t2005.asltweap, t2005.knifcuti, t2005.machgun, t2005.othrweap, t2005.pf_hands, t2005.pf_wall, t2005.pf_grnd, t2005.pf_drwep, t2005.pf_ptwep, t2005.pf_baton, t2005.pf_hcuff, t2005.pf_pepsp, t2005.pf_other, t2005.radio, t2005.ac_rept, t2005.ac_inves, t2005.rf_vcrim, t2005.rf_othsw, t2005.ac_proxm, t2005.rf_attir, t2005.cs_objcs, t2005.cs_descr, t2005.cs_casng, t2005.cs_lkout, t2005.rf_vcact, t2005.cs_cloth, t2005.cs_drgtr, t2005.ac_evasv, t2005.ac_assoc, t2005.cs_furtv, t2005.rf_rfcmp, t2005.ac_cgdir, t2005.rf_verbl, t2005.cs_vcrim, t2005.cs_bulge, t2005.cs_other, t2005.ac_incid, t2005.ac_time, t2005.rf_knowl, t2005.ac_stsnd, t2005.ac_other, t2005.sb_hdobj, t2005.sb_outln, t2005.sb_admis, t2005.sb_other, t2005.repcmd, t2005.revcmd, t2005.rf_furt, t2005.rf_bulg, t2005.offverb, t2005.offshld, t2005.forceuse, t2005.sex, t2005.race, t2005.dob, t2005.age, t2005.ht_feet, t2005.ht_inch, t2005.weight, t2005.haircolr, t2005.eyecolor, t2005.build, t2005.othfeatr, t2005.addrtyp, t2005.rescode, t2005.premtype, t2005.premname, t2005.addrnum, t2005.stname, t2005.stinter, t2005.crossst, t2005.aptnum, t2005.city, t2005.state, t2005.zip, t2005.addrpct, t2005.sector, t2005.beat, t2005.post,  t2005.dettypcm, t2005.linecm, t2005.detailcm, ST_x(t2005.geometry) AS longitude, ST_y(t2005.geometry) AS latitude from t2005 
LEFT JOIN 
stops_by_block
ON
t2005.ogc_fid = stops_by_block.new_all_fid
LEFT JOIN
census
ON
stops_by_block.census_fid = census.ogc_fid
LEFT JOIN
pct_census
ON
stops_by_block.census_fid = pct_census.census_fid
LEFT JOIN
nypp_single
ON
pct_census.pct_fid = nypp_single.ogc_fid"

/usr/local/bin/ogr2ogr -f CSV ~/git/precinct/data/year/stop_2006.csv  PG:"dbname='nyclu' host='localhost' port='5432' user='postgres' password='postgres'"  -lco SEPARATOR=TAB -lco CREATE_CSVT=YES -lco GEOMETRY=AS_WKT -sql  "SELECT t2006.ogc_fid, stops_by_block.blockce10 as census_blockce10, nypp_single.precinct as precinct, t2006.year, t2006.pct, t2006.ser_num, t2006.datestop, t2006.timestop, t2006.recstat, t2006.inout, t2006.trhsloc, t2006.perobs, t2006.crimsusp, t2006.perstop, t2006.typeofid, t2006.explnstp, t2006.othpers, t2006.arstmade, t2006.arstoffn, t2006.sumissue, t2006.sumoffen, t2006.compyear, t2006.comppct, t2006.offunif, t2006.officrid, t2006.frisked, t2006.searched, t2006.contrabn, t2006.adtlrept, t2006.pistol, t2006.riflshot, t2006.asltweap, t2006.knifcuti, t2006.machgun, t2006.othrweap, t2006.pf_hands, t2006.pf_wall, t2006.pf_grnd, t2006.pf_drwep, t2006.pf_ptwep, t2006.pf_baton, t2006.pf_hcuff, t2006.pf_pepsp, t2006.pf_other, t2006.radio, t2006.ac_rept, t2006.ac_inves, t2006.rf_vcrim, t2006.rf_othsw, t2006.ac_proxm, t2006.rf_attir, t2006.cs_objcs, t2006.cs_descr, t2006.cs_casng, t2006.cs_lkout, t2006.rf_vcact, t2006.cs_cloth, t2006.cs_drgtr, t2006.ac_evasv, t2006.ac_assoc, t2006.cs_furtv, t2006.rf_rfcmp, t2006.ac_cgdir, t2006.rf_verbl, t2006.cs_vcrim, t2006.cs_bulge, t2006.cs_other, t2006.ac_incid, t2006.ac_time, t2006.rf_knowl, t2006.ac_stsnd, t2006.ac_other, t2006.sb_hdobj, t2006.sb_outln, t2006.sb_admis, t2006.sb_other, t2006.repcmd, t2006.revcmd, t2006.rf_furt, t2006.rf_bulg, t2006.offverb, t2006.offshld, t2006.forceuse, t2006.sex, t2006.race, t2006.dob, t2006.age, t2006.ht_feet, t2006.ht_inch, t2006.weight, t2006.haircolr, t2006.eyecolor, t2006.build, t2006.othfeatr, t2006.addrtyp, t2006.rescode, t2006.premtype, t2006.premname, t2006.addrnum, t2006.stname, t2006.stinter, t2006.crossst, t2006.aptnum, t2006.city, t2006.state, t2006.zip, t2006.addrpct, t2006.sector, t2006.beat, t2006.post,  t2006.dettypcm, t2006.linecm, t2006.detailcm, ST_x(t2006.geometry) AS longitude, ST_y(t2006.geometry) AS latitude from t2006 
LEFT JOIN 
stops_by_block
ON
t2006.ogc_fid = stops_by_block.new_all_fid
LEFT JOIN
census
ON
stops_by_block.census_fid = census.ogc_fid
LEFT JOIN
pct_census
ON
stops_by_block.census_fid = pct_census.census_fid
LEFT JOIN
nypp_single
ON
pct_census.pct_fid = nypp_single.ogc_fid"

/usr/local/bin/ogr2ogr -f CSV ~/git/precinct/data/year/stop_2007.csv  PG:"dbname='nyclu' host='localhost' port='5432' user='postgres' password='postgres'"  -lco SEPARATOR=TAB -lco CREATE_CSVT=YES -lco GEOMETRY=AS_WKT -sql  "SELECT t2007.ogc_fid, stops_by_block.blockce10 as census_blockce10, nypp_single.precinct as precinct, t2007.year, t2007.pct, t2007.ser_num, t2007.datestop, t2007.timestop, t2007.recstat, t2007.inout, t2007.trhsloc, t2007.perobs, t2007.crimsusp, t2007.perstop, t2007.typeofid, t2007.explnstp, t2007.othpers, t2007.arstmade, t2007.arstoffn, t2007.sumissue, t2007.sumoffen, t2007.compyear, t2007.comppct, t2007.offunif, t2007.officrid, t2007.frisked, t2007.searched, t2007.contrabn, t2007.adtlrept, t2007.pistol, t2007.riflshot, t2007.asltweap, t2007.knifcuti, t2007.machgun, t2007.othrweap, t2007.pf_hands, t2007.pf_wall, t2007.pf_grnd, t2007.pf_drwep, t2007.pf_ptwep, t2007.pf_baton, t2007.pf_hcuff, t2007.pf_pepsp, t2007.pf_other, t2007.radio, t2007.ac_rept, t2007.ac_inves, t2007.rf_vcrim, t2007.rf_othsw, t2007.ac_proxm, t2007.rf_attir, t2007.cs_objcs, t2007.cs_descr, t2007.cs_casng, t2007.cs_lkout, t2007.rf_vcact, t2007.cs_cloth, t2007.cs_drgtr, t2007.ac_evasv, t2007.ac_assoc, t2007.cs_furtv, t2007.rf_rfcmp, t2007.ac_cgdir, t2007.rf_verbl, t2007.cs_vcrim, t2007.cs_bulge, t2007.cs_other, t2007.ac_incid, t2007.ac_time, t2007.rf_knowl, t2007.ac_stsnd, t2007.ac_other, t2007.sb_hdobj, t2007.sb_outln, t2007.sb_admis, t2007.sb_other, t2007.repcmd, t2007.revcmd, t2007.rf_furt, t2007.rf_bulg, t2007.offverb, t2007.offshld, t2007.forceuse, t2007.sex, t2007.race, t2007.dob, t2007.age, t2007.ht_feet, t2007.ht_inch, t2007.weight, t2007.haircolr, t2007.eyecolor, t2007.build, t2007.othfeatr, t2007.addrtyp, t2007.rescode, t2007.premtype, t2007.premname, t2007.addrnum, t2007.stname, t2007.stinter, t2007.crossst, t2007.aptnum, t2007.city, t2007.state, t2007.zip, t2007.addrpct, t2007.sector, t2007.beat, t2007.post,  t2007.dettypcm, t2007.linecm, t2007.detailcm, ST_x(t2007.geometry) AS longitude, ST_y(t2007.geometry) AS latitude from t2007 
LEFT JOIN 
stops_by_block
ON
t2007.ogc_fid = stops_by_block.new_all_fid
LEFT JOIN
census
ON
stops_by_block.census_fid = census.ogc_fid
LEFT JOIN
pct_census
ON
stops_by_block.census_fid = pct_census.census_fid
LEFT JOIN
nypp_single
ON
pct_census.pct_fid = nypp_single.ogc_fid"


/usr/local/bin/ogr2ogr -f CSV ~/git/precinct/data/year/stop_2008.csv  PG:"dbname='nyclu' host='localhost' port='5432' user='postgres' password='postgres'"  -lco SEPARATOR=TAB -lco CREATE_CSVT=YES -lco GEOMETRY=AS_WKT -sql  "SELECT t2008.ogc_fid, stops_by_block.blockce10 as census_blockce10, nypp_single.precinct as precinct, t2008.year, t2008.pct, t2008.ser_num, t2008.datestop, t2008.timestop, t2008.recstat, t2008.inout, t2008.trhsloc, t2008.perobs, t2008.crimsusp, t2008.perstop, t2008.typeofid, t2008.explnstp, t2008.othpers, t2008.arstmade, t2008.arstoffn, t2008.sumissue, t2008.sumoffen, t2008.compyear, t2008.comppct, t2008.offunif, t2008.officrid, t2008.frisked, t2008.searched, t2008.contrabn, t2008.adtlrept, t2008.pistol, t2008.riflshot, t2008.asltweap, t2008.knifcuti, t2008.machgun, t2008.othrweap, t2008.pf_hands, t2008.pf_wall, t2008.pf_grnd, t2008.pf_drwep, t2008.pf_ptwep, t2008.pf_baton, t2008.pf_hcuff, t2008.pf_pepsp, t2008.pf_other, t2008.radio, t2008.ac_rept, t2008.ac_inves, t2008.rf_vcrim, t2008.rf_othsw, t2008.ac_proxm, t2008.rf_attir, t2008.cs_objcs, t2008.cs_descr, t2008.cs_casng, t2008.cs_lkout, t2008.rf_vcact, t2008.cs_cloth, t2008.cs_drgtr, t2008.ac_evasv, t2008.ac_assoc, t2008.cs_furtv, t2008.rf_rfcmp, t2008.ac_cgdir, t2008.rf_verbl, t2008.cs_vcrim, t2008.cs_bulge, t2008.cs_other, t2008.ac_incid, t2008.ac_time, t2008.rf_knowl, t2008.ac_stsnd, t2008.ac_other, t2008.sb_hdobj, t2008.sb_outln, t2008.sb_admis, t2008.sb_other, t2008.repcmd, t2008.revcmd, t2008.rf_furt, t2008.rf_bulg, t2008.offverb, t2008.offshld, t2008.forceuse, t2008.sex, t2008.race, t2008.dob, t2008.age, t2008.ht_feet, t2008.ht_inch, t2008.weight, t2008.haircolr, t2008.eyecolor, t2008.build, t2008.othfeatr, t2008.addrtyp, t2008.rescode, t2008.premtype, t2008.premname, t2008.addrnum, t2008.stname, t2008.stinter, t2008.crossst, t2008.aptnum, t2008.city, t2008.state, t2008.zip, t2008.addrpct, t2008.sector, t2008.beat, t2008.post,  t2008.dettypcm, t2008.linecm, t2008.detailcm, ST_x(t2008.geometry) AS longitude, ST_y(t2008.geometry) AS latitude from t2008 
LEFT JOIN 
stops_by_block
ON
t2008.ogc_fid = stops_by_block.new_all_fid
LEFT JOIN
census
ON
stops_by_block.census_fid = census.ogc_fid
LEFT JOIN
pct_census
ON
stops_by_block.census_fid = pct_census.census_fid
LEFT JOIN
nypp_single
ON
pct_census.pct_fid = nypp_single.ogc_fid"

/usr/local/bin/ogr2ogr -f CSV ~/git/precinct/data/year/stop_2009.csv  PG:"dbname='nyclu' host='localhost' port='5432' user='postgres' password='postgres'"  -lco SEPARATOR=TAB -lco CREATE_CSVT=YES -lco GEOMETRY=AS_WKT -sql  "SELECT t2009.ogc_fid, stops_by_block.blockce10 as census_blockce10, nypp_single.precinct as precinct, t2009.year, t2009.pct, t2009.ser_num, t2009.datestop, t2009.timestop, t2009.recstat, t2009.inout, t2009.trhsloc, t2009.perobs, t2009.crimsusp, t2009.perstop, t2009.typeofid, t2009.explnstp, t2009.othpers, t2009.arstmade, t2009.arstoffn, t2009.sumissue, t2009.sumoffen, t2009.compyear, t2009.comppct, t2009.offunif, t2009.officrid, t2009.frisked, t2009.searched, t2009.contrabn, t2009.adtlrept, t2009.pistol, t2009.riflshot, t2009.asltweap, t2009.knifcuti, t2009.machgun, t2009.othrweap, t2009.pf_hands, t2009.pf_wall, t2009.pf_grnd, t2009.pf_drwep, t2009.pf_ptwep, t2009.pf_baton, t2009.pf_hcuff, t2009.pf_pepsp, t2009.pf_other, t2009.radio, t2009.ac_rept, t2009.ac_inves, t2009.rf_vcrim, t2009.rf_othsw, t2009.ac_proxm, t2009.rf_attir, t2009.cs_objcs, t2009.cs_descr, t2009.cs_casng, t2009.cs_lkout, t2009.rf_vcact, t2009.cs_cloth, t2009.cs_drgtr, t2009.ac_evasv, t2009.ac_assoc, t2009.cs_furtv, t2009.rf_rfcmp, t2009.ac_cgdir, t2009.rf_verbl, t2009.cs_vcrim, t2009.cs_bulge, t2009.cs_other, t2009.ac_incid, t2009.ac_time, t2009.rf_knowl, t2009.ac_stsnd, t2009.ac_other, t2009.sb_hdobj, t2009.sb_outln, t2009.sb_admis, t2009.sb_other, t2009.repcmd, t2009.revcmd, t2009.rf_furt, t2009.rf_bulg, t2009.offverb, t2009.offshld, t2009.forceuse, t2009.sex, t2009.race, t2009.dob, t2009.age, t2009.ht_feet, t2009.ht_inch, t2009.weight, t2009.haircolr, t2009.eyecolor, t2009.build, t2009.othfeatr, t2009.addrtyp, t2009.rescode, t2009.premtype, t2009.premname, t2009.addrnum, t2009.stname, t2009.stinter, t2009.crossst, t2009.aptnum, t2009.city, t2009.state, t2009.zip, t2009.addrpct, t2009.sector, t2009.beat, t2009.post,  t2009.dettypcm, t2009.linecm, t2009.detailcm, ST_x(t2009.geometry) AS longitude, ST_y(t2009.geometry) AS latitude from t2009 
LEFT JOIN 
stops_by_block
ON
t2009.ogc_fid = stops_by_block.new_all_fid
LEFT JOIN
census
ON
stops_by_block.census_fid = census.ogc_fid
LEFT JOIN
pct_census
ON
stops_by_block.census_fid = pct_census.census_fid
LEFT JOIN
nypp_single
ON
pct_census.pct_fid = nypp_single.ogc_fid"

/usr/local/bin/ogr2ogr -f CSV ~/git/precinct/data/year/stop_2010.csv  PG:"dbname='nyclu' host='localhost' port='5432' user='postgres' password='postgres'"  -lco SEPARATOR=TAB -lco CREATE_CSVT=YES -lco GEOMETRY=AS_WKT -sql  "SELECT t2010.ogc_fid, stops_by_block.blockce10 as census_blockce10, nypp_single.precinct as precinct, t2010.year, t2010.pct, t2010.ser_num, t2010.datestop, t2010.timestop, t2010.recstat, t2010.inout, t2010.trhsloc, t2010.perobs, t2010.crimsusp, t2010.perstop, t2010.typeofid, t2010.explnstp, t2010.othpers, t2010.arstmade, t2010.arstoffn, t2010.sumissue, t2010.sumoffen, t2010.compyear, t2010.comppct, t2010.offunif, t2010.officrid, t2010.frisked, t2010.searched, t2010.contrabn, t2010.adtlrept, t2010.pistol, t2010.riflshot, t2010.asltweap, t2010.knifcuti, t2010.machgun, t2010.othrweap, t2010.pf_hands, t2010.pf_wall, t2010.pf_grnd, t2010.pf_drwep, t2010.pf_ptwep, t2010.pf_baton, t2010.pf_hcuff, t2010.pf_pepsp, t2010.pf_other, t2010.radio, t2010.ac_rept, t2010.ac_inves, t2010.rf_vcrim, t2010.rf_othsw, t2010.ac_proxm, t2010.rf_attir, t2010.cs_objcs, t2010.cs_descr, t2010.cs_casng, t2010.cs_lkout, t2010.rf_vcact, t2010.cs_cloth, t2010.cs_drgtr, t2010.ac_evasv, t2010.ac_assoc, t2010.cs_furtv, t2010.rf_rfcmp, t2010.ac_cgdir, t2010.rf_verbl, t2010.cs_vcrim, t2010.cs_bulge, t2010.cs_other, t2010.ac_incid, t2010.ac_time, t2010.rf_knowl, t2010.ac_stsnd, t2010.ac_other, t2010.sb_hdobj, t2010.sb_outln, t2010.sb_admis, t2010.sb_other, t2010.repcmd, t2010.revcmd, t2010.rf_furt, t2010.rf_bulg, t2010.offverb, t2010.offshld, t2010.forceuse, t2010.sex, t2010.race, t2010.dob, t2010.age, t2010.ht_feet, t2010.ht_inch, t2010.weight, t2010.haircolr, t2010.eyecolor, t2010.build, t2010.othfeatr, t2010.addrtyp, t2010.rescode, t2010.premtype, t2010.premname, t2010.addrnum, t2010.stname, t2010.stinter, t2010.crossst, t2010.aptnum, t2010.city, t2010.state, t2010.zip, t2010.addrpct, t2010.sector, t2010.beat, t2010.post,  t2010.dettypcm, t2010.linecm, t2010.detailcm, ST_x(t2010.geometry) AS longitude, ST_y(t2010.geometry) AS latitude from t2010 
LEFT JOIN 
stops_by_block
ON
t2010.ogc_fid = stops_by_block.new_all_fid
LEFT JOIN
census
ON
stops_by_block.census_fid = census.ogc_fid
LEFT JOIN
pct_census
ON
stops_by_block.census_fid = pct_census.census_fid
LEFT JOIN
nypp_single
ON
pct_census.pct_fid = nypp_single.ogc_fid"

/usr/local/bin/ogr2ogr -f CSV ~/git/precinct/data/year/stop_2011.csv PG:"dbname='nyclu' host='localhost' port='5432' user='postgres' password='postgres'" -lco SEPARATOR=TAB -lco CREATE_CSVT=YES -lco GEOMETRY=AS_WKT -sql  "SELECT t2011.ogc_fid, census.blockce10 as census_blockce10, nypp_single.precinct as precinct, t2011.year, t2011.pct, t2011.ser_num, t2011.datestop, t2011.timestop, t2011.recstat, t2011.inout, t2011.trhsloc, t2011.perobs, t2011.crimsusp, t2011.perstop, t2011.typeofid, t2011.explnstp, t2011.othpers, t2011.arstmade, t2011.arstoffn, t2011.sumissue, t2011.sumoffen, t2011.compyear, t2011.comppct, t2011.offunif, t2011.officrid, t2011.frisked, t2011.searched, t2011.contrabn, t2011.adtlrept, t2011.pistol, t2011.riflshot, t2011.asltweap, t2011.knifcuti, t2011.machgun, t2011.othrweap, t2011.pf_hands, t2011.pf_wall, t2011.pf_grnd, t2011.pf_drwep, t2011.pf_ptwep, t2011.pf_baton, t2011.pf_hcuff, t2011.pf_pepsp, t2011.pf_other, t2011.radio, t2011.ac_rept, t2011.ac_inves, t2011.rf_vcrim, t2011.rf_othsw, t2011.ac_proxm, t2011.rf_attir, t2011.cs_objcs, t2011.cs_descr, t2011.cs_casng, t2011.cs_lkout, t2011.rf_vcact, t2011.cs_cloth, t2011.cs_drgtr, t2011.ac_evasv, t2011.ac_assoc, t2011.cs_furtv, t2011.rf_rfcmp, t2011.ac_cgdir, t2011.rf_verbl, t2011.cs_vcrim, t2011.cs_bulge, t2011.cs_other, t2011.ac_incid, t2011.ac_time, t2011.rf_knowl, t2011.ac_stsnd, t2011.ac_other, t2011.sb_hdobj, t2011.sb_outln, t2011.sb_admis, t2011.sb_other, t2011.repcmd, t2011.revcmd, t2011.rf_furt, t2011.rf_bulg, t2011.offverb, t2011.offshld, t2011.forceuse, t2011.sex, t2011.race, t2011.dob, t2011.age, t2011.ht_feet, t2011.ht_inch, t2011.weight, t2011.haircolr, t2011.eyecolor, t2011.build, t2011.othfeatr, t2011.addrtyp, t2011.rescode, t2011.premtype, t2011.premname, t2011.addrnum, t2011.stname, t2011.stinter, t2011.crossst, t2011.aptnum, t2011.city, t2011.state, t2011.zip, t2011.addrpct, t2011.sector, t2011.beat, t2011.post,  t2011.dettypcm, t2011.linecm, t2011.detailcm, ST_x(t2011.geometry) AS longitude, ST_y(t2011.geometry) AS latitude, t2011.geometry from t2011 
LEFT JOIN 
stops_by_block
ON
t2011.ogc_fid = stops_by_block.new_all_fid
LEFT JOIN
census
ON
stops_by_block.census_fid = census.ogc_fid
LEFT JOIN
pct_census
ON
stops_by_block.census_fid = pct_census.census_fid
LEFT JOIN
nypp_single
ON
pct_census.pct_fid = nypp_single.ogc_fid"