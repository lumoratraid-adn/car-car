import { Clock, MapPin, MessageCircle } from 'lucide-react';
import { WhyAutoVibeCondensed } from '../components/WhyAutoVibeCondensed';

export function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Auto Vibe</h1>
          <p className="mt-2 text-gray-400 text-sm sm:text-base border-l-2 border-red-600 pl-4">
            Local car wash & detailing studio in Narikkuni, Kozhikode — honest,
            reliable service focused on care and value.
          </p>
        </header>

        {/* Intro */}
        <section className="prose prose-invert prose-sm sm:prose-base max-w-none text-gray-300 mb-8">
          <p>
            Auto Vibe is a neighbourhood car wash and detailing studio serving
            Narikkuni and surrounding areas. We focus on thorough, careful work
            delivered by trained technicians using proven products and techniques.
            Our approach is straightforward: do the job right, treat every car
            as if it were our own, and be honest about what the vehicle needs.
          </p>
          <p>
            We opened our doors at the end of 2022 and have built a loyal local
            customer base through consistent quality and friendly service.
          </p>
        </section>

        <WhyAutoVibeCondensed />

        {/* Business Info Card + Map */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">
          <div className="lg:col-span-1 p-5 border rounded-md bg-zinc-900 border-zinc-800">
            <h3 className="text-sm font-semibold mb-3">Business Information</h3>
            <div className="text-sm text-gray-300 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <div className="font-medium">Address</div>
                  <div>Poonoor – Narikkuni Road</div>
                  <div>Narikkuni, Kozhikode, Kerala 673585</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <div className="font-medium">Hours</div>
                  <div>Sunday: 9:00 AM – 12:00 PM</div>
                  <div>Monday–Saturday: 9:00 AM – 6:00 PM</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="font-medium">Google rating</div>
                <div className="text-sm text-gray-400">4.9 (16 reviews)</div>
              </div>

              <div className="pt-2">
                <a href="https://wa.me/918089314740" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700 transition">
                  <MessageCircle className="w-4 h-4" />
                  Appointments via WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold mb-3 text-white">Find us</h3>
            <div className="w-full h-56 sm:h-72 rounded-md overflow-hidden border border-zinc-800 bg-zinc-900">
              <iframe
                title="Auto Vibe location"
                src="https://www.google.com/maps?q=Narikkuni%20Kozhikode&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <a href="https://maps.app.goo.gl/iCPXI5hLHqzYEoXKV" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-zinc-800 text-sm text-gray-200 hover:bg-zinc-700 transition">
                Open in Google Maps
              </a>

              <a href="https://share.google/iCPXI5hLHqzYEoXKV" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-zinc-800 text-sm text-gray-200 hover:bg-zinc-700 transition">
                Share location
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-md p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium">Ready to book?</h3>
            <p className="text-sm text-gray-400 mt-1">Quick appointments via WhatsApp — we reply promptly.</p>
          </div>

          <div className="flex gap-3">
            <a href="https://wa.me/918089314740" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700 transition">
              <MessageCircle className="w-4 h-4" />
              Book on WhatsApp
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'services' })) }} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-sm hover:bg-zinc-700 transition">
              View Services
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
