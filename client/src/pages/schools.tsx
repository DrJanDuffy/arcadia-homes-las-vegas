import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { GraduationCap, MapPin, Star, ExternalLink, Users, Award } from "lucide-react";
import { type School } from "@shared/schema";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup } from "@/lib/seo";

export default function Schools() {
  // SEO Meta Tags
  useMetaTags({
    title: "Schools Near Arcadia Homes Las Vegas | Top-Rated Education in Summerlin West",
    description: "Arcadia Homes Las Vegas students attend top-rated schools in Clark County School District. Elementary, middle, and high school information. A-rated district with excellent academic programs.",
    keywords: "Arcadia Homes Las Vegas schools, Summerlin West schools, Clark County School District, 89135 schools, top rated schools Las Vegas",
    ogTitle: "Schools Near Arcadia Homes Las Vegas",
    ogDescription: "Top-rated schools in Clark County School District. Elementary, middle, and high school information for Arcadia Homes Las Vegas families.",
    ogUrl: "https://www.arcadiahomeslasvegas.com/schools",
    canonical: "https://www.arcadiahomeslasvegas.com/schools",
  });
  const { data: schools, isLoading } = useQuery<School[]>({
    queryKey: ["/api/schools"],
  });

  // Add ItemList Schema for schools
  useEffect(() => {
    if (schools && schools.length > 0) {
      const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Schools Near Arcadia Homes Las Vegas",
        "description": "Top-rated schools in Clark County School District serving Arcadia Homes Las Vegas students",
        "url": "https://www.arcadiahomeslasvegas.com/schools",
        "numberOfItems": schools.length,
        "itemListElement": schools.map((school, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "EducationalOrganization",
            "name": school.name,
            "description": `${school.level} school in Clark County School District`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89135"
            },
            "educationalCredentialAwarded": school.level
          }
        }))
      };

      const schemaId = addSchemaMarkup(itemListSchema, "schools-list-schema");
      return () => {
        const script = document.getElementById(schemaId);
        if (script) script.remove();
      };
    }
  }, [schools]);

  const groupSchoolsByLevel = (schools: School[]) => {
    return schools.reduce((acc, school) => {
      if (!acc[school.level]) {
        acc[school.level] = [];
      }
      acc[school.level].push(school);
      return acc;
    }, {} as Record<string, School[]>);
  };

  const levelInfo = {
    elementary: {
      title: "Elementary Schools",
      icon: "🎨",
      description: "Foundational education with focus on creativity and exploration",
      grades: "Kindergarten - 5th Grade"
    },
    middle: {
      title: "Middle Schools", 
      icon: "📚",
      description: "Transitional education preparing students for high school",
      grades: "6th - 8th Grade"
    },
    high: {
      title: "High Schools",
      icon: "🎓",
      description: "College preparatory education with advanced placement courses",
      grades: "9th - 12th Grade"
    }
  };

  const groupedSchools = schools ? groupSchoolsByLevel(schools) : {};

  const getRatingColor = (rating: number | null) => {
    if (!rating) return "bg-gray-100 text-gray-800";
    if (rating >= 9) return "bg-green-100 text-green-800";
    if (rating >= 7) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Schools & Education
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Arcadia Homes Las Vegas students attend some of the highest-rated schools in Clark County. 
              Excellence in education is one of the many advantages of this premier community.
            </p>
          </div>
        </div>
      </section>

      {/* School District Overview */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Clark County School District
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Arcadia Homes Las Vegas is served by the Clark County School District, one of the largest 
                and most progressive school districts in the United States. The district is 
                committed to providing quality education and preparing students for college and career success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">A</div>
                  <div className="text-sm text-gray-600">District Rating</div>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">320K+</div>
                  <div className="text-sm text-gray-600">Students Served</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">365+</div>
                  <div className="text-sm text-gray-600">Schools</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">24K+</div>
                  <div className="text-sm text-gray-600">Teachers</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=800&q=80&fm=webp"
                alt="Students in classroom"
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Educational Excellence Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-primary/5 rounded-xl">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Excellence</h3>
              <p className="text-gray-600">
                Advanced Placement courses, International Baccalaureate programs, and STEM initiatives
              </p>
            </div>
            <div className="text-center p-8 bg-secondary/5 rounded-xl">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Small Class Sizes</h3>
              <p className="text-gray-600">
                Low student-to-teacher ratios ensuring personalized attention and support
              </p>
            </div>
            <div className="text-center p-8 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">College Preparation</h3>
              <p className="text-gray-600">
                Comprehensive college counseling and dual enrollment opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schools by Level */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          {isLoading ? (
            <div className="space-y-16">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-8 bg-gray-200 rounded w-64 mb-8 animate-pulse"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((j) => (
                      <div key={j} className="bg-white rounded-xl shadow-lg p-8 animate-pulse">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                        <div className="space-y-3">
                          <div className="h-4 bg-gray-200 rounded"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : Object.keys(groupedSchools).length > 0 ? (
            <div className="space-y-16">
              {['elementary', 'middle', 'high'].map((level) => {
                const schoolsInLevel = groupedSchools[level];
                if (!schoolsInLevel) return null;

                return (
                  <div key={level}>
                    <div className="text-center mb-12">
                      <div className="text-6xl mb-4">
                        {levelInfo[level as keyof typeof levelInfo]?.icon}
                      </div>
                      <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                        {levelInfo[level as keyof typeof levelInfo]?.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-2">
                        {levelInfo[level as keyof typeof levelInfo]?.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {levelInfo[level as keyof typeof levelInfo]?.grades}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {schoolsInLevel.map((school) => (
                        <div key={school.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">{school.name}</h3>
                            {school.rating && (
                              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRatingColor(school.rating)}`}>
                                <Star className="w-3 h-3 mr-1" />
                                {school.rating}/10
                              </div>
                            )}
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-gray-600">
                              <GraduationCap className="w-4 h-4 mr-2" />
                              <span>{school.district}</span>
                            </div>
                            {school.distance && (
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{school.distance}</span>
                              </div>
                            )}
                            {school.address && (
                              <div className="flex items-start text-sm text-gray-600">
                                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                                <span>{school.address}</span>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="text-sm text-gray-500">
                              Highly Rated {level.charAt(0).toUpperCase() + level.slice(1)} School
                            </div>
                            {school.website && (
                              <a 
                                href={school.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No school data available</h3>
              <p className="text-gray-500">School information will be updated soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Educational Programs */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Educational Programs & Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Students in the Arcadia Homes Las Vegas area have access to exceptional educational programs 
              and extracurricular opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-primary/5 rounded-xl">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">STEM Programs</h3>
              <p className="text-gray-600 text-sm">Advanced science, technology, engineering, and mathematics curriculum</p>
            </div>
            <div className="text-center p-6 bg-secondary/5 rounded-xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Arts Education</h3>
              <p className="text-gray-600 text-sm">Visual arts, music, theater, and creative writing programs</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl mb-4">⚽</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Athletics</h3>
              <p className="text-gray-600 text-sm">Comprehensive sports programs and physical education</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gifted & Talented</h3>
              <p className="text-gray-600 text-sm">Accelerated learning programs for advanced students</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Invest in Your Children's Future
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Give your children access to exceptional education in one of Las Vegas's 
            most sought-after school districts. Contact Dr. Duffy to learn more about 
            school enrollment and the Arcadia Homes Las Vegas advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:702-500-0337" className="btn-secondary">
              Discuss School Options
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
