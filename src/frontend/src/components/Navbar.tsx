import { Button } from "@/components/ui/button";
import { Menu, Plane, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", ocid: "nav.home_link" },
  { label: "About Us", href: "#about", ocid: "nav.about_link" },
  { label: "Services", href: "#services", ocid: "nav.services_link" },
  {
    label: "Destinations",
    href: "#destinations",
    ocid: "nav.destinations_link",
  },
  { label: "Packages", href: "#packages", ocid: "nav.packages_link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact_link" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-darkest/95 backdrop-blur-md shadow-navy"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2.5 group"
            data-ocid="nav.home_link"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-bright to-teal-light flex items-center justify-center shadow-teal">
              <Plane className="w-5 h-5 text-white -rotate-45" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight">
                SmartTrip
              </span>
              <span className="text-gold text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase">
                Assist
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                data-ocid={link.ocid}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              data-ocid="nav.quote_button"
              onClick={() => handleNav("#contact")}
              className="hidden sm:flex bg-gold-warm hover:bg-gold-light text-navy-darkest font-semibold text-sm px-5 py-2.5 rounded-xl shadow-gold transition-all duration-200 hover:shadow-lg"
            >
              Get a Quote
            </Button>
            <button
              type="button"
              data-ocid="nav.mobile_menu_toggle"
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden p-2 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-navy-darkest/98 backdrop-blur-xl shadow-2xl pt-20 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  type="button"
                  key={link.href}
                  data-ocid={link.ocid}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto">
              <Button
                onClick={() => handleNav("#contact")}
                className="w-full bg-gold-warm hover:bg-gold-light text-navy-darkest font-bold text-sm rounded-xl shadow-gold"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
