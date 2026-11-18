import React, { useState } from 'react'
import { AudioLines, Menu, Search, ShoppingCart, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
export default function Navbar({ theme, onToggle, count, onCart, onLogin }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  return <header className="header">
    <div className="nav shell">
      <button className="icon mobile-menu" aria-controls="nav-links" aria-expanded={open} aria-label={t('menu')} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <a href="#home" className="brand"><AudioLines size={26} />MUSIFY<span>.</span></a>
      <nav id="nav-links" className={open ? 'links open' : 'links'} aria-label={t('menu')} onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false) }}>
        {['home', 'explore', 'contact'].map((key) => <a key={key} href={'#' + key} onClick={() => setOpen(false)}>{t(key)}</a>)}
        <button className="button outline mobile-login" onClick={() => { setOpen(false); onLogin() }}>{t('login')}</button>
      </nav>
      <div className="nav-actions">
        <span className="desktop-language"><LanguageSwitcher /></span>
        <ThemeToggle theme={theme} onToggle={onToggle} />
        <Search className="desktop-search" size={21} aria-hidden="true" />
        <button className="icon cart-trigger" onClick={onCart} aria-label={t('cartCount', { count })}><ShoppingCart size={22} />{count > 0 && <span className="badge">{count}</span>}</button>
        <button className="button outline desktop-login" onClick={onLogin}>{t('login')}</button>
      </div>
    </div>
    <div className="mobile-tools shell"><label className="search"><Search size={17} /><input type="search" placeholder={t('search')} aria-label={t('search')} /></label><LanguageSwitcher /></div>
  </header>
}