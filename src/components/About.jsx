export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">About</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m Rares, a developer focused on creating polished, interactive web apps. My work blends design and code to deliver experiences that feel fast, intuitive, and delightful. I care about accessibility, performance, and details that make interfaces feel alive.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            My current toolkit includes React, Tailwind, Framer Motion, and 3D elements with Spline. I love exploring new tools while staying grounded in fundamentals.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-200 to-purple-200 blur-lg"></div>
          <div className="relative rounded-2xl border border-black/5 bg-white p-6 shadow-lg">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">Experience</dt>
                <dd className="text-xl font-semibold">4+ years</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">Focus</dt>
                <dd className="text-xl font-semibold">Frontend</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">Strength</dt>
                <dd className="text-xl font-semibold">UI/UX</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">Location</dt>
                <dd className="text-xl font-semibold">Remote</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
