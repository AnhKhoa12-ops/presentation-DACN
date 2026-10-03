import { DemoCard, DemoPageHeader, DemoStats, DemoTable } from '../DemoShared'

const transactions = [
  ['↗', 'Doanh thu bán hàng', 'Thu nhập', '22/09/2026 · 18:42', '+28.650.000 ₫'],
  ['↘', 'Nhập hàng NCC Miền Nam', 'Chi phí hàng hóa', '22/09/2026 · 15:10', '-12.500.000 ₫'],
  ['↘', 'Thanh toán tiền điện', 'Chi phí vận hành', '21/09/2026 · 09:15', '-2.840.000 ₫'],
]

export function FinanceDemo() {
  return <div className="wc-page">
    <DemoPageHeader kicker="✦ KHO BẠC CỬA HÀNG" title="Tài chính & Thu chi" description="Theo dõi dòng tiền và các khoản thu chi của cửa hàng" action="＋ Tạo phiếu thu chi" />
    <DemoStats items={[
      { label: 'Số dư hiện tại', value: '86.420.000 ₫', note: '↑ 8,4% so với tháng trước', tone: 'blue' },
      { label: 'Tổng thu tháng này', value: '248.650.000 ₫', note: '156 giao dịch thu', tone: 'green' },
      { label: 'Tổng chi tháng này', value: '-162.230.000 ₫', note: '84 giao dịch chi', tone: 'red' },
      { label: 'Lợi nhuận ròng', value: '86.420.000 ₫', note: 'Biên lợi nhuận 34,7%', tone: 'purple' },
    ]} />
    <DemoCard title="Dòng tiền trong tuần" description="So sánh tổng thu và tổng chi">
      <div className="wc-cashflow">{[['T2',72,38],['T3',86,48],['T4',58,42],['T5',92,54],['T6',76,46],['T7',100,62],['CN',90,35]].map(([day,income,expense]) => <div key={day} className="wc-cashflow-column"><div><i style={{height:`${income}%`}}/><i style={{height:`${expense}%`}}/></div><small>{day}</small></div>)}</div>
    </DemoCard>
    <DemoCard title="Giao dịch gần đây" description="Lịch sử thu chi mới nhất">
      <DemoTable headers={['Giao dịch', 'Danh mục', 'Thời gian', 'Số tiền']} rows={transactions.map((row) => [<b key={`${row[1]}-label`}>{row[0]} {row[1]}</b>, row[2], row[3], <strong key={`${row[1]}-amount`} className={row[4].startsWith('+') ? 'wc-positive' : 'wc-negative'}>{row[4]}</strong>])} />
    </DemoCard>
  </div>
}
