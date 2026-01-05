import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative min-h-screen h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          className="absolute left-0 top-0 w-[100vw] h-full object-cover object-left"
          src="/ChatGPT_Image_Jan_3,_2026,_07_33_56_PM.png"
          alt="Professional car detailing overhead view"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-brand-cyan/10" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 right-20 w-32 h-32 bg-brand-teal rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-brand-cyan rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 w-full pt-20">
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
                <div className="h-px w-12 bg-brand-teal" />
                <span className="text-brand-cyan font-bold tracking-[0.2em] uppercase text-sm">
                  Premium Auto Care
                </span>
              </div>
            </motion.div>
            <motion.h1 variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight mb-6">
              PERFECTION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                IN DETAIL
              </span>
            </motion.h1>

            <motion.p variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-base sm:text-lg text-gray-300 max-w-xl md:max-w-lg leading-relaxed mb-6 font-light mx-auto md:mx-0 border-l-0 md:border-l-2 md:pl-6 border-brand-teal">
              Transform your vehicle with our premium 2026 detailing services. AI-powered diagnostics, sustainable eco-friendly products, ceramic coating, and deep restoration.
            </motion.p>

            <motion.div variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }} transition={{ duration: 0.8, ease: 'easeOut' }} className="flex flex-col sm:flex-row gap-4">
              <motion.a whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(13, 148, 136, 0.5)' }} whileTap={{ scale: 0.98 }} href="tel:8089314740" className="group w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-brand-teal hover:bg-brand-cyan transition-all rounded-md border border-brand-teal">
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                BOOK APPOINTMENT
              </motion.a>

              <motion.a whileHover={{ scale: 1.05, x: 5, boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }} whileTap={{ scale: 0.98 }} href="#services" className="group w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-white/30 hover:bg-white/10 transition-all rounded-md backdrop-blur-sm">
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
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-teal to-transparent" />
      </motion.div>
    </section>
  );
}