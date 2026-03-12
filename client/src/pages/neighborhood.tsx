import { useEffect } from "react";
import { MapPin, Clock, Star, Users, TrendingUp } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup } from "@/lib/seo";

export default function Neighborhood() {
  // SEO Meta Tags
  useMetaTags({
    title: "Summerlin West Neighborhood | 89135 ZIP Code Demographics & Lifestyle",
    description: "Discover Summerlin West neighborhood. Demographics, lifestyle, amenities, and why the 89135 ZIP code is Las Vegas's most desirable area. Median income $128,500, 91% homeownership.",
    keywords: "Summerlin West neighborhood, 89135 demographics, Las Vegas best neighborhoods, Summerlin West lifestyle",
    ogTitle: "Summerlin West Neighborhood - 89135 ZIP Code",
    ogDescription: "Las Vegas's most desirable neighborhood. Demographics, lifestyle, and amenities in the 89135 ZIP code.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/neighborhood",
    canonical: "https://www.arcadiahomeslasvegas.com/neighborhood",
  });
  const demographics = [
    { label: "Median Household Income", value: "$128,500", icon: TrendingUp },
    { label: "Average Age", value: "42 years", icon: Users },
    { label: "College Educated", value: "78%", icon: Star },
    { label: "Homeownership Rate", value: "91%", icon: MapPin }
  ];

  const lifestyle = [
    {
      title: "Outdoor Recreation",
      description: "Red Rock Canyon offers world-class hiking, rock climbing, and scenic drives just minutes from your doorstep.",
      features: ["13-mile scenic drive", "30+ hiking trails", "Rock climbing areas", "Wildlife viewing"]
    },
    {
      title: "Golf & Country Clubs",
      description: "Multiple championship golf courses within a 10-minute drive, including TPC Las Vegas and Red Rock Country Club.",
      features: ["TPC Las Vegas", "Red Rock Country Club", "Angel Park Golf Club", "Las Vegas Country Club"]
    },
    {
      title: "Fine Dining",
      description: "World-class restaurants at Red Rock Casino and Downtown Summerlin offer exceptional culinary experiences.",
      features: ["T-Bones Chophouse", "Yard House", "The Capital Grille", "Brio Tuscan Grille"]
    },
    {
      title: "Shopping & Entertainment",
      description: "Downtown Summerlin provides premier shopping, dining, and entertainment options.",
      features: ["125+ retail stores", "Las Vegas Ballpark", "Movie theaters", "Whole Foods Market"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Summerlin West Neighborhood
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover why the 89135 ZIP code is consistently ranked among 
            Las Vegas's most desirable residential areas.
          </p>
        </div>
      </section>

      {/* Demographics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Neighborhood Demographics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Summerlin West attracts educated professionals and families who value 
              quality of life, safety, and community amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demographics.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Your Summerlin West Lifestyle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of urban sophistication and natural beauty 
              that defines life in this exclusive community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lifestyle.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Summerlin West?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&fm=webp"
                alt="Red Rock Canyon views from Summerlin West"
                width={1000}
                height={667}
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Location</h3>
                  <p className="text-gray-600">
                    Strategically positioned between the Las Vegas Strip and Red Rock Canyon, 
                    offering the best of both worlds.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Convenient Access</h3>
                  <p className="text-gray-600">
                    15 minutes to the Strip, 20 minutes to McCarran Airport, 
                    and immediate access to the 215 Beltway.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Award-Winning Community</h3>
                  <p className="text-gray-600">
                    Consistently ranked as one of America's best master-planned communities 
                    for quality of life and amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}