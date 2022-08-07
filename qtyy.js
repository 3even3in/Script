/*
脚本:倾听英语 解锁VIP  By：Seven3in
[rewrite_local]
Quantumult X 
^https:\/\/sapi.beingfine.cn\/v1\/UserLaunchAppReport* url script-response-body https://raw.githubusercontent.com/3even3in/Script/main/qtyy.js
Loon
http-response ^https:\/\/sapi.beingfine.cn\/v1\/UserLaunchAppReport* requires-body=1,script-path=https://raw.githubusercontent.com/3even3in/Script/main/qtyy.js,tag=倾听英语
[MITM]
hostname = sapi.beingfine.cn
*/


body = $response.body.replace(/granted":\d+/g, 'granted":1');
body = body.replace(/expire_date":\d+/g, 'expire_date":17368358400');
//body = body.replace(/nickname":".+"/g, 'nickname":"Seven3in"');
$done({body});
