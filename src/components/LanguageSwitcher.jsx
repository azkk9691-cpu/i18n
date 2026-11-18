import React from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { languages } from '../i18n'
export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  return <label className="language"><Globe size={16} /><span>{i18n.resolvedLanguage?.toUpperCase()}</span><ChevronDown size={12} />
    <select aria-label={t('language')} value={i18n.resolvedLanguage} onChange={(event) => i18n.changeLanguage(event.target.value)}>
      {Object.entries(languages).map(([code, name]) => <option key={code} value={code} lang={code}>{name}</option>)}
    </select>
  </label>
}