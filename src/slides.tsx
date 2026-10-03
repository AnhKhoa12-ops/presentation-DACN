import type { CSSProperties, ReactNode } from 'react'

const d = (n: number) => ({ '--i': n }) as CSSProperties
const C = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444']

const modules = [
  'Bán hàng & Thu ngân (POS)', 'Kho & Hàng hóa', 'Nhập hàng & Nhà cung cấp', 'Khách hàng & Khuyến mãi',
  'Báo cáo & Thống kê', 'Nhân sự & Phân quyền', 'Tài chính & Thu chi', 'Hạn sử dụng & Hàng cận date',
  'Giao hàng & Đặt hàng online', 'Thiết bị & Cấu hình hệ thống', 'Chuỗi cửa hàng', 'Khách hàng thân thiết nâng cao',
  'Hóa đơn điện tử & Thuế', 'Self-Checkout & Kiosk', 'Dự báo nhu cầu & AI', 'Phản hồi & Đánh giá',
  'Mất mát & Thất thoát', 'Tiếp thị nội bộ & POSM', 'Cổng thông tin Nhà cung cấp',
]

const core = [
  ['🛒', 'Bán hàng POS', ['Quét mã vạch tính tiền', 'Hóa đơn tạm, đổi trả & hoàn tiền', 'Tiền mặt, chuyển khoản, ví, thẻ']],
  ['📦', 'Kho & Hàng hóa', ['Danh mục, đơn vị tính', 'Tồn kho theo thời gian thực', 'Cảnh báo sắp hết / cận date']],
  ['🚚', 'Nhập hàng & NCC', ['Quản lý nhà cung cấp', 'Đơn đặt hàng (PO)', 'Nhập kho, đối chiếu hóa đơn']],
  ['🎁', 'Khách hàng & KM', ['Hồ sơ, tích điểm', 'Giảm giá %, mua 1 tặng 1', 'Voucher, thẻ thành viên']],
  ['📊', 'Báo cáo & Thống kê', ['Doanh thu theo ca/ngày/tháng', 'Báo cáo lãi/lỗ', 'Hàng bán chạy / tồn']],
  ['👥', 'Nhân sự & Phân quyền', ['Chủ, quản lý kho, thu ngân', 'Chấm công, chốt ca', 'Đối soát tiền mặt']],
] as const

const erd = [
  ['Cửa hàng & Người dùng', ['STORES', 'ROLES', 'USERS']],
  ['Hàng hóa & Kho', ['CATEGORIES', 'SUPPLIERS', 'PRODUCTS', 'INVENTORY']],
  ['Nhập hàng', ['PURCHASE_ORDERS', 'PURCHASE_ORDER_DETAILS']],
  ['Bán hàng', ['CUSTOMERS', 'ORDERS', 'ORDER_DETAILS', 'PAYMENTS', 'DELIVERIES']],
  ['Khuyến mãi', ['PROMOTIONS', 'PROMOTION_PRODUCTS', 'VOUCHERS', 'ORDER_VOUCHERS']],
  ['Đổi trả', ['RETURNS', 'RETURN_DETAILS']],
] as const

const pos = ['Chọn / Tìm sản phẩm', 'Nhập số lượng → Thêm vào giỏ', 'Tính tổng tiền', 'Chọn phương thức thanh toán', 'Tạo hóa đơn', 'In hóa đơn']

const Head = ({ k, children }: { k: string; children: ReactNode }) => (
  <div className="a"><span className="kicker">{k}</span><h2>{children}</h2></div>
)

export const slides: { title: string; el: ReactNode }[] = [
  {
    title: 'Trang bìa',
    el: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 60, height: '100%', alignItems: 'center' }}>
        <div>
          <span className="kicker a">PHÂN TÍCH & THIẾT KẾ HỆ THỐNG</span>
          <h1 className="a" style={d(1)}>Hệ Thống Quản Lý Bán Hàng <span className="grad">Siêu Thị Mini</span></h1>
          <p className="a" style={d(2)}>Số hóa quy trình quản lý bán hàng — thay thế sổ sách và Excel bằng hệ thống tập trung, hiệu quả.</p>
          <div className="a" style={{ ...d(3), marginTop: 44, fontSize: 28, lineHeight: 1.8 }}>
            <b>Nhóm 1</b> · Nhóm trưởng: <b>Nguyễn Anh Khoa</b><br />
            Thành viên: Trần Trọng Nghĩa · Lê Thị Kim Lợi
          </div>
        </div>
        <div className="a" style={{ ...d(2), fontSize: 300, textAlign: 'center' }}>🛒</div>
      </div>
    ),
  },
  {
    title: 'Vấn đề cần giải quyết',
    el: (
      <>
        <Head k="BỐI CẢNH">Vấn đề cần giải quyết</Head>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {[['🔍', 'Tra cứu khó khăn', 'Khó tra cứu sản phẩm và kiểm soát tồn kho khi dùng sổ sách.'],
            ['⏱️', 'Thống kê chậm', 'Thống kê doanh thu mất nhiều thời gian, dễ sai sót.'],
            ['⚠️', 'Rủi ro dữ liệu', 'Nguy cơ thất thoát dữ liệu khi lưu trữ thủ công.']].map(([e, t, p], n) => (
            <div key={t} className="card a" style={d(n + 1)}><span className="ico">{e}</span><b>{t}</b><p>{p}</p></div>
          ))}
        </div>
        <p className="a" style={{ ...d(5), marginTop: 50 }}>
          <span className="pill">Giải pháp</span>&nbsp; Hệ thống tập trung: bán hàng, kho, nhập hàng, khách hàng, nhân sự, báo cáo.
        </p>
      </>
    ),
  },
  {
    title: '19 module chức năng',
    el: (
      <>
        <Head k="TỔNG QUAN">19 module của hệ thống</Head>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {modules.map((m, n) => (
            <div key={m} className="chip a" style={d(n % 9)}>
              <i style={{ background: C[n % 5] }}>{n + 1}</i>{m}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Quy trình bán hàng POS',
    el: (
      <>
        <Head k="CHỨC NĂNG 1">Quy trình bán hàng — POS</Head>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(6,1fr)', gap: 20 }}>
          {pos.map((s, n) => (
            <div key={s} className="card step a" style={d(n)}>
              <div className="n" style={{ background: C[n % 5] }}>{n + 1}</div>
              <p style={{ fontSize: 26, fontWeight: 600 }}>{s}</p>
            </div>
          ))}
        </div>
        <p className="a" style={{ ...d(7), marginTop: 56 }}>
          Hỗ trợ tiền mặt, chuyển khoản, ví điện tử, thẻ ngân hàng; thêm/xóa sản phẩm, đổi số lượng trong giỏ; đổi trả và hoàn tiền.
        </p>
      </>
    ),
  },
  {
    title: 'Nhóm chức năng cốt lõi',
    el: (
      <>
        <Head k="CHỨC NĂNG CHÍNH">6 nhóm chức năng cốt lõi</Head>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {core.map(([e, t, items], n) => (
            <div key={t} className="card a" style={{ ...d(n), padding: 28, borderTop: `8px solid ${C[n % 5]}` }}>
              <b style={{ margin: '0 0 10px' }}>{e} {t}</b>
              {items.map((x) => <p key={x} style={{ fontSize: 24, lineHeight: 1.6 }}>• {x}</p>)}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'ERD — 20 bảng',
    el: (
      <>
        <Head k="THIẾT KẾ CƠ SỞ DỮ LIỆU">ERD — 20 bảng, 6 nhóm dữ liệu</Head>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {erd.map(([g, ts], n) => (
            <div key={g} className="card a" style={{ ...d(n), padding: 26 }}>
              <b style={{ margin: '0 0 12px', color: C[n % 5], fontSize: 30 }}>{g}</b>
              {ts.map((t) => <span key={t} className="tag" style={{ background: C[n % 5] + '1f', color: C[n % 5] }}>{t}</span>)}
            </div>
          ))}
        </div>
        <p className="a" style={{ ...d(7), marginTop: 36, fontSize: 28 }}>
          Trung tâm là <b>ORDERS</b> và <b>PRODUCTS</b>; toàn bộ dữ liệu lưu trữ tập trung trên MySQL.
        </p>
      </>
    ),
  },
  {
    title: 'Cảm ơn',
    el: (
      <div style={{ height: '100%', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div>
          <div className="a" style={{ fontSize: 180 }}>🛍️</div>
          <h1 className="a" style={d(1)}><span className="grad">Cảm ơn đã lắng nghe!</span></h1>
          <p className="a" style={d(2)}>Nhóm 1 · Hệ thống quản lý bán hàng siêu thị mini</p>
          <p className="a" style={{ ...d(3), marginTop: 20 }}>Rất mong nhận được câu hỏi và góp ý</p>
        </div>
      </div>
    ),
  },
]
