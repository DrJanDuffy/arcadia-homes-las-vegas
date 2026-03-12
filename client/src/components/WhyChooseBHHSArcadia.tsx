import { Shield, Globe, TrendingUp, Home } from "lucide-react";

export function WhyChooseBHHSArcadia() {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Why Choose Berkshire Hathaway HomeServices?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you work with a <strong>Berkshire Hathaway HomeServices</strong> agent in Arcadia Homes Las Vegas, you&apos;re backed by a name synonymous with trust, ethical standards, and financial strength.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Brand</h3>
            <p className="text-gray-600 text-sm">
              Backed by Warren Buffett&apos;s Berkshire Hathaway Inc.—unmatched financial stability for your Arcadia transaction.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Guard-Gated Community</h3>
            <p className="text-gray-600 text-sm">
              Arcadia Homes Las Vegas is one of Summerlin West&apos;s most exclusive 24/7 guard-gated neighborhoods in 89135.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Arcadia Market Expertise</h3>
            <p className="text-gray-600 text-sm">
              Serving Summerlin West since 2008—hyperlocal knowledge of every street and view in Arcadia Homes Las Vegas.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Service</h3>
            <p className="text-gray-600 text-sm">
              Buying, selling, luxury, relocation—Dr. Jan Duffy delivers white-glove service for $2M–$4M estates.
            </p>
          </div>
        </div>

        <blockquote className="border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-xl max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 italic mb-4">
            &ldquo;When clients ask why they should choose a Berkshire Hathaway HomeServices agent for Arcadia Homes Las Vegas, I tell them: you&apos;re not just getting me—you&apos;re getting a global network, world-class marketing, and a brand synonymous with trust, plus someone who knows every guard-gated street in 89135.&rdquo;
          </p>
          <footer className="text-gray-600 font-medium">
            — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
