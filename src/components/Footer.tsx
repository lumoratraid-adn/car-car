import {
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react"
import React, { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // Simple mailto fallback — integrate with a provider later
    const mailto = `mailto:hello@autovibe.example?subject=Subscribe&body=Please%20subscribe%20${encodeURIComponent(
      email
    )}`
    window.location.href = mailto
    setEmail("")
  }

  const navigateTo = (page: string) => {
    window.dispatchEvent(new CustomEvent('navigate-to', { detail: page }));
  };

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-300 pt-16 pb-8 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 via-transparent to-brand-gold/5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* About / Brand */}
          <div>
            {/* Logos */}
            <div className="flex flex-col items-start gap-4 mb-6 -mt-16">
              <div className="flex items-center gap-4">
                <img
                  src="/Car Logo Only.svg"
                  alt="Auto Vibe Icon"
                  className="h-[90px] md:h-[120px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 block"
                />
                <img
                  src="/logo text.svg"
                  alt="Auto Vibe"
                  className="h-[140px] md:h-[180px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 block -ml-5 md:-ml-7"
                  style={{ filter: 'brightness(2)' }}
                />
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Auto Vibe delivers premium car care in Narikkuni, Kozhikode —
              professional interior and exterior detailing since 2022.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                aria-label="Subscribe with email"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-brand-gold text-black font-bold text-sm hover:bg-brand-gold-light transition mt-2 sm:mt-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-white transition text-left">
                  Exterior Wash & Wax
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-white transition text-left">
                  Full Detailing
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-white transition text-left">
                  Ceramic Coating
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-white transition text-left">
                  Interior Deep Clean
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-white transition text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-white transition text-left">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-white transition text-left">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-white transition text-left">
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact
            </h3>

            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-brand-gold mt-0.5" />
              <p className="text-sm leading-relaxed">
                Poonoor – Narikkuni Road,
                <br />
                Narikkuni, Kozhikode, Kerala 673585
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <a href="tel:+918089314740" className="flex items-center gap-3 hover:text-white transition">
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>+91 808 9314 740</span>
              </a>

              <a href="tel:+919074997502" className="flex items-center gap-3 hover:text-white transition">
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>+91 907 4997 502</span>
              </a>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-gold" />
                <div className="text-sm">
                  <div>Sun: 9:00 AM – 12:00 PM</div>
                  <div>Mon–Sat: 9:00 AM – 6:00 PM</div>
                </div>
              </div>

              <a
                href="https://wa.me/918089314740"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-3 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700 transition"
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>

              <div className="flex gap-3 pt-4">
                <a
                  href="https://www.instagram.com/autovibeofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://maps.app.goo.gl/iCPXI5hLHqzYEoXKV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left w-full md:w-auto">
            © {new Date().getFullYear()} Auto Vibe Spa & Detailing. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs justify-center md:justify-start w-full md:w-auto">
            <button onClick={() => navigateTo('home')} className="text-gray-500 hover:text-white transition">
              Privacy
            </button>
            <button onClick={() => navigateTo('home')} className="text-gray-500 hover:text-white transition">
              Terms
            </button>
            <span className="text-gray-600">•</span>
            <span className="text-gray-500">Built with care</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
