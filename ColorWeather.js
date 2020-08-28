var _0xe0e0 = ["body", "parse", "xy_vip_expire", "result", "is_vip", "vip_expired_at", "is_xy_vip", "stringify", "vip_type"];
var body = $response[_0xe0e0[0]];
var obj = JSON[_0xe0e0[1]](body);
obj[_0xe0e0[3]][_0xe0e0[2]] = 4096483190;
obj[_0xe0e0[3]][_0xe0e0[4]] = true;
obj[_0xe0e0[3]][_0xe0e0[5]] = 4096483190;
obj[_0xe0e0[3]][_0xe0e0[6]] = true;
obj[_0xe0e0[3]][_0xe0e0[8]] = "s";
body = JSON[_0xe0e0[7]](obj);
$done(body)