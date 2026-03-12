import { Link } from "wouter";
import { MapPin, Mountain, Home } from "lucide-react";

const areas = [
  {
    name: "Arcadia Homes Las Vegas",
    price: "From $2M",
    description: "Guard-gated, 45 custom estates, Red Rock views",
    href: "/community",
    icon: Home,
  },
  {
    name: "Summerlin West",
    price: "89135",
    description: "Master-planned, top schools, Downtown Summerlin",
    href: "/neighborhood",
    icon: MapPin,
  },
  {
    name: "Red Rock Canyon",
    price: "3 min drive",
    description: "Hiking, climbing, scenic loop",
    href: "/lifestyle",
    icon: Mountain,
  },
];

export function NeighborhoodsArcadia() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Arcadia &amp; Summerlin West
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Berkshire Hathaway HomeServices Nevada Properties serves Arcadia Homes Las Vegas and surrounding Summerlin West
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <Link
                key={area.name}
                href={area.href}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-primary/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{area.name}</h3>
                <p className="text-primary font-semibold text-lg mb-2">{area.price}</p>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/neighborhood"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View All Neighborhoods
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
