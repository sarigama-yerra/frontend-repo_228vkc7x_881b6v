import { Code2, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'A playful 3D experience powered by Spline and React.',
    tags: ['React', 'Spline', 'Three.js'],
    link: '#',
  },
  {
    title: 'Design System Playground',
    description: 'Reusable components, tokens, and theming built with Tailwind.',
    tags: ['Tailwind', 'Storybook', 'Design Tokens'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Live charts and metrics with smooth animations.',
    tags: ['React', 'WebSockets', 'Framer Motion'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-8 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
            <Code2 size={18} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Selected Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.description}</p>
                </div>
                <a href={p.link} className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-md hover:bg-black/5" aria-label="Open project">
                  <ExternalLink size={18} />
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/5">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
