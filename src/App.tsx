import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Award,
  BarChart3,
  Bus,
  Code2,
  Github,
  GraduationCap,
  Plane,
  Smartphone,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

type Project = {
  number: string
  title: string
  category: string
  summary: string
  detail: string
  tags: string[]
  icon: ReactNode
  accent: string
}

const projects: Project[] = [
  {
    number: '01',
    title: '임베디드 버스 시스템',
    category: 'TEAM PROJECT · TEAM LEADER',
    summary: '임베디드 수업 팀 프로젝트에서 팀장을 맡아 버스 관련 시스템을 구현했고 최우수상을 수상했습니다.',
    detail: '팀원별 역할을 나누고 전체 진행 상황을 조율하면서 기능 구현과 발표 준비를 함께 진행했습니다. 포트폴리오에는 실제 사용한 보드, 센서, 기능 구성과 본인이 담당한 부분을 추후 더 구체적으로 추가할 수 있습니다.',
    tags: ['Embedded', 'Team Lead', 'Award'],
    icon: <Bus size={76} strokeWidth={1.2} />,
    accent: 'from-cyan-400/30 via-blue-500/20 to-transparent',
  },
  {
    number: '02',
    title: '임가 데이터 연계 분석',
    category: 'DATA ANALYSIS',
    summary: '2023년 임가경제조사와 임산물생산조사를 연계해 생산규모와 임가소득 간 관계를 분석했습니다.',
    detail: '데이터 전처리, 지역별 기초통계, 시각화, 상관관계와 가설검정을 수행했습니다. 분석 결과가 통계적으로 유의하지 않은 점을 반영해 “영향”이 아닌 “관계 분석”으로 연구 표현을 수정했습니다.',
    tags: ['Python', 'Pandas', 'Statistics'],
    icon: <BarChart3 size={76} strokeWidth={1.2} />,
    accent: 'from-fuchsia-400/30 via-violet-500/20 to-transparent',
  },
  {
    number: '03',
    title: 'AI 식재료 관리 앱 기획',
    category: 'ANDROID APP CONCEPT',
    summary: 'Android Studio 기반으로 식재료 관리와 AI 추천 기능을 결합한 앱의 화면과 기능 구성을 기획했습니다.',
    detail: '냉장고 스캔 없이도 등록·소비기한 관리·보유 식재료 기반 추천이 가능하도록 사용자 흐름과 UI를 구성했습니다. 현재는 기획 및 UI 설계 중심이며, 구현 범위에 맞춰 기능을 단계적으로 확장할 예정입니다.',
    tags: ['Android Studio', 'UI/UX', 'AI Concept'],
    icon: <Smartphone size={76} strokeWidth={1.2} />,
    accent: 'from-orange-400/30 via-pink-500/20 to-transparent',
  },
]

const skills = [
  ['01', 'Embedded Systems', '임베디드 수업과 팀 프로젝트를 통해 하드웨어와 소프트웨어가 함께 동작하는 시스템 구현을 경험했습니다.', <Code2 key="code" />],
  ['02', 'Web & Android', 'HTML·CSS·JavaScript와 Android Studio를 활용해 웹 및 모바일 UI와 기능을 구현해 왔습니다.', <Smartphone key="phone" />],
  ['03', 'Data Analysis', 'Python, Pandas, 시각화와 기초 통계를 사용해 공공데이터 기반 분석 프로젝트를 수행했습니다.', <BarChart3 key="chart" />],
  ['04', 'Team Leadership', '팀장 경험과 2년간의 학생회 활동을 통해 일정 조율, 역할 분담, 행사 운영을 경험했습니다.', <Users key="users" />],
  ['05', 'Communication', '홍보대사와 아르바이트 경험을 통해 다양한 사람에게 정보를 전달하고 상황에 맞게 소통했습니다.', <Sparkles key="spark" />],
]

function FadeIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ProjectModal({ project, close }: { project: Project; close: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={close}
    >
      <motion.div
        className="relative max-w-2xl rounded-[32px] border border-white/20 bg-[#151515] p-7 sm:p-10"
        initial={{ scale: 0.92, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button aria-label="닫기" onClick={close} className="absolute right-5 top-5 rounded-full border border-white/20 p-2 hover:bg-white/10">
          <X size={20} />
        </button>
        <p className="mb-2 text-sm uppercase tracking-[.25em] text-white/45">{project.category}</p>
        <h3 className="pr-10 text-3xl font-black sm:text-5xl">{project.title}</h3>
        <p className="mt-6 leading-8 text-white/70">{project.detail}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/65">{tag}</span>)}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <main className="overflow-x-clip bg-[#0c0c0c]">
      <section className="grid-bg relative min-h-screen overflow-hidden px-5 sm:px-8 md:px-10">
        <nav className="relative z-20 flex items-center justify-between pt-6 text-xs font-semibold uppercase tracking-[.18em] sm:text-sm md:pt-8 md:text-base">
          <a href="#about" className="hover:opacity-60">About</a>
          <a href="#skills" className="hover:opacity-60">Skills</a>
          <a href="#projects" className="hover:opacity-60">Projects</a>
          <a href="https://github.com/weeksun02" target="_blank" rel="noreferrer" className="hover:opacity-60">GitHub</a>
        </nav>

        <FadeIn className="relative z-10 overflow-hidden pt-7 sm:pt-4">
          <h1 className="hero-heading whitespace-nowrap text-[15vw] font-black uppercase leading-none tracking-[-.065em]">Choi Juhye</h1>
        </FadeIn>

        <div className="relative z-10 mx-auto mt-8 flex min-h-[53vh] max-w-7xl items-center justify-center">
          <motion.div
            className="relative h-[310px] w-[310px] sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px]"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
          >
            <div className="absolute inset-[8%] rounded-full border border-white/15 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-400/20 blur-sm" />
            <div className="glass absolute left-[9%] top-[18%] flex h-[35%] w-[35%] rotate-[-12deg] items-center justify-center rounded-[36px] border border-white/20 shadow-2xl"><Plane className="h-1/2 w-1/2" strokeWidth={1.1} /></div>
            <div className="glass absolute right-[7%] top-[7%] flex h-[31%] w-[31%] rotate-[14deg] items-center justify-center rounded-full border border-white/20"><Code2 className="h-1/2 w-1/2" strokeWidth={1.1} /></div>
            <div className="glass absolute bottom-[8%] left-[27%] flex h-[38%] w-[45%] rotate-[4deg] items-center justify-center rounded-[44px] border border-white/20"><GraduationCap className="h-1/2 w-1/2" strokeWidth={1.1} /></div>
            <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20" />
          </motion.div>
        </div>

        <div className="relative z-20 flex items-end justify-between gap-5 pb-8 md:pb-10">
          <p className="max-w-[210px] text-xs font-light uppercase leading-relaxed tracking-[.12em] text-[#d7e2ea] sm:max-w-[310px] sm:text-base">
            Computer Engineering student exploring embedded systems, data, web and aerospace technology.
          </p>
          <a href="https://github.com/weeksun02" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border-2 border-white bg-gradient-to-r from-fuchsia-700 via-violet-700 to-orange-600 px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-[inset_4px_4px_12px_rgba(119,33,177,.8)] transition hover:scale-105 sm:px-9 sm:py-4 sm:text-sm">
            GitHub <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-24 sm:px-8 md:px-10">
        <div className="absolute left-[3%] top-[12%] text-cyan-300/30"><Plane size={110} strokeWidth={.7} /></div>
        <div className="absolute bottom-[13%] right-[5%] text-fuchsia-300/25"><Code2 size={120} strokeWidth={.7} /></div>
        <div className="relative z-10 max-w-4xl text-center">
          <FadeIn><h2 className="hero-heading text-[clamp(4rem,13vw,10rem)] font-black uppercase leading-none tracking-tight">About me</h2></FadeIn>
          <FadeIn delay={.1}>
            <p className="mx-auto mt-10 max-w-3xl text-base font-medium leading-8 text-[#d7e2ea] sm:text-xl sm:leading-9">
              컴퓨터공학과 24학번 최주혜입니다. 임베디드 팀 프로젝트, 웹·안드로이드 과제, 공공데이터 분석을 경험했고 학생회와 홍보대사 활동도 이어왔습니다. 현재는 방위산업과 항공 분야에 관심을 두고, 학교에서 배운 기술을 실제 결과물로 연결하는 과정을 쌓고 있습니다.
            </p>
          </FadeIn>
          <FadeIn delay={.2} className="mt-12 flex flex-wrap justify-center gap-3">
            {['컴퓨터공학', '임베디드', 'Android', '데이터 분석', '항공·방산 관심'].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/[.04] px-5 py-3 text-sm text-white/70">{item}</span>)}
          </FadeIn>
        </div>
      </section>

      <section id="skills" className="rounded-t-[44px] bg-white px-5 py-24 text-[#0c0c0c] sm:px-8 md:rounded-t-[60px] md:px-10 md:py-32">
        <FadeIn><h2 className="text-center text-[clamp(4rem,13vw,10rem)] font-black uppercase leading-none">Skills</h2></FadeIn>
        <div className="mx-auto mt-16 max-w-5xl md:mt-24">
          {skills.map(([number, title, description, icon], index) => (
            <FadeIn key={String(number)} delay={index * .06} className="grid grid-cols-[auto_1fr] gap-5 border-t border-black/15 py-8 last:border-b sm:gap-10 sm:py-11">
              <div className="text-[clamp(3.3rem,9vw,7rem)] font-black leading-none">{number}</div>
              <div className="pt-1">
                <div className="mb-3 flex items-center gap-3">{icon}<h3 className="text-xl font-bold uppercase sm:text-3xl">{title}</h3></div>
                <p className="max-w-2xl text-sm font-light leading-7 text-black/60 sm:text-lg">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 -mt-10 rounded-t-[44px] bg-[#0c0c0c] px-5 py-24 sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
        <FadeIn><h2 className="hero-heading text-center text-[clamp(4rem,13vw,10rem)] font-black uppercase leading-none">Projects</h2></FadeIn>
        <div className="mx-auto mt-16 max-w-7xl space-y-8 md:mt-24">
          {projects.map((project, index) => (
            <FadeIn key={project.number} delay={index * .08}>
              <article className="overflow-hidden rounded-[34px] border border-white/20 bg-[#111] p-5 sm:rounded-[50px] sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[38%_62%]">
                  <div className={`relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br ${project.accent} sm:min-h-[360px] sm:rounded-[42px]`}>
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    <div className="relative z-10 text-white/80">{project.icon}</div>
                    <span className="absolute left-6 top-5 text-6xl font-black text-white/15 sm:text-8xl">{project.number}</span>
                  </div>
                  <div className="flex flex-col justify-between py-2 lg:px-4">
                    <div>
                      <p className="text-xs uppercase tracking-[.25em] text-white/40 sm:text-sm">{project.category}</p>
                      <h3 className="mt-3 text-3xl font-black sm:text-5xl">{project.title}</h3>
                      <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-lg sm:leading-8">{project.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/55 sm:text-sm">{tag}</span>)}</div>
                    </div>
                    <button onClick={() => setSelected(project)} className="mt-8 flex w-fit items-center gap-2 rounded-full border-2 border-[#d7e2ea] px-6 py-3 text-sm font-semibold uppercase tracking-widest transition hover:bg-white/10">
                      View details <ArrowUpRight size={17} />
                    </button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <footer className="px-5 pb-16 pt-8 text-center sm:px-8 md:px-10">
        <div className="mx-auto max-w-5xl border-t border-white/15 pt-10">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60">
            <span className="flex items-center gap-2"><Award size={18} /> 임베디드 팀 프로젝트 최우수상</span>
            <span className="flex items-center gap-2"><Users size={18} /> 학생회 2년</span>
            <span className="flex items-center gap-2"><Plane size={18} /> 항공·방산 분야 관심</span>
          </div>
          <a href="https://github.com/weeksun02" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-white"><Github size={19} /> github.com/weeksun02</a>
          <p className="mt-7 text-xs text-white/30">© 2026 CHOI JUHYE. Built with React, TypeScript and Framer Motion.</p>
        </div>
      </footer>

      {selected && <ProjectModal project={selected} close={() => setSelected(null)} />}
    </main>
  )
}
