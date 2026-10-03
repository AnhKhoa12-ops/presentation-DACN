import { useState } from 'react'
import { DemoBadge, DemoCard, DemoPageHeader, DemoStats, DemoTable } from '../DemoShared'

const staff = [
  ['KA', 'NV001', 'Nguyễn Anh Khoa', 'Quản trị viên', 'Toàn thời gian', 'Đang hoạt động'],
  ['MH', 'NV002', 'Trần Minh Huy', 'Thu ngân', 'Ca sáng', 'Đang hoạt động'],
  ['TV', 'NV003', 'Lê Thảo Vy', 'Quản lý kho', 'Ca chiều', 'Đang hoạt động'],
  ['PB', 'NV004', 'Phạm Quốc Bảo', 'Thu ngân', 'Ca tối', 'Đang nghỉ'],
]

export function EmployeesDemo() {
  const [query, setQuery] = useState('')
  const rows = staff.filter((row) => row.join(' ').toLowerCase().includes(query.toLowerCase()))
  return <div className="wc-page"><DemoPageHeader kicker="✦ HỘI ĐỒNG NHÂN SỰ" title="Nhân sự & Hệ thống" description="Quản lý tài khoản, vai trò, ca làm việc và quyền truy cập" action="＋ Thêm nhân viên" />
    <DemoStats items={[{ label: 'Tổng nhân viên', value: '24', note: 'Tài khoản hệ thống' }, { label: 'Đang hoạt động', value: '21', tone: 'green', note: 'Đang làm việc hôm nay' }, { label: 'Đang nghỉ', value: '03', tone: 'orange', note: 'Tạm thời vắng mặt' }, { label: 'Nhóm phân quyền', value: '04', note: 'Admin · Quản lý · Thu ngân' }]} />
    <DemoCard title="Danh sách nhân viên" description="Tài khoản, vai trò và lịch làm việc" action={<input className="wc-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="⌕  Tìm nhân viên..." />}>
      <DemoTable headers={['Nhân viên', 'Mã NV', 'Vai trò', 'Ca làm việc', 'Trạng thái', '']} rows={rows.map((row) => [<span key={`${row[1]}-person`} className="wc-person"><i>{row[0]}</i><b>{row[2]}</b></span>, row[1], <DemoBadge key={`${row[1]}-role`} tone={row[3] === 'Quản trị viên' ? 'purple' : 'blue'}>{row[3]}</DemoBadge>, row[4], <DemoBadge key={`${row[1]}-status`} tone={row[5] === 'Đang hoạt động' ? 'green' : 'orange'}>{row[5]}</DemoBadge>, <button key={`${row[1]}-menu`} className="wc-more">•••</button>])} />
    </DemoCard>
    <div className="wc-audit-note"><span>◷</span><div><b>Nhật ký hoạt động</b><small>Ghi lại thao tác đăng nhập, cập nhật sản phẩm và thay đổi hóa đơn.</small></div><button className="wc-text-button">Xem nhật ký →</button></div>
  </div>
}
