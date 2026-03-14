import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, MapPin, Home, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arcadia Summerlin | New Single-Family Homes by Sekisui House | Dr. Jan Duffy",
  description:
    "Arcadia is the newest neighborhood in Summerlin®. Single-family homes by Sekisui House—Bristlecone, Juniper & Pinyon floorplans from $1.5M. Grand Park village. Dr. Jan Duffy, BHHS. Call (702) 500-0337.",
  keywords: [
    "Arcadia Summerlin",
    "Arcadia Summerlin",
    "Sekisui House Las Vegas",
    "Summerlin new construction",
    "Grand Park village",
    "Arcadia floorplans",
    "Bristlecone Juniper Pinyon",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Arcadia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arcadia is the newest neighborhood in the award-winning Summerlin® master planned community, by Sekisui House. It offers three single-family home floorplans—Bristlecone, Juniper, and Pinyon—with nature-inspired design, wellness-focused amenities, and sustainable construction. Arcadia is located in Summerlin's Grand Park village, near the 90-acre Grand Park.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Arcadia located in Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arcadia is located in Summerlin's Grand Park village, one of several neighborhoods near the village's namesake park—Grand Park—which will be the largest park to date in Summerlin upon completion (90 acres, first phase expected by year-end 2025).",
      },
    },
    {
      "@type": "Question",
      name: "What floorplans are available at Arcadia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arcadia offers three single-family floorplans by Sekisui House: Bristlecone (3,176 sq ft, from $1,499,990), Juniper (3,209 sq ft, from $1,515,990), and Pinyon (3,399 sq ft, from $1,605,990). Each offers two-story elevations and three-bay garages with luxurious amenities and sustainable design.",
      },
    },
  ],
};

const floorplans = [
  {
    name: "Bristlecone",
    sqft: "3,176",
    beds: 3,
    baths: "4.5",
    price: "$1,499,990",
    features: [
      "Spacious great room and loggia",
      "Dual closets in primary suite",
      "Fitness room",
    ],
  },
  {
    name: "Juniper",
    sqft: "3,209",
    beds: 4,
    baths: "4.5",
    price: "$1,515,990",
    features: [
      "First-floor ensuite guest room",
      "Pocket office/workspace",
    ],
  },
  {
    name: "Pinyon",
    sqft: "3,399",
    beds: 4,
    baths: "5.5",
    price: "$1,605,990",
    features: [
      "Bonus room",
      "First-floor flexible room for work or play",
    ],
  },
];

export default function ArcadiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-blue-600">Neighborhoods</Link>
              {" / "}
              <span className="text-slate-900">Arcadia</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Arcadia in Summerlin®
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              The newest neighborhood to open in the award-winning Summerlin® master planned
              community is <strong>Arcadia</strong> by Sekisui House, a builder new to the
              community and the state. Inspired by Japanese culture marked by modern, innovative
              design and eco-friendly and precise construction, Sekisui House&apos;s design philosophy is
              to build homes that promote happiness, well-being, and sustainability.
            </p>
          </div>

          {/* Floorplans */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Three Single-Family Floorplans</h2>
            <p className="text-slate-600 mb-8">
              Arcadia offers three single-family home floorplans, each offering two-story
              elevations and three-bay garages.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {floorplans.map((plan) => (
                <div
                  key={plan.name}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Home className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  </div>
                  <div className="text-slate-600 text-sm space-y-1 mb-4">
                    <p><strong>{plan.sqft} sq ft</strong></p>
                    <p>{plan.beds} bedrooms · {plan.baths} baths</p>
                    <p className="text-blue-600 font-semibold text-base mt-2">From {plan.price}</p>
                  </div>
                  <ul className="text-slate-600 text-sm space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-green-600 shrink-0">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-slate-600 mt-6 text-sm">
              Bristlecone features a spacious great room and loggia, dual closets in the primary
              suite, and a fitness room. Juniper includes a first-floor ensuite guest room and
              pocket office/workspace. Pinyon offers a bonus room and a first-floor flexible room
              for work or play.
            </p>
          </section>

          {/* Nature-Inspired Living */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nature-Inspired Living</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Arcadia features nature-inspired homes that offer luxurious amenities, including
                spacious great rooms and private balconies, seamlessly blending indoor and outdoor
                living while prioritizing comfort and sustainability. Arcadia provides versatile
                spaces for fitness, work, and relaxation within a wellness-focused neighborhood.
              </p>
            </div>
          </section>

          {/* Grand Park Village */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Grand Park Village</h2>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  Located in Summerlin&apos;s <strong>Grand Park village</strong>, Arcadia is one of
                  several neighborhoods located near the village&apos;s namesake park—Grand Park—which
                  will be the largest park to date in the community, upon completion. Grand Park,
                  spanning 90 acres, is currently under development in phases with the first phase
                  expected to be complete by year-end 2025.
                </p>
              </div>
            </div>
          </section>

          {/* Jenni Pevoto Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 border-l-4 border-slate-400 rounded-lg p-8">
              <Quote className="h-8 w-8 text-slate-400 mb-4" />
              <blockquote className="text-lg text-slate-700 italic mb-4">
                &quot;For their first Nevada neighborhood, Sekisui House could have chosen to build
                anywhere, so their choice to build here in Summerlin speaks volumes. We welcome
                Sekisui House to the community and celebrate the builder&apos;s unique designs marked by
                innovation and sustainability.&quot;
              </blockquote>
              <cite className="text-slate-900 font-semibold not-italic">
                — Jenni Pevoto, Senior Director, Master Planned Community Marketing for Summerlin
              </cite>
            </div>
          </section>

          {/* Dr. Jan Duffy Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                &quot;Arcadia represents the best of Summerlin: new construction with a
                focus on wellness, sustainability, and thoughtful design. I help buyers navigate new
                construction and find the right floorplan and lot for their lifestyle.&quot;
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Arcadia
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">What is Arcadia?</h3>
                <p className="text-slate-600">
                  Arcadia is the newest neighborhood in the award-winning Summerlin®
                  master planned community, built by Sekisui House. It offers three single-family
                  home floorplans—Bristlecone, Juniper, and Pinyon—with nature-inspired design,
                  wellness-focused amenities, and sustainable construction. Arcadia is in
                  Summerlin&apos;s Grand Park village, near the 90-acre Grand Park.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">Where is Arcadia located in Summerlin?</h3>
                <p className="text-slate-600">
                  Arcadia is in Summerlin&apos;s Grand Park village, near Grand Park—which will be
                  the largest park in Summerlin upon completion (90 acres). The first phase of Grand
                  Park is expected by year-end 2025.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">What floorplans are available at Arcadia?</h3>
                <p className="text-slate-600">
                  Arcadia offers three single-family floorplans: Bristlecone (3,176 sq ft, from
                  $1,499,990), Juniper (3,209 sq ft, from $1,515,990), and Pinyon (3,399 sq ft, from
                  $1,605,990). Each has two-story elevations and three-bay garages, with luxurious
                  amenities and sustainable, wellness-focused design.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Arcadia</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices agent, for current
              availability, floorplan details, and expert guidance on Arcadia and Summerlin new
              construction.
            </p>
            <a
              href="tel:+17025000337"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-0337
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Email:{" "}
              <a
                href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                className="underline hover:text-white"
              >
                DrDuffy@arcadiahomeslasvegas.com
              </a>
            </p>
            <p className="mt-2 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
