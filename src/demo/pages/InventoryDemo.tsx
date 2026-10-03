import { useState } from 'react'
import { DemoBadge, DemoCard, DemoPageHeader, DemoStats, DemoTable } from '../DemoShared'

const inventory = [
  ['SP001', 'Sữa tươi Vinamilk 1L', 'Sữa & sản phẩm lạnh', '48 hộp', '32.000 ₫', 'Đang kinh doanh'],
  ['SP002', 'Nước suối Aquafina 500ml', 'Đồ uống', '12 chai', '7.000 ₫', 'Sắp hết hàng'],
  ['SP003', 'Mì Hảo Hảo tôm chua cay', 'Thực phẩm khô', '156 gói', '4.500 ₫', 'Đang kinh doanh'],
  ['SP004', 'Bánh mì sandwich', 'Bánh & đồ ăn nhanh', '8 gói', '24.000 ₫', 'Cần nhập thêm'],
  ['SP005', 'Dầu ăn Simply 1L', 'Gia vị & nấu ăn', '32 chai', '58.000 ₫', 'Đang kinh doanh'],
]

export function InventoryDemo() {
  const [query, setQuery] = useState('')
  const rows = inventory.filter((row) => row.join(' ').toLowerCase().includes(query.toLowerCase()))
  return <div className="wc-page"><DemoPageHeader kicker="✦ KHO LƯU TRỮ" title="Kho & Hàng hóa" description="Quản lý sản phẩm và tồn kho theo thời gian thực" action="＋ Thêm sản phẩm" />
    <DemoStats items={[{ label: 'Tổng sản phẩm', value: '248', note: '12 danh mục' }, { label: 'Giá trị tồn kho', value: '186,4 tr', note: 'Cập nhật hôm nay' }, { label: 'Sắp hết hàng', value: '08', tone: 'orange', note: 'Cần nhập thêm' }, { label: 'Cận hạn sử dụng', value: '12', tone: 'red', note: 'Trong 30 ngày tới' }]} />
    <DemoCard title="Danh sách hàng tồn kho" description="Kiểm soát số lượng, giá bán và trạng thái sản phẩm" action={<input className="wc-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="⌕  Tìm sản phẩm..." />}>
      <DemoTable headers={['Mã hàng', 'Tên sản phẩm', 'Danh mục', 'Tồn kho', 'Giá bán', 'Trạng thái', '']} rows={rows.map((row) => [<b key={`${row[0]}-code`}>{row[0]}</b>, row[1], row[2], <b key={`${row[0]}-quantity`}>{row[3]}</b>, row[4], <DemoBadge key={`${row[0]}-status`} tone={row[5] === 'Đang kinh doanh' ? 'green' : 'orange'}>{row[5]}</DemoBadge>, <button key={`${row[0]}-menu`} className="wc-more">•••</button>])} />
    </DemoCard>
  </div>
}
