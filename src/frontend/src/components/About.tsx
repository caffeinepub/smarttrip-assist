import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-3">About SmartTrip Assist</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 gold-underline">
              Your Trusted Global Travel Partner
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              SmartTrip Assist is a full-service travel agency helping clients
              worldwide plan unforgettable journeys. We specialize in hotel
              bookings, flight reservations, visa assistance, and bespoke
              holiday packages to destinations across every continent.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Whether you're dreaming of an intimate European escape, a family
              adventure through Southeast Asia, or a luxury Middle Eastern
              odyssey, our expert team curates every detail to perfection — so
              you travel with complete confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
