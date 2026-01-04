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

  return (
    <footer className="bg-gray-950 text-gray-300 pt-14 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* About / Brand */}
          <div>
            <img
              src="/logo.svg"
              alt="Auto Vibe Logo"
              className="h-20 w-auto mb-4 block"
            />
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
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
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Subscribe with email"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-red-600 text-white text-sm hover:bg-red-700 transition mt-2 sm:mt-0"
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
                <a href="/services" className="hover:text-white transition">
                  Exterior Wash & Wax
                </a>
              </li>
              <li>
                <a href="/services#detailing" className="hover:text-white transition">
                  Full Detailing
                </a>
              </li>
              <li>
                <a href="/services#ceramic" className="hover:text-white transition">
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="/services#interior" className="hover:text-white transition">
                  Interior Deep Clean
                </a>
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
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/reviews" className="hover:text-white transition">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact
            </h3>

            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
              <p className="text-sm leading-relaxed">
                Poonoor – Narikkuni Road,
                <br />
                Narikkuni, Kozhikode, Kerala 673585
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <a href="tel:+918089314740" className="flex items-center gap-3 hover:text-white transition">
                <Phone className="w-4 h-4 text-red-600" />
                <span>+91 808 9314 740</span>
              </a>

              <a href="tel:+919074997502" className="flex items-center gap-3 hover:text-white transition">
                <Phone className="w-4 h-4 text-red-600" />
                <span>+91 907 4997 502</span>
              </a>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-red-600" />
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
            <a href="/privacy" className="text-gray-500 hover:text-white transition">
              Privacy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-white transition">
              Terms
            </a>
            <span className="text-gray-600">•</span>
            <span className="text-gray-500">Built with care</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
