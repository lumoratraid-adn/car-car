import { Brush, Cloud, Droplet, Layers, RotateCw, Shield } from 'lucide-react'

export function WhyAutoVibe() {
  const items = [
    {
      id: 'microfiber',
      title: 'Microfiber Wash System',
      used: 'Safe hand-washing and surface wiping without scratching paint.',
      why: 'Prevents swirl marks and protects the vehicle’s original finish.',
      icon: Layers
    },
    {
      id: 'ph',
      title: 'pH-Balanced Cleaning Solutions',
      used: 'Exterior and interior cleaning without damaging paint, trims, or upholstery.',
      why: 'Harsh chemicals reduce paint life; balanced solutions preserve surfaces.',
      icon: Droplet
    },
    {
      id: 'polisher',
      title: 'Dual-Action Polishing Tools',
      used: 'Paint correction, light scratch removal, and gloss enhancement.',
      why: 'Ensures even correction without overheating or paint damage.',
      icon: RotateCw
    },
    {
      id: 'steam',
      title: 'Interior Steam Cleaning Equipment',
      used: 'Deep cleaning seats, mats, and interior surfaces.',
      why: 'Removes dirt, stains, and odors while keeping interiors hygienic.',
      icon: Cloud
    },
    {
      id: 'coating',
      title: 'Protective Coating & Sealant System',
      used: 'Applying waxes, sealants, or protective coatings.',
      why: 'Adds protection against dust, water marks, and UV exposure.',
      icon: Shield
    },
    {
      id: 'brushes',
      title: 'Professional Detailing Brushes & Tools',
      used: 'Cleaning tight areas like vents, badges, wheels, and trims.',
      why: 'Allows complete detailing without missing hidden areas.',
      icon: Brush
    }
  ]

  return (
    <section className="py-20 bg-zinc-900 text-gray-200 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-blue-900/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-red-600">Auto Vibe</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover what sets us apart in professional car detailing. Our commitment to excellence,
            cutting-edge techniques, and customer satisfaction make us the preferred choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <div key={it.id} className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8 hover:bg-zinc-800/80 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                      {Icon ? (
                        <Icon className="w-7 h-7 text-red-500" />
                      ) : (
                        <span className="inline-block w-7 h-7 bg-gray-500 rounded" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">{it.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-red-400 uppercase tracking-wide mb-1">Used for</div>
                        <div className="text-gray-300 leading-relaxed">{it.used}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-red-400 uppercase tracking-wide mb-1">Why it matters</div>
                        <div className="text-gray-300 leading-relaxed">{it.why}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Excellence?</h3>
            <p className="text-gray-400 mb-6">
              Join hundreds of satisfied customers who trust Auto Vibe with their vehicles.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'contact' }))}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}