/*
脚本:训记 解锁Pro  By：Seven3in

[rewrite_local]
Quantumult X 
^https:\/\/xunji\.implements\.io\/whole_user_info url script-response-body https://gitee.com/seven3in/Script/raw/master/xunji.js

Loon
http-response ^https:\/\/xunji\.implements\.io\/whole_user_info requires-body=1,script-path=https://gitee.com/seven3in/Script/raw/master/xunji.js,tag=训记

[MITM]
hostname = xunji.implements.io
*/

let obj = JSON.parse($response.body);
obj.res.vipDay = 520;
$done({body: JSON.stringify(obj)});