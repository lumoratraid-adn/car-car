import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

type ServiceCategory = {
  id: string;
  title: string;
  desc: string;
  image: string;
  items: string[];
}

const services: ServiceCategory[] = [
  {
    id: 'coating',
    title: 'Ceramic Coating',
    desc: 'Advanced paint protection solutions including Ceramic, Graphene, and Polymer coatings for long-lasting shine and durability.',
    image: '/coating.jpg',
    items: ['Ceramic Coating', 'Graphene Coating', 'Polymer Coating']
  },
  {
    id: 'detailing',
    title: 'Detailing & Cleaning',
    desc: 'Comprehensive cleaning services ranging from complete exterior washes to deep interior vacuuming and AC vent cleaning.',
    image: '/detailing.jpg',
    items: ['Exterior Detailing', 'Interior Deep Clean', 'AC Vent Cleaning']
  },
  {
    id: 'restoration',
    title: 'Restoration & Polishing',
    desc: 'Expert restoration services to bring back clarity and shine to your headlights, glass, and windshields.',
    image: '/restoration.jpg',
    items: ['Headlight Restoration', 'Glass Polishing', 'Windshield Treatment']
  },
  {
    id: 'protection',
    title: 'Protection Treatments',
    desc: 'Essential protection for your vehicle\'s longevity, including anti-rust treatments and interior fabric/leather guarding.',
    image: '/protection.jpg',
    items: ['Anti-Rust Treatment', 'Interior Protection']
  },
  {
    id: 'mechanical',
    title: 'Mechanical & Specialty Services',
    desc: 'Specialized care for your unique needs, including premium engine buffing for Royal Enfield and Bullet bikes.',
    image: '/mechanical service.jpg',
    items: ['Bullet Engine Buffing', 'Specialty Services']
  }
];

const packages = [
  { id: 'basic', title: 'Basic Wash Package', desc: 'Exterior wash + tire shine', price: 'Starting at ₹499' },
  { id: 'premium', title: 'Premium Shine Package', desc: 'Exterior wash + paint polishing + wax', price: 'Starting at ₹1,999' },
  { id: 'complete', title: 'Complete Detail Package', desc: 'Exterior + interior deep cleaning + polishing + protection', price: 'Starting at ₹4,499' },
  { id: 'ultimate', title: 'Ultimate Protection Package', desc: 'Ceramic coating + interior sanitization + headlight polish', price: 'Contact for pricing' }
];

export function ServicesSection({ detailed }: { detailed?: boolean }) {
  const whatsApp = 'https://wa.me/919074997502';

  const renderCard = (s: ServiceCategory) => {
    return (
      <div className="flex flex-col h-full rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl overflow-hidden group hover:border-brand-gold/30 transition-all duration-300">

        {/* 1. Title Section */}
        <div className="p-6 pb-4">
          <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-brand-gold transition-colors">{s.title}</h3>
        </div>

        {/* 2. Image Section */}
        <div className="w-full h-48 relative overflow-hidden bg-zinc-800">
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-20" />
        </div>

        {/* 3. Description & Content Section */}
        <div className="flex flex-col flex-grow p-6 pt-6">
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">{s.desc}</p>

          {/* Sub-items list */}
          <ul className="space-y-2 mb-6">
            {s.items.map((item, i) => (
              <li key={i} className="text-xs text-gray-500 font-medium flex items-center gap-2 uppercase tracking-wider group-hover:text-brand-gold/80 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* 4. Book Now Button */}
          <div className="mt-auto">
            <a href={whatsApp} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-transparent border border-zinc-700 hover:border-brand-red hover:bg-brand-red hover:text-white text-gray-300 font-bold rounded-lg transition-all duration-300 uppercase text-sm tracking-widest group/btn">
              <Phone className="w-4 h-4" />
              Book Now
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-black/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-red/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(252,218,6,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(229,25,18,0.05),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter"
          >
            <span className="text-white">Our </span>
            <span className="text-brand-red inline-block animate-pulse">Services</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Premium automotive care solutions tailored for your vehicle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="h-full"
            >
              {renderCard(service)}
            </motion.div>
          ))}
        </div>

        {!detailed && (
          <div className="mt-12 text-center">
            <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'services' }))} className="px-8 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-red/20">
              View All Details
            </button>
          </div>
        )}

        {detailed && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-brand-red">Service Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {packages.map(p => (
                <div key={p.id} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-brand-gold/30 transition-colors">
                  <div>
                    <div className="font-bold text-white text-lg">{p.title}</div>
                    <div className="text-sm text-gray-400 mt-1">{p.desc}</div>
                  </div>
                  <div className="text-right">
                    {detailed ? (
                      <div className="text-brand-gold font-bold">{p.price}</div>
                    ) : (
                      <div className="text-sm text-gray-500">Contact for pricing</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}