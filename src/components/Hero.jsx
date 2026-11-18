import React from 'react'
import { ArrowUpRight, ShoppingCart } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'
export default function Hero({ onAdd }) {
  const { t } = useTranslation()
  return <section className="hero shell">
    <div className="hero-copy">
      <h1><Trans i18nKey="headline" components={{ accent: <em />, line: <span className="hero-line" /> }} /></h1>
      <p>{t('description')}</p>
      <div className="hero-actions"><a href="#explore" className="button primary">{t('shop')}<ArrowUpRight size={17} /></a><button className="button outline" onClick={onAdd}><ShoppingCart size={17} />{t('add')}</button></div>
    </div>
    <div className="hero-art"><div className="orbit" /><img src={import.meta.env.BASE_URL + 'images/hero.png'} alt={t('heroAlt')} fetchPriority="high" /></div>
  </section>
}