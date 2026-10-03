import { useState } from 'react'
import { DemoBadge, DemoCard, DemoPageHeader, DemoStats, DemoTable } from '../DemoShared'

const deliveries = [
  ['#DH2048', 'Nguyễn Minh Anh', 'Q. Thanh Khê, Đà Nẵng', '18:30', '485.000 ₫', 'Trần Minh Huy', 'Đang giao'],
  ['#DH2047', 'Lê Hoàng Nam', 'Q. Hải Châu, Đà Nẵng', '17:45', '720.000 ₫', 'Nguyễn Quốc Bảo', 'Đã giao'],
  ['#DH2046', 'Phạm Thu Trang', 'Q. Sơn Trà, Đà Nẵng', '17:20', '315.000 ₫', 'Chưa phân công', 'Chờ lấy hàng'],
  ['#DH2045', 'Trần Gia Hân', 'Q. Liên Chiểu, Đà Nẵng', '16:50', '1.240.000 ₫', 'Lê Minh Khoa', 'Đã giao'],
  ['#DH2044', 'Võ Thanh Tùng', 'Q. Ngũ Hành Sơn, Đà Nẵng', '16:10', '560.000 ₫', 'Trần Minh Huy', 'Giao thất bại'],
]

export function DeliveryDemo() {
  const [filter, setFilter] = useState('Tất cả trạng thái')
  const options = ['Tất cả trạng thái', 'Đang giao', 'Đã giao', 'Chờ lấy hàng', 'Giao thất bại']
  const rows = deliveries.filter((row) => filter === options[0] || row[6] === filter)
  const tone = (status: string) => status === 'Đã giao' ? 'green' : status === 'Đang giao' ? 'blue' : status === 'Giao thất bại' ? 'red' : 'orange'
  return <div className="wc-page"><DemoPageHeader kicker="✦ CỔNG DỊCH CHUYỂN" title="Mở rộng & Dịch vụ" description="Theo dõi đơn hàng online, giao hàng và các dịch vụ mở rộng" action="＋ Tạo đơn giao" />
    <DemoStats items={[{ label: 'Tổng đơn hôm nay', value: '48', note: '↑ 12,5% so với hôm qua' }, { label: 'Đang giao', value: '12', tone: 'blue', note: 'Đơn đang trên đường' }, { label: 'Đã giao thành công', value: '31', tone: 'green', note: 'Tỷ lệ thành công 96,8%' }, { label: 'Chờ xử lý', value: '05', tone: 'orange', note: 'Cần phân công tài xế' }]} />
    <DemoCard title="Tiến độ giao hàng hôm nay" description="Cập nhật lần cuối: 18:45"><div className="wc-delivery-progress"><div><strong>64,6%</strong><span>31 đã giao · 12 đang giao · 5 chờ xử lý</span></div><div className="wc-progress-track"><i /></div></div></DemoCard>
    <DemoCard title="Đơn giao hàng gần đây" description="Theo dõi trạng thái vận chuyển và tài xế" action={<select className="wc-select" value={filter} onChange={(event) => setFilter(event.target.value)}>{options.map((option) => <option key={option}>{option}</option>)}</select>}>
      <DemoTable headers={['Đơn hàng / Khu vực', 'Khách hàng', 'Thời gian', 'Tổng tiền', 'Tài xế', 'Trạng thái']} rows={rows.map((row) => [<span key={`${row[0]}-order`}><b>{row[0]}</b><small className="wc-cell-sub">{row[2]}</small></span>, row[1], `Hôm nay, ${row[3]}`, <b key={`${row[0]}-total`}>{row[4]}</b>, row[5], <DemoBadge key={`${row[0]}-status`} tone={tone(row[6])}>{row[6]}</DemoBadge>])} />
    </DemoCard>
  </div>
}
