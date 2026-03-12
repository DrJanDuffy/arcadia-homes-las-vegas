import { Mountain, GraduationCap, ShoppingBag, TreePine } from "lucide-react";
import { InteractiveMap } from "./InteractiveMap";
import { imageUrls } from "@/lib/imageUrls";

export function WhyChooseArcadia() {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Why Choose Arcadia Homes Las Vegas?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Arcadia Homes Las Vegas the premier luxury community in Summerlin West
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mountain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Red Rock Canyon Views</h3>
                <p className="text-gray-600">
                  Wake up to breathtaking views of Red Rock Canyon's iconic sandstone formations from your backyard.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Top-Rated Schools</h3>
                <p className="text-gray-600">
                  Children attend prestigious Palo Verde High School and other highly-rated CCSD schools.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Downtown Summerlin</h3>
                <p className="text-gray-600">
                  Minutes from premium shopping, dining, and entertainment at Downtown Summerlin.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TreePine className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Recreation & Trails</h3>
                <p className="text-gray-600">
                  Access to miles of hiking trails, golf courses, and outdoor recreation opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={imageUrls.community.golfCourse}
              alt="Red Rock Canyon landscape with dramatic sandstone formations near Arcadia Homes Las Vegas in Summerlin West, showing luxury golf course community"
              width={800}
              height={600}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="mt-16">
          <InteractiveMap />
        </div>
      </div>
    </section>
  );
}

