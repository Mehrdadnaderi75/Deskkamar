
import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ChevronLeft, 
  ShieldCheck, 
  Dumbbell, 
  Stethoscope, 
  BrainCircle, 
  MessageSquare, 
  ArrowUpRight,
  Info,
  Send,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { getGeminiResponse } from './services/geminiService';

const App = () => {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'سلام، من لومبوگاید هستم. چطور می‌توانم در مورد سلامت کمر به شما کمک کنم؟' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isTyping) return;

    const userMsg = chatInput;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsTyping(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response || 'خطا در پاسخگویی' }]);
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2.5 rounded-2xl text-white shadow-lg shadow-blue-200">
              <Activity size={24} />
            </div>
            <span className="text-2xl font-black text-slate-800 tracking-tight">LUMBO<span className="text-blue-600">GUIDE</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#anatomy" className="hover:text-blue-600 transition-colors">آناتومی</a>
            <a href="#exercises" className="hover:text-blue-600 transition-colors">تمرینات</a>
            <a href="#ai-consult" className="hover:text-blue-600 transition-colors">مشاوره هوشمند</a>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl hover:bg-blue-600 transition-all">ورود پزشکان</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold border border-blue-100">
              <ShieldCheck size={18} />
              <span>پلتفرم تخصصی آموزش و پیشگیری</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.2]">
              دنیایی <span className="text-blue-600">بدون محدودیت</span> برای ستون فقرات شما
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              آموزش‌های علمی، حرکات اصلاحی دقیق و مشاوره هوشمند برای کسانی که به سلامت کمر خود اهمیت می‌دهند.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#ai-consult" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                شروع مشاوره هوشمند
                <ChevronLeft size={20} />
              </a>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                مشاهده تمرینات
              </button>
            </div>
            <div className="flex items-center gap-12 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">+۴۰</span>
                <span className="text-sm text-slate-500">حرکت اصلاحی</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">۱۰۰٪</span>
                <span className="text-sm text-slate-500">پایه علمی</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-full aspect-square bg-blue-100/50 rounded-[4rem] flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 to-transparent"></div>
               <img 
                 src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" 
                 alt="Healthy Spine"
                 className="w-4/5 h-4/5 object-cover rounded-[3rem] shadow-2xl z-10"
               />
               <div className="absolute bottom-10 -right-5 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 animate-bounce-slow">
                 <div className="flex items-center gap-3">
                   <div className="bg-green-100 text-green-600 p-2 rounded-full"><CheckCircle2 /></div>
                   <div>
                     <p className="text-sm font-bold text-slate-800">وضعیت ستون فقرات</p>
                     <p className="text-xs text-slate-500">ایده‌آل و بدون التهاب</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="anatomy" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6">نقشه راه سلامتی شما</h2>
            <p className="text-slate-600">ما تمام ابزارهای لازم برای درک و بهبود وضعیت دیسک کمر را در اختیار شما قرار می‌دهیم.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BrainCircle size={32} />}
              title="آموزش آناتومی"
              desc="درک صحیح از ساختار مهره‌ها و دیسک‌ها برای پیشگیری بهتر."
              color="blue"
            />
            <FeatureCard 
              icon={<Dumbbell size={32} />}
              title="تمرینات اصلاحی"
              desc="حرکات اختصاصی برای تقویت عضلات حمایت‌کننده کمر."
              color="indigo"
            />
            <FeatureCard 
              icon={<Stethoscope size={32} />}
              title="ارزیابی علائم"
              desc="بررسی اولیه نشانه‌های فتق دیسک با استفاده از هوش مصنوعی."
              color="emerald"
            />
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="ai-consult" className="py-24 container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3.5rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-16 items-stretch overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="lg:w-2/5 text-white flex flex-col justify-center space-y-8 z-10">
            <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center mb-4">
              <MessageSquare size={32} />
            </div>
            <h2 className="text-4xl font-black leading-tight">پاسخ‌های هوشمند در لحظه</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              هر سوالی در مورد دردهای سیاتیک، تمرینات مجاز یا روش‌های درمانی دارید، از لومبوگاید بپرسید.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-blue-500" />
                پاسخ‌های مبتنی بر مقالات علمی ۲۰۲۴
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-blue-500" />
                تحلیل علائم بر اساس فیزیولوژی
              </li>
            </ul>
          </div>

          <div className="lg:w-3/5 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 flex flex-col h-[550px] z-10">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold">دستیار فعال است</span>
              </div>
              <Info size={20} className="text-white/40" />
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed ${
                    m.role === 'ai' 
                    ? 'bg-white/10 text-slate-100 rounded-tr-none' 
                    : 'bg-blue-600 text-white rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-2">
                    <Loader2 size={16} className="text-blue-500 animate-spin" />
                    <span className="text-xs text-slate-400">در حال جستجو در منابع...</span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleChat} className="p-6">
              <div className="bg-white/10 p-2 rounded-2xl flex gap-2 focus-within:ring-2 ring-blue-500/50 transition-all border border-white/5">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="مثلاً: علائم پارگی دیسک چیست؟"
                  className="flex-1 bg-transparent px-4 py-3 outline-none text-white text-sm"
                />
                <button 
                  type="submit"
                  disabled={isTyping}
                  className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50"
                >
                  <Send size={20} className="rotate-180" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <Activity size={20} />
            </div>
            <span className="text-xl font-black text-slate-800 tracking-tight">LUMBO<span className="text-blue-600">GUIDE</span></span>
          </div>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            این سایت با هدف ارتقای آگاهی عمومی در زمینه سلامت ستون فقرات ایجاد شده است. لومبوگاید یک مرجع آموزشی است و نباید به عنوان تنها منبع تشخیص پزشکی استفاده شود.
          </p>
          <div className="pt-8 text-xs text-slate-400">
            © ۲۰۲۴ لومبوگاید - پلتفرم هوشمند سلامت
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, color }) => (
  <div className="bg-white p-10 rounded-[2.5rem] custom-shadow group hover:-translate-y-2 transition-all duration-300 border border-slate-50">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors ${
      color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
      color === 'indigo' ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' :
      'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
    }`}>
      {icon}
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed mb-6">{desc}</p>
    <button className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:gap-4 transition-all group-hover:text-blue-600">
      بیشتر بدانید
      <ArrowUpRight size={18} />
    </button>
  </div>
);

export default App;
