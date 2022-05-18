/*
脚本:Bigshot 解锁Pro  By：Seven3in

[rewrite_local]
Quantumult X 
^https:\/\/m2u-api\.getkwai\.com\/vni-server\/api\/v1\/user\/profile* url script-response-body https://gitee.com/seven3in/Script/raw/master/Bigshot.js

Loon
http-response ^https:\/\/m2u-api\.getkwai\.com\/vni-server\/api\/v1\/user\/profile* requires-body=1,script-path=https://gitee.com/seven3in/Script/raw/master/Bigshot.js,tag=Bigshot

[MITM]
hostname = m2u-api.getkwai.com
*/

let obj = JSON.parse($response.body);
obj.data.userInfo.isVip = 1;
obj.data.userInfo.vipStartTime = 8847936320;
obj.data.userInfo.vipEndTime = 8847936320;
$done({body: JSON.stringify(obj)});