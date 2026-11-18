import React, { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import ProductCard from './ProductCard'
import { products } from '../data/products'
export default function ProductList({ onAdd }) {
  const { t } = useTranslation()
  const list = useRef(null)
  useEffect(() => {
    const node = list.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('revealed')
        observer.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <section className="catalog shell" id="explore" aria-label={t('explore')}>
    <div ref={list} className="product-list" tabIndex={0}>{products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}</div>
    <a href="#contact" className="icon down" aria-label={t('contact')}><ArrowDown size={20} /></a>
  </section>
}