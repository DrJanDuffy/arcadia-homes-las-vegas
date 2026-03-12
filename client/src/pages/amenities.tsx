import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { MapPin, Clock, Star, ExternalLink } from "lucide-react";
import { type Amenity } from "@shared/schema";
import { InteractiveMap } from "@/components/InteractiveMap";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup } from "@/lib/seo";
import { FAQSection } from "@/components/FAQSection";

export default function Amenities() {
  // SEO Meta Tags
  useMetaTags({
    title: "Amenities Near Arcadia Homes Las Vegas | Shopping, Dining, Recreation",
    description: "Discover world-class amenities near Arcadia Homes Las Vegas. Downtown Summerlin, Red Rock Canyon, championship golf courses, and premium shopping within minutes of your home.",
    keywords: "Arcadia Homes Las Vegas amenities, Summerlin West shopping, Red Rock Canyon, Downtown Summerlin, luxury amenities Las Vegas",
    ogTitle: "Amenities Near Arcadia Homes Las Vegas",
    ogDescription: "World-class amenities within minutes: Downtown Summerlin shopping, Red Rock Canyon, championship golf, fine dining, and premium entertainment.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/amenities",
    canonical: "https://www.arcadiahomeslasvegas.com/amenities",
  });
  const { data: amenities, isLoading } = useQuery<Amenity[]>({
    queryKey: ["/api/amenities"],
  });

  // Add ItemList Schema for amenities
  useEffect(() => {
    if (amenities && amenities.length > 0) {
      const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Amenities Near Arcadia Homes Las Vegas",
        "description": "World-class amenities including shopping, dining, recreation, and entertainment near Arcadia Homes Las Vegas",
        "url": "https://www.arcadiahomeslasvegas.com/amenities",
        "numberOfItems": amenities.length,
        "itemListElement": amenities.slice(0, 20).map((amenity, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "LocalBusiness",
            "name": amenity.name,
            "description": amenity.description,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89135"
            },
            "category": amenity.category
          }
        }))
      };

      const schemaId = addSchemaMarkup(itemListSchema, "amenities-list-schema");
      return () => {
        const script = document.getElementById(schemaId);
        if (script) script.remove();
      };
    }
  }, [amenities]);

  const categorizeAmenities = (amenities: Amenity[]) => {
    return amenities.reduce((acc, amenity) => {
      if (!acc[amenity.category]) {
        acc[amenity.category] = [];
      }
      acc[amenity.category].push(amenity);
      return acc;
    }, {} as Record<string, Amenity[]>);
  };

  const categoryInfo = {
    shopping: {
      title: "Shopping & Dining",
      icon: "🛍️",
      description: "Premium retail and culinary experiences"
    },
    recreation: {
      title: "Recreation & Entertainment",
      icon: "🏌️",
      description: "Golf, outdoor activities, and leisure"
    },
    education: {
      title: "Education",
      icon: "🎓",
      description: "Top-rated schools and educational institutions"
    },
    healthcare: {
      title: "Healthcare",
      icon: "🏥",
      description: "Medical facilities and wellness centers"
    },
    dining: {
      title: "Fine Dining",
      icon: "🍽️",
      description: "Award-winning restaurants and cafes"
    }
  };

  const categorizedAmenities = amenities ? categorizeAmenities(amenities) : {};

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Amenities & Attractions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class amenities and attractions within minutes of Arcadia Homes Las Vegas. 
              From luxury shopping to outdoor recreation, everything you need is nearby.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Everything You Need Nearby
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Arcadia Homes Las Vegas' prime location in Summerlin West puts you at the center of Las Vegas's 
              most desirable amenities and attractions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-primary/5 rounded-xl">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Shopping</h3>
              <p className="text-gray-600">Premium retail destinations including Downtown Summerlin</p>
            </div>
            <div className="text-center p-6 bg-secondary/5 rounded-xl">
              <div className="text-4xl mb-4">🏌️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Recreation</h3>
              <p className="text-gray-600">Championship golf courses and outdoor activities</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dining</h3>
              <p className="text-gray-600">Award-winning restaurants and culinary experiences</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Entertainment</h3>
              <p className="text-gray-600">Cultural venues, theaters, and entertainment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities by Category */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          {isLoading ? (
            <div className="space-y-16">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-8 bg-gray-200 rounded w-64 mb-8 animate-pulse"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="bg-white rounded-xl shadow-lg animate-pulse">
                        <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                        <div className="p-6 space-y-4">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : Object.keys(categorizedAmenities).length > 0 ? (
            <div className="space-y-16">
              {Object.entries(categorizedAmenities).map(([category, amenityList]) => (
                <div key={category}>
                  <div className="text-center mb-12">
                    <div className="text-6xl mb-4">
                      {categoryInfo[category as keyof typeof categoryInfo]?.icon || "📍"}
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                      {categoryInfo[category as keyof typeof categoryInfo]?.title || category}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {categoryInfo[category as keyof typeof categoryInfo]?.description || ""}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenityList.map((amenity) => (
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
                          
                          <div className="space-y-2">
                            {amenity.distance && (
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>{amenity.distance}</span>
                              </div>
                            )}
                            {amenity.address && (
                              <div className="flex items-center text-sm text-gray-500">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{amenity.address}</span>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              <span className="text-sm text-gray-600">Premium Destination</span>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No amenities data available</h3>
              <p className="text-gray-500">Amenity information will be updated soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Signature Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These premier destinations make Arcadia Homes Las Vegas location truly exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80&fm=webp"
                alt="Red Rock Canyon"
                width={800}
                height={512}
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-display font-bold mb-2">Red Rock Canyon</h3>
                  <p className="mb-2">10 minutes drive</p>
                  <p className="text-sm opacity-90">
                    Stunning natural conservation area with hiking trails and scenic drives
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80&fm=webp"
                alt="Downtown Summerlin"
                width={800}
                height={512}
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-display font-bold mb-2">Downtown Summerlin</h3>
                  <p className="mb-2">5 minutes drive</p>
                  <p className="text-sm opacity-90">
                    Premier shopping, dining, and entertainment destination
                  </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Experience the Arcadia Homes Las Vegas Lifestyle
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Schedule a private tour and experience firsthand why Arcadia Homes Las Vegas offers 
            the perfect blend of luxury living and convenient access to everything Las Vegas offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:702-500-0337" className="btn-secondary">
              Schedule Tour
            </a>
            <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Contact Dr. Duffy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
