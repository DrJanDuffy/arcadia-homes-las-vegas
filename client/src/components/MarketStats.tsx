import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { TrendingUp, AlertCircle, RefreshCw } from "lucide-react";
import { type MarketData } from "@shared/schema";
import { formatPrice, formatNumber, formatDecimal } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function MarketStats() {
  const { data: marketData, isLoading, error, refetch } = useQuery<MarketData[]>({
    queryKey: ["/api/market-data"],
    retry: 2,
    retryDelay: 1000,
  });

  // Fallback market data if API fails or returns empty
  // Using type assertion since we know the structure matches MarketData
  const fallbackData = {
    id: 0,
    month: "January",
    year: 2025,
    medianPrice: 3000000,
    pricePerSqft: 450,
    averageDaysOnMarket: 45,
    monthsOfInventory: "2.5",
    priceAppreciation: "5.2",
    activeListings: 12,
    homesSold: 8,
    createdAt: new Date(),
  } as MarketData;

  const latest = marketData?.[0] || (marketData && marketData.length > 0 ? undefined : fallbackData);

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-10 bg-gray-200 rounded w-80 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>
            </div>
            <div className="space-y-6">
              <div className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show fallback data if there's an error but don't show error state
  // This provides a better UX - users see data instead of an error message
  if (error && !marketData) {
    // Use fallback data silently
    const displayData = fallbackData;
    
    return (
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Arcadia Homes Las Vegas Market Report
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest market trends and statistics for Arcadia Homes Las Vegas community.
            </p>
            <p className="text-sm text-amber-600 mt-2">
              * Displaying sample market data. Contact Dr. Duffy for the most current statistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Market Statistics */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                  Market Highlights - {displayData.month} {displayData.year}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      {formatPrice(displayData.medianPrice)}
                    </div>
                    <div className="text-sm text-gray-600">Median Sale Price</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      ${formatNumber(displayData.pricePerSqft)}
                    </div>
                    <div className="text-sm text-gray-600">Price per Sq Ft</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      {displayData.averageDaysOnMarket}
                    </div>
                    <div className="text-sm text-gray-600">Avg Days on Market</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      {formatDecimal(displayData.monthsOfInventory?.toString() || "0")}
                    </div>
                    <div className="text-sm text-gray-600">Months of Inventory</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Market Trends</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Price Appreciation (YoY)</span>
                    <span className="text-secondary font-semibold">
                      +{formatDecimal(displayData.priceAppreciation?.toString() || "0")}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Active Listings</span>
                    <span className="text-secondary font-semibold">
                      {formatNumber(displayData.activeListings)} homes
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Sold This Month</span>
                    <span className="text-secondary font-semibold">
                      {formatNumber(displayData.homesSold)} homes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-700 mb-2">Price Trend Analysis</h4>
                <p className="text-gray-600">
                  Interactive chart showing Arcadia Homes Las Vegas price trends over the past 12 months
                </p>
              </div>
            </div>
          </div>

          {/* Get Report CTA */}
          <div className="bg-primary rounded-2xl p-8 text-center text-primary-foreground">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Get Your Personalized Market Report
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Receive detailed market analysis and home valuations for Arcadia Homes Las Vegas
            </p>
            <Link 
              href="/market-report" 
              className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              View Full Market Report
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (!latest) {
    return (
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-2xl mx-auto">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Unable to Load Market Data
              </h3>
              <p className="text-gray-600 mb-6">
                We're having trouble loading the latest market statistics. Please try again or contact Dr. Duffy for the latest market information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => refetch()} variant="outline" className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </Button>
                <a href="tel:702-500-0337" className="btn-primary">
                  Call Dr. Duffy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Arcadia Homes Las Vegas &amp; Summerlin West Market
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Current market data for Arcadia Homes Las Vegas and Summerlin West 89135 from Berkshire Hathaway HomeServices Nevada Properties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Market Statistics */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Market Highlights - {latest.month} {latest.year}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {formatPrice(latest.medianPrice)}
                  </div>
                  <div className="text-sm text-gray-600">Median Sale Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    ${formatNumber(latest.pricePerSqft)}
                  </div>
                  <div className="text-sm text-gray-600">Price per Sq Ft</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {latest.averageDaysOnMarket}
                  </div>
                  <div className="text-sm text-gray-600">Avg Days on Market</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {formatDecimal(latest.monthsOfInventory || "0")}
                  </div>
                  <div className="text-sm text-gray-600">Months of Inventory</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Market Trends</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Price Appreciation (YoY)</span>
                  <span className="text-secondary font-semibold">
                    +{formatDecimal(latest.priceAppreciation || "0")}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Active Listings</span>
                  <span className="text-secondary font-semibold">
                    {formatNumber(latest.activeListings)} homes
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Sold This Month</span>
                  <span className="text-secondary font-semibold">
                    {formatNumber(latest.homesSold)} homes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-24 h-24 text-primary/40 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Price Trend Analysis</h4>
              <p className="text-gray-600">
                Interactive chart showing Arcadia Homes Las Vegas price trends over the past 12 months
              </p>
            </div>
          </div>
        </div>

        {/* Get Report CTA */}
        <div className="bg-primary rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-display font-semibold mb-4">
            Get Your Personalized Market Report
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            Receive detailed market analysis and home valuations for Arcadia Homes Las Vegas
          </p>
          <Link 
            href="/market-report" 
            className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            View Full Market Report
          </Link>
        </div>
      </div>
    </section>
  );
}
