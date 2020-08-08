function getCookie(name) {
  let arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return arr[2];
  else return null;
}

function setCookie(name, value) {
  if (value) {
    var days = 1; //定义一天
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    // 写入Cookie, toGMTString将时间转换成字符串
    document.cookie =
      name + "=" + escape(value) + ";expires=" + exp.toGMTString;
  }
}

function removeCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

export { getCookie, setCookie, removeCookie };
