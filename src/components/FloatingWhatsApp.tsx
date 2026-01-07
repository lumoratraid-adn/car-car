import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function FloatingWhatsApp() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] flex items-center group flex-row-reverse">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="absolute right-16 bg-brand-gold text-black px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap pointer-events-none border border-brand-gold-light/50"
                    >
                        Book Now on WhatsApp
                        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-gold rotate-45 border-r border-t border-brand-gold-light/50" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href="https://wa.me/919074997502"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-14 h-14 bg-green-600 hover:bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-colors relative"
                aria-label="Book on WhatsApp"
            >
                <MessageCircle className="w-8 h-8 fill-white/10" />

                {/* Pulsing Aura */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none" />
            </motion.a>
        </div>
    );
}
