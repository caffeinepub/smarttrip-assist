import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Destination = {
  id: number;
  name: string;
  country: string;
  region: "europe" | "middleeast" | "asia" | "africa";
  image: string;
  description: string;
  parent?: string;
};

const destinations: Destination[] = [
  // Europe
  {
    id: 1,
    name: "Italy",
    country: "Italy, Europe",
    region: "europe",
    image: "/assets/generated/italy.dim_800x500.jpg",
    description:
      "From the romance of Rome to the canals of Venice and the sun-kissed Amalfi Coast, Italy is a feast for the senses. Explore ancient ruins, world-class cuisine, and breathtaking landscapes.",
  },
  {
    id: 2,
    name: "Spain",
    country: "Spain, Europe",
    region: "europe",
    image: "/assets/generated/spain.dim_800x500.jpg",
    description:
      "Discover Gaudí's surreal masterpieces in Barcelona, the flamenco rhythms of Seville, and golden beaches of Costa del Sol. Spain blends passionate culture with endless sunshine.",
  },
  {
    id: 3,
    name: "Paris, France",
    country: "France, Europe",
    region: "europe",
    image: "/assets/generated/paris.dim_800x500.jpg",
    description:
      "The City of Light captivates with the iconic Eiffel Tower, world-renowned art museums, charming café culture, and haute cuisine. Paris is romance, art, and elegance personified.",
  },
  {
    id: 4,
    name: "Amsterdam",
    country: "Netherlands, Europe",
    region: "europe",
    image: "/assets/generated/amsterdam.dim_800x500.jpg",
    description:
      "A city of canals, bicycles, and blooming tulips. Amsterdam enchants with its golden-age architecture, vibrant arts scene, and world-class museums like the Rijksmuseum and Van Gogh Museum.",
  },
  {
    id: 5,
    name: "London",
    country: "United Kingdom, Europe",
    region: "europe",
    image: "/assets/generated/london.dim_800x500.jpg",
    description:
      "A global metropolis where history and modernity collide. From Buckingham Palace and Big Ben to the West End theaters and multicultural food scene, London never ceases to amaze.",
  },
  {
    id: 6,
    name: "Scotland",
    country: "Scotland, Europe",
    region: "europe",
    image: "/assets/generated/scotland.dim_800x500.jpg",
    description:
      "Wild highlands, ancient castles, and dramatic lochs await in Scotland. Experience Edinburgh's medieval Old Town, Loch Ness mysteries, and whisky distillery trails through stunning countryside.",
  },
  {
    id: 7,
    name: "Ireland",
    country: "Ireland, Europe",
    region: "europe",
    image: "/assets/generated/ireland.dim_800x500.jpg",
    description:
      "The Emerald Isle enchants with the dramatic Cliffs of Moher, cozy village pubs, and a warmth of culture and hospitality unmatched anywhere in the world.",
  },
  // Middle East
  {
    id: 8,
    name: "Dubai",
    country: "UAE, Middle East",
    region: "middleeast",
    image: "/assets/generated/dubai.dim_800x500.jpg",
    description:
      "The jewel of the Arabian Gulf — soaring Burj Khalifa, luxury shopping malls, golden desert safaris, and a skyline that redefines ambition. Dubai blends the ultra-modern with rich Emirati heritage.",
  },
  {
    id: 9,
    name: "Qatar",
    country: "Qatar, Middle East",
    region: "middleeast",
    image: "/assets/generated/qatar.dim_800x500.jpg",
    description:
      "Doha's futuristic skyline and the Museum of Islamic Art reflect Qatar's blend of heritage and innovation. Explore desert dunes, traditional souqs, and world-class hospitality.",
  },
  {
    id: 10,
    name: "Saudi Arabia",
    country: "Saudi Arabia, Middle East",
    region: "middleeast",
    image: "/assets/generated/saudi-arabia.dim_800x500.jpg",
    description:
      "Uncover the ancient Nabataean wonder of Al-Ula and Hegra, the spiritual heart of Mecca and Medina, and the dynamic capital Riyadh — Saudi Arabia is opening its doors to the world.",
  },
  {
    id: 11,
    name: "Oman",
    country: "Oman, Middle East",
    region: "middleeast",
    image: "/assets/generated/oman.dim_800x500.jpg",
    description:
      "A hidden gem of the Middle East: the Sultan Qaboos Grand Mosque, turquoise wadis, rugged mountains, and pristine beaches make Oman a destination of extraordinary beauty and serenity.",
  },
  {
    id: 12,
    name: "Bahrain",
    country: "Bahrain, Middle East",
    region: "middleeast",
    image: "/assets/generated/bahrain.dim_800x500.jpg",
    description:
      "A small island nation with big experiences — the ancient Bahrain Fort, Formula 1 circuit, vibrant souqs, and warm Arabian hospitality make this an ideal short-break destination.",
  },
  {
    id: 13,
    name: "Abu Dhabi",
    country: "UAE, Middle East",
    region: "middleeast",
    image: "/assets/generated/abu-dhabi.dim_800x500.jpg",
    description:
      "Abu Dhabi stuns with the magnificent Sheikh Zayed Grand Mosque, the Louvre Abu Dhabi, Ferrari World, and pristine corniche stretching along the glistening Gulf waters.",
  },
  {
    id: 14,
    name: "Sharjah",
    country: "UAE, Middle East",
    region: "middleeast",
    image: "/assets/generated/sharjah.dim_800x500.jpg",
    description:
      "The cultural capital of the UAE, Sharjah enchants with its world-class museums, traditional arts, Islamic architecture, and the tranquil Khalid Lagoon waterfront.",
  },
  {
    id: 33,
    name: "Azerbaijan",
    country: "Azerbaijan, Middle East",
    region: "middleeast",
    image: "/assets/generated/azerbaijan.dim_800x600.jpg",
    description:
      "Where East meets West — Baku's futuristic Flame Towers rise above a UNESCO-listed medieval old city on the Caspian Sea. Azerbaijan blends ancient Silk Road heritage with a modern, cosmopolitan energy unlike anywhere else in the region.",
  },
  // Asia
  {
    id: 15,
    name: "Taj Mahal, Agra",
    country: "India, Asia",
    region: "asia",
    image: "/assets/generated/india.dim_800x500.jpg",
    description:
      "One of the Seven Wonders of the World, the Taj Mahal is a timeless symbol of eternal love. Visit at sunrise for an ethereal experience that will stay with you forever.",
    parent: "India",
  },
  {
    id: 16,
    name: "Jaipur (Pink City)",
    country: "India, Asia",
    region: "asia",
    image: "/assets/generated/india-jaipur.dim_800x500.jpg",
    description:
      "The royal city of Jaipur dazzles with the majestic Amber Fort, the iconic Hawa Mahal, vibrant bazaars of gems and textiles, and a rich Rajasthani heritage.",
    parent: "India",
  },
  {
    id: 17,
    name: "Goa Beaches",
    country: "India, Asia",
    region: "asia",
    image: "/assets/generated/india-goa.dim_800x500.jpg",
    description:
      "India's beach paradise — Goa's golden sands, azure waters, Portuguese-heritage architecture, vibrant nightlife, and fresh seafood make it the perfect tropical escape.",
    parent: "India",
  },
  {
    id: 18,
    name: "Kerala Backwaters",
    country: "India, Asia",
    region: "asia",
    image: "/assets/generated/india-kerala.dim_800x500.jpg",
    description:
      "Drift through tranquil backwaters on a traditional houseboat, surrounded by swaying palms and lush paddy fields. Kerala's natural beauty makes it 'God's Own Country'.",
    parent: "India",
  },
  {
    id: 19,
    name: "Himalayan Destinations",
    country: "India, Asia",
    region: "asia",
    image: "/assets/generated/india-himalayas.dim_800x500.jpg",
    description:
      "From the spiritual heights of Rishikesh to the dramatic valleys of Manali and Ladakh, India's Himalayas offer world-class trekking and breathtaking vistas.",
    parent: "India",
  },
  {
    id: 20,
    name: "Bangkok",
    country: "Thailand, Asia",
    region: "asia",
    image: "/assets/generated/thailand-bangkok.dim_800x500.jpg",
    description:
      "Thailand's vibrant capital explodes with golden temples, bustling street food markets, rooftop bars, and the magnificent Grand Palace. Bangkok is a sensory overload in the best possible way.",
    parent: "Thailand",
  },
  {
    id: 21,
    name: "Phuket",
    country: "Thailand, Asia",
    region: "asia",
    image: "/assets/generated/thailand-phuket.dim_800x500.jpg",
    description:
      "Thailand's largest island boasts crystal-clear Andaman waters, dramatic karst landscapes, world-class diving, and lively beach towns that cater to every type of traveler.",
    parent: "Thailand",
  },
  {
    id: 22,
    name: "Krabi",
    country: "Thailand, Asia",
    region: "asia",
    image: "/assets/generated/thailand-krabi.dim_800x500.jpg",
    description:
      "Krabi's Railay Beach is among the most beautiful in Asia — towering limestone cliffs, emerald waters, and sea caves accessible only by longtail boat create a jaw-dropping escape.",
    parent: "Thailand",
  },
  {
    id: 23,
    name: "Bali",
    country: "Indonesia, Asia",
    region: "asia",
    image: "/assets/generated/bali.dim_800x500.jpg",
    description:
      "Bali's terraced rice fields, ancient Hindu temples, and spiritual energy create a unique destination. Explore Ubud's art scene, surf Seminyak's waves, and find inner peace.",
    parent: "Bali",
  },
  {
    id: 24,
    name: "Bali Temples & Culture",
    country: "Indonesia, Asia",
    region: "asia",
    image: "/assets/generated/bali-temple.dim_800x500.jpg",
    description:
      "The iconic Tanah Lot sea temple perched on a rock at sunset embodies Bali's sacred spirit. Balinese Hinduism infuses daily life with ceremonies, offerings, and profound beauty.",
    parent: "Bali",
  },
  {
    id: 25,
    name: "Sri Lanka",
    country: "Sri Lanka, Asia",
    region: "asia",
    image: "/assets/generated/sri-lanka.dim_800x500.jpg",
    description:
      "The Pearl of the Indian Ocean — from the ancient rock fortress of Sigiriya to misty tea plantations and pristine beaches, Sri Lanka is one of Asia's most rewarding destinations.",
    parent: "Sri Lanka",
  },
  {
    id: 26,
    name: "Sri Lanka Beaches",
    country: "Sri Lanka, Asia",
    region: "asia",
    image: "/assets/generated/sri-lanka-beach.dim_800x500.jpg",
    description:
      "Mirissa, Unawatuna, and Arugam Bay offer some of Asia's most beautiful beaches — perfect for whale watching, surfing, and relaxing under swaying coconut palms.",
    parent: "Sri Lanka",
  },
  {
    id: 27,
    name: "Sri Lanka Wildlife",
    country: "Sri Lanka, Asia",
    region: "asia",
    image: "/assets/generated/sri-lanka-wildlife.dim_800x500.jpg",
    description:
      "Yala National Park is home to one of the world's densest leopard populations. Giant elephants, vibrant peacocks, and rare birds make Sri Lanka a must-visit safari destination.",
    parent: "Sri Lanka",
  },
  {
    id: 29,
    name: "Kazakhstan",
    country: "Kazakhstan, Central Asia",
    region: "asia",
    image: "/assets/generated/kazakhstan.dim_800x600.jpg",
    description:
      "A land of vast contrasts — the dramatic Charyn Canyon, endless golden steppes, and the modern skyline of Almaty make Kazakhstan one of Central Asia's most surprising destinations. Experience nomadic culture and untamed natural beauty.",
    parent: "Central Asia",
  },
  {
    id: 30,
    name: "Uzbekistan",
    country: "Uzbekistan, Central Asia",
    region: "asia",
    image: "/assets/generated/uzbekistan.dim_800x600.jpg",
    description:
      "The heart of the ancient Silk Road — Samarkand's Registan Square, Bukhara's medieval old city, and Khiva's walled inner city are UNESCO World Heritage masterpieces that transport you back through centuries of history.",
    parent: "Central Asia",
  },
  {
    id: 31,
    name: "Turkmenistan",
    country: "Turkmenistan, Central Asia",
    region: "asia",
    image: "/assets/generated/turkmenistan.dim_800x600.jpg",
    description:
      "Home to the famous Darvaza Gas Crater — the 'Door to Hell' — burning continuously for decades in the Karakum Desert. Turkmenistan offers one of the world's most extraordinary and otherworldly travel experiences.",
    parent: "Central Asia",
  },
  // Africa
  {
    id: 32,
    name: "Algeria",
    country: "Algeria, North Africa",
    region: "africa",
    image: "/assets/generated/algeria.dim_800x600.jpg",
    description:
      "Africa's largest country reveals ancient Roman ruins at Timgad, the vast golden dunes of the Grand Erg Oriental Sahara, and the UNESCO-listed Casbah of Algiers. Algeria is an off-the-beaten-path gem waiting to be discovered.",
  },
];

type TabValue = "all" | "europe" | "middleeast" | "asia" | "africa";

function DestinationCard({
  dest,
  index,
}: { dest: Destination; index: number }) {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
      className="dest-card group relative rounded-2xl overflow-hidden bg-navy-darkest shadow-navy cursor-pointer"
      data-ocid={`destination.item.${dest.id}`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.name}
          className="dest-card-img w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 gradient-card-overlay" />
        {dest.parent && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-teal-bright/90 text-white text-xs font-semibold">
            {dest.parent}
          </span>
        )}
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="flex items-start gap-2 mb-2">
          <MapPin className="w-4 h-4 text-gold-warm flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display text-lg font-bold text-white leading-tight">
              {dest.name}
            </h3>
            <p className="text-white/50 text-xs mt-0.5">{dest.country}</p>
          </div>
        </div>
        <p className="text-white/65 text-sm leading-relaxed line-clamp-3 mb-5">
          {dest.description}
        </p>
        <Button
          onClick={scrollToContact}
          className="w-full bg-teal-bright/15 hover:bg-teal-bright text-teal-bright hover:text-white border border-teal-bright/30 hover:border-teal-bright font-semibold text-sm rounded-xl transition-all duration-200"
        >
          Inquire Now
        </Button>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const [activeTab, setActiveTab] = useState<TabValue>("all");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeTab === "all"
      ? destinations
      : destinations.filter((d) => d.region === activeTab);

  const displayCount = showAll ? filtered.length : 9;
  const visible = filtered.slice(0, displayCount);

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-navy-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="section-label mb-3">Where Will You Go Next?</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Popular Destinations
          </h2>
          <p className="text-white/60 text-lg">
            Handpicked destinations across Europe, the Middle East, Asia, and
            Africa — expertly curated for unforgettable journeys.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <Tabs
            value={activeTab}
            onValueChange={(v) => {
              setActiveTab(v as TabValue);
              setShowAll(false);
            }}
          >
            <TabsList className="bg-white/8 border border-white/12 p-1.5 rounded-2xl gap-1 flex-wrap justify-center">
              <TabsTrigger
                data-ocid="destinations.all_tab"
                value="all"
                className="rounded-xl text-white/70 data-[state=active]:bg-teal-bright data-[state=active]:text-white font-semibold px-5"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                data-ocid="destinations.europe_tab"
                value="europe"
                className="rounded-xl text-white/70 data-[state=active]:bg-teal-bright data-[state=active]:text-white font-semibold px-5"
              >
                Europe
              </TabsTrigger>
              <TabsTrigger
                data-ocid="destinations.middleeast_tab"
                value="middleeast"
                className="rounded-xl text-white/70 data-[state=active]:bg-teal-bright data-[state=active]:text-white font-semibold px-5"
              >
                Middle East
              </TabsTrigger>
              <TabsTrigger
                data-ocid="destinations.asia_tab"
                value="asia"
                className="rounded-xl text-white/70 data-[state=active]:bg-teal-bright data-[state=active]:text-white font-semibold px-5"
              >
                Asia
              </TabsTrigger>
              <TabsTrigger
                data-ocid="destinations.africa_tab"
                value="africa"
                className="rounded-xl text-white/70 data-[state=active]:bg-teal-bright data-[state=active]:text-white font-semibold px-5"
              >
                Africa
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visible.map((dest, i) => (
              <DestinationCard key={dest.id} dest={dest} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More */}
        {filtered.length > 9 && (
          <div className="text-center mt-10">
            <Button
              onClick={() => setShowAll((s) => !s)}
              variant="outline"
              className="border-white/20 text-white/70 hover:text-white hover:border-white/40 bg-white/5 hover:bg-white/10 rounded-xl px-8 py-3 font-semibold gap-2"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" /> Show All {filtered.length}{" "}
                  Destinations
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
