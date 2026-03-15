import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg-v3.dim_1600x900.jpg"
          alt="World travel destinations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-darkest/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            Explore the World
            <br />
            <span className="text-gold">with Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/75 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            Expert travel planning for{" "}
            <span className="text-white font-semibold">
              Hotels &middot; Flights &middot; Visas &middot; Holiday Packages
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              data-ocid="hero.explore_button"
              onClick={() => scrollTo("#destinations")}
              className="bg-teal-bright hover:bg-teal-light text-white font-bold text-base px-8 py-4 rounded-xl shadow-teal h-auto transition-all duration-200 hover:scale-105"
            >
              Explore Destinations
            </Button>
            <Button
              data-ocid="hero.contact_button"
              onClick={() => scrollTo("#contact")}
              variant="outline"
              className="border-2 border-white/40 text-white bg-white/10 backdrop-blur hover:bg-white/20 hover:border-white/60 font-bold text-base px-8 py-4 rounded-xl h-auto transition-all duration-200"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollTo("#about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>
    </section>
  );
}
