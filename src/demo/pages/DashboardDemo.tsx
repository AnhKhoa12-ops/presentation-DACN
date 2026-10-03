import { DemoBadge, DemoCard, DemoPageHeader, DemoStats } from '../DemoShared'

const week = [
  { day: 'T2', height: 54 }, { day: 'T3', height: 68 }, { day: 'T4', height: 46 },
  { day: 'T5', height: 76 }, { day: 'T6', height: 63 }, { day: 'T7', height: 91 }, { day: 'CN', height: 79 },
]

export function DashboardDemo() {
  return <div className="wc-page wc-dashboard-demo">
    <DemoPageHeader kicker="✦ BẢNG ĐIỀU KHIỂN TRUNG TÂM" title="Xin chào, Nguyễn Anh Khoa 👋" description="Đây là tình hình hoạt động của siêu thị hôm nay" action="＋ Tạo hóa đơn" />
    <DemoStats items={[
      { label: 'Doanh thu hôm nay', value: '28.650.000 ₫', note: '↑ 12,5% so với hôm qua', tone: 'green' },
      { label: 'Đơn hàng', value: '186', note: '↑ 8,2% so với hôm qua', tone: 'blue' },
      { label: 'Sản phẩm tồn kho', value: '2.486', note: '↓ 3,4% so với tuần trước', tone: 'orange' },
      { label: 'Lợi nhuận', value: '8.420.000 ₫', note: '↑ 15,8% so với hôm qua', tone: 'purple' },
    ]} />
    <div className="wc-dashboard-grid">
      <DemoCard title="Doanh thu" description="Doanh thu trong 7 ngày qua" action={<strong className="wc-chart-total">28.650.000 ₫</strong>}>
        <div className="wc-chart wc-dashboard-chart">{week.map((item) => <div className="wc-chart-column" key={item.day}><div className="wc-chart-track"><i style={{ height: `${item.height}%` }} /></div><span>{item.day}</span></div>)}</div>
      </DemoCard>
      <DemoCard title="Cảnh báo cần xử lý" description="Sản phẩm cần được chú ý">
        <div className="wc-alert-list"><div><i>!</i><span><b>Nước suối Aquafina</b><small>Tồn kho thấp · Còn 12 chai</small></span><DemoBadge tone="orange">Sắp hết</DemoBadge></div><div><i>!</i><span><b>Sữa tươi Vinamilk</b><small>Hàng cận date · 18 hộp</small></span><DemoBadge tone="red">Cần xử lý</DemoBadge></div></div>
      </DemoCard>
    </div>
  </div>
}
