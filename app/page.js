export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-8 text-sm text-indigo-400">
            AI-Powered Content Repurposing
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 gradient-text">
            One Post. Every Platform. Zero Effort.
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/70 mb-8 max-w-2xl mx-auto">
            PostPilot takes your blog post and instantly creates optimized content for Twitter, LinkedIn, Instagram, and TikTok. Stop rewriting. Start publishing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">Join the Waitlist</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
        <div className="mt-16 flex gap-12 justify-center flex-wrap text-white/50">
          <span>Twitter</span>
          <span>LinkedIn</span>
          <span>Instagram</span>
          <span>TikTok</span>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-white/60 text-lg mb-16 max-w-xl mx-auto">
            Paste your blog post URL and PostPilot handles the rest. Platform-specific content in seconds.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Platform-Specific Optimization', desc: 'Each platform gets content tailored to its unique audience, character limits, and engagement patterns.', icon: '🎯' },
              { title: 'Tone & Voice Matching', desc: 'PostPilot learns your brand voice and maintains consistency across all platforms automatically.', icon: '🎨' },
              { title: 'Smart Scheduling', desc: 'Auto-schedule posts for peak engagement times on each platform. Set it and forget it.', icon: '⏰' },
              { title: 'Analytics Dashboard', desc: 'Track performance across all platforms in one place. See what works and optimize accordingly.', icon: '📊' },
            ].map((feature, i) => (
              <div key={i} className="card">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-white/60 text-lg mb-16">Start free. Scale when you're ready.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Free', price: '$0', desc: 'Perfect for getting started', features: ['3 posts/month', '2 platforms', 'Basic analytics', 'Community support'] },
              { name: 'Pro', price: '$29', desc: 'For serious creators', features: ['50 posts/month', 'All 4 platforms', 'Advanced analytics', 'Priority support', 'Custom tone matching'], popular: true },
              { name: 'Team', price: '$99', desc: 'For agencies & teams', features: ['Unlimited posts', 'All platforms', 'Team collaboration', 'API access', 'White-label reports', 'Dedicated support'] },
            ].map((plan, i) => (
              <div key={i} className={`card relative ${plan.popular ? 'bg-indigo-500/10 border-indigo-500 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-500 text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-5xl font-extrabold mb-2">
                  {plan.price}<span className="text-lg font-normal text-white/50">/mo</span>
                </div>
                <p className="text-white/60 mb-8">{plan.desc}</p>
                <ul className="list-none p-0 m-0 text-left mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="py-2 text-white/70 flex items-center gap-2">
                      <span className="text-indigo-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold ${plan.popular ? 'bg-indigo-500' : 'border border-white/20'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-24 px-8 text-center">
        <div className="max-w-xl mx-auto card bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
          <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-white/60 mb-8">
            Be first in line when we launch. Early adopters get 50% off forever.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-indigo-500 transition-colors" />
            <button className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold whitespace-nowrap">
              Join
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-white/40 text-sm">
        <p>© 2026 PostPilot. Built with AI by Pokee.</p>
      </footer>
    </main>
  )
}
