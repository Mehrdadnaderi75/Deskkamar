
import React from 'react';
import { Activity, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Activity size={24} />
              </div>
              <h1 className="text-2xl font-bold">لومبوگاید</h1>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              تلاش ما در لومبوگاید ارتقای سطح دانش سلامت جامعه و ارائه راهکارهای علمی برای مدیریت دردهای ستون فقرات با استفاده از آخرین دستاوردهای پزشکی و تکنولوژی هوش مصنوعی است.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6">دسترسی سریع</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">آناتومی ستون فقرات</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">علائم دیسک کمر</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">ورزش‌های اصلاحی</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">سوالات متداول</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6">بخش درمانی</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">فیزیوتراپی خانگی</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">تغذیه و التهاب</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">اصلاح ارگونومی محیط کار</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">زمان جراحی</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6">خبرنامه سلامتی</h5>
            <p className="text-slate-400 text-sm mb-4">برای دریافت جدیدترین تمرینات و مقالات علمی ایمیل خود را ثبت کنید.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="ایمیل شما" className="bg-slate-800 border-none px-4 py-2 rounded-lg text-sm flex-1" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700">ثبت</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>© ۲۰۲۴ لومبوگاید. تمام حقوق محفوظ است. | طراحی و توسعه با هوش مصنوعی</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
