import { motion } from 'framer-motion';
import { Award, Clock, MapPin, MessageCircle, Shield, Sparkles, Users } from 'lucide-react';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { WhyAutoVibeCondensed } from '../components/WhyAutoVibeCondensed';

export function AboutPage() {
  const services = [
    { name: 'Exterior Detailing', desc: 'Paint correction, polishing, and ceramic coating' },
    { name: 'Interior Cleaning', desc: 'Deep cleaning, steam treatment, and odor removal' },
    { name: 'Protection Services', desc: 'Ceramic coating, waxing, and sealant application' },
    { name: 'Specialized Care', desc: 'Headlight restoration, tire dressing, and engine bay cleaning' }
  ];

  const stats = [
    { icon: Users, value: '200+', label: 'Happy Customers' },
    { icon: Award, value: '4.9', label: 'Google Rating' },
    { icon: Shield, value: '2+', label: 'Years Experience' },
    { icon: Sparkles, value: '100%', label: 'Quality Guarantee' }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-blue-900/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-red-600">Auto Vibe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto border-l-2 border-red-600 pl-4"
          >
            Your trusted local car detailing studio in Narikkuni, Kozhikode.
            Professional service, premium products, and exceptional care for every vehicle.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Stats Section - Card-Driven Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="text-center h-full">
                  <div className="flex flex-col items-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-4">
            <p>
              Auto Vibe was founded with a simple mission: to provide exceptional car detailing services
              that local vehicle owners can trust. Located in the heart of Narikkuni, we've been serving
              the Kozhikode community since 2022.
            </p>
            <p>
              What started as a passion for automotive care has grown into a trusted neighborhood
              destination. Our team of skilled technicians combines traditional craftsmanship with
              modern techniques and premium products to deliver results that exceed expectations.
            </p>
            <p>
              We believe every vehicle deserves the best care, regardless of make, model, or budget.
              That's why we offer transparent pricing, honest recommendations, and a satisfaction
              guarantee on all our services.
            </p>
          </div>
        </motion.section>

        {/* Services Overview - Card-Driven Layout */}
        <Section spacing="lg" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive detailing solutions tailored for your vehicle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="default" className="h-full hover:border-red-600/30">
                  <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Card variant="outlined" className="inline-block">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'services' }))}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors w-full"
              >
                View All Services
              </button>
            </Card>
          </div>
        </Section>

        <WhyAutoVibeCondensed />

        {/* Business Info Card + Map - Card-Driven Layout */}
        <Section spacing="lg" className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
          >
            <div className="lg:col-span-1">
              <Card variant="elevated" className="h-full">
                <h3 className="text-lg font-semibold mb-6 text-white">Visit Our Studio</h3>
                <div className="text-sm text-gray-300 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">Address</div>
                      <div className="text-gray-400">Poonoor – Narikkuni Road</div>
                      <div className="text-gray-400">Narikkuni, Kozhikode, Kerala 673585</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">Hours</div>
                      <div className="text-gray-400">Sunday: 9:00 AM – 12:00 PM</div>
                      <div className="text-gray-400">Monday–Saturday: 9:00 AM – 6:00 PM</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a href="https://wa.me/918089314740" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700 transition w-full justify-center">
                      <MessageCircle className="w-4 h-4" />
                      Book on WhatsApp
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card variant="default" className="p-0">
                <h3 className="text-lg font-semibold mb-4 text-white p-6 pb-0">Find Us on the Map</h3>
                <div className="w-full h-64 tablet-portrait:h-80 tablet-landscape:h-96">
                  <iframe
                    title="Auto Vibe location"
                    src="https://www.google.com/maps?q=Narikkuni%20Kozhikode&output=embed"
                    className="w-full h-full border-0 rounded-b-xl"
                    loading="lazy"
                  />
                </div>
              </Card>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://maps.app.goo.gl/iCPXI5hLHqzYEoXKV" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-zinc-800 text-sm text-gray-200 hover:bg-zinc-700 transition">
                  Open in Google Maps
                </a>
                <a href="https://share.google/iCPXI5hLHqzYEoXKV" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-zinc-800 text-sm text-gray-200 hover:bg-zinc-700 transition">
                  Share Location
                </a>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* CTA - Card-Driven Layout */}
        <Section spacing="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="elevated" className="bg-gradient-to-r from-zinc-900 to-zinc-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Experience the Difference?</h3>
                  <p className="text-gray-400">Join hundreds of satisfied customers who trust Auto Vibe with their vehicles.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/918089314740" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-green-600 text-white font-bold hover:bg-green-700 transition">
                    <MessageCircle className="w-5 h-5" />
                    Book Now
                  </a>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'contact' }))}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-red-600 text-white font-bold hover:bg-red-700 transition"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        </Section>
      </div>
    </div>
  )
}
