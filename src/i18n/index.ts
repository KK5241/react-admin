import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/common.json';
import zh from './zh/common.json';
import authEn from './en/auth/index.json';
import authZh from './zh/auth/index.json';

i18n
  .use(LanguageDetector) // 根据浏览器/缓存等自动检测语言
  .use(initReactI18next)
  .init({
    resources: {
      en: { auth: authEn, common: en },
      zh: { auth: authZh, common: zh },
    },
    lng: navigator.language, // 初始语言  navigator.language 会返回浏览器的语言设置，如 'en-US' 或 'zh-CN'
    fallbackLng: 'zh', // 如果当前语言没有翻译，则回退到这个语言
    interpolation: {
      escapeValue: false, // React 已经自动防 XSS
    },
  });
