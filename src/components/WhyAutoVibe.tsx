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
    <section className="py-12 bg-zinc-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Why Auto Vibe</h2>
          <p className="mt-2 text-sm text-gray-400">Practical workmanship and steady care — local detailing you can rely on.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <div key={it.id} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {Icon ? (
                      <Icon className="w-6 h-6 text-red-500" />
                    ) : (
                      <span className="inline-block w-6 h-6 bg-gray-500 rounded" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{it.title}</h3>
                    <div className="mt-2 text-sm text-gray-300">
                      <div className="font-medium text-gray-200">Used for</div>
                      <div className="text-gray-400">{it.used}</div>
                    </div>
                    <div className="mt-3 text-sm text-gray-300">
                      <div className="font-medium text-gray-200">Why it matters</div>
                      <div className="text-gray-400">{it.why}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}