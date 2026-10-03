import { SlideHeading } from './SlidePrimitives'

const modules = [
  { icon: '🛒', title: 'Bán hàng & POS', summary: 'Quét mã vạch, giỏ hàng, thanh toán, hóa đơn', path: '/pos' },
  { icon: '📦', title: 'Kho & hàng hóa', summary: 'Sản phẩm, tồn kho, kiểm kê, cảnh báo cận date', path: '/inventory' },
  { icon: '🚚', title: 'Nhập hàng & nhà cung cấp', summary: 'Phiếu nhập, đơn đặt hàng, công nợ', path: '/purchases' },
  { icon: '🎁', title: 'Khách hàng & khuyến mãi', summary: 'Thành viên, tích điểm, voucher, ưu đãi', path: '/customers' },
  { icon: '📊', title: 'Báo cáo & tài chính', summary: 'Doanh thu, lợi nhuận, thu chi', path: '/reports' },
  { icon: '👥', title: 'Nhân sự & hệ thống', summary: 'Phân quyền, ca làm, nhật ký hoạt động', path: '/employees' },
  { icon: '✨', title: 'Mở rộng & dịch vụ', summary: 'Giao hàng, chuỗi cửa hàng, hóa đơn điện tử, AI', path: '/delivery' },
]

export function ModulesSlide() {
  return (
    <>
      <SlideHeading kicker="CHƯƠNG 2 · PHÂN TÍCH NGHIỆP VỤ">Tổng quan 7 nhóm module</SlideHeading>
      <div className="module-grid">
        {modules.map((module, index) => (
          <button
            className="module-card a"
            style={{ '--i': index } as React.CSSProperties}
            key={module.title}
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              window.dispatchEvent(new CustomEvent('presentation-demo-open', { detail: module.path.slice(1) }))
            }}
          >
            <span className="module-icon" aria-hidden="true">{module.icon}</span>
            <span className="module-title">{module.title}</span>
            <span className="module-summary">{module.summary}</span>
            <span className="module-action">Mở giao diện demo <span aria-hidden="true">↗</span></span>
          </button>
        ))}
      </div>
      <p className="a module-note">Bấm vào module để mở giao diện demo đã sao chép từ web-client. Dùng nút mũi tên quay lại để tiếp tục slide.</p>
    </>
  )
}
