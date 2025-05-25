import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/common.json';
import zh from './zh/common.json';

i18n
  .use(LanguageDetector) // 根据浏览器/缓存等自动检测语言
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false, // React 已经自动防 XSS
    },
  });
