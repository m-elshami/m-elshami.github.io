(function() {
  var o = document.getElementById('protect-overlay');
  var loginStatus = sessionStorage.getItem('loginStatus'); // الحصول على حالة تسجيل الدخول من sessionStorage

  if (loginStatus === '1') {
      // إذا كانت حالة تسجيل الدخول ناجحة، تخطي التحقق من كلمة المرور
      alert('تم تسجيل الدخول بالفعل');
      o.style.display = "none";
      return false;
  }
  o.getElementsByTagName('form')[0].onsubmit = function() {

      // التحقق من كلمة المرور كما كان
      if (this.answer.value === atob('M0xTSEFNSV9wd2Q=')) {
        alert('تهانينا . كلمة مرور صحيحة');
        o.style.display = "none";
        sessionStorage.setItem('loginStatus', '1'); // حفظ حالة تسجيل الدخول الناجحة
      } else {
        alert('خطأ !');
	this.answer.value = '';
      }
      return false;
  };
})();