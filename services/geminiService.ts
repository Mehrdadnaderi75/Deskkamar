
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
شما یک دستیار هوشمند آموزشی متخصص در زمینه ستون فقرات و دیسک کمر هستید.
نام شما "لومبوگاید" است.
وظایف شما:
1. ارائه اطلاعات دقیق علمی در مورد دیسک کمر، علائم، پیشگیری و درمان.
2. همیشه توصیه کنید که کاربر برای تشخیص نهایی به پزشک متخصص مراجعه کند.
3. پاسخ‌ها باید به زبان فارسی روان، دلسوزانه و حرفه‌ای باشد.
4. از اصطلاحات پزشکی با توضیح ساده استفاده کنید.
5. اگر سوالی خارج از حوزه سلامت ستون فقرات بود، مودبانه بگویید که تخصص شما فقط در زمینه کمر و ستون فقرات است.
`;

export const getGeminiResponse = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text || "متاسفانه در حال حاضر قادر به پاسخگویی نیستم.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "خطایی در برقراری ارتباط با مغز هوشمند رخ داد. لطفا دوباره تلاش کنید.";
  }
};
