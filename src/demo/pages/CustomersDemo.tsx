import { useState } from 'react'
import { DemoBadge, DemoCard, DemoPageHeader, DemoStats, DemoTable } from '../DemoShared'

const customerRows = [
  ['KH001', 'Nguyễn Văn An', '090 123 4567', 'Vàng', '1.250 điểm', '4.500.000 ₫'],
  ['KH002', 'Trần Thị Bình', '091 876 5432', 'Bạc', '520 điểm', '1.800.000 ₫'],
  ['KH003', 'Lê Hoàng Châu', '098 811 2233', 'Kim cương', '3.400 điểm', '15.600.000 ₫'],
  ['KH004', 'Phạm Minh Hà', '093 224 5566', 'Thành viên', '180 điểm', '680.000 ₫'],
]
const promoRows = [
  ['KM001', 'Thức uống mùa hè', 'SUMMER25', 'Giảm 25%', '128 lượt', 'Đang chạy'],
  ['KM002', 'Ưu đãi thành viên vàng', 'GOLD100', 'Giảm 100.000 ₫', '86 lượt', 'Đang chạy'],
  ['KM003', 'Tri ân khách hàng mới', 'WELCOME50', 'Giảm 50.000 ₫', '0 lượt', 'Sắp diễn ra'],
]

export function CustomersDemo() {
  const [tab, setTab] = useState<'customers' | 'promotions'>('customers')
  const [query, setQuery] = useState('')
  const rows = (tab === 'customers' ? customerRows : promoRows).filter((row) => row.join(' ').toLowerCase().includes(query.toLowerCase()))
  return <div className="wc-page"><DemoPageHeader kicker="✦ CHĂM SÓC KHÁCH HÀNG" title="Khách hàng & Khuyến mãi" description="Thành viên thân thiết, tích điểm và các chương trình ưu đãi" action={tab === 'customers' ? '＋ Thêm khách hàng' : '＋ Tạo khuyến mãi'} />
    <DemoStats items={[{ label: 'Khách hàng thành viên', value: '1.284', note: 'Tăng 8,2% tháng này' }, { label: 'Hạng Vàng / Kim cương', value: '186', tone: 'purple', note: 'Khách hàng thân thiết' }, { label: 'Chương trình đang chạy', value: '04', tone: 'green', note: 'Đang áp dụng tại quầy' }, { label: 'Lượt tích điểm', value: '2.486', note: 'Trong tháng này' }]} />
    <DemoCard title="Quản lý khách hàng & ưu đãi" description="Theo dõi thông tin thành viên và hiệu quả chương trình">
      <div className="wc-tabs"><button className={tab === 'customers' ? 'active' : ''} onClick={() => setTab('customers')}>Khách hàng</button><button className={tab === 'promotions' ? 'active' : ''} onClick={() => setTab('promotions')}>Khuyến mãi & voucher</button><input className="wc-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="⌕  Tìm kiếm..." /></div>
      {tab === 'customers'
        ? <DemoTable headers={['Mã KH', 'Họ và tên', 'Số điện thoại', 'Hạng thẻ', 'Điểm tích lũy', 'Tổng chi tiêu']} rows={rows.map((row) => [<b key={`${row[0]}-code`}>{row[0]}</b>, row[1], row[2], <DemoBadge key={`${row[0]}-tier`} tone={row[3] === 'Kim cương' ? 'purple' : 'blue'}>{row[3]}</DemoBadge>, row[4], <b key={`${row[0]}-spent`}>{row[5]}</b>])} />
        : <DemoTable headers={['Mã', 'Chương trình', 'Mã ưu đãi', 'Ưu đãi', 'Đã dùng', 'Trạng thái']} rows={rows.map((row) => [<b key={`${row[0]}-code`}>{row[0]}</b>, row[1], <code key={`${row[0]}-voucher`}>{row[2]}</code>, row[3], row[4], <DemoBadge key={`${row[0]}-status`} tone={row[5] === 'Đang chạy' ? 'green' : 'orange'}>{row[5]}</DemoBadge>])} />}
    </DemoCard>
  </div>
}
