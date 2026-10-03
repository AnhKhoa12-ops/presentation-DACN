import { DemoOpenButton } from '../demo/DemoOpenButton'
import { PosDemo } from '../demo/pages/PosDemo'
import { SlideHeading } from './SlidePrimitives'

export function ModulesDemoSlide() {
  return (
    <>
      <SlideHeading kicker="CHƯƠNG 4 · DEMO SẢN PHẨM · 02">Các chức năng chính</SlideHeading>
      <div className="chapter-demo-grid">
        <section className="chapter-demo-main">
          <div className="chapter-demo-section-head"><div><b>01 · BÁN HÀNG POS</b><span>Quét/tìm sản phẩm · giỏ hàng · thanh toán</span></div><span className="wc-badge green">Đang demo</span></div>
          <PosDemo />
        </section>
        <aside className="chapter-demo-aside">
          <span className="chapter-aside-kicker">NGHIỆP VỤ CỐT LÕI</span>
          <h3>Từ sản phẩm đến khách hàng</h3>
          <p>Các màn hình mẫu được sao chép từ web-client. Bấm để mở bản demo đầy đủ.</p>
          <DemoOpenButton moduleId="inventory" icon="📦" title="Kho & hàng hóa" description="Sản phẩm, tồn kho, cảnh báo" />
          <DemoOpenButton moduleId="purchases" icon="🚚" title="Nhập hàng" description="Phiếu nhập, nhà cung cấp" />
          <DemoOpenButton moduleId="customers" icon="🎁" title="Khách hàng & khuyến mãi" description="Thành viên, điểm, voucher" />
          <div className="chapter-demo-flow"><span>Quét / chọn hàng</span><i>→</i><span>Giỏ hàng</span><i>→</i><span>Thanh toán</span></div>
        </aside>
      </div>
    </>
  )
}
