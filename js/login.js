(function() {
    var o = document.getElementById('protect-overlay');
    //var pass = atob('M0xTSEFNSV9wd2Q=');
    exports.handler = async function (event, context) {
    const pass = process.env.pass;
};

    // الحصول على قيمة ملف تعريف الارتباط الخاص بحالة تسجيل الدخول
    var loginStatus = getCookie("loginStatus");

    if (loginStatus === pass) {
        // إذا كانت حالة تسجيل الدخول ناجحة، تخطي التحقق من كلمة المرور
        alert('تم تسجيل الدخول بالفعل');
        o.style.display = "none";
        return false;
    }

    o.getElementsByTagName('form')[0].onsubmit = function() {
        // التحقق من كلمة المرور كما كان
        if (this.answer.value === pass) {
            alert('تهانينا . كلمة مرور صحيحة');
            o.style.display = "none";
            // حفظ حالة تسجيل الدخول في ملف تعريف ارتباط
            setCookie("loginStatus", pass, 365); // تخزين لمدة سنة
        } else {
            alert('خطأ !');
            this.answer.value = '';
        }
        return false;
    };
})();

// دالة للحصول على قيمة ملف تعريف ارتباط
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// دالة لتعيين قيمة ملف تعريف ارتباط
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
