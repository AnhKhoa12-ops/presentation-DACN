import { SlideHeading } from './SlidePrimitives'

const workflow = [
  {
    number: '01',
    icon: '🚚',
    title: 'Nhập hàng',
    description: 'Chọn nhà cung cấp, tạo phiếu và ghi nhận các mặt hàng nhập.',
    tables: ['SUPPLIERS', 'PURCHASE_ORDERS', 'PURCHASE_ORDER_DETAILS'],
  },
  {
    number: '02',
    icon: '📦',
    title: 'Cập nhật kho',
    description: 'Đối chiếu sản phẩm, danh mục và số lượng tồn theo cửa hàng.',
    tables: ['PRODUCTS', 'CATEGORIES', 'INVENTORY', 'STORES'],
  },
  {
    number: '03',
    icon: '🎁',
    title: 'Chuẩn bị bán hàng',
    description: 'Tra cứu khách hàng, chương trình ưu đãi và voucher áp dụng.',
    tables: ['CUSTOMERS', 'PROMOTIONS', 'PROMOTION_PRODUCTS', 'VOUCHERS'],
  },
  {
    number: '04',
    icon: '🧾',
    title: 'Lập đơn bán',
    description: 'Tạo đơn, thêm dòng sản phẩm, nhân viên và voucher sử dụng.',
    tables: ['ORDERS', 'ORDER_DETAILS', 'ORDER_VOUCHERS', 'USERS'],
  },
  {
    number: '05',
    icon: '💳',
    title: 'Thanh toán & giao hàng',
    description: 'Ghi nhận phương thức thanh toán; tạo thông tin giao hàng nếu cần.',
    tables: ['PAYMENTS', 'DELIVERIES'],
  },
  {
    number: '06',
    icon: '↩️',
    title: 'Đổi trả & đối soát',
    description: 'Lưu giao dịch hoàn trả; tổng hợp doanh thu từ đơn và thanh toán.',
    tables: ['RETURNS', 'RETURN_DETAILS', 'ORDERS', 'PAYMENTS'],
  },
]

export function WorkflowSlide() {
  return (
    <>
      <SlideHeading kicker="CHƯƠNG 2 · PHÂN TÍCH NGHIỆP VỤ">Quy trình nghiệp vụ theo ERD</SlideHeading>
      <div className="workflow-grid">
        {workflow.map((step) => (
          <article className="workflow-card a" key={step.number}>
            <div className="workflow-card-heading">
              <span className="workflow-number">{step.number}</span>
              <span className="workflow-icon" aria-hidden="true">{step.icon}</span>
              <h3>{step.title}</h3>
            </div>
            <p>{step.description}</p>
            <div className="workflow-tables">
              {step.tables.map((table) => <code key={`${step.number}-${table}`}>{table}</code>)}
            </div>
          </article>
        ))}
      </div>
      <div className="workflow-summary">
        <span>LUỒNG DỮ LIỆU CHÍNH</span>
        <b>Nhà cung cấp</b><i>→</i><b>Nhập kho</b><i>→</i><b>Đơn hàng</b><i>→</i><b>Thanh toán / giao hàng</b><i>→</i><b>Đổi trả & báo cáo</b>
      </div>
      <p className="workflow-note">Báo cáo được tổng hợp từ dữ liệu ORDERS, ORDER_DETAILS, PAYMENTS và INVENTORY; ERD không có bảng báo cáo riêng.</p>
    </>
  )
}
