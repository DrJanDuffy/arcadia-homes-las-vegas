import { useEffect, useState } from "react";
import { Link } from "wouter";

export function FeaturedHomes() {
  // Ensure RealScout script is loaded
  useEffect(() => {
    const checkScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="realscout-web-components"]');
      if (existingScript) return;
      
      // Check if custom elements are already defined
      if (customElements.get('realscout-office-listings')) return;

      // Load script if not present
      const realScoutScript = document.createElement('script');
      realScoutScript.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      realScoutScript.type = 'module';
      realScoutScript.onerror = () => {
        // Silent fail in production
        if (process.env.NODE_ENV === 'development') {
          console.warn('RealScout script failed to load');
        }
      };
      document.head.appendChild(realScoutScript);
    };

    // Check immediately and after a short delay
    checkScript();
    const timer = setTimeout(checkScript, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional homes in Arcadia Homes Las Vegas. Live MLS listings updated in real-time.
          </p>
        </div>

        {/* RealScout Office Listings Widget */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div 
            dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,TC" price-min="2000000" price-max="4000000" max-results="6"></realscout-office-listings>`
            }} 
          />
          
          <div className="text-center mt-8">
            <Link href="/homes" className="btn-secondary text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              View All Homes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
