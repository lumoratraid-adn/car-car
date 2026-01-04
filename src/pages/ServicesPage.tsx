import { ContactSection } from '../components/ContactSection';
import { ServicesSection } from '../components/ServicesSection';
export function ServicesPage() {
  return <div className="bg-black text-white min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 border-l-2 border-red-600 pl-4">
          Detailed Services
        </h1>
        <p className="text-lg text-gray-400">
          We offer a comprehensive range of detailing services tailored for the
          Kerala climate. Our team uses premium products to ensure long-lasting
          protection.
        </p>
      </div>
      <ServicesSection detailed />
      <div className="bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Protection Matters
          </h2>
          <div className="prose prose-invert max-w-none text-gray-400">
            <p className="mb-4">
              Kerala's weather can be harsh on your vehicle. The combination of
              intense sun, heavy monsoon rains, and coastal humidity accelerates
              paint degradation and rust.
            </p>
            <p>
              Our ceramic and graphene coatings provide a sacrificial layer that
              protects your original paint from UV rays, acid rain, and road
              grime, keeping your car looking new for years while making it
              easier to clean.
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>;
}