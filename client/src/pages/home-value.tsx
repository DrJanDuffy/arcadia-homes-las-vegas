import { useMetaTags } from "@/hooks/useMetaTags";
import { useRealScoutScript } from "@/hooks/useRealScoutScript";
import { addSchemaMarkup } from "@/lib/seo";

export default function HomeValue() {
  useRealScoutScript();
  useMetaTags({
    title: "Free Home Valuation - Arcadia Homes Las Vegas | Instant Property Value",
    description: "Get a free, instant home valuation for your Arcadia Homes Las Vegas property. Expert market analysis from Dr. Jan Duffy. Accurate estimates using latest MLS data.",
    keywords: "home value Arcadia Homes Las Vegas, property valuation Summerlin West, free home estimate, home value calculator 89135",
    ogTitle: "Free Home Valuation - Arcadia Homes Las Vegas",
    ogDescription: "Get instant, accurate home valuation for your Arcadia Homes Las Vegas property. Expert market analysis from Dr. Jan Duffy.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/home-value",
    canonical: "https://www.arcadiahomeslasvegas.com/home-value",
  });
  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-warm-brown via-cream to-sage-green">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              What's Your <span className="text-primary">Summerlin Home</span> Worth?
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Get an instant, accurate valuation of your luxury home in Summerlin West. 
              Dr. Jan Duffy's exclusive market analysis includes recent sales data, 
              neighborhood trends, and investment potential.
            </p>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-3">🏡</div>
                <h3 className="font-bold text-lg mb-2">Instant Results</h3>
                <p className="text-gray-600">Get your home value in seconds using the latest market data</p>
              </div>
              <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-lg mb-2">Market Expert Analysis</h3>
                <p className="text-gray-600">15+ years of Summerlin West expertise and $180M+ in sales</p>
              </div>
              <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-lg mb-2">100% Free & Secure</h3>
                <p className="text-gray-600">No obligation, secure data, immediate results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Home Valuation Widget Section */}
        <section className="pb-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
                Get Your Free Home Valuation
              </h2>
              
              {/* RealScout Widget */}
              <div dangerouslySetInnerHTML={{
                __html: `<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw" include-name include-phone></realscout-home-value>`
              }} />

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-4">Why Choose Dr. Jan Duffy?</h3>
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
                      <span>98% Client Satisfaction</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Luxury Home Specialist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Value Section */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Want a Detailed Market Analysis?</h2>
              <p className="text-gray-300 mb-6">
                Get a comprehensive report including comparable sales, market trends, 
                and personalized selling strategy for your Summerlin West home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:702-500-0337" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Dr. Duffy: (702) 500-0337
                </a>
                <a 
                  href="mailto:DrDuffy@arcadiahomeslasvegas.com" 
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Email for Analysis
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}