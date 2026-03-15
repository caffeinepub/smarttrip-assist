import { Mail, MessageCircle, Phone, Plane } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Contact Us", href: "#contact" },
];

const topDestinations = [
  "Dubai & UAE",
  "Italy & Europe",
  "Thailand & Bali",
  "India Tours",
  "Sri Lanka",
  "Paris & Amsterdam",
  "Saudi Arabia & Oman",
];

const servicesList = [
  "Hotel Bookings",
  "Flight Reservations",
  "Visa Assistance",
  "Holiday Packages",
  "Group Tours",
  "Corporate Travel",
  "Honeymoon Packages",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-darkest border-t border-white/8">
      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-bright to-teal-light flex items-center justify-center shadow-teal">
                <Plane className="w-5 h-5 text-white -rotate-45" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg">
                  SmartTrip
                </span>
                <span className="text-gold text-[10px] font-semibold tracking-[0.18em] uppercase">
                  Assist
                </span>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Your World-Class Travel Partner. We plan unforgettable journeys to
              destinations worldwide.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+917019301027"
                className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-bright" />
                +91 7019301027
              </a>
              <a
                href="https://wa.me/917019301027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                WhatsApp (International)
              </a>
              <a
                href="mailto:smarttripassist@gmail.com"
                className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-warm" />
                smarttripassist@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(href)}
                    className="text-white/55 hover:text-teal-bright text-sm transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Destinations
            </h4>
            <ul className="space-y-2.5">
              {topDestinations.map((d) => (
                <li key={d}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#destinations")}
                    className="text-white/55 hover:text-teal-bright text-sm transition-colors text-left"
                  >
                    {d}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicesList.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#services")}
                    className="text-white/55 hover:text-teal-bright text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} SmartTrip Assist. All Rights
            Reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with &hearts; using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-bright/60 hover:text-teal-bright transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
