
export function WhyAutoVibeCondensed() {
  const points = [
    {
      id: 'detail',
      title: 'Careful workmanship',
      desc: 'We pay attention to the small areas that matter.',
    },
    {
      id: 'quality',
      title: 'Quality-first',
      desc: 'Appropriate products and methods for lasting results.',
    },
    {
      id: 'local',
      title: 'Local & dependable',
      desc: 'Serving Narikkuni with consistent, trusted service.',
    },
    {
      id: 'service',
      title: 'Customer-first',
      desc: 'Clear recommendations and respectful scheduling.',
    },
  ]

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-white">Why Auto Vibe</h3>
      <p className="mt-1 text-sm text-gray-300">A few reasons locals choose our studio.</p>

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        {points.map((p) => (
          <li key={p.id} className="flex gap-3">
            <span className="mt-1 text-red-600">•</span>
            <div>
              <div className="font-medium text-gray-100">{p.title}</div>
              <div className="text-gray-300">{p.desc}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
