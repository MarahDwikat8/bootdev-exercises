//Dynamic Keys
/**
 بتسمح انو يكون في اتربيوت المستخدم يضيفها مع قيمته 
 type UserMetrics = {
  [key: string]: number;
};
رح ينضاف مستقبلا خصائص من نوع ستريج الفاليو تبعتها نمبرس
 */

export type MailPreferences = {
 [key: string ]:boolean;
};

// don't touch below this line

export function setPreference(
  preferences: MailPreferences,//عباره عن اوبجكت 
  key: string,
  value: boolean,
) {
  const exists = key in preferences;//بتفحص اذا الفاليو موجوده او لا 
  preferences[key] = value;
  return exists;
}
