// إعدادات العدّادات (GoatCounter): ضع رمز حسابك بين علامتي التنصيص، مثال: "bouham" لعنوان bouham.goatcounter.com
// إذا تُرك فارغاً تُخفى العدّادات ويعمل الموقع عادياً.
window.GC_CODE="bouhamtech";
// المستودع الافتراضي للوحة التحكم
window.GH_REPO="hamf869-pixel/hamf869-pixel.github.io";
// قراءة عدّاد مسار معيّن (أو TOTAL لإجمالي زيارات الموقع). يرجع null عند تعذّر القراءة، و0 إن لم يُسجَّل المسار بعد
window.gcGet=async p=>{if(!GC_CODE)return null;
 try{const r=await fetch("https://"+GC_CODE+".goatcounter.com/counter/"+(p==="TOTAL"?p:encodeURIComponent(p))+".json");
  if(r.status===404)return 0;if(!r.ok)return null;const j=await r.json();return parseInt(String(j.count).replace(/\D/g,""),10)||0;}catch(e){return null;}};
// تسجيل تحميل برنامج كمسار /download/ID
window.gcDownload=(id,name)=>{if(!GC_CODE)return;let t=0;const h=setInterval(()=>{if(window.goatcounter&&goatcounter.count){clearInterval(h);goatcounter.count({path:"/download/"+id,title:"تحميل: "+name});}else if(++t>30)clearInterval(h);},100);};
