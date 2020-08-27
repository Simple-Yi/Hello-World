/* 
[rewrite_local]
^https:\/\/app\.bilibili\.com\/x\/v2\/space\?access_key url script-response-body bilibili_space_qx.js
[mitm]
hostname = app.bilibili.com
*/

let url = $request.url
let regex = /vmid=(\d*)/
let vmid= regex.exec(url)
let mid = vmid[1]
let api = `https://api.bilibili.com/x/space/arc/search?pn=1&ps=10&order=stow&keyword=&mid=${mid}`
var Url = {
    url: api,
    method: "GET"
};

$task.fetch(Url).then(response => {
  body=JSON.parse(response.body)
  let info=""
  body['data']['list']['vlist'].forEach((element, index)=> {
      index++
      let scheme=`bilibili://av/${element['aid']}`
      info+=index+": "+element['title']+"\n"+scheme+"\n"
  })
  $notify('收藏排行前10','长按进入', info);
  $done({});
}, reason => {
  $notify("收藏排行获取失败", "", reason.error);
  $done({});
});