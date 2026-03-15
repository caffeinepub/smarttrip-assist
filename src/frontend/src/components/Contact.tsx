import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Plan Your Next Adventure
          </h2>
          <p className="text-muted-foreground text-lg">
            Reach out via phone, WhatsApp, or email. We serve clients worldwide.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Contact Options
            </h3>

            <div className="space-y-5">
              {/* Phone India */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-darkest text-white">
                <div className="w-12 h-12 rounded-xl bg-teal-bright/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-teal-bright" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-teal-bright uppercase tracking-wider mb-1">
                    &#128222; Call Us &mdash; India Customers
                  </p>
                  <a
                    href="tel:+917019301027"
                    className="font-display text-xl font-bold text-white hover:text-gold transition-colors"
                  >
                    +91 7019301027
                  </a>
                  <p className="text-white/50 text-sm mt-1">
                    Direct phone line for India-based travelers
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917019301027"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_button"
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#075E54] text-white hover:bg-[#128C7E] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-300 uppercase tracking-wider mb-1">
                    &#128172; WhatsApp &mdash; International
                  </p>
                  <p className="font-display text-xl font-bold text-white">
                    +91 7019301027
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    International WhatsApp Inquiries
                  </p>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-muted border border-border">
                <div className="w-12 h-12 rounded-xl bg-gold-warm/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold-warm" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold-warm uppercase tracking-wider mb-1">
                    &#9993; Email Us
                  </p>
                  <a
                    href="mailto:smarttripassist@gmail.com"
                    className="font-semibold text-foreground hover:text-teal-bright transition-colors text-lg"
                  >
                    smarttripassist@gmail.com
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    We respond within 2 hours
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-muted border border-border">
                <div className="w-12 h-12 rounded-xl bg-teal-bright/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-teal-bright" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-teal-bright uppercase tracking-wider mb-1">
                    Office Hours
                  </p>
                  <p className="font-semibold text-foreground">
                    Mon&ndash;Sat: 10:00 AM &ndash; 6:00 PM (IST)
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
