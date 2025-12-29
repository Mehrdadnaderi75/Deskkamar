
import React from 'react';
import { ChevronLeft, ShieldCheck, Zap, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold">
              <ShieldCheck size={16} />
              <span>مرجع علمی و معتبر آموزش دیسک کمر</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              زندگی بدون درد <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">حق شماست</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              لومبوگاید یک پلتفرم هوشمند برای درک بهتر مکانیسم ستون فقرات، فتق دیسک و روش‌های علمی پیشگیری و درمان دردهای کمری است.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                مشاهده نقشه‌راه درمانی
                <ChevronLeft size={20} />
              </button>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                مشاوره با هوش مصنوعی
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Zap className="text-amber-500" />
                <span className="text-sm font-medium text-slate-500">آموزش سریع</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-rose-500" />
                <span className="text-sm font-medium text-slate-500">پیشگیری علمی</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-full max-w-lg mx-auto bg-white p-6 rounded-[2.5rem] shadow-2xl border border-blue-50">
               <img 
                src="https://picsum.photos/seed/spine/600/600" 
                alt="Spine Health" 
                className="rounded-3xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-3xl shadow-xl hidden md:block">
                <p className="text-sm opacity-80">رضایت کاربران</p>
                <p className="text-2xl font-bold">+۹۵٪ بهبود آگاهی</p>
              </div>
            </div>
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
