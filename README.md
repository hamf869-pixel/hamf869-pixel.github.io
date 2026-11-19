# عالم البرمجيات — نسخة GitHub Pages

## النشر
1. أنشئ مستودعاً على GitHub وارفع محتويات هذا المجلد إلى جذره (مع ملف `.nojekyll`).
2. من **Settings ← Pages** اختر Source: `Deploy from a branch` ثم الفرع `main` والمجلد `/ (root)`.
3. بعد دقيقة يعمل الموقع على `https://USERNAME.github.io/REPO/`.

## لوحة التحكم (`admin.html`)
- أنشئ **Fine-grained token** من GitHub (Settings ← Developer settings ← Personal access tokens)
  على هذا المستودع فقط بصلاحية **Contents: Read and write**.
- افتح `admin.html` وأدخل المستودع (`USERNAME/REPO`) والفرع والتوكن.
- كل حفظ يُنشئ commit يحدّث `data/programs.json`، والصور تُرفع إلى `uploads/`.
- يظهر التعديل في الموقع بعد دقيقة إلى دقيقتين.
- حدّ الرفع 25 ميغابايت للملف؛ للفيديوهات الكبيرة استخدم رابط يوتيوب.

## عدّادات الزيارات والتحميلات (GoatCounter)
1. سجّل مجاناً في https://www.goatcounter.com واختر رمزاً، فيصبح عنوانك `RMZ.goatcounter.com`.
2. من إعدادات الموقع في GoatCounter فعّل **Allow adding visitor counts on your website** (مغلق افتراضياً، وبدونه لا تظهر الأرقام).
3. افتح `config.js` وضع الرمز: `window.GC_CODE="RMZ";` ثم ارفعه إلى المستودع. (مضبوط الآن على `bouhamtech`)
- الزيارات تُحسب تلقائياً، والتحميلات تُسجَّل كمسار `/download/معرّف-البرنامج`.
- الأرقام المعروضة تتأخر حتى 4 ساعات (تخزين مؤقت عند GoatCounter)، لذلك يزيد الرقم محلياً +1 فور الضغط على التحميل.
- لا تُحسب زياراتك أنت إذا فتحت موقعك مرة بالرابط `...#toggle-goatcounter`.
- تظهر الأرقام أيضاً في `admin.html`، ومعها رابط لوحة GoatCounter التفصيلية.
- إن بقي `GC_CODE` فارغاً تُخفى العدّادات ويعمل الموقع عادياً.

## ما تغيّر عن نسخة PHP
- حُذف `api.php`؛ البيانات في `data/programs.json`.
- العدّادات صارت عبر GoatCounter بدل ملف على الخادم.
- كلمة مرور المدير استُبدلت بتوكن GitHub.
