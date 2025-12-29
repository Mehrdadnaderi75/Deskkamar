
import React from 'react';
import { Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Activity size={24} />
          </div>
          <h1 className="text-xl font-bold text-slate-800">لومبوگاید</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">درباره دیسک</a>
          <a href="#exercises" className="text-slate-600 hover:text-blue-600 transition-colors">تمرینات</a>
          <a href="#chat" className="text-slate-600 hover:text-blue-600 transition-colors">مشاوره هوشمند</a>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
            شروع یادگیری
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
