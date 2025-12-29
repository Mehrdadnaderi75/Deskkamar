
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatAssistant from './components/ChatAssistant';
import ExerciseLibrary from './components/ExerciseLibrary';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        
        <section className="py-12 bg-blue-600 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-white/30 text-2xl font-black mx-8 uppercase tracking-widest">
                LumboGuide • ستون فقرات • دیسک کمر • پیشگیری • آموزش هوشمند • 
              </span>
            ))}
          </div>
        </section>

        <Features />
        
        <div className="bg-slate-900 py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-6">آیا می‌دانید؟</h3>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg">
              پیاده‌روی روزانه ۲۰ دقیقه، موثرترین و ساده‌ترین تمرین برای پیشگیری از عارضه‌های ستون فقرات و بهبود گردش خون در دیسک‌هاست.
            </p>
          </div>
        </div>

        <ExerciseLibrary />
        <ChatAssistant />
      </main>
      <Footer />
      
      {/* Sticky Call to Action for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-2xl shadow-blue-400 flex items-center justify-center gap-2">
          همین حالا سوال خود را بپرسید
        </button>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
