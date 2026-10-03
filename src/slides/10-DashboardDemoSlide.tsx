import { DemoOpenButton } from '../demo/DemoOpenButton'
import { DashboardDemo } from '../demo/pages/DashboardDemo'
import { SlideHeading } from './SlidePrimitives'

export function DashboardDemoSlide() {
  return (
    <>
      <SlideHeading kicker="CHƯƠNG 4 · DEMO SẢN PHẨM · 01">Dashboard — tổng quan vận hành</SlideHeading>
      <div className="chapter-dashboard">
        <DashboardDemo />
        <aside className="chapter-demo-aside">
          <span className="chapter-aside-kicker">TỪ DASHBOARD</span>
          <h3>Đi nhanh đến nghiệp vụ</h3>
          <p>Các thao tác nhanh và cảnh báo liên kết tới màn hình demo tương ứng.</p>
          <DemoOpenButton moduleId="dashboard" icon="⌂" title="Toàn cảnh cửa hàng" description="Doanh thu, đơn hàng, tồn kho" />
          <DemoOpenButton moduleId="pos" icon="▣" title="Tạo hóa đơn" description="Mở giao diện bán hàng POS" />
          <DemoOpenButton moduleId="inventory" icon="!" title="Xử lý cảnh báo kho" description="Xem hàng sắp hết, cận date" />
          <DemoOpenButton moduleId="reports" icon="▥" title="Xem báo cáo" description="Phân tích doanh thu và đơn hàng" />
          <div className="chapter-demo-footnote"><b>Demo tương tác</b><span>Bấm một thao tác để mở màn hình quản trị; dùng mũi tên quay lại.</span></div>
        </aside>
      </div>
    </>
  )
}
