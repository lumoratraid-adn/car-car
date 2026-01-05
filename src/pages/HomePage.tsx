import { motion } from 'framer-motion';
import { ArrowRight, Award, Shield, Star, Users } from 'lucide-react';
import { Card } from '../components/Card';
import { HeroSection } from '../components/HeroSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { Section } from '../components/Section';
import { ServicesSection } from '../components/ServicesSection';
import { WhyAutoVibe } from '../components/WhyAutoVibe';

export function HomePage() {
  const stats = [
    { icon: Users, value: '1000+', label: 'Happy Customers' },
    { icon: Award, value: '4.9', label: 'Google Rating' },
    { icon: Shield, value: '4+', label: 'Years Experience' },
    { icon: Star, value: '100%', label: 'Satisfaction' }
  ];

  const quickServices = [
    { name: 'Basic Wash', desc: 'Exterior wash & tire shine' },
    { name: 'Premium Detail', desc: 'Full exterior detailing' },
    { name: 'Ceramic Coating', desc: 'Long-lasting protection' }
  ];

  return (
    <div className="bg-black min-h-screen">
      <HeroSection />

      {/* Stats Section - Boxed Design System */}
      <Section background="gradient" spacing="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-red-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Services Section with improved spacing */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />
        <ServicesSection />
      </div>

      {/* Popular Services Section - Card-Driven Layout */}
      <Section background="dark" spacing="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Popular Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Most requested detailing packages starting from affordable prices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="default" className="h-full group cursor-pointer hover:border-red-600/30">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{service.desc}</p>
                  <div className="flex items-center justify-end mt-auto">
                    <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Card variant="outlined" className="inline-block">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'services' }))}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors w-full"
            >
              View All Services
            </button>
          </Card>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <WhyAutoVibe />

      {/* Reviews Section with background */}
      <div className="bg-zinc-950 py-16">
        <ReviewsSection />
      </div>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent w-full" />
    </div>
  );
}