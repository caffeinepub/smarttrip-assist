import { FileText, Hotel, MapPin, Plane } from "lucide-react";
import { motion } from "motion/react";

const travelServices = [
  {
    icon: Hotel,
    title: "Hotel Bookings",
    description:
      "From budget stays to 5-star luxury resorts worldwide. We partner with 10,000+ properties to find you the perfect accommodation at the best rates.",
    color: "teal",
  },
  {
    icon: Plane,
    title: "Flight Reservations",
    description:
      "Best fares for economy, business, and first class. We search across airlines to secure competitive prices for domestic and international routes.",
    color: "gold",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description:
      "Expert guidance for tourist, business, and transit visas. Our specialists ensure accurate documentation and smooth processing for 80+ countries.",
    color: "teal",
  },
  {
    icon: MapPin,
    title: "Holiday Packages",
    description:
      "Fully customized itineraries tailored to your budget and interests. Family holidays, honeymoon escapes, group tours — all expertly planned.",
    color: "gold",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-3">What We Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Travel Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for a flawless journey, handled by experts who
            care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelServices.map(
            ({ icon: Icon, title, description, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-card rounded-2xl p-7 shadow-card border border-border hover:shadow-navy transition-shadow duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    color === "teal"
                      ? "bg-teal-bright/10 group-hover:bg-teal-bright/20"
                      : "bg-gold-warm/10 group-hover:bg-gold-warm/20"
                  } transition-colors`}
                >
                  <Icon
                    className={`w-7 h-7 ${
                      color === "teal" ? "text-teal-bright" : "text-gold-warm"
                    }`}
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
