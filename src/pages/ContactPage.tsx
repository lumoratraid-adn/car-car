import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Card } from '../components/Card';
import { Section } from '../components/Section';

export function ContactPage() {

  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-blue-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
          >
            Get In <span className="text-red-600">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Ready to transform your vehicle? Contact us for premium detailing services in Narikkuni.
          </motion.p>
        </div>
      </div>

      {/* Contact Info and Map - Card-Driven Layout */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-gray-400">Ready to transform your vehicle? Contact us today.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <Card variant="elevated">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">808 9314 740</p>
                    <p className="text-gray-400">907 4997 502</p>
                  </div>
                </div>
              </Card>

              <Card variant="elevated">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">info@autovibe.com</p>
                  </div>
                </div>
              </Card>

              <Card variant="elevated">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-400">Poonoor – Narikkuni Road</p>
                    <p className="text-gray-400">Narikkuni, Kozhikode, Kerala 673585</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card variant="elevated">
              <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00 AM - 12:00 PM</span>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="bg-gradient-to-r from-zinc-900 to-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-4">Ready to Book?</h3>
              <p className="text-gray-400 mb-4">
                Contact us today for premium car detailing services.
              </p>
              <a
                href="https://wa.me/918089314740"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Visit Our Studio</h2>
              <div className="w-full h-64 tablet-portrait:h-80 tablet-landscape:h-96 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg">
                <iframe
                  title="Auto Vibe location"
                  src="https://www.google.com/maps?q=Narikkuni%20Kozhikode&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/iCPXI5hLHqzYEoXKV"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-zinc-800 text-sm text-gray-200 hover:bg-zinc-700 transition"
              >
                Open in Google Maps
              </a>
              <a
                href="https://share.google/iCPXI5hLHqzYEoXKV"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-zinc-800 text-sm text-gray-200 hover:bg-zinc-700 transition"
              >
                Share Location
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}