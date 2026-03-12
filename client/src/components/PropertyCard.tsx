import { memo, useMemo } from "react";
import { Link } from "wouter";
import { type Property } from "@shared/schema";
import { formatPrice, formatSquareFeet, formatDecimal } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: Property;
}

const STATUS_COLORS = {
  active: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  sold: "bg-gray-100 text-gray-800",
} as const;

export const PropertyCard = memo(function PropertyCard({ property }: PropertyCardProps) {
  const statusColor = useMemo(() => {
    return STATUS_COLORS[property.status as keyof typeof STATUS_COLORS] || STATUS_COLORS.active;
  }, [property.status]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link 
        href={`/homes/${property.id}`} 
        className="block"
        aria-label={`View details for ${property.bedrooms} bedroom home at ${property.address} priced at ${formatPrice(property.price)}`}
      >
        <div className="relative group overflow-hidden">
          <img
            src={property.imageUrl || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp"}
            alt={`${property.bedrooms} bedroom, ${formatDecimal(property.bathrooms)} bathroom home at ${property.address} in Arcadia Homes Las Vegas`}
            width={800}
            height={512}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Badge className={`absolute top-4 right-4 ${statusColor}`}>
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </Badge>
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold text-sm">Click to view details</p>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            {property.address}
          </h3>
        </div>
        
        <div className="text-2xl font-bold text-primary mb-4">
          {formatPrice(property.price)}
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600 mb-4">
          <div>
            <div className="font-semibold text-gray-900">{property.bedrooms}</div>
            <div>Bedrooms</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">
              {formatDecimal(property.bathrooms)}
            </div>
            <div>Bathrooms</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">
              {formatSquareFeet(property.squareFeet)}
            </div>
            <div>Sq Ft</div>
          </div>
        </div>
        
        <Link
          href={`/homes/${property.id}`}
          className="w-full btn-primary text-center block hover:shadow-lg transition-all"
          aria-label={`View full details for ${property.address}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
});
