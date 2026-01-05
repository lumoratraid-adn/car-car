import { motion } from 'framer-motion';
import { CloudRain, Droplets, Phone, Shield, Slash, Sparkles, Sun, Truck, Wind, type LucideIcon } from 'lucide-react';

type Service = {
  id: string;
  title: string;
  desc: string;
  time?: string;
  icon?: LucideIcon;
}

const exteriorServices: Service[] = [
  { id: 'wash', title: 'Exterior Wash & Rinse', desc: 'Gentle hand wash + rinse using pH-balanced products for a spotless exterior.', time: '30–45 mins', icon: Droplets },
  { id: 'decon', title: 'Paint Decontamination', desc: 'Clay bar or chemical wash to remove bonded contaminants and surface residues.', time: '45–60 mins', icon: Slash },
  { id: 'polish', title: 'Polishing / Paint Correction', desc: 'Removes light scratches and swirls, restores smooth shine.', time: '1–3 hrs', icon: Sparkles },
  { id: 'wax', title: 'Waxing & Sealant Protection', desc: 'Adds a protective layer that lasts for weeks and enhances shine.', time: '45–60 mins', icon: Shield },
  { id: 'ceramic', title: 'Ceramic Coating Application', desc: 'Long-lasting protection against dirt, rain marks, and UV damage.', time: '6–8 hrs', icon: Shield }
];

const interiorServices: Service[] = [
  { id: 'vacuum', title: 'Interior Vacuum & Deep Clean', desc: 'Thorough vacuuming and surface cleaning of upholstery and mats.', time: '45–90 mins', icon: Wind },
  { id: 'steam', title: 'Steam Cleaning Upholstery & Seats', desc: 'Deep steam removal of stains, allergens, and odors.', time: '45–90 mins', icon: Sun },
  { id: 'dashboard', title: 'Dashboard & Panel Cleaning', desc: 'Careful cleaning + UV protection for plastics, vinyl, and trims.', time: '20–30 mins', icon: Slash },
  { id: 'leather', title: 'Leather Treatment & Conditioning', desc: 'Nourishes and protects leather surfaces against cracking or fading.', time: '30–45 mins', icon: Shield }
];

const addonServices: Service[] = [
  { id: 'glass', title: 'Glass & Window Treatment', desc: 'Crystal-clear visibility with streak-free window cleaning.', time: '15–30 mins', icon: CloudRain },
  { id: 'tyres', title: 'Tire & Wheel Detailing', desc: 'Cleaning, degreasing, tire shine, and rim polishing.', time: '30–45 mins', icon: Sparkles },
  { id: 'engine', title: 'Engine Bay Cleaning', desc: 'Safe engine cleaning to remove grease and grime (optional add-on).', time: '30–60 mins', icon: Truck },
  { id: 'headlight', title: 'Headlight Polishing', desc: 'Restores clarity to yellowed or cloudy headlights.', time: '30–45 mins', icon: Sun },
  { id: 'odor', title: 'Odor Removal & Sanitization', desc: 'Keeps the cabin fresh and hygienic using odor-neutralizing solutions.', time: '30–60 mins', icon: Slash },
  { id: 'pickup', title: 'Pickup & Drop (Local)', desc: 'Optional service where the car is picked up and returned after detailing.', time: 'Varies', icon: Truck }
];

const packages = [
  { id: 'basic', title: 'Basic Wash Package', desc: 'Exterior wash + tire shine', price: 'Starting at ₹499' },
  { id: 'premium', title: 'Premium Shine Package', desc: 'Exterior wash + paint polishing + wax', price: 'Starting at ₹1,999' },
  { id: 'complete', title: 'Complete Detail Package', desc: 'Exterior + interior deep cleaning + polishing + protection', price: 'Starting at ₹4,499' },
  { id: 'ultimate', title: 'Ultimate Protection Package', desc: 'Ceramic coating + interior sanitization + headlight polish', price: 'Contact for pricing' }
];

export function ServicesSection({ detailed }: { detailed?: boolean }) {
  const whatsApp = 'https://wa.me/919074997502';
  const renderCard = (s: Service) => {
    const Icon = s.icon || Sparkles;
    return (
      <div key={s.id} className="flex flex-col justify-between p-6 rounded-xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/60 border border-zinc-700/50 shadow-lg h-full group hover:shadow-2xl hover:shadow-brand-teal/20 transition-all duration-300 hover:-translate-y-2 hover:border-brand-teal/30 backdrop-blur-sm">
        <div>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal">
                <Icon className="w-5 h-5" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                {detailed && s.time && <div className="mt-1 text-xs text-gray-500">Est. time: {s.time}</div>}
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-400">{s.desc}</p>
        </div>
        <div className="mt-6">
          <a href={whatsApp} target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-3 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm">
            <Phone className="w-4 h-4" /> Book on WhatsApp
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-transparent to-brand-cyan/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(13,148,136,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-white">Our Services</h2>
            <p className="text-gray-400 mt-2">Everything your car needs under one roof</p>
          </div>
          {!detailed && (
            <div>
              <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'services' }))} className="px-4 py-2 bg-brand-teal hover:bg-brand-cyan text-white rounded-md transition-colors">
                View All Services
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 tablet-landscape:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Exterior Services</h4>
            <div className="grid grid-cols-1 gap-4">
              {exteriorServices.map(s => (
                <div key={s.id} className="h-full">{renderCard(s)}</div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Interior Services</h4>
            <div className="grid grid-cols-1 gap-4">
              {interiorServices.map(s => (
                <div key={s.id} className="h-full">{renderCard(s)}</div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Add-on Services</h4>
            <div className="grid grid-cols-1 gap-4">
              {addonServices.map(s => (
                <div key={s.id} className="h-full">{renderCard(s)}</div>
              ))}
            </div>
          </div>
        </div>

        {detailed && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Service Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packages.map(p => (
                <div key={p.id} className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{p.title}</div>
                    <div className="text-sm text-gray-400">{p.desc}</div>
                  </div>
                  {detailed ? <div className="text-sm text-gray-300">{p.price}</div> : <div className="text-sm text-gray-500">Contact for pricing</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}