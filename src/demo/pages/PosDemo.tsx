import { useMemo, useState } from 'react'
import { DemoBadge, DemoPageHeader } from '../DemoShared'

const products = [
  { id: 'SP001', name: 'Sữa tươi tiệt trùng Vinamilk', category: 'Sữa', price: 32000, icon: '🥛' },
  { id: 'SP002', name: 'Nước suối Aquafina 500ml', category: 'Đồ uống', price: 7000, icon: '💧' },
  { id: 'SP003', name: 'Bánh mì sandwich', category: 'Thực phẩm', price: 24000, icon: '🍞' },
  { id: 'SP004', name: 'Cà phê lon Birdy', category: 'Đồ uống', price: 12000, icon: '🥤' },
]

const money = (value: number) => `${value.toLocaleString('vi-VN')} ₫`

export function PosDemo() {
  const [cart, setCart] = useState<Record<string, number>>({ SP001: 1, SP002: 2 })
  const [search, setSearch] = useState('')
  const [payment, setPayment] = useState('Tiền mặt')
  const [notice, setNotice] = useState('')
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
  const total = useMemo(() => products.reduce((sum, product) => sum + product.price * (cart[product.id] || 0), 0), [cart])
  const add = (id: string) => setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }))
  const adjust = (id: string, amount: number) => setCart((current) => {
    const quantity = (current[id] || 0) + amount
    const next = { ...current }
    if (quantity <= 0) delete next[id]
    else next[id] = quantity
    return next
  })

  return <div className="wc-page wc-pos-page">
    <DemoPageHeader kicker="✦ PHÒNG GIAO DỊCH" title="Bán hàng POS" description="Ca làm việc #CA-20260922 · Máy POS đang hoạt động" action="＋ Khách hàng" />
    {notice && <div className="wc-notice">{notice}</div>}
    <div className="wc-pos-layout">
      <section className="wc-card wc-pos-catalog">
        <div className="wc-search-row"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="▣  Quét mã vạch hoặc tìm sản phẩm..." /><button className="wc-primary">Thêm mã</button></div>
        <div className="wc-product-grid">{filteredProducts.map((product) => <button className="wc-product-tile" key={product.id} onClick={() => add(product.id)}><span>{product.icon}</span><strong>{product.name}</strong><small>{product.id} · {product.category}</small><b>{money(product.price)}</b></button>)}</div>
        <div className="wc-inventory-hint">▤ Danh mục sản phẩm <span>248 mặt hàng</span></div>
      </section>
      <section className="wc-card wc-cart">
        <div className="wc-card-heading"><div><h2>Hóa đơn hiện tại</h2><p>{Object.values(cart).reduce((sum, count) => sum + count, 0)} sản phẩm</p></div><button className="wc-text-button" onClick={() => setCart({})}>Xóa tất cả</button></div>
        <div className="wc-cart-items">{products.filter((product) => cart[product.id]).map((product) => <div className="wc-cart-row" key={product.id}><span>{product.icon}</span><div><strong>{product.name}</strong><small>{money(product.price)}</small></div><div className="wc-quantity"><button onClick={() => adjust(product.id, -1)}>−</button><b>{cart[product.id]}</b><button onClick={() => adjust(product.id, 1)}>＋</button></div><strong>{money(product.price * cart[product.id])}</strong></div>)}</div>
        <div className="wc-total-row"><span>Tạm tính</span><b>{money(total)}</b></div><div className="wc-total-row"><span>Giảm giá</span><b>0 ₫</b></div><div className="wc-total-row wc-grand-total"><span>Khách cần trả</span><strong>{money(total)}</strong></div>
        <div className="wc-payment-options">{['Tiền mặt', 'Chuyển khoản', 'Ví điện tử', 'Thẻ'].map((method) => <button className={payment === method ? 'selected' : ''} key={method} onClick={() => setPayment(method)}>{method}</button>)}</div>
        <button className="wc-checkout" disabled={!total} onClick={() => { setNotice(`Đã tạo hóa đơn demo · Thanh toán ${money(total)} bằng ${payment}`); setCart({}) }}>Thanh toán {money(total)}</button>
        <DemoBadge>Đang mở ca</DemoBadge>
      </section>
    </div>
  </div>
}
