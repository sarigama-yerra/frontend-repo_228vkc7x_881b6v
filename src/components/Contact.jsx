import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    window.location.href = `mailto:hello@rares.dev?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-8 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
            <Mail size={18} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Get in touch</h2>
        </div>

        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 bg-white border border-black/5 rounded-2xl p-6 shadow-sm">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input name="name" required className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-gray-600">Prefer email? hello@rares.dev</p>
            <button type="submit" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow hover:bg-blue-700 transition-colors">
              Send <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
