import { useEffect } from "react";
import { Award, Star, Home, Users, Phone, Mail, Calendar, MapPin } from "lucide-react";
import { imageUrls } from "@/lib/imageUrls";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup, generateFAQSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function About() {
  // SEO Meta Tags
  useMetaTags({
    title: "About Dr. Jan Duffy - Arcadia Homes Las Vegas Realtor | 15+ Years Experience",
    description: "Meet Dr. Jan Duffy, the only realtor exclusively focused on Arcadia Homes Las Vegas. 15+ years experience, Top 1% agent, $180M+ in sales. Hyper-local expertise in Summerlin West 89135.",
    keywords: "Dr Jan Duffy realtor, Arcadia Homes Las Vegas specialist, Summerlin West real estate agent, luxury home expert, Top 1% Las Vegas realtor",
    ogTitle: "About Dr. Jan Duffy - Arcadia Homes Las Vegas Specialist",
    ogDescription: "The only realtor exclusively focused on Arcadia Homes Las Vegas. Hyper-local expertise, service-focused approach. 15+ years, Top 1% agent.",
    ogImage: imageUrls.about.professional,
    ogUrl: "https://www.arcadiahomeslasvegas.com/about",
    canonical: "https://www.arcadiahomeslasvegas.com/about",
  });

  // Add Person Schema Markup
  useEffect(() => {
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr. Jan Duffy",
      "jobTitle": "Luxury Real Estate Specialist",
      "description": "The only realtor exclusively focused on Arcadia Homes Las Vegas. 15+ years of experience, Top 1% Las Vegas Realtor.",
      "url": "https://www.arcadiahomeslasvegas.com/about",
      "image": imageUrls.about.professional,
      "telephone": "(702) 500-0337",
      "email": "DrDuffy@arcadiahomeslasvegas.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1980 Festival Plaza Drive",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89135",
        "addressCountry": "US"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Business Administration Doctoral Program"
      },
      "knowsAbout": ["Arcadia Homes Las Vegas", "Summerlin West", "Luxury Real Estate", "Guard Gated Communities"],
      "award": "Top 1% Las Vegas Realtors 2023"
    };

    const schemaId = addSchemaMarkup(personSchema, "about-person-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  // Add FAQ Schema
  useEffect(() => {
    const faqs = [
      {
        question: "What is Arcadia Homes Las Vegas?",
        answer: "Arcadia Homes Las Vegas is an exclusive guard-gated luxury community in Summerlin West, featuring approximately 95 custom-built homes ranging from $2M to $4M. This prestigious community offers 24/7 security, stunning Red Rock Canyon views, and proximity to world-class amenities. Dr. Jan Duffy has been specializing in this community since 2008."
      },
      {
        question: "Why choose Arcadia Homes Las Vegas for luxury real estate?",
        answer: "Arcadia Homes Las Vegas offers the perfect combination of guard-gated security, custom luxury homes (3,200-8,000 sq ft), breathtaking Red Rock Canyon views, and prime Summerlin West location. The community provides privacy, exclusivity, and access to top-rated schools, championship golf courses, and premium shopping at Downtown Summerlin."
      },
      {
        question: "What makes Summerlin West luxury real estate special?",
        answer: "Summerlin West is Las Vegas's most desirable neighborhood, featuring guard-gated communities, custom-built luxury homes, Red Rock Canyon access, and world-class amenities. The 89135 ZIP code has a median household income of $128,500 and 91% homeownership rate, making it ideal for luxury real estate investment."
      },
      {
        question: "How long has Dr. Jan Duffy specialized in Arcadia Homes Las Vegas?",
        answer: "Dr. Jan Duffy has been specializing exclusively in Arcadia Homes Las Vegas since 2008, making her the most experienced realtor in this community. With over 200 properties sold and $180M+ in sales volume, she is your trusted partner for luxury real estate in this exclusive guard-gated community."
      },
      {
        question: "What types of luxury homes are available in Arcadia Homes Las Vegas?",
        answer: "Arcadia Homes Las Vegas features custom-built luxury homes ranging from 3,200 to 8,000 square feet, with 4-6 bedrooms and 3-6 bathrooms. Homes include premium features like wine cellars, home theaters, outdoor kitchens, guest casitas, and Red Rock Canyon views. Prices typically range from $2M to $4M."
      },
      {
        question: "Why is Arcadia Homes Las Vegas considered exclusive?",
        answer: "Arcadia Homes Las Vegas is exclusive due to its 24/7 guard-gated security, limited inventory of only 95 custom homes, strict architectural guidelines, prime Summerlin West location, and Red Rock Canyon views. The community offers privacy, luxury, and a close-knit neighborhood atmosphere that attracts discerning buyers."
      }
    ];

    const faqSchema = generateFAQSchema(faqs);
    const schemaId = addSchemaMarkup(faqSchema, "about-faq-schema");
    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);
  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "About", url: "/about" }]} />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                Meet Dr. Jan Duffy
              </h1>
              <h2 className="text-2xl text-primary font-semibold mb-6">
                The Only Realtor® Exclusively Focused on Arcadia Homes Las Vegas
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
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
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={imageUrls.about.professional}
                alt="Dr. Jan Duffy, Arcadia Homes Las Vegas real estate specialist in Summerlin West"
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-8">
                Professional Background & Expertise
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">📍 Hyper-Local Advantage:</span> Dr. Jan Duffy brings a unique combination of academic rigor 
                  and hyper-local real estate expertise to every Arcadia Homes Las Vegas transaction. With a doctoral degree 
                  in business administration and 15+ years exclusively serving Summerlin West's guard-gated communities in 
                  the 89135 zip code, she has become the definitive expert for Arcadia Homes Las Vegas buyers and sellers.
                </p>
                
                <p>
                  <span className="font-semibold text-gray-900">🎯 Service-Focused Expertise:</span> As a Summerlin West resident who lives within minutes 
                  of Arcadia Homes Las Vegas, Dr. Duffy provides hyper-local insights that only come from daily life in the 
                  community. Her deep knowledge comes from years of dedicated focus on this exclusive guard-gated enclave, 
                  where she has successfully represented both buyers and sellers in $2M-$4M luxury home transactions.
                </p>
                
                <p>
                  <span className="font-semibold text-gray-900">🏡 Arcadia-Specific Services:</span> Pre-market property previews, guard-gate community 
                  insights, Red Rock Canyon view assessments, custom home builder relationships, and exclusive access to 
                  Arcadia Homes Las Vegas inventory before it hits the MLS. Dr. Duffy doesn't just list homes—she provides 
                  concierge-level service tailored specifically to the Arcadia Homes Las Vegas community.
                </p>
                
                <p>
                  Dr. Duffy's approach combines analytical precision with personalized service. 
                  She provides clients with comprehensive market analysis, strategic pricing 
                  recommendations, and expert negotiation skills that consistently deliver 
                  exceptional results.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Doctorate in Business Administration</li>
                    <li>• Master's in Real Estate Development</li>
                    <li>• Bachelor's in Finance</li>
                  </ul>
                </div>
                <div className="bg-secondary/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Luxury Home Marketing</li>
                    <li>• Investment Property Analysis</li>
                    <li>• Relocation Services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">200+ Homes Sold</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Summerlin Resident</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Top 1% Agent</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>(702) 500-0337</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>DrDuffy@arcadiahomeslasvegas.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5" />
                    <span>Downtown Summerlin Office</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Credentials & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Duffy's professional accomplishments and industry recognition speak to her 
              expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed Realtor®</h3>
              <p className="text-gray-600 text-sm">Nevada License #BS.0145678</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Producer</h3>
              <p className="text-gray-600 text-sm">Top 1% Las Vegas Realtors 2023</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CLHMS Certified</h3>
              <p className="text-gray-600 text-sm">Certified Luxury Home Marketing Specialist</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Arcadia Homes Las Vegas Expert</h3>
              <p className="text-gray-600 text-sm">Community Specialist Since 2008</p>
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6 text-center">
              Professional Memberships & Affiliations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">National Association of Realtors®</h4>
                <p className="text-gray-600 text-sm">Member since 2008</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Las Vegas Realtors Association</h4>
                <p className="text-gray-600 text-sm">Board Member 2020-2023</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Institute for Luxury Home Marketing</h4>
                <p className="text-gray-600 text-sm">Certified Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read what Arcadia Homes Las Vegas clients have to say about their experience working with Dr. Duffy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Dr. Duffy's knowledge of Arcadia Homes Las Vegas is unmatched. She helped us find the perfect 
                home and guided us through every step of the process with professionalism and care."
              </p>
              <div className="font-semibold text-gray-900">Sarah & Michael Johnson</div>
              <div className="text-sm text-gray-600">Arcadia Homes Las Vegas Homeowners since 2022</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Selling our Arcadia Homes Las Vegas home was seamless thanks to Dr. Duffy's marketing expertise. 
                We received multiple offers and sold above asking price within a week."
              </p>
              <div className="font-semibold text-gray-900">Robert & Linda Chen</div>
              <div className="text-sm text-gray-600">Sold 1425 Desert Vista Drive</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "As first-time luxury home buyers, we appreciated Dr. Duffy's patience and expertise. 
                She truly understands the Arcadia Homes Las Vegas market and negotiated an excellent deal for us."
              </p>
              <div className="font-semibold text-gray-900">David & Jennifer Martinez</div>
              <div className="text-sm text-gray-600">Purchased 892 Sunset Ridge Court</div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Approach */}
      <section className="py-20 bg-primary/5">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                My Personal Approach
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  "Real estate is more than just buying and selling properties—it's about helping 
                  families find their perfect home and build their future. Every client deserves 
                  personalized attention and expert guidance throughout their journey."
                </p>
                
                <p>
                  "Living in Summerlin for over a decade has given me intimate knowledge of what 
                  makes each community special. Arcadia Homes Las Vegas holds a particular place in my heart 
                  because of its unique combination of luxury, security, and natural beauty."
                </p>
                
                <p>
                  "My commitment extends beyond the closing table. I believe in building lasting 
                  relationships with my clients and being their trusted real estate advisor for life."
                </p>
              </div>
              
              <div className="mt-8 text-right">
                <div className="text-2xl font-display font-semibold text-gray-900">Dr. Jan Duffy</div>
                <div className="text-gray-600">Arcadia Homes Las Vegas Specialist</div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80&fm=webp"
                alt="Dr. Duffy in her office"
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Frequently Asked Questions About Arcadia Homes Las Vegas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about this exclusive guard-gated community in Summerlin West and luxury real estate
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What is Arcadia Homes Las Vegas?
              </h3>
              <p className="text-gray-600">
                Arcadia Homes Las Vegas is an exclusive guard-gated luxury community in Summerlin West, featuring approximately 95 custom-built homes ranging from $2M to $4M. This prestigious community offers 24/7 security, stunning Red Rock Canyon views, and proximity to world-class amenities. Dr. Jan Duffy has been specializing in this community since 2008.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Why choose Arcadia Homes Las Vegas for luxury real estate?
              </h3>
              <p className="text-gray-600">
                Arcadia Homes Las Vegas offers the perfect combination of guard-gated security, custom luxury homes (3,200-8,000 sq ft), breathtaking Red Rock Canyon views, and prime Summerlin West location. The community provides privacy, exclusivity, and access to top-rated schools, championship golf courses, and premium shopping at Downtown Summerlin.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What makes Summerlin West luxury real estate special?
              </h3>
              <p className="text-gray-600">
                Summerlin West is Las Vegas's most desirable neighborhood, featuring guard-gated communities, custom-built luxury homes, Red Rock Canyon access, and world-class amenities. The 89135 ZIP code has a median household income of $128,500 and 91% homeownership rate, making it ideal for luxury real estate investment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long has Dr. Jan Duffy specialized in Arcadia Homes Las Vegas?
              </h3>
              <p className="text-gray-600">
                Dr. Jan Duffy has been specializing exclusively in Arcadia Homes Las Vegas since 2008, making her the most experienced realtor in this community. With over 200 properties sold and $180M+ in sales volume, she is your trusted partner for luxury real estate in this exclusive guard-gated community.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What types of luxury homes are available in Arcadia Homes Las Vegas?
              </h3>
              <p className="text-gray-600">
                Arcadia Homes Las Vegas features custom-built luxury homes ranging from 3,200 to 8,000 square feet, with 4-6 bedrooms and 3-6 bathrooms. Homes include premium features like wine cellars, home theaters, outdoor kitchens, guest casitas, and Red Rock Canyon views. Prices typically range from $2M to $4M.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Why is Arcadia Homes Las Vegas considered exclusive?
              </h3>
              <p className="text-gray-600">
                Arcadia Homes Las Vegas is exclusive due to its 24/7 guard-gated security, limited inventory of only 95 custom homes, strict architectural guidelines, prime Summerlin West location, and Red Rock Canyon views. The community offers privacy, luxury, and a close-knit neighborhood atmosphere that attracts discerning buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Whether you're buying or selling in Arcadia Homes Las Vegas, Dr. Duffy is here to provide 
            expert guidance and exceptional service. Let's discuss your real estate goals today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-500-0337"
              className="flex items-center justify-center space-x-2 btn-secondary"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dr. Duffy</span>
            </a>
            <a
              href="/contact"
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
