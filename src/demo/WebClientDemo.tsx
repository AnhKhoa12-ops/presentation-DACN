import { DeliveryDemo } from './pages/DeliveryDemo'
import { DashboardDemo } from './pages/DashboardDemo'
import { EmployeesDemo } from './pages/EmployeesDemo'
import { CustomersDemo } from './pages/CustomersDemo'
import { ExpiryDemo } from './pages/ExpiryDemo'
import { FinanceDemo } from './pages/FinanceDemo'
import { InventoryDemo } from './pages/InventoryDemo'
import { PosDemo } from './pages/PosDemo'
import { PurchaseDemo } from './pages/PurchaseDemo'
import { ReportsDemo } from './pages/ReportsDemo'
import './web-client-demo.css'

export type DemoModuleId = 'dashboard' | 'pos' | 'inventory' | 'purchases' | 'customers' | 'reports' | 'finance' | 'expiry' | 'employees' | 'delivery'

const demoPages: Array<{ id: DemoModuleId; title: string; icon: string; component: React.ComponentType }> = [
  { id: 'dashboard', title: 'Tổng quan', icon: '⌂', component: DashboardDemo },
  { id: 'pos', title: 'Bán hàng POS', icon: '▣', component: PosDemo },
  { id: 'inventory', title: 'Kho & Hàng hóa', icon: '▤', component: InventoryDemo },
  { id: 'purchases', title: 'Nhập hàng', icon: '↓', component: PurchaseDemo },
  { id: 'customers', title: 'Khách hàng & Khuyến mãi', icon: '♙', component: CustomersDemo },
  { id: 'reports', title: 'Báo cáo', icon: '▥', component: ReportsDemo },
  { id: 'finance', title: 'Tài chính & Thu chi', icon: '₫', component: FinanceDemo },
  { id: 'expiry', title: 'Hạn sử dụng', icon: '◷', component: ExpiryDemo },
  { id: 'employees', title: 'Nhân sự & Hệ thống', icon: '♧', component: EmployeesDemo },
  { id: 'delivery', title: 'Mở rộng & Dịch vụ', icon: '⇢', component: DeliveryDemo },
]

export function WebClientDemo({ moduleId, onBack }: { moduleId: DemoModuleId; onBack: () => void }) {
  const activePage = demoPages.find((page) => page.id === moduleId) ?? demoPages[0]
  const Page = activePage.component

  return (
    <div className="web-client-demo">
      <aside className="wc-sidebar">
        <div className="wc-brand"><span>M</span><div><b>MiniMart</b><small>Management</small></div></div>
        <div className="wc-branch"><i /><div><b>Cửa hàng trung tâm</b><small>Chi nhánh #01</small></div><span>⌄</span></div>
        <div className="wc-nav-label">QUẢN LÝ</div>
        <nav className="wc-nav">{demoPages.map((page) => <button className={page.id === moduleId ? 'active' : ''} key={page.id} onClick={() => window.dispatchEvent(new CustomEvent('presentation-demo-open', { detail: page.id }))}><span>{page.icon}</span>{page.title}</button>)}</nav>
        <div className="wc-sidebar-bottom"><span className="wc-avatar">KA</span><div><b>Nguyễn Anh Khoa</b><small>Quản trị viên</small></div><span>•••</span></div>
      </aside>
      <main className="wc-main">
        <header className="wc-topbar">
          <div className="wc-breadcrumb"><span>MiniMart</span><b>/</b><strong>{activePage.title}</strong></div>
          <div className="wc-top-actions"><span className="wc-demo-mode">● CHẾ ĐỘ DEMO</span><span className="wc-top-icon">♢</span><span className="wc-user-avatar">KA</span></div>
        </header>
        <div className="wc-content"><Page /></div>
        <button className="wc-return" onClick={onBack}><span aria-hidden="true">←</span> Quay lại bài thuyết trình</button>
      </main>
    </div>
  )
}
