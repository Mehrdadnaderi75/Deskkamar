
import React from 'react';
import { EXERCISES } from '../constants';
import { Timer, Trophy } from 'lucide-react';

const ExerciseLibrary: React.FC = () => {
  return (
    <section id="exercises" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-black text-slate-900 mb-4">کتابخانه تمرینات اصلاحی</h3>
            <p className="text-slate-600 text-lg">تمرینات تایید شده توسط فیزیوتراپیست‌ها برای تقویت عضلات حمایت‌کننده کمر.</p>
          </div>
          <button className="bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold text-slate-700 hover:bg-slate-100 transition-colors shrink-0">
            مشاهده تمام حرکات
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXERCISES.map((ex) => (
            <div key={ex.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="relative h-56 overflow-hidden">
                <img src={ex.imageUrl} alt={ex.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 flex items-center gap-1">
                  <Trophy size={14} className="text-amber-500" />
                  {ex.difficulty === 'easy' ? 'ساده' : ex.difficulty === 'medium' ? 'متوسط' : 'تخصصی'}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{ex.name}</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-2">{ex.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Timer size={16} />
                    <span>{ex.duration}</span>
                  </div>
                  <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-600 transition-colors">
                    آموزش ویدئویی
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExerciseLibrary;
