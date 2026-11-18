import React from 'react'
import { Minus, Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { products, formatPrice } from '../data/products'
export default function Cart({ cart, onChange }) {
  const { t, i18n } = useTranslation()
  const items = products.filter(({ id }) => cart[id])
  const money = (value) => formatPrice(value, i18n.resolvedLanguage)
  if (!items.length) return <p>{t('empty')}</p>
  return <>
    <ul className="cart-list">{items.map(({ id, image, price }) => <li key={id}>
      <img src={image} alt="" /><div className="cart-detail"><strong>{t('product')} · {t(id)}</strong><span>{money(price * cart[id])}</span></div>
      <div className="quantity"><button className="icon" aria-label={t('minus') + ' — ' + t(id)} onClick={() => onChange(id, -1)}><Minus size={16} /></button><span>{cart[id]}</span><button className="icon" aria-label={t('plus') + ' — ' + t(id)} onClick={() => onChange(id, 1)}><Plus size={16} /></button></div>
    </li>)}</ul>
    <p className="total"><strong>{t('total')}</strong><strong>{money(items.reduce((sum, { id, price }) => sum + cart[id] * price, 0))}</strong></p>
  </>
}