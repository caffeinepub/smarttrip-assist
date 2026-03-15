import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const packages = [
  {
    tier: "Budget Explorer",
    badge: null,
    accentColor: "teal",
    features: [
      "Economy class flights",
      "3-star hotels",
      "Group tours",
      "Basic visa assistance",
      "24/7 email support",
      "Travel insurance option",
    ],
    ocid: "package.budget_button",
  },
  {
    tier: "Standard Journey",
    badge: "Most Popular",
    accentColor: "gold",
    features: [
      "Business class upgrades",
      "4-star hotels",
      "Semi-private tours",
      "Full visa assistance",
      "Priority phone support",
      "Airport transfers included",
    ],
    ocid: "package.standard_button",
  },
  {
    tier: "Premium Luxury",
    badge: null,
    accentColor: "teal",
    features: [
      "First class flights",
      "5-star luxury resorts",
      "Private guided tours",
      "VIP visa concierge",
      "Dedicated travel manager",
      "Exclusive experiences",
    ],
    ocid: "package.premium_button",
  },
];

export default function Packages() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="packages"
      className="py-20 sm:py-28 bg-navy-darkest relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 shimmer-gold opacity-60" />
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-teal-bright/5 blur-3xl" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 rounded-full bg-gold-warm/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-3">Travel Packages</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Travel Packages
          </h2>
          <p className="text-white/60 text-lg">
            Flexible packages crafted for every budget and travel style. Contact
            us for tailored pricing and availability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map(({ tier, badge, accentColor, features, ocid }, i) => (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 border flex flex-col ${
                badge
                  ? "bg-gradient-to-b from-gold-warm/10 to-transparent border-gold-warm/40 scale-[1.03]"
                  : "bg-white/4 border-white/10"
              }`}
            >
              {badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-warm text-navy-darkest text-xs font-bold shadow-gold">
                    {badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-white">
                  {tier}
                </h3>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-white/75"
                  >
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${
                        accentColor === "gold"
                          ? "text-gold-warm"
                          : "text-teal-bright"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                data-ocid={ocid}
                onClick={scrollToContact}
                className={`w-full font-bold rounded-xl h-11 ${
                  badge
                    ? "bg-gold-warm hover:bg-gold-light text-navy-darkest shadow-gold"
                    : "bg-teal-bright/15 hover:bg-teal-bright border border-teal-bright/30 text-teal-bright hover:text-white"
                } transition-all duration-200`}
              >
                Inquire Now
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/40 text-sm mt-10"
        >
          All packages are customizable to your needs · Contact us for group
          rates
        </motion.p>
      </div>
    </section>
  );
}
