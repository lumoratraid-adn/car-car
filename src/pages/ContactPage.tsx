import { ContactSection } from '../components/ContactSection';
import { LocationSection } from '../components/LocationSection';
export function ContactPage() {
  return <div className="bg-black text-white min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 border-l-2 border-red-600 pl-4 inline-block">Contact Us</h1>
        <p className="text-lg text-gray-400 mt-6">
          Ready to transform your vehicle? Call us or visit our studio in
          Narikkuni.
        </p>
      </div>
      <ContactSection />
      <LocationSection />
    </div>;
}