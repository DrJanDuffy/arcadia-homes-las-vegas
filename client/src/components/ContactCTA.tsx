import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Work with Dr. Jan Duffy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you&apos;re buying or selling in Arcadia Homes Las Vegas, Dr. Jan Duffy is here to help with personalized luxury home services in Summerlin West.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="tel:702-500-0337" 
                className="flex items-center space-x-4 p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all group cursor-pointer"
                aria-label="Call Dr. Jan Duffy at (702) 500-0337"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Call or Text</div>
                  <div className="text-gray-300 group-hover:text-white transition-colors">(702) 500-0337</div>
                </div>
              </a>
              
              <a 
                href="mailto:DrDuffy@arcadiahomeslasvegas.com" 
                className="flex items-center space-x-4 p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all group cursor-pointer"
                aria-label="Email Dr. Jan Duffy at DrDuffy@arcadiahomeslasvegas.com"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300 group-hover:text-white transition-colors">DrDuffy@arcadiahomeslasvegas.com</div>
                </div>
              </a>
              
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Office</div>
                  <div className="text-gray-300">Downtown Summerlin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
              Get Your Free Market Analysis
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
