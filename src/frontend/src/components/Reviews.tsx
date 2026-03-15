import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Ahmed Al-Rashidi",
    country: "UAE",
    flag: "🇦🇪",
    rating: 5,
    text: "SmartTrip Assist planned our family trip to Europe perfectly. Every hotel, every flight, every detail was handled professionally. Truly world-class service!",
    trip: "Europe Family Tour",
  },
  {
    name: "Priya Nair",
    country: "India",
    flag: "🇮🇳",
    rating: 5,
    text: "I needed a visa for Thailand urgently and the team helped me get it in just 2 days. Their WhatsApp support is incredibly responsive. Highly recommended!",
    trip: "Thailand Visa & Package",
  },
  {
    name: "James O'Sullivan",
    country: "Ireland",
    flag: "🇮🇪",
    rating: 5,
    text: "We booked a 2-week Bali and Thailand package and it exceeded all expectations. The customized itinerary was perfect for our family of four. Will definitely use SmartTrip again!",
    trip: "Bali & Thailand Package",
  },
  {
    name: "Fatima Al-Zahra",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    rating: 5,
    text: "The Sri Lanka tour package was absolutely magical. Professional guidance from start to finish. SmartTrip Assist made our dream holiday a reality.",
    trip: "Sri Lanka Discovery Tour",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {count >= 1 && <Star className="w-4 h-4 text-gold-warm fill-gold-warm" />}
      {count >= 2 && <Star className="w-4 h-4 text-gold-warm fill-gold-warm" />}
      {count >= 3 && <Star className="w-4 h-4 text-gold-warm fill-gold-warm" />}
      {count >= 4 && <Star className="w-4 h-4 text-gold-warm fill-gold-warm" />}
      {count >= 5 && <Star className="w-4 h-4 text-gold-warm fill-gold-warm" />}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-3">What Travelers Say</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Travelers Worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            Over 50,000 happy travelers have trusted SmartTrip Assist to plan
            their dream journeys.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map(({ name, country, flag, rating, text, trip }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border relative overflow-hidden"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-teal-bright/10" />
              <StarRating count={rating} />
              <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-navy-darkest flex items-center justify-center text-lg">
                  {flag}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {country} &middot; {trip}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
