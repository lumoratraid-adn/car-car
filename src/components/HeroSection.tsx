import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.12]"
          poster="/hero image2.JPG"
        >
          <source src="/BMW M3 Competition - 4K Cinematic Short Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-red/5" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 right-20 w-32 h-32 bg-brand-gold rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-brand-red rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-6 lg:ml-16 text-center md:text-left">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}>
            <motion.div variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-brand-gold" />
                <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">
                  Premium Auto Care
                </span>
              </div>
            </motion.div>
            <motion.h1 variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight mb-6">
              PERFECTION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold to-white/60">
                IN DETAIL
              </span>
            </motion.h1>

            <motion.p variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-base sm:text-lg text-gray-300 max-w-xl md:max-w-lg leading-relaxed mb-6 font-light mx-auto md:mx-0 border-l-0 md:border-l-2 md:pl-6 border-brand-gold">
              Transform your vehicle with our premium 2026 detailing services. AI-powered diagnostics, sustainable eco-friendly products, ceramic coating, and deep restoration.
            </motion.p>

            <motion.div variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }} transition={{ duration: 0.8, ease: 'easeOut' }} className="flex flex-col sm:flex-row gap-4">
              <motion.a whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(252, 218, 6, 0.4)' }} whileTap={{ scale: 0.98 }} href="tel:8089314740" className="group w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base font-bold text-black bg-brand-gold hover:bg-brand-gold-light transition-all rounded-md">
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                BOOK APPOINTMENT
              </motion.a>

              <motion.a whileHover={{ scale: 1.05, x: 5, boxShadow: '0 0 20px rgba(229, 25, 18, 0.2)' }} whileTap={{ scale: 0.98 }} href="#services" className="group w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-brand-red/30 hover:bg-brand-red/10 transition-all rounded-md backdrop-blur-sm">
                EXPLORE SERVICES
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 1
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-gray-500">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}