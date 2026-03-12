import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useMetaTags } from "@/hooks/useMetaTags";
import { useRealScoutScript } from "@/hooks/useRealScoutScript";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { addSchemaMarkup, generateFAQSchema } from "@/lib/seo";

export default function Homes() {
  // SEO Meta Tags
  useMetaTags({
    title: "Available Homes in Arcadia Homes Las Vegas | $2M-$4M Luxury Listings",
    description: "Browse exclusive luxury homes for sale in Arcadia Homes Las Vegas, Summerlin West 89135. Guard-gated community with Red Rock Canyon views. $2M-$4M custom estates.",
    keywords: "Arcadia Homes Las Vegas for sale, luxury homes Summerlin West, 89135 homes for sale, guard gated community Las Vegas, Arcadia Homes listings, Dr Jan Duffy listings",
    ogTitle: "Available Homes in Arcadia Homes Las Vegas",
    ogDescription: "Exclusive luxury homes for sale in Arcadia Homes Las Vegas. Live MLS listings updated in real-time.",
    ogUrl: "https://arcadiahomeslasvegas.com/homes",
    canonical: "https://arcadiahomeslasvegas.com/homes",
  });

  // Add ItemList Schema for property listings
  useEffect(() => {
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Available Homes in Arcadia Homes Las Vegas",
      "description": "Exclusive luxury homes for sale in Arcadia Homes Las Vegas, Summerlin West 89135",
      "url": "https://www.arcadiahomeslasvegas.com/homes",
      "numberOfItems": "Multiple",
      "itemListElement": {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy",
          "url": "https://www.arcadiahomeslasvegas.com"
        }
      }
    };

    const schemaId = addSchemaMarkup(itemListSchema, "homes-list-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  // Add FAQ Schema
  useEffect(() => {
    const faqs = [
      {
        question: "What luxury homes are currently available in Arcadia Homes Las Vegas?",
        answer: "Arcadia Homes Las Vegas typically has 2-5 luxury homes available at any given time, priced between $2M and $4M. These are custom-built estates ranging from 3,200 to 8,000 square feet with premium features. Dr. Jan Duffy maintains real-time MLS access and can show you all available properties in this exclusive guard-gated community."
      },
      {
        question: "How quickly do luxury homes sell in Arcadia Homes Las Vegas?",
        answer: "Well-priced luxury homes in Arcadia Homes Las Vegas typically sell within 18-25 days due to high demand and limited inventory. The community's exclusivity, guard-gated security, and Red Rock Canyon views make properties highly desirable. Dr. Duffy's expertise helps buyers act quickly when the right property becomes available."
      },
      {
        question: "What price range should I expect for luxury homes in Arcadia Homes Las Vegas?",
        answer: "Luxury homes in Arcadia Homes Las Vegas typically range from $2M to $4M, depending on size, features, and location within the community. Custom-built homes with Red Rock Canyon views command premium prices. Dr. Duffy provides detailed market analysis to help buyers understand current pricing trends."
      },
      {
        question: "Are there off-market properties available in Arcadia Homes Las Vegas?",
        answer: "Yes, Dr. Jan Duffy's exclusive network in Arcadia Homes Las Vegas often provides access to off-market and pre-market properties before they're listed publicly. Her 15+ years of specialization in this community and relationships with homeowners and builders give buyers first access to exclusive opportunities."
      },
      {
        question: "What features do luxury homes in Arcadia Homes Las Vegas typically include?",
        answer: "Luxury homes in Arcadia Homes Las Vegas feature premium amenities like wine cellars, home theaters, outdoor kitchens, guest casitas, smart home automation, and Red Rock Canyon views. Homes are custom-built with 4-6 bedrooms, 3-6 bathrooms, and range from 3,200 to 8,000 square feet."
      },
      {
        question: "Why is Arcadia Homes Las Vegas inventory so limited?",
        answer: "Arcadia Homes Las Vegas has only 95 custom-built homes in the entire community, making inventory extremely limited. The guard-gated exclusivity, prime Summerlin West location, and Red Rock Canyon views create high demand. Dr. Duffy helps buyers stay informed about new listings and off-market opportunities."
      }
    ];

    const faqSchema = generateFAQSchema(faqs);
    const schemaId = addSchemaMarkup(faqSchema, "homes-faq-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  useRealScoutScript();

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Available Homes", url: "/homes" }]} />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Available Homes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover luxury homes currently available in Arcadia Homes Las Vegas community. 
              Each property offers exceptional quality and stunning desert views.
            </p>
          </div>
        </div>
      </section>

      {/* Note: Filters are now handled by RealScout widget below */}
      <section className="py-8 bg-white border-b">
        <div className="container-max">
          <div className="text-center">
            <p className="text-gray-600">
              Use the filters in the RealScout widget below to search by price, bedrooms, bathrooms, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Live Property Listings */}
      <section className="py-20">
        <div className="container-max">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Live MLS Listings - Summerlin West
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Authentic property listings updated directly from the MLS. Dr. Duffy's exclusive access to luxury homes $2M-$4M.
            </p>
            
            <div dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,TC" price-min="2000000" price-max="4000000"></realscout-office-listings>`
            }} />
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                🔒 Exclusive MLS Access • Updated Every 15 Minutes • Dr. Duffy's Personal Listings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:702-500-0337"
                  className="btn-primary"
                >
                  Schedule Private Showing
                </a>
                <a 
                  href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                  className="btn-secondary"
                >
                  Get Property Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Duffy has access to off-market properties and upcoming listings. 
            Get notified first about new Arcadia Homes Las Vegas opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/property-alerts">
              <Button variant="secondary" size="lg">
                Set Up Property Alerts
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Dr. Duffy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
