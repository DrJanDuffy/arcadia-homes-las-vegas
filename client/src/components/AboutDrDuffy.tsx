import { Award, Star, Home, Users, Phone, Mail } from "lucide-react";
import { imageUrls } from "@/lib/imageUrls";

export function AboutDrDuffy() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Meet Dr. Jan Duffy
            </h2>
            <h3 className="text-xl text-primary font-semibold mb-6">
              The Only Realtor® Exclusively Focused on Arcadia Homes Las Vegas
            </h3>
            <div className="space-y-4 text-lg text-gray-700 mb-8">
              <p className="font-semibold text-gray-900">
                <span className="text-primary">📍 Hyper-Local Expertise:</span> Dr. Jan Duffy lives in Summerlin West, 
                shops at Downtown Summerlin, and knows every guard-gated street in the 89135 zip code. She's not just 
                a Las Vegas realtor—she's your Arcadia Homes Las Vegas neighborhood specialist.
              </p>
              <p>
                <span className="text-primary font-semibold">🎯 Service-Focused Approach:</span> Dr. Duffy doesn't just list homes—she provides 
                concierge-level service for Arcadia Homes Las Vegas buyers and sellers. From off-market property access 
                to insider knowledge of upcoming listings, she delivers the white-glove experience that $2M-$4M luxury 
                home transactions demand.
              </p>
              <p>
                <span className="text-primary font-semibold">🏡 Arcadia-Specific Services:</span> Pre-market property previews, guard-gate 
                community insights, Red Rock Canyon view assessments, custom home builder relationships, and exclusive 
                access to Arcadia Homes Las Vegas inventory before it hits the MLS.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-700">Nevada Real Estate License #BS.0145678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-700">Top 1% Las Vegas Realtors 2023</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-700">Certified Luxury Home Marketing Specialist</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:702-500-0337"
                className="flex items-center justify-center space-x-2 btn-primary"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dr. Duffy</span>
              </a>
              <a
                href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                className="flex items-center justify-center space-x-2 btn-secondary"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={imageUrls.about.professional}
              alt="Dr. Jan Duffy, licensed real estate agent and Arcadia Homes Las Vegas specialist in Summerlin West, Nevada License #BS.0145678"
              width={800}
              height={600}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
