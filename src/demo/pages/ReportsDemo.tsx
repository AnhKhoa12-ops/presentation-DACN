import { DemoCard, DemoPageHeader, DemoStats, DemoTable } from '../DemoShared'

const week = [
  { day: 'T2', amount: '3,8 tr', height: 58 }, { day: 'T3', amount: '4,6 tr', height: 70 },
  { day: 'T4', amount: '3,2 tr', height: 48 }, { day: 'T5', amount: '5,1 tr', height: 78 },
  { day: 'T6', amount: '4,3 tr', height: 65 }, { day: 'T7', amount: '5,8 tr', height: 88 },
  { day: 'CN', amount: '5,4 tr', height: 82 },
]

const rows = [
  ['Thứ hai', '24 đơn', '3.820.000 ₫', '+8,2%'], ['Thứ ba', '31 đơn', '4.640.000 ₫', '+12,6%'],
  ['Thứ tư', '22 đơn', '3.240.000 ₫', '-4,1%'], ['Thứ năm', '36 đơn', '5.120.000 ₫', '+16,8%'],
]

export function ReportsDemo() {
  return <div className="wc-page"><DemoPageHeader kicker="✦ PHÒNG PHÂN TÍCH" title="Báo cáo & Tài chính" description="Phân tích doanh thu, lợi nhuận và dòng tiền cửa hàng" action="Xuất báo cáo ↗" />
    <DemoStats items={[{ label: 'Doanh thu', value: '28.650.000 ₫', note: '↑ 12,5% so với kỳ trước', tone: 'green' }, { label: 'Tổng đơn hàng', value: '186', note: '↑ 8,2% so với kỳ trước', tone: 'blue' }, { label: 'Lợi nhuận', value: '8.420.000 ₫', note: 'Tỷ suất 29,4%', tone: 'purple' }, { label: 'Thu / chi khác', value: '4,8 tr / 1,2 tr', note: 'Số dư quỹ 12,6 tr' }]} />
    <div className="wc-report-grid">
      <DemoCard title="Xu hướng doanh thu" description="Hiệu suất bán hàng trong 7 ngày gần nhất" action={<span className="wc-chart-total">28,65 tr</span>}>
        <div className="wc-chart">{week.map((item) => <div className="wc-chart-column" key={item.day}><small>{item.amount}</small><div className="wc-chart-track"><i style={{ height: `${item.height}%` }} /></div><span>{item.day}</span></div>)}</div>
      </DemoCard>
      <DemoCard title="Cơ cấu doanh thu" description="Theo nhóm sản phẩm">
        <div className="wc-donut-wrap"><div className="wc-donut"><strong>28,65 tr</strong><span>Tổng doanh thu</span></div></div>
        <div className="wc-legend"><span>🔵 Đồ uống <b>42%</b></span><span>🟢 Thực phẩm <b>31%</b></span><span>🟠 Sữa & lạnh <b>18%</b></span><span>⚪ Khác <b>9%</b></span></div>
      </DemoCard>
    </div>
    <DemoCard title="Hiệu suất theo ngày" description="Chi tiết giao dịch và doanh thu trong kỳ"><DemoTable headers={['Ngày', 'Đơn hàng', 'Doanh thu', 'Tăng trưởng']} rows={rows.map((row) => [<b key={`${row[0]}-day`}>{row[0]}</b>, row[1], <b key={`${row[0]}-revenue`}>{row[2]}</b>, <span key={`${row[0]}-growth`} className={row[3].startsWith('-') ? 'wc-negative' : 'wc-positive'}>{row[3]}</span>])} /></DemoCard>
  </div>
}
