import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyButton, CalendlyWidget } from "@/components/calendly";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { useMetaTags } from "@/hooks/useMetaTags";
import { addSchemaMarkup, generateFAQSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Contact() {
  useMetaTags({
    title: "Contact Dr. Jan Duffy - Arcadia Homes Las Vegas Realtor | (702) 500-0337",
    description: "Contact Dr. Jan Duffy, your Arcadia Homes Las Vegas real estate specialist. Call (702) 500-0337 or email DrDuffy@arcadiahomeslasvegas.com for personalized luxury home services in Summerlin West.",
    keywords: "contact Dr Jan Duffy, Arcadia Homes Las Vegas realtor, Summerlin West real estate agent, (702) 500-0337, luxury home consultation",
    ogTitle: "Contact Dr. Jan Duffy - Arcadia Homes Las Vegas Specialist",
    ogDescription: "Get in touch with Dr. Jan Duffy for expert real estate services in Arcadia Homes Las Vegas. Available 7 days a week.",
    canonical: "https://www.arcadiahomeslasvegas.com/contact",
  });

  // Add FAQ Schema Markup
  useEffect(() => {
    const faqs = [
      {
        question: "Why should I work with Dr. Jan Duffy for Arcadia Homes Las Vegas real estate?",
        answer: "Dr. Jan Duffy has been specializing exclusively in Arcadia Homes Las Vegas since 2008, making her the most experienced realtor in this exclusive guard-gated community. With over 200 properties sold and $180M+ in sales volume, she is your trusted partner for luxury real estate in Summerlin West."
      },
      {
        question: "What makes Arcadia Homes Las Vegas different from other Summerlin West communities?",
        answer: "Arcadia Homes Las Vegas is an exclusive guard-gated community with only 95 custom-built luxury homes, 24/7 security, Red Rock Canyon views, and prime Summerlin West location. The community offers unparalleled privacy, luxury, and exclusivity that sets it apart from other neighborhoods."
      },
      {
        question: "How can I contact Dr. Jan Duffy about Arcadia Homes Las Vegas?",
        answer: "You can contact Dr. Jan Duffy by calling or texting (702) 500-0337, emailing DrDuffy@arcadiahomeslasvegas.com, or using the contact form on this page. She typically responds within 24 hours and is available for immediate assistance with urgent matters related to Arcadia Homes Las Vegas."
      },
      {
        question: "Does Dr. Duffy have access to off-market properties in Arcadia Homes Las Vegas?",
        answer: "Yes, Dr. Jan Duffy's exclusive network and 15+ years of specialization in Arcadia Homes Las Vegas provides access to off-market and pre-market properties before they're listed publicly. Her relationships with homeowners, builders, and other agents give clients first access to exclusive opportunities."
      },
      {
        question: "What price range are luxury homes in Arcadia Homes Las Vegas?",
        answer: "Luxury homes in Arcadia Homes Las Vegas typically range from $2M to $4M, depending on size, features, and location within the community. Custom-built homes with Red Rock Canyon views command premium prices. Dr. Duffy provides detailed market analysis for current pricing trends."
      },
      {
        question: "How long has Dr. Jan Duffy been specializing in Arcadia Homes Las Vegas?",
        answer: "Dr. Jan Duffy has been specializing exclusively in Arcadia Homes Las Vegas since 2008, making her the most experienced and trusted realtor in this exclusive guard-gated community. Her deep knowledge and relationships provide clients with significant advantages in Summerlin West luxury real estate."
      }
    ];

    const faqSchema = generateFAQSchema(faqs);
    const schemaId = addSchemaMarkup(faqSchema, "contact-faq-schema");

    return () => {
      const script = document.getElementById(schemaId);
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="pt-20">
      <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Contact Dr. Duffy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to explore Arcadia Homes Las Vegas? Get in touch with Dr. Jan Duffy, your trusted 
              real estate specialist for personalized service and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-2">Call or text anytime</p>
                    <a 
                      href="tel:702-500-0337" 
                      className="text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      (702) 500-0337
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">Professional correspondence</p>
                    <a 
                      href="mailto:DrDuffy@arcadiahomeslasvegas.com" 
                      className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
                    >
                      DrDuffy@arcadiahomeslasvegas.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
                    <p className="text-gray-600 mb-2">Downtown Summerlin</p>
                    <p className="text-gray-600">
                      1980 Festival Plaza Drive<br />
                      Las Vegas, NV 89135
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                      <p className="text-sm text-primary mt-2">Available by appointment anytime</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href="tel:702-500-0337"
                    className="flex items-center justify-center space-x-2 btn-primary"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                    className="flex items-center justify-center space-x-2 btn-secondary"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>
                  <CalendlyButton
                    url="https://calendly.com/drjanduffy/showing"
                    text="Schedule a showing"
                    className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule a showing</span>
                  </CalendlyButton>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                Send a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and Dr. Duffy will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Arcadia property inquiry - LeadCaptureForm from heyberkshire.com */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Looking for a Home in Arcadia?
              </h2>
              <p className="text-xl text-gray-600">
                Share your criteria and Dr. Duffy will match you with Arcadia Homes Las Vegas listings ($2M–$4M).
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <LeadCaptureForm
                formType="property-search"
                source="contact-arcadia-inquiry"
                defaultInterest="buying"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a showing - Calendly widget from heyberkshire.com */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Schedule a Showing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book a time that works for you. Dr. Duffy will confirm your Arcadia Homes Las Vegas showing.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <CalendlyWidget url="https://calendly.com/drjanduffy/showing" height="700px" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              How Dr. Duffy Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate services tailored to your Arcadia Homes Las Vegas needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Buyer Consultation</h3>
              <p className="text-gray-600">
                Comprehensive market analysis, property tours, and expert guidance through 
                the home buying process in Arcadia Homes Las Vegas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Showings</h3>
              <p className="text-gray-600">
                Private tours of available Arcadia Homes Las Vegas properties, including off-market 
                opportunities and coming soon listings.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Analysis</h3>
              <p className="text-gray-600">
                Detailed market reports, property valuations, and investment analysis 
                specific to the Arcadia Homes Las Vegas community.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Selling Services</h3>
              <p className="text-gray-600">
                Strategic marketing, professional photography, and expert pricing to 
                maximize your Arcadia Homes Las Vegas home's sale potential.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Relocation Assistance</h3>
              <p className="text-gray-600">
                Complete relocation support including school information, community resources, 
                and local area orientation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Guidance</h3>
              <p className="text-gray-600">
                Investment property analysis, rental market insights, and long-term 
                appreciation forecasts for Arcadia Homes Las Vegas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about working with Dr. Duffy and buying in Arcadia Homes Las Vegas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why should I work with Dr. Jan Duffy for Arcadia Homes Las Vegas real estate?
                </h3>
                <p className="text-gray-600">
                  Dr. Jan Duffy has been specializing exclusively in Arcadia Homes Las Vegas since 2008, making her the most experienced realtor in this exclusive guard-gated community. With over 200 properties sold and $180M+ in sales volume, she is your trusted partner for luxury real estate in Summerlin West.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What makes Arcadia Homes Las Vegas different from other Summerlin West communities?
                </h3>
                <p className="text-gray-600">
                  Arcadia Homes Las Vegas is an exclusive guard-gated community with only 95 custom-built luxury homes, 24/7 security, Red Rock Canyon views, and prime Summerlin West location. The community offers unparalleled privacy, luxury, and exclusivity that sets it apart from other neighborhoods.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How can I contact Dr. Jan Duffy about Arcadia Homes Las Vegas?
                </h3>
                <p className="text-gray-600">
                  You can contact Dr. Jan Duffy by calling or texting (702) 500-0337, emailing DrDuffy@arcadiahomeslasvegas.com, or using the contact form on this page. She typically responds within 24 hours and is available for immediate assistance with urgent matters related to Arcadia Homes Las Vegas.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Does Dr. Duffy have access to off-market properties in Arcadia Homes Las Vegas?
                </h3>
                <p className="text-gray-600">
                  Yes, Dr. Jan Duffy's exclusive network and 15+ years of specialization in Arcadia Homes Las Vegas provides access to off-market and pre-market properties before they're listed publicly. Her relationships with homeowners, builders, and other agents give clients first access to exclusive opportunities.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What price range are luxury homes in Arcadia Homes Las Vegas?
                </h3>
                <p className="text-gray-600">
                  Luxury homes in Arcadia Homes Las Vegas typically range from $2M to $4M, depending on size, features, and location within the community. Custom-built homes with Red Rock Canyon views command premium prices. Dr. Duffy provides detailed market analysis for current pricing trends.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long has Dr. Jan Duffy been specializing in Arcadia Homes Las Vegas?
                </h3>
                <p className="text-gray-600">
                  Dr. Jan Duffy has been specializing exclusively in Arcadia Homes Las Vegas since 2008, making her the most experienced and trusted realtor in this exclusive guard-gated community. Her deep knowledge and relationships provide clients with significant advantages in Summerlin West luxury real estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Let's Start Your Arcadia Homes Las Vegas Journey
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Whether you're ready to buy, sell, or just explore your options in Arcadia Homes Las Vegas, 
            Dr. Duffy is here to help. Contact her today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-500-0337"
              className="flex items-center justify-center space-x-2 btn-secondary"
            >
              <Phone className="w-4 h-4" />
              <span>Call (702) 500-0337</span>
            </a>
            <a
                      href="mailto:DrDuffy@arcadiahomeslasvegas.com"
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
