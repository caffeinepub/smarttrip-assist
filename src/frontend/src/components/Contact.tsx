import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Subject } from "../backend";
import { useActor } from "../hooks/useActor";

const subjectOptions = [
  { value: Subject.hotelBooking, label: "Hotel Booking" },
  { value: Subject.flightReservation, label: "Flight Reservation" },
  { value: Subject.visaAssistance, label: "Visa Assistance" },
  { value: Subject.holidayPackage, label: "Holiday Package" },
  { value: Subject.general, label: "General Inquiry" },
];

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "" as Subject | "",
    destination: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.subject || !actor) return;
    setStatus("loading");
    try {
      await actor.submitInquiry({
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject as Subject,
        message: form.destination
          ? `Destination: ${form.destination}\n\n${form.message}`
          : form.message,
      });
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        destination: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left: Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
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
                    Mon&ndash;Sat, 9:00 AM &ndash; 7:00 PM (IST)
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    We serve clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-card rounded-2xl p-7 sm:p-8 shadow-card border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send an Inquiry
              </h3>

              {status === "success" && (
                <div
                  data-ocid="contact.success_state"
                  className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 mb-6"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                  <div>
                    <p className="font-semibold text-sm">
                      Inquiry Sent Successfully!
                    </p>
                    <p className="text-xs mt-0.5 text-green-700">
                      We&apos;ll get back to you within 2 hours. Thank you for
                      choosing SmartTrip Assist!
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 mb-6"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                  <div>
                    <p className="font-semibold text-sm">
                      Something went wrong
                    </p>
                    <p className="text-xs mt-0.5 text-red-700">
                      Please try again or contact us via WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.name_input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.email_input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-ocid="contact.phone_input"
                      placeholder="+1 234 567 8900"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </Label>
                    <Select
                      value={form.subject}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, subject: v as Subject }))
                      }
                    >
                      <SelectTrigger
                        id="subject"
                        data-ocid="contact.subject_select"
                        className="rounded-xl"
                      >
                        <SelectValue placeholder="Select topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjectOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="destination" className="text-sm font-medium">
                    Destination of Interest
                  </Label>
                  <Input
                    id="destination"
                    data-ocid="contact.destination_input"
                    placeholder="e.g. Dubai, Bali, Italy..."
                    value={form.destination}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, destination: e.target.value }))
                    }
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.message_textarea"
                    placeholder="Tell us about your travel plans, dates, group size, and any special requirements..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    required
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={status === "loading"}
                  className="w-full bg-teal-bright hover:bg-teal-light text-white font-bold text-base rounded-xl h-12 shadow-teal transition-all duration-200 hover:shadow-lg"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
