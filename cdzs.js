/*
脚本:充电助手 PRO解锁  By：Seven3in

[rewrite_local]
Quantumult X 
^https:\/\/api\.yonekura\.cn\/3\.6\.8\/uicommon\/getuser url script-response-body https://gitee.com/seven3in/Script/raw/master/cdzs.js

Loon
http-response ^https:\/\/api\.yonekura\.cn\/3\.6\.8\/uicommon\/getuser requires-body=1,script-path=https://gitee.com/seven3in/Script/raw/master/cdzs.js,tag=充电助手

[MITM]
hostname = api.yonekura.cn
*/

let obj = JSON.parse($response.body);
obj.data.expireTime = 9637489265;
obj.data.expExpireTime = 9637489265;
obj.data.score = 100;
obj.data.isVip = true;
$done({body: JSON.stringify(obj)});