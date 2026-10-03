import { SlideHeading } from './SlidePrimitives'

export function ERDSlide() {
  return (
    <>
      <SlideHeading kicker="CHƯƠNG 3 · THIẾT KẾ HỆ THỐNG">Cơ sở dữ liệu — ERD 20 bảng</SlideHeading>
      <div className="erd-visual">
        <div className="erd-scroll">
          <img
            src="/diagrams/ERD_Complete_Moderate_20_Bang.png"
            alt="Sơ đồ ERD gồm 20 bảng của hệ thống quản lý bán hàng siêu thị mini"
          />
        </div>
      </div>
    </>
  )
}
