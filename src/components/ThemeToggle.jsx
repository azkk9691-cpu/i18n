import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
export default function ThemeToggle({ theme, onToggle }) {
  const { t } = useTranslation()
  return <button className="theme" role="switch" aria-checked={theme === 'dark'} aria-label={t('dark')} onClick={onToggle}><Sun size={13} /><Moon size={13} /><span /></button>
}