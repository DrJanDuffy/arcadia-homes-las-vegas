import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type MarketData } from "@shared/schema";
import { formatPrice, formatNumber } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { imageUrls } from "@/lib/imageUrls";
import { trackButtonClick } from "@/lib/analytics";
import { AnalyticsAnchor } from "@/components/AnalyticsLink";

export function Hero() {
  const { data: marketData } = useQuery<MarketData>({
    queryKey: ["/api/market-data/latest"],
  });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrls.hero.luxuryHome}
          alt="Luxury home in Arcadia Homes Las Vegas Summerlin with Red Rock Canyon views"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-max px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
          Find Your Dream Home in
          <span className="block text-3xl md:text-5xl text-yellow-300 mt-2">
            Arcadia Homes Las Vegas
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed">
          Expert real estate in Summerlin West&apos;s guard-gated community. $2M–$4M custom estates with Red Rock Canyon views and 24/7 security.
        </p>

        {/* HeyBerkshire-style stat bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8 text-white/95">
          <div>
            <span className="text-2xl md:text-3xl font-bold text-yellow-300">45+</span>
            <span className="block text-sm font-medium">Homes in Community</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-bold text-yellow-300">Since 2008</span>
            <span className="block text-sm font-medium">Serving Summerlin West</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-bold text-yellow-300">4.9★</span>
            <span className="block text-sm font-medium">Average Rating</span>
          </div>
        </div>

        {/* Value Proposition Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto text-sm md:text-base">
          <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <span className="text-yellow-300">✓</span>
            <span>Only 45 custom homes</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <span className="text-yellow-300">✓</span>
            <span>3 minutes to Red Rock Canyon</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <span className="text-yellow-300">✓</span>
            <span>Dr. Duffy – 15 years local expert</span>
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link 
            href="/homes" 
            className="btn-primary text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform"
            aria-label="View available luxury homes in Arcadia Homes Las Vegas"
            onClick={() => trackButtonClick("View Exclusive Homes", "Hero")}
          >
            View Exclusive Homes
          </Link>
          <Link 
            href="/contact" 
            className="btn-secondary text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform"
            aria-label="Schedule a consultation with Dr. Jan Duffy"
            onClick={() => trackButtonClick("Schedule Consultation", "Hero")}
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link href="/home-value" className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-medium shadow-lg transition-all hover:scale-105">
            🏡 Home Value
          </Link>
          <Link href="/property-alerts" className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-medium shadow-lg transition-all hover:scale-105">
            🚨 Property Alerts
          </Link>
          <Link href="/mortgage-calculator" className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-medium shadow-lg transition-all hover:scale-105">
            🧮 Calculator
          </Link>
          <AnalyticsAnchor 
            href="mailto:DrDuffy@arcadiahomeslasvegas.com" 
            className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-medium shadow-lg transition-all hover:scale-105 flex items-center space-x-2"
            aria-label="Email Dr. Jan Duffy at DrDuffy@arcadiahomeslasvegas.com"
            trackAs="email"
            analyticsLabel="Hero Email"
          >
            <span>✉️</span>
            <span>Email</span>
          </AnalyticsAnchor>
        </div>

        {/* Urgency/Scarcity Message */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg px-6 py-4 max-w-2xl mx-auto mb-8 shadow-xl animate-pulse">
          <p className="text-white text-center font-semibold text-lg">
            🔥 Only 3 luxury homes available • Exclusive community rarely has inventory
          </p>
        </div>

        {/* Quick Stats */}
        {marketData && (
          <div className="bg-white bg-opacity-95 text-gray-900 rounded-xl p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {formatPrice(marketData.medianPrice)}
                </div>
                <div className="text-sm text-gray-600">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {marketData.averageDaysOnMarket}
                </div>
                <div className="text-sm text-gray-600">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {formatNumber(marketData.activeListings)}
                </div>
                <div className="text-sm text-gray-600">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {formatNumber(marketData.homesSold)}
                </div>
                <div className="text-sm text-gray-600">Sold This Month</div>
              </div>
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#home-content" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
            <span className="text-sm mb-2">Explore More</span>
            <ArrowDown className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
