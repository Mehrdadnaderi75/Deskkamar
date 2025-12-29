
import React from 'react';
import { EDUCATIONAL_MODULES, ICON_MAP } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h3 className="text-3xl font-black text-slate-900 mb-4 italic border-r-4 border-blue-600 pr-4">آنچه باید درباره کمردرد بدانید</h3>
          <p className="text-slate-600 text-lg">آموزش گام‌به‌گام برای کسانی که می‌خواهند از سلامت ستون فقرات خود محافظت کنند.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EDUCATIONAL_MODULES.map((module) => (
            <div key={module.id} className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-blue-600 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-2">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                {ICON_MAP[module.icon]}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white transition-colors">{module.title}</h4>
              <p className="text-slate-600 group-hover:text-blue-50 transition-colors text-sm leading-relaxed">
                {module.description}
              </p>
              <button className="mt-6 text-blue-600 font-bold text-sm group-hover:text-white transition-colors flex items-center gap-1">
                بیشتر بخوانید
                <span className="text-lg">←</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
