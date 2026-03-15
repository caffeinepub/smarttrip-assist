import { Clock, FileCheck, Shield, Tag } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Travel Assistance",
    description:
      "Our support team is available around the clock to help you with any travel emergency or query, wherever you are in the world.",
  },
  {
    icon: Tag,
    title: "Best Price Packages",
    description:
      "We negotiate the best rates on flights, hotels, and holiday packages so you get maximum value for your travel budget.",
  },
  {
    icon: FileCheck,
    title: "Visa & Documentation Support",
    description:
      "From visa applications to travel documents, our experts guide you through every step to ensure a hassle-free journey.",
  },
  {
    icon: Shield,
    title: "Trusted Travel Planning",
    description:
      "With years of experience and hundreds of satisfied travellers, SmartTrip Assist is your reliable partner for every trip.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      data-ocid="why_choose.section"
      className="py-16 bg-[#0a1628]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2">
          Why Choose <span className="text-[#00d4aa]">SmartTrip Assist</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-base">
          Everything you need for a seamless travel experience
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center bg-[#0f2040] border border-[#1a3a6a] rounded-2xl p-7 hover:border-[#00d4aa] transition-colors duration-300"
            >
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-[#00d4aa]/10">
                <Icon className="w-7 h-7 text-[#00d4aa]" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
