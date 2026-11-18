import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
export const languages = { uz: 'O‘zbekcha', ru: 'Русский', en: 'English', ja: '日本語', ko: '한국어', ar: 'العربية', zh: '中文' }
const files = import.meta.glob('./locales/*.json', { eager: true, import: 'default' })
i18n.on('languageChanged', (code) => {
  document.documentElement.lang = code
  document.documentElement.dir = i18n.dir(code)
  localStorage.setItem('musify-language', code)
})
i18n.use(initReactI18next).init({
  resources: Object.fromEntries(Object.keys(languages).map((code) => [code, { translation: files['./locales/' + code + '.json'] }])),
  supportedLngs: Object.keys(languages),
  lng: localStorage.getItem('musify-language') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})
export default i18n