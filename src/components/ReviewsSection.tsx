import { motion } from 'framer-motion';
import { ExternalLink, Quote, Star } from 'lucide-react';
const reviews = [{
  id: 1,
  name: 'Mohammed Ramees',
  rating: 5,
  date: '2 months ago',
  text: 'Excellent service! I did ceramic coating for my car here. The result was amazing. Professional staff and timely delivery. Highly recommended for anyone looking for premium car detailing.'
}, {
  id: 2,
  name: 'Arun Kumar',
  rating: 5,
  date: '1 month ago',
  text: 'Best detailing studio in Narikkuni area. They did a fantastic job with the interior cleaning and exterior polishing. My car looks brand new again. Very satisfied with their work.'
}, {
  id: 3,
  name: 'Fasil K',
  rating: 5,
  date: '3 months ago',
  text: 'Great experience at Auto Vibe. The team is very knowledgeable about different coatings. I opted for the Graphene coating and the gloss is incredible. Worth every penny.'
}, {
  id: 4,
  name: 'Rahul P',
  rating: 5,
  date: '1 month ago',
  text: 'Professional approach and quality work. They explained everything clearly before starting the work. The headlight restoration was perfect. Will definitely visit again.'
}, {
  id: 5,
  name: 'Jaseem VK',
  rating: 5,
  date: '4 months ago',
  text: 'Top notch service. The attention to detail is impressive. They cleaned every nook and corner. The anti-rust treatment was done very professionally.'
}, {
  id: 6,
  name: 'Sajid Ali',
  rating: 5,
  date: '2 months ago',
  text: 'Highly recommended! Good customer service and affordable pricing compared to other detailing centers. The staff is very friendly and skilled.'
}];
export function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-brand-gold/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              What Our <span className="text-brand-gold">Customers Say</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-4xl font-bold text-white">4.9</span>
              <div className="flex flex-col items-start">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-sm text-gray-400">
                  Based on 16+ Google Reviews
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 tablet-landscape:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => <motion.div key={review.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-gray-900/60 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    {review.name}
                  </h3>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
              <Quote className="w-6 h-6 text-gray-700 group-hover:text-brand-gold/50 transition-colors" />
            </div>

            <div className="flex text-yellow-500 mb-3">
              {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              "{review.text}"
            </p>
          </motion.div>)}
        </div>

        <div className="text-center">
          <motion.a href="https://www.google.com/search?sca_esv=b4f6c3afd6a29af1&hl=en&gl=in&output=search&kgmid=/g/11ts36t6tr&q=Auto+Vibe&shndl=30&shem=ptotple,uibspc,shrtsdl&source=sh/x/loc/act/m1/2&kgs=c5cc55d2d288927c&utm_source=ptotple,uibspc,shrtsdl,sh/x/loc/act/m1/2#lrd=0x3ba6678881816823:0xbfaa5ef498f63f51,1,,,," target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="inline-flex items-center px-8 py-3 bg-brand-gold text-black font-bold rounded-full hover:bg-brand-gold-light transition-colors">
            Read All Reviews
            <ExternalLink className="w-4 h-4 ml-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}