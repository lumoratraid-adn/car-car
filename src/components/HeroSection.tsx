import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
export function HeroSection() {
  return <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img className="absolute left-0 top-0 w-[100vw] h-full object-cover object-left" src="/ChatGPT_Image_Jan_3,_2026,_07_33_56_PM.png" alt="Professional car detailing overhead view" />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 w-full pt-20">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-6 lg:ml-16 text-center md:text-left">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-red-600" />
              <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm">
                Premium Auto Care
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight mb-6">
              PERFECTION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                IN DETAIL
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl md:max-w-lg leading-relaxed mb-6 font-light mx-auto md:mx-0 border-l-0 md:border-l-2 md:pl-6">
              Transform your vehicle with our premium detailing services. Ceramic coating, paint protection, and deep restoration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="tel:8089314740" className="group w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-red-600 hover:bg-red-700 transition-all rounded-md border border-red-600">
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                BOOK APPOINTMENT
              </motion.a>

              <motion.a whileHover={{ scale: 1.02, x: 5 }} whileTap={{ scale: 0.98 }} href="#services" className="group w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-white/30 hover:bg-white/10 transition-all rounded-md backdrop-blur-sm">
                EXPLORE SERVICES
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
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
        <div className="w-[1px] h-12 bg-gradient-to-b from-red-600 to-transparent" />
      </motion.div>
    </section>;
}