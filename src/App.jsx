import React, { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { products } from './data/products'

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('musify-cart')) ?? {}
    return Object.fromEntries(products.map(({ id }) => [id, Number.isSafeInteger(saved[id]) && saved[id] > 0 ? saved[id] : 0]))
  } catch {
    return {}
  }
}

export default function App() {
  const { t } = useTranslation()
  const [theme, setTheme] = useState(() => localStorage.getItem('musify-theme') === 'light' ? 'light' : 'dark')
  const [cart, setCart] = useState(readCart)
  const [panel, setPanel] = useState('cart')
  const dialog = useRef(null)
  const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('musify-theme', theme)
  }, [theme])
  useEffect(() => { localStorage.setItem('musify-cart', JSON.stringify(cart)) }, [cart])

  function changeQuantity(id, delta) {
    setCart((previous) => ({ ...previous, [id]: Math.max(0, (previous[id] || 0) + delta) }))
  }

  function openPanel(name) {
    setPanel(name)
    dialog.current.showModal()
  }

  return <div id="home" className="store">
    <Navbar theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} count={count} onCart={() => openPanel('cart')} onLogin={() => openPanel('login')} />
    <main><Hero onAdd={() => changeQuantity(products[0].id, 1)} /><ProductList onAdd={(id) => changeQuantity(id, 1)} /></main>
    <footer className="footer shell" id="contact"><span className="brand">MUSIFY<span>.</span></span><span>{t('contact')}</span></footer>
    <dialog ref={dialog} aria-labelledby="dialog-title" onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close() }}>
      <div className="dialog-content"><div className="dialog-header"><h2 id="dialog-title">{t(panel)}</h2><button className="icon" aria-label={t('close')} onClick={() => dialog.current.close()}><X size={21} /></button></div>
      {panel === 'cart' ? <Cart cart={cart} onChange={changeQuantity} /> : <p>{t('loginMessage')}</p>}</div>
    </dialog>
  </div>
}