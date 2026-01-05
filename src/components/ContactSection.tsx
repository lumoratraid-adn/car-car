import { MapPin, MessageCircle, Phone } from 'lucide-react';
export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-black text-gray-200 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-green-900/10" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>

        <div className="space-y-4">
          <a href="tel:8089314740" className="block w-full bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-800 hover:border-zinc-700 hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-red-600 transition-colors">
                <Phone className="w-6 h-6 text-gray-200 group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-gray-400">Call Us Now</p>
                <p className="text-xl font-bold text-white">808 9314 740</p>
              </div>
            </div>
          </a>

          <a href="tel:9074997502" className="block w-full bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-800 hover:border-zinc-700 hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-red-600 transition-colors">
                <Phone className="w-6 h-6 text-gray-200 group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-gray-400">Alternative Number</p>
                <p className="text-xl font-bold text-white">907 4997 502</p>
              </div>
            </div>
          </a>

          <a href="https://wa.me/919074997502" target="_blank" rel="noopener noreferrer" className="block w-full bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-800 hover:border-green-600 hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-green-600 p-3 rounded-full group-hover:bg-green-700 transition-colors">
                <MessageCircle className="w-6 h-6 text-white group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-green-300">Chat on WhatsApp</p>
                <p className="text-xl font-bold text-white">Message Us</p>
              </div>
            </div>
          </a>

          <a href="https://maps.app.goo.gl/iCPXI5hLHqzYEoXKV" target="_blank" rel="noopener noreferrer" className="block w-full bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-800 hover:border-zinc-700 hover:shadow-md transition-all group">
            <div className="flex items-center justify-center">
              <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-red-600 transition-colors">
                <MapPin className="w-6 h-6 text-gray-200 group-hover:text-white" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm text-gray-400">Visit Studio</p>
                <p className="text-xl font-bold text-white">
                  Get Directions
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}