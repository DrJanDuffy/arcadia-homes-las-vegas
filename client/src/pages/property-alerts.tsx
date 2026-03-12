import { useEffect } from "react";
import { useMetaTags } from "@/hooks/useMetaTags";
import { useRealScoutScript } from "@/hooks/useRealScoutScript";
import { addSchemaMarkup } from "@/lib/seo";

export default function PropertyAlerts() {
  useRealScoutScript();
  useMetaTags({
    title: "Property Alerts - Arcadia Homes Las Vegas | Never Miss Your Dream Home",
    description: "Get instant alerts when luxury homes in Arcadia Homes Las Vegas match your criteria. Exclusive off-market opportunities and new listings. Be the first to know about price reductions.",
    keywords: "property alerts Arcadia Homes Las Vegas, luxury home notifications, Summerlin West real estate alerts, off-market properties",
    ogTitle: "Property Alerts - Arcadia Homes Las Vegas",
    ogDescription: "Get instant alerts for luxury homes matching your criteria. Exclusive off-market opportunities and new listings.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/property-alerts",
    canonical: "https://www.arcadiahomeslasvegas.com/property-alerts",
  });

  // Add Service Schema
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Property Alerts - Arcadia Homes Las Vegas",
      "description": "Get instant alerts when luxury homes in Arcadia Homes Las Vegas match your criteria. Exclusive off-market opportunities and new listings.",
      "url": "https://www.arcadiahomeslasvegas.com/property-alerts",
      "provider": {
        "@type": "RealEstateAgent",
        "name": "Dr. Jan Duffy",
        "url": "https://www.arcadiahomeslasvegas.com"
      },
      "areaServed": {
        "@type": "City",
        "name": "Las Vegas"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free property alert service"
      }
    };

    const schemaId = addSchemaMarkup(serviceSchema, "property-alerts-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-brown via-cream to-sage-green">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Never Miss Your <span className="text-primary">Dream Home</span> Again
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Get instant alerts when luxury homes in Summerlin West match your criteria. 
            Be the first to know about new listings, price reductions, and exclusive opportunities 
            before they hit the public market.
          </p>

          {/* Urgency Banner */}
          <div className="bg-red-600 bg-opacity-90 rounded-lg px-6 py-4 max-w-2xl mx-auto mb-12">
            <p className="text-white text-center font-medium text-lg">
              🚨 Only 3 luxury homes available in Arcadia Homes Las Vegas • Inventory extremely limited
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Instant Notifications</h3>
              <p className="text-gray-600">Get alerts within minutes of new listings matching your criteria</p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2">Exclusive Access</h3>
              <p className="text-gray-600">See pocket listings and off-market opportunities first</p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Perfect Matches</h3>
              <p className="text-gray-600">Custom filters for price, size, amenities, and location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Search Widget Section */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
              Set Your Custom Property Alerts
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Tell us exactly what you're looking for and we'll notify you the moment it becomes available
            </p>
            
            {/* RealScout Advanced Search Widget */}
            <div className="flex justify-center">
              <div dangerouslySetInnerHTML={{
                __html: `<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>`
              }} />
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-4">Why Choose Dr. Jan Duffy's Alert Service?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>15+ Years Summerlin Expert</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>$180M+ in Sales Volume</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Exclusive Off-Market Access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>VIP Buyer Treatment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Recent Alert Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">MR</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Mike & Rachel T.</h4>
                  <p className="text-sm text-gray-600">Closed in 14 days</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Dr. Duffy's alert system helped us find our dream home in Arcadia Homes Las Vegas before it even hit the MLS. 
                We were the only buyers who saw it!"
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">JS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jennifer S.</h4>
                  <p className="text-sm text-gray-600">Saved $75,000</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The price reduction alert came at 6 AM. By 9 AM we had an accepted offer. 
                Best investment decision ever!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Join 500+ luxury home buyers who trust Dr. Duffy's exclusive alert system. 
              Don't let your dream home slip away to another buyer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:702-500-0337" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now: (702) 500-0337
              </a>
              <a 
                href="mailto:DrDuffy@arcadiahomeslasvegas.com" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Email Dr. Duffy
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}