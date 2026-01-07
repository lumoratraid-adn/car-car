import { motion } from 'framer-motion';
import { ArrowRight, Award, Shield, Star, Users } from 'lucide-react';
import { Card } from '../components/Card';
import { CountUp } from '../components/CountUp';
import { HeroSection } from '../components/HeroSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { Section } from '../components/Section';
import { ServicesSection } from '../components/ServicesSection';
import { HowItWorks } from '../components/HowItWorks';
import { WhyAutoVibe } from '../components/WhyAutoVibe';


export function HomePage() {
  const stats = [
    { icon: Users, value: 1000, suffix: '+', label: 'Happy Customers', image: '/shake hand.jpg' },
    { icon: Award, value: 4.9, decimals: 1, label: 'Google Rating', image: '/rating.jpg' },
    { icon: Shield, value: 4, suffix: '+', label: 'Years Experience', image: '/experience.jpg' },
    { icon: Star, value: 100, suffix: '%', label: 'Satisfaction', image: '/satisfaction2.jpg' }
  ];

  const quickServices = [
    { name: 'Basic Wash', desc: 'Exterior wash & tire shine' },
    { name: 'Premium Detail', desc: 'Full exterior detailing' },
    { name: 'Ceramic Coating', desc: 'Long-lasting protection' }
  ];

  return (
    <div className="relative bg-black min-h-screen">
      {/* Page Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/home bg.jpg"
          alt="Page Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay to darken background for content readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Hero Section keeps its own background */}
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
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              Our Impact
            </motion.h2>
            <motion.p
              className="text-gray-400 max-w-2xl mx-auto mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Numbers that speak for our commitment to excellence.
              In a short period of time, Auto Vibe has transformed the automotive care landscape,
              serving over 1,000 satisfied customers with premium detailing and cutting-edge techniques.
              We've rapidly become the trusted choice for car enthusiasts, setting new industry standards
              in quality and customer satisfaction.
            </motion.p>
            <motion.p
              className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >

            </motion.p>
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
                  <Card variant="elevated" className="group text-center h-full relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                      <img
                        src={stat.image}
                        alt={stat.label}
                        className="w-full h-full object-cover opacity-50"
                      />
                      <div className="absolute inset-0 bg-black/50" />
                    </div>

                    <div className="flex flex-col items-center relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center border border-brand-gold/20 transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)]">
                          <Icon className="w-8 h-8 text-brand-gold" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        <CountUp
                          to={stat.value}
                          suffix={stat.suffix}
                          decimals={stat.decimals}
                          duration={2.5}
                        />
                      </div>
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
          <ServicesSection />
        </div>

        {/* How It Works Section */}
        <HowItWorks />

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
                <Card variant="default" className="h-full group cursor-pointer hover:border-brand-gold/30">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">{service.desc}</p>
                    <div className="flex items-center justify-end mt-auto">
                      <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
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
                className="px-8 py-3 bg-brand-gold hover:bg-brand-gold-light text-black font-bold rounded-lg transition-colors w-full"
              >
                View All Services
              </button>
            </Card>
          </div>
        </Section>

        {/* Why Choose Us Section */}
        <WhyAutoVibe />

        {/* Reviews Section with background */}
        <div className="bg-black/20 py-16">
          <ReviewsSection />
        </div>

        {/* Visual Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent w-full" />
      </div>
    </div>
  );
}
