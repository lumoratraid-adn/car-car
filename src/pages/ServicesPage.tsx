import { motion } from 'framer-motion';
import { Award, Clock, Droplets, Shield, Sparkles, Wind } from 'lucide-react';
import { ServicesSection } from '../components/ServicesSection';

export function ServicesPage() {
  const features = [
    {
      icon: Shield,
      title: 'Premium Protection',
      description: 'Long-lasting ceramic and graphene coatings that protect against UV, rain, and environmental damage.'
    },
    {
      icon: Sparkles,
      title: 'Expert Craftsmanship',
      description: 'Trained technicians using professional-grade equipment and eco-friendly products.'
    },
    {
      icon: Droplets,
      title: 'Eco-Friendly Solutions',
      description: 'Sustainable, pH-balanced cleaning products safe for your vehicle and the environment.'
    },
    {
      icon: Wind,
      title: 'Quick Service',
      description: 'Efficient processes that deliver professional results without compromising quality.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Convenient appointment times to fit your busy lifestyle.'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Satisfaction guaranteed with our comprehensive service warranty.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-blue-900/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
          >
            Professional <span className="text-red-600">Detailing</span> Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Transform your vehicle with our comprehensive detailing services tailored for the Kerala climate.
            Premium products, expert technicians, and lasting protection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'contact' }))}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
            >
              Book Appointment
            </button>
            <button
              onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
              className="px-8 py-3 border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-colors"
            >
              View Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Auto Vibe</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the difference with our professional detailing services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 hover:border-red-600/30 hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection detailed />

      {/* Protection Section with Visual */}
      <div className="py-20 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-blue-900/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Protection <span className="text-red-600">Matters</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Kerala's tropical climate presents unique challenges for vehicle maintenance.
                  Intense sunlight, heavy monsoon rains, high humidity, and coastal salt air
                  can accelerate paint degradation, rust formation, and interior wear.
                </p>
                <p>
                  Our advanced ceramic and graphene coatings create a protective barrier that
                  shields your vehicle from UV damage, acid rain, road grime, and environmental
                  contaminants. This not only preserves your car's appearance but also maintains
                  its resale value and reduces long-term maintenance costs.
                </p>
                <p>
                  Choose protection that lasts. Choose Auto Vibe.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Premium Protection</h3>
                  <p className="text-gray-400">Advanced coatings for lasting beauty</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}