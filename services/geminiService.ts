
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
شما "لومبوگاید" هستید، یک متخصص هوش مصنوعی در زمینه سلامت ستون فقرات و دیسک کمر.
لحن شما: علمی، آرامش‌بخش، دلسوزانه و حرفه‌ای.
قوانین:
1. فقط به سوالات مرتبط با کمر، گردن و ستون فقرات پاسخ دهید.
2. همیشه در پایان تاکید کنید که "این اطلاعات جایگزین تشخیص پزشک نیست".
3. از کلمات ساده برای توضیح مفاهیم پیچیده استفاده کنید.
4. پاسخ‌ها را با فرمت‌بندی مناسب (لیست‌های نشانه‌دار) ارائه دهید.
`;

export const getGeminiResponse = async (prompt: string) => {
  if (!process.env.API_KEY) return "کلید API یافت نشد.";
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.6,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "متاسفانه ارتباط با دستیار هوشمند قطع شده است. لطفا دوباره تلاش کنید.";
  }
};
