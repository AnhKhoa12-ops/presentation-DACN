import { useState } from 'react'
import { DemoBadge, DemoCard, DemoPageHeader, DemoStats, DemoTable } from '../DemoShared'

const expiryItems = [
  ['SP-042', 'Sữa tươi Vinamilk 1L', 'Sữa & lạnh', 'LH-0926A', '24/09/2026', '2 ngày', '18', 'red'],
  ['SP-118', 'Nước cam Twister 1L', 'Đồ uống', 'LH-0915B', '28/09/2026', '6 ngày', '32', 'orange'],
  ['SP-076', 'Xúc xích tiệt trùng', 'Thực phẩm', 'LH-0908C', '03/10/2026', '11 ngày', '24', 'orange'],
  ['SP-203', 'Bánh mì sandwich', 'Bánh & đồ ăn', 'LH-0921D', '22/09/2026', 'Đã hết hạn', '7', 'red'],
  ['SP-155', 'Sữa chua có đường', 'Sữa & lạnh', 'LH-0919E', '12/10/2026', '20 ngày', '45', 'green'],
]

export function ExpiryDemo() {
  const [query, setQuery] = useState('')
  const rows = expiryItems.filter((row) => row.join(' ').toLowerCase().includes(query.toLowerCase()))
  return <div className="wc-page">
    <DemoPageHeader kicker="✦ THÁP THỜI GIAN" title="Hạn sử dụng & Hàng cận date" description="Theo dõi hạn dùng theo lô và chủ động xử lý hàng sắp hết hạn" action="Xuất danh sách ↗" />
    <DemoStats items={[
      { label: 'Tổng mặt hàng theo dõi', value: '05', note: 'Có hạn sử dụng' },
      { label: 'Sắp hết hạn', value: '03', tone: 'orange', note: 'Trong vòng 14 ngày' },
      { label: 'Đã hết hạn', value: '01', tone: 'red', note: 'Cần xử lý ngay' },
      { label: 'Số lượng cần xử lý', value: '81', tone: 'purple', note: 'Đơn vị sản phẩm' },
    ]} />
    <div className="wc-expiry-alert"><span>!</span><div><b>Có 1 lô hàng đã hết hạn</b><small>Kiểm tra và xử lý lô Bánh mì sandwich ngay để đảm bảo an toàn hàng hóa.</small></div><button>Xem ngay →</button></div>
    <DemoCard title="Danh sách hạn sử dụng" description="Theo dõi tình trạng các lô hàng trong kho" action={<input className="wc-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="⌕  Tìm sản phẩm..." />}>
      <DemoTable headers={['Sản phẩm', 'Danh mục', 'Mã lô', 'Hạn sử dụng', 'Còn lại', 'Số lượng']} rows={rows.map((row) => [<b key={`${row[0]}-name`}>{row[1]} <small className="wc-cell-sub">{row[0]}</small></b>, row[2], <code key={`${row[0]}-batch`}>{row[3]}</code>, row[4], <DemoBadge key={`${row[0]}-status`} tone={row[7]}>{row[5]}</DemoBadge>, <b key={`${row[0]}-quantity`}>{row[6]} đơn vị</b>])} />
    </DemoCard>
  </div>
}
