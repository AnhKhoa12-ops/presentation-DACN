import { useState } from 'react'
import { DemoBadge, DemoCard, DemoPageHeader, DemoStats, DemoTable } from '../DemoShared'

const initialRows = [
  ['#PN091', 'Công ty TNHH Thực phẩm Miền Nam', '22/09/2026', '15 sản phẩm', '12.500.000 ₫', 'Đã nhập kho'],
  ['#PN090', 'Tập đoàn Coca-Cola Việt Nam', '20/09/2026', '8 sản phẩm', '8.400.000 ₫', 'Đã nhập kho'],
  ['#PN089', 'Công ty Sữa Vinamilk', '18/09/2026', '12 sản phẩm', '24.200.000 ₫', 'Đã nhập kho'],
  ['#PN088', 'Công ty CP Acecook Việt Nam', '16/09/2026', '20 sản phẩm', '6.800.000 ₫', 'Chờ xác nhận'],
]

export function PurchaseDemo() {
  const [query, setQuery] = useState('')
  const [showNotice, setShowNotice] = useState(false)
  const rows = initialRows.filter((row) => row.join(' ').toLowerCase().includes(query.toLowerCase()))
  return <div className="wc-page"><DemoPageHeader kicker="✦ KHO TIẾP VẬN" title="Nhập hàng" description="Quản lý đơn đặt hàng và lịch sử nhập từ nhà cung cấp" action="＋ Thêm mới nhập hàng" />
    {showNotice && <div className="wc-notice">Đã mở phiếu nhập demo. Dữ liệu minh họa, chưa lưu vào hệ thống thật.</div>}
    <DemoStats items={[{ label: 'Tổng phiếu nhập', value: '91', note: 'Tất cả chứng từ' }, { label: 'Đã nhập kho', value: '86', tone: 'green', note: 'Hoàn tất' }, { label: 'Chờ xác nhận', value: '05', tone: 'orange', note: 'Cần xử lý' }, { label: 'Tổng giá trị', value: '426,8 tr', note: 'Tháng này' }]} />
    <DemoCard title="Danh sách nhập hàng" description="Theo dõi chứng từ nhập kho và công nợ nhà cung cấp" action={<div className="wc-actions"><input className="wc-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="⌕  Tìm mã, nhà cung cấp..." /><button className="wc-primary" onClick={() => setShowNotice(true)}>＋ Tạo phiếu</button></div>}>
      <DemoTable headers={['Mã phiếu', 'Nhà cung cấp', 'Ngày nhập', 'Số lượng', 'Tổng tiền', 'Trạng thái']} rows={rows.map((row) => [<b key={`${row[0]}-code`}>{row[0]}</b>, row[1], row[2], row[3], <b key={`${row[0]}-total`}>{row[4]}</b>, <DemoBadge key={`${row[0]}-status`} tone={row[5] === 'Đã nhập kho' ? 'green' : 'orange'}>{row[5]}</DemoBadge>])} />
    </DemoCard>
  </div>
}
