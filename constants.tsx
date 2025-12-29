
import React from 'react';
import { BookOpen, Activity, ShieldCheck, HeartPulse, Info, Dumbbell } from 'lucide-react';
import { EducationalContent, Exercise } from './types';

export const EDUCATIONAL_MODULES: EducationalContent[] = [
  {
    id: '1',
    title: 'آناتومی ستون فقرات',
    description: 'آشنایی با ساختار مهره‌ها و دیسک‌های بین مهره‌ای به زبان ساده.',
    icon: 'BookOpen',
    category: 'anatomy',
    fullText: 'ستون فقرات از ۳۳ مهره تشکیل شده است. دیسک‌ها به عنوان ضربه‌گیر بین مهره‌ها عمل می‌کنند...'
  },
  {
    id: '2',
    title: 'علائم هشدار دهنده',
    description: 'چگونه متوجه شویم که درد کمر مربوط به دیسک است؟',
    icon: 'Info',
    category: 'anatomy',
    fullText: 'علائم شایع شامل درد تیرکشنده به پاها (سیاتیک)، بی‌حسی، و ضعف عضلانی است.'
  },
  {
    id: '3',
    title: 'روش‌های درمان غیرجراحی',
    description: 'فیزیوتراپی، آب‌درمانی و اصلاح سبک زندگی.',
    icon: 'HeartPulse',
    category: 'treatment',
    fullText: 'بیش از ۹۰ درصد بیماران با روش‌های غیرجراحی و استراحت نسبی بهبود می‌یابند.'
  },
  {
    id: '4',
    title: 'تمرینات اصلاحی',
    description: 'حرکات ورزشی مناسب برای تقویت عضلات کور (Core).',
    icon: 'Dumbbell',
    category: 'exercises',
    fullText: 'تمرینات پل، پلانک ملایم و کشش‌های مخصوص تحت نظر فیزیوتراپ توصیه می‌شود.'
  }
];

export const EXERCISES: Exercise[] = [
  {
    id: 'e1',
    name: 'کشش گربه-گاو',
    difficulty: 'easy',
    description: 'این حرکت به افزایش انعطاف‌پذیری ستون فقرات کمک می‌کند.',
    duration: '۳ ست ۱۰ تایی',
    imageUrl: 'https://picsum.photos/seed/catcow/400/300'
  },
  {
    id: 'e2',
    name: 'تمرین پل (Bridge)',
    difficulty: 'medium',
    description: 'تقویت عضلات باسن و کمر برای حمایت بهتر از ستون فقرات.',
    duration: '۳ ست ۱۵ تایی',
    imageUrl: 'https://picsum.photos/seed/bridge/400/300'
  },
  {
    id: 'e3',
    name: 'حرکت پرنده-سگ (Bird-Dog)',
    difficulty: 'hard',
    description: 'تمرکز بر تعادل و تقویت عضلات عمقی کمر.',
    duration: '۳ ست ۸ تایی هر طرف',
    imageUrl: 'https://picsum.photos/seed/birddog/400/300'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Info: <Info className="w-6 h-6" />,
  Dumbbell: <Dumbbell className="w-6 h-6" />,
};
