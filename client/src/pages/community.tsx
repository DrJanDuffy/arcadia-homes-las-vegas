import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle, MapPin, Shield, Star } from "lucide-react";
import { type Amenity } from "@shared/schema";
import { InteractiveMap } from "@/components/InteractiveMap";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup, generateFAQSchema } from "@/lib/seo";
import { FAQSection } from "@/components/FAQSection";

export default function Community() {
  // SEO Meta Tags
  useMetaTags({
    title: "Arcadia Homes Las Vegas Community | Guard-Gated Luxury in Summerlin West",
    description: "Exclusive guard-gated luxury community in Summerlin West. 95 custom homes, 24/7 security, Red Rock Canyon views. HOA information, community guidelines, and neighborhood details.",
    keywords: "Arcadia Homes Las Vegas community, guard gated Summerlin West, 89135 luxury community, HOA information, guard gated community Las Vegas",
    ogTitle: "Arcadia Homes Las Vegas Community - Guard-Gated Luxury",
    ogDescription: "Exclusive guard-gated community with 95 custom homes, 24/7 security, and Red Rock Canyon views. HOA information and community guidelines.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/community",
    canonical: "https://www.arcadiahomeslasvegas.com/community",
  });

  // Add Place/ResidentialCommunity Schema
  useEffect(() => {
    const placeSchema = {
      "@context": "https://schema.org",
      "@type": "ResidentialComplex",
      "name": "Arcadia Homes Las Vegas",
      "description": "Exclusive guard-gated luxury community in Summerlin West with custom-built homes and Red Rock Canyon views.",
      "url": "https://www.arcadiahomeslasvegas.com/community",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89135",
        "addressCountry": "US"
      },
      "numberOfBedrooms": {
        "@type": "QuantitativeValue",
        "minValue": 4,
        "maxValue": 6
      },
      "numberOfBathroomsTotal": {
        "@type": "QuantitativeValue",
        "minValue": 3,
        "maxValue": 6
      },
      "floorSize": {
        "@type": "QuantitativeValue",
        "minValue": 3200,
        "maxValue": 8000,
        "unitCode": "SQM"
      }
    };

    const schemaId = addSchemaMarkup(placeSchema, "community-place-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);
  const { data: amenities, isLoading } = useQuery<Amenity[]>({
    queryKey: ["/api/amenities"],
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Arcadia Homes Las Vegas Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An exclusive guard-gated luxury community in the heart of Summerlin West, 
              offering unparalleled privacy, security, and breathtaking Red Rock Canyon views.
            </p>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                The Pinnacle of Luxury Living
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Arcadia Homes Las Vegas represents the ultimate in luxury living within the prestigious 
                Summerlin master-planned community. This exclusive enclave features custom-built 
                homes on premium lots, each offering spectacular views of the surrounding desert 
                landscape and Red Rock Canyon.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">95</div>
                  <div className="text-sm text-gray-600">Total Homes</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">0.35-0.5</div>
                  <div className="text-sm text-gray-600">Acre Lots</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3,500-8,000</div>
                  <div className="text-sm text-gray-600">Sq Ft Range</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Gate Security</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80&fm=webp"
                alt="Arcadia Homes Las Vegas community aerial view"
                width={1000}
                height={667}
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Community Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-primary/5 rounded-xl">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Security</h3>
              <p className="text-gray-600">
                Exclusive guard-gated access with 24/7 security ensures maximum privacy and safety 
                for all residents and their families.
              </p>
            </div>
            <div className="text-center p-8 bg-secondary/5 rounded-xl">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prime Location</h3>
              <p className="text-gray-600">
                Perfectly positioned in Summerlin West with easy access to shopping, dining, 
                entertainment, and outdoor recreation.
              </p>
            </div>
            <div className="text-center p-8 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Luxury Amenities</h3>
              <p className="text-gray-600">
                Meticulously maintained common areas, walking trails, and premium community 
                amenities for an elevated lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              World-Class Amenities Nearby
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy convenient access to the best that Las Vegas has to offer, all within minutes 
              of your front door.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenities?.map((amenity) => (
                <div key={amenity.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={amenity.imageUrl || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80&fm=webp"}
                    alt={amenity.name}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.name}</h3>
                    <p className="text-gray-600 mb-4">{amenity.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{amenity.distance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Community Standards & HOA
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Arcadia Homes Las Vegas maintains the highest standards through comprehensive HOA guidelines 
                that preserve property values and ensure a pristine living environment for all residents.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Architectural design review process</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Landscape maintenance standards</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Vehicle and parking regulations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Noise and nuisance policies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Property modification guidelines</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">HOA Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly HOA Fee:</span>
                  <span className="font-semibold">$285</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Management Company:</span>
                  <span className="font-semibold">Nevada Association Services</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reserve Fund:</span>
                  <span className="font-semibold">Fully Funded</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Special Assessments:</span>
                  <span className="font-semibold">None Planned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <InteractiveMap />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Arcadia Homes Las Vegas Community"
        description="Common questions about this exclusive guard-gated luxury community in Summerlin West"
        faqs={[
          {
            question: "What is the Arcadia Homes Las Vegas community like?",
            answer: "Arcadia Homes Las Vegas is an exclusive guard-gated luxury community in Summerlin West featuring approximately 95 custom-built homes. The community offers 24/7 security, Red Rock Canyon views, strict architectural guidelines, and a close-knit neighborhood atmosphere. Dr. Jan Duffy has been specializing in this community since 2008."
          },
          {
            question: "What are the HOA fees and rules in Arcadia Homes Las Vegas?",
            answer: "HOA fees in Arcadia Homes Las Vegas typically range from $300-$500 per month, covering guard-gated security, common area maintenance, landscaping, and community amenities. The community has strict architectural guidelines to maintain its luxury aesthetic, with all construction plans reviewed and approved by the HOA."
          },
          {
            question: "How many homes are in Arcadia Homes Las Vegas?",
            answer: "Arcadia Homes Las Vegas is an exclusive community with only 95 custom-built luxury homes, making inventory extremely limited. The small number of homes ensures privacy, exclusivity, and a close-knit community atmosphere. This limited inventory creates high demand for available properties."
          },
          {
            question: "What makes Arcadia Homes Las Vegas guard-gated security special?",
            answer: "Arcadia Homes Las Vegas features 24/7 guard-gated security with controlled access entry points. Security personnel monitor all vehicles and visitors, providing residents with peace of mind, privacy, and protection. This level of security is a key feature that sets the community apart in Summerlin West."
          },
          {
            question: "Are there age restrictions in Arcadia Homes Las Vegas?",
            answer: "No, Arcadia Homes Las Vegas does not have age restrictions. The community welcomes families, professionals, and retirees, creating a diverse and vibrant neighborhood. The inclusive atmosphere combined with luxury amenities makes it appealing to buyers at all life stages."
          },
          {
            question: "What community amenities are included in Arcadia Homes Las Vegas?",
            answer: "Arcadia Homes Las Vegas HOA fees cover 24/7 guard-gated security, common area landscaping and maintenance, street lighting, community infrastructure, and access to community parks and recreational areas. The community is also close to Downtown Summerlin, Red Rock Canyon, and championship golf courses."
          }
        ]}
        schemaId="community-faq-schema"
      />
    </div>
  );
}
