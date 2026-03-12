import { Link } from "wouter";
import { Phone, Mail, MapPin, Home, TrendingUp, Award, FileText, Calculator, Bell } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl font-display">A</span>
              </div>
              <div>
                <div className="font-display text-2xl font-bold">Arcadia Homes Las Vegas</div>
                <div className="text-sm text-gray-400">Summerlin West Luxury Real Estate</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Your trusted partner for luxury real estate in Arcadia Homes Las Vegas, Summerlin West. 
              Specializing in this exclusive guard-gated community since 2008.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="font-semibold text-white">Dr. Jan Duffy, Realtor®</p>
              <p>Nevada License #BS.0145678</p>
              <p className="flex items-center space-x-1 mt-3">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Top 1% Las Vegas Realtors 2023</span>
              </p>
              {/* Berkshire Hathaway HomeServices Logo */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <img 
                  src="https://www.berkshirehathawayhs.com/wp-content/uploads/2021/06/BHHSNV-Logo-White.png" 
                  alt="Berkshire Hathaway HomeServices Nevada Properties" 
                  width={160}
                  height={40}
                  className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback to a text-based version if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.classList.add('hidden');
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <div className="hidden text-xs text-gray-500 mt-2">
                  Berkshire Hathaway HomeServices
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Explore</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/homes" className="hover:text-white transition-colors flex items-center space-x-2 group">
                  <Home className="w-4 h-4 group-hover:text-primary" />
                  <span>Available Homes</span>
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition-colors flex items-center space-x-2 group">
                  <MapPin className="w-4 h-4 group-hover:text-primary" />
                  <span>Community Info</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/floor-plans" className="hover:text-white transition-colors">Floor Plans</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-white transition-colors">Amenities</Link>
              </li>
              <li>
                <Link href="/schools" className="hover:text-white transition-colors">Schools</Link>
              </li>
            </ul>
          </div>

          {/* Resources & Tools */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/market-report" className="hover:text-white transition-colors flex items-center space-x-2 group">
                  <TrendingUp className="w-4 h-4 group-hover:text-primary" />
                  <span>Market Report</span>
                </Link>
              </li>
              <li>
                <Link href="/home-value" className="hover:text-white transition-colors flex items-center space-x-2 group">
                  <FileText className="w-4 h-4 group-hover:text-primary" />
                  <span>Home Value</span>
                </Link>
              </li>
              <li>
                <Link href="/mortgage-calculator" className="hover:text-white transition-colors flex items-center space-x-2 group">
                  <Calculator className="w-4 h-4 group-hover:text-primary" />
                  <span>Mortgage Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/property-alerts" className="hover:text-white transition-colors flex items-center space-x-2 group">
                  <Bell className="w-4 h-4 group-hover:text-primary" />
                  <span>Property Alerts</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Dr. Duffy</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Get in Touch</h4>
            <div className="space-y-4 text-gray-400">
              <a 
                href="tel:702-500-0337" 
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <div className="font-medium text-white">(702) 500-0337</div>
                </div>
              </a>
              <a 
                href="mailto:DrDuffy@arcadiahomeslasvegas.com" 
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-medium text-white text-sm">DrDuffy@arcadiahomeslasvegas.com</div>
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Office</div>
                  <div className="font-medium text-white">Downtown Summerlin</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {new Date().getFullYear()} Arcadia Homes Las Vegas Real Estate. All rights reserved.</p>
              <p className="mt-1 text-xs">Licensed in Nevada • Equal Housing Opportunity</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-gray-400 text-sm">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="text-gray-600">•</span>
              <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
