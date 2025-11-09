import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/30 to-white"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Tech • Portfolio • Playful • Modern</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            RARES <span className="text-blue-600">DEV</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-prose">
            Frontend-focused developer crafting interactive experiences. I build clean, accessible interfaces with delightful motion and thoughtful details.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-black/10 hover:bg-black/5 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[360px] md:h-[520px]"></div>
      </div>
    </section>
  )
}
