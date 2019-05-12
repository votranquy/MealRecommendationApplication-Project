import i18n from 'i18next';
import { NativeModules, Platform } from 'react-native';

import enTranslation from './en';
// import viTranslation from './vi';

const getLanguageCode = () => {
  let systemLanguage = 'en';
  if (Platform.OS === 'android') {
    systemLanguage = NativeModules.I18nManager.localeIdentifier;
  } else {
    systemLanguage = NativeModules.SettingsManager.settings.AppleLocale;
  }
  return systemLanguage.replace('_', '-');
};

const languageDetector = {
  type: 'languageDetector',
  detect: getLanguageCode,
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: enTranslation,
      },
      // vi: {
      //   translation: viTranslation,
      // },
    },
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });

export default i18n;
