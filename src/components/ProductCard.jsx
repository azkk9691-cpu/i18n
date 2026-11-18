import React from 'react'
import { Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { formatPrice } from '../data/products'
export default function ProductCard({ product, onAdd }) {
  const { t, i18n } = useTranslation()
  const name = t('product')
  const color = t(product.id)
  return <article className={'product-card ' + product.id}>
    <div className="product-art"><img src={product.image} alt={color + ' — ' + name} /></div>
    <div className="product-info"><div><h2>{name}</h2><div className="prices"><strong>{formatPrice(product.price, i18n.resolvedLanguage)}</strong><del>{formatPrice(product.oldPrice, i18n.resolvedLanguage)}</del></div></div>
    <button className="icon product-add" aria-label={t('add') + ' — ' + color} onClick={() => onAdd(product.id)}><Plus size={20} /></button></div>
  </article>
}