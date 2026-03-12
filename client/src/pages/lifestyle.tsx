import { useEffect } from "react";
import { Calendar, Coffee, Mountain, ShoppingBag, Utensils, Target } from "lucide-react";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup } from "@/lib/seo";

export default function Lifestyle() {
  // SEO Meta Tags
  useMetaTags({
    title: "Summerlin West Lifestyle | Arcadia Homes Las Vegas Living",
    description: "Experience the perfect blend of luxury living, outdoor recreation, and urban sophistication in Summerlin West. Red Rock Canyon, golf, dining, and entertainment.",
    keywords: "Summerlin West lifestyle, Arcadia Homes Las Vegas living, Red Rock Canyon, Las Vegas lifestyle, Summerlin West activities",
    ogTitle: "Summerlin West Lifestyle - Arcadia Homes Las Vegas",
    ogDescription: "Perfect blend of luxury living, outdoor recreation, and urban sophistication. Red Rock Canyon, golf, dining, and entertainment.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/lifestyle",
    canonical: "https://www.arcadiahomeslasvegas.com/lifestyle",
  });
  const activities = [
    {
      icon: Mountain,
      title: "Outdoor Adventures",
      description: "Red Rock Canyon National Conservation Area",
      details: [
        "13-mile scenic drive with panoramic views",
        "30+ hiking trails from easy to challenging", 
        "Rock climbing at Calico Hills",
        "Wildlife viewing and photography",
        "Visitor center with educational exhibits"
      ],
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Target,
      title: "Championship Golf",
      description: "World-class courses minutes from home",
      details: [
        "TPC Las Vegas - PGA Tour venue",
        "Red Rock Country Club - Jack Nicklaus design",
        "Angel Park Golf Club - Arnold Palmer courses",
        "Las Vegas Country Club - private luxury",
        "Desert Pines Golf Club - links-style play"
      ],
      image: "https://images.unsplash.com/photo-1587174486073-ae5e5cec4540?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: ShoppingBag,
      title: "Premium Shopping",
      description: "Downtown Summerlin and beyond",
      details: [
        "125+ stores at Downtown Summerlin",
        "Whole Foods Market for gourmet groceries",
        "REI Co-op for outdoor gear",
        "West Elm and Pottery Barn for home decor",
        "Fashion brands and specialty boutiques"
      ],
      image: "https://images.unsplash.com/photo-1555529902-5261145633bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Utensils,
      title: "Culinary Excellence",
      description: "Fine dining and casual favorites",
      details: [
        "T-Bones Chophouse at Red Rock Casino",
        "The Capital Grille for elegant steaks",
        "Yard House with 100+ beers on tap",
        "Brio Tuscan Grille for Italian cuisine",
        "Local favorites on every corner"
      ],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Coffee,
      title: "Entertainment & Culture",
      description: "Arts, events, and nightlife",
      details: [
        "Las Vegas Ballpark for Triple-A baseball",
        "Red Rock Casino for gaming and shows",
        "Movie theaters with luxury seating",
        "Community festivals and farmers markets",
        "15 minutes to the Las Vegas Strip"
      ],
      image: "https://images.unsplash.com/photo-1489599735474-891ef166ff8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Calendar,
      title: "Community Events",
      description: "Year-round activities and festivals",
      details: [
        "Summerlin Council Patriotic Parade",
        "Festival of Arts at Downtown Summerlin",
        "Farmers markets every Saturday",
        "Outdoor concerts in the park",
        "Holiday celebrations and tree lighting"
      ],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Summerlin West Lifestyle
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Experience the perfect blend of luxury living, outdoor recreation, 
            and urban sophistication in Las Vegas's premier community.
          </p>
        </div>
      </section>

      {/* Lifestyle Activities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Life in Paradise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sunrise hikes in Red Rock Canyon to championship golf and world-class dining, 
              every day offers new possibilities for adventure and relaxation.
            </p>
          </div>

          <div className="space-y-16">
            {activities.map((activity, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    width={800}
                    height={533}
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <activity.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{activity.title}</h3>
                      <p className="text-lg text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {activity.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Perfect Weather Year-Round</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy over 310 days of sunshine annually with comfortable desert climate 
              ideal for outdoor activities and al fresco dining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-b from-yellow-50 to-orange-50 rounded-xl p-6">
              <div className="text-4xl mb-2">☀️</div>
              <h3 className="text-xl font-semibold mb-2">Spring</h3>
              <p className="text-gray-600 mb-4">Perfect hiking weather with comfortable temperatures and blooming desert flora.</p>
              <div className="text-2xl font-bold text-primary">65-85°F</div>
            </div>
            <div className="text-center bg-gradient-to-b from-orange-50 to-red-50 rounded-xl p-6">
              <div className="text-4xl mb-2">🌡️</div>
              <h3 className="text-xl font-semibold mb-2">Summer</h3>
              <p className="text-gray-600 mb-4">Hot days perfect for pools and early morning golf rounds.</p>
              <div className="text-2xl font-bold text-primary">85-105°F</div>
            </div>
            <div className="text-center bg-gradient-to-b from-orange-50 to-yellow-50 rounded-xl p-6">
              <div className="text-4xl mb-2">🍂</div>
              <h3 className="text-xl font-semibold mb-2">Fall</h3>
              <p className="text-gray-600 mb-4">Ideal outdoor weather returns with clear skies and cool evenings.</p>
              <div className="text-2xl font-bold text-primary">60-85°F</div>
            </div>
            <div className="text-center bg-gradient-to-b from-blue-50 to-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-2">❄️</div>
              <h3 className="text-xl font-semibold mb-2">Winter</h3>
              <p className="text-gray-600 mb-4">Mild temperatures perfect for year-round outdoor activities.</p>
              <div className="text-2xl font-bold text-primary">45-65°F</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}