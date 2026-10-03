import type { ComponentType } from 'react'
import { ActorsSlide } from '../slides/04-ActorsSlide'
import { ArchitectureSlide } from '../slides/07-ArchitectureSlide'
import { ConclusionSlide } from '../slides/15-ConclusionSlide'
import { CoverSlide } from '../slides/01-CoverSlide'
import { DashboardDemoSlide } from '../slides/10-DashboardDemoSlide'
import { ERDSlide } from '../slides/08-ERDSlide'
import { ExtendedDemoSlide } from '../slides/12-ExtendedDemoSlide'
import { FutureSlide } from '../slides/14-FutureSlide'
import { ModulesDemoSlide } from '../slides/11-ModulesDemoSlide'
import { ModulesSlide } from '../slides/06-ModulesSlide'
import { ObjectivesSlide } from '../slides/03-ObjectivesSlide'
import { OverviewSlide } from '../slides/02-OverviewSlide'
import { ResultsSlide } from '../slides/13-ResultsSlide'
import { TechnologySlide } from '../slides/09-TechnologySlide'
import { WorkflowSlide } from '../slides/05-WorkflowSlide'

export type SlideComponent = ComponentType
export type SlideDefinition = { title: string; component: SlideComponent }

export const slides: SlideDefinition[] = [
  { title: 'Trang bìa', component: CoverSlide },
  { title: 'Bối cảnh và vấn đề', component: OverviewSlide },
  { title: 'Mục tiêu và phạm vi', component: ObjectivesSlide },
  { title: 'Đối tượng và vai trò', component: ActorsSlide },
  { title: 'Quy trình nghiệp vụ', component: WorkflowSlide },
  { title: 'Tổng quan module', component: ModulesSlide },
  { title: 'Kiến trúc tổng thể', component: ArchitectureSlide },
  { title: 'Cơ sở dữ liệu', component: ERDSlide },
  { title: 'Công nghệ sử dụng', component: TechnologySlide },
  { title: 'Dashboard', component: DashboardDemoSlide },
  { title: 'Các chức năng chính', component: ModulesDemoSlide },
  { title: 'Các chức năng hỗ trợ', component: ExtendedDemoSlide },
  { title: 'Kết quả đạt được', component: ResultsSlide },
  { title: 'Hạn chế và hướng phát triển', component: FutureSlide },
  { title: 'Kết luận và Q&A', component: ConclusionSlide },
]
