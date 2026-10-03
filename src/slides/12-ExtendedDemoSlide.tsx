import { DemoOpenButton } from '../demo/DemoOpenButton'
import { ReportsDemo } from '../demo/pages/ReportsDemo'
import { SlideHeading } from './SlidePrimitives'

export function ExtendedDemoSlide() {
  return (
    <>
      <SlideHeading kicker="CHƯƠNG 4 · DEMO SẢN PHẨM · 03">Các chức năng hỗ trợ</SlideHeading>
      <div className="chapter-demo-grid chapter-demo-grid--extended">
        <section className="chapter-demo-main">
          <div className="chapter-demo-section-head"><div><b>01 · BÁO CÁO & THỐNG KÊ</b><span>Doanh thu · đơn hàng · lợi nhuận</span></div><span className="wc-badge blue">Phân tích</span></div>
          <ReportsDemo />
        </section>
        <aside className="chapter-demo-aside">
          <span className="chapter-aside-kicker">VẬN HÀNH HẰNG NGÀY</span>
          <h3>Kiểm soát và phục vụ</h3>
          <p>Các module hỗ trợ giúp cửa hàng theo dõi dòng tiền, nhân sự, hạn dùng và giao hàng.</p>
          <DemoOpenButton moduleId="finance" icon="₫" title="Tài chính & thu chi" description="Dòng tiền, giao dịch, số dư quỹ" />
          <DemoOpenButton moduleId="employees" icon="👥" title="Nhân sự & hệ thống" description="Vai trò, ca làm, nhật ký" />
          <DemoOpenButton moduleId="expiry" icon="◷" title="Hạn sử dụng" description="Cảnh báo lô hàng cận date" />
          <DemoOpenButton moduleId="delivery" icon="⇢" title="Giao hàng" description="Trạng thái đơn và tài xế" />
          <div className="chapter-demo-footnote"><b>Phân biệt trạng thái</b><span>Các màn hình là bản demo giao diện; nghiệp vụ/backend hoàn chỉnh phụ thuộc phạm vi triển khai.</span></div>
        </aside>
      </div>
    </>
  )
}
