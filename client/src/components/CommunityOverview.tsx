import { CheckCircle } from "lucide-react";
import { imageUrls } from "@/lib/imageUrls";

export function CommunityOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Welcome to Arcadia Homes Las Vegas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Summerlin West's most exclusive guard-gated community in the 89135 ZIP code, 
            where West Charleston Boulevard meets Red Rock Canyon's dramatic landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={imageUrls.community.neighborhoods}
                alt="Aerial view of Arcadia Homes Las Vegas luxury community showing guard-gated homes with Red Rock Canyon views in Summerlin West 89135"
                width={800}
                height={600}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-display font-semibold text-gray-900">
              Luxury Redefined in Summerlin West
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located on West Charleston Boulevard between Buffalo Drive and Hualapai Way, 
              Arcadia Homes Las Vegas features custom estates from 3,500 to 8,000 square feet with 
              direct views of Red Rock Canyon Conservation Area and Spring Mountains.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>24/7 Guard-Gated Security</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Red Rock Canyon Views</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Custom Luxury Homes</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Premium Lot Sizes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Prime Location</h4>
            <p className="text-gray-600">
              3 minutes to TPC Las Vegas Golf Course, 5 minutes to Downtown Summerlin, 8 minutes to Red Rock Casino Resort.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Security & Privacy</h4>
            <p className="text-gray-600">
              Exclusive guard-gated access ensures privacy and security for all residents.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Luxury Amenities</h4>
            <p className="text-gray-600">
              Premium community amenities including parks, trails, and recreational facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
