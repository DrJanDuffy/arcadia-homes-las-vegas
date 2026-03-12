/**
 * Lead Capture Form - Ported from heyberkshire.com
 * Submits to existing /api/leads (Arcadia). Optional property-search fields for Arcadia ($2M-$4M).
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";

export interface LeadCaptureFormProps {
  source?: string;
  defaultInterest?: "buying" | "selling" | "market_analysis" | "investment";
  formType?: "contact" | "property-search";
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function LeadCaptureForm({
  source = "website-form",
  defaultInterest = "buying",
  formType = "contact",
  onSuccess,
  onError,
}: LeadCaptureFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    interest: defaultInterest,
    priceMin: "",
    priceMax: "",
    bedrooms: "",
    bathrooms: "",
    timeline: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let message = formData.message;
      if (formType === "property-search" && (formData.priceMin || formData.priceMax || formData.bedrooms || formData.timeline)) {
        const parts: string[] = [];
        if (formData.message) parts.push(formData.message);
        parts.push("--- Property criteria ---");
        if (formData.priceMin || formData.priceMax)
          parts.push(`Price: $${formData.priceMin || "?"} - $${formData.priceMax || "?"}`);
        if (formData.bedrooms) parts.push(`Bedrooms: ${formData.bedrooms}+`);
        if (formData.bathrooms) parts.push(`Bathrooms: ${formData.bathrooms}+`);
        if (formData.timeline) parts.push(`Timeline: ${formData.timeline}`);
        message = parts.join("\n");
      }

      await apiRequest("POST", "/api/leads", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        interest: formData.interest,
        message: message || undefined,
        source,
      });

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        interest: defaultInterest,
        priceMin: "",
        priceMax: "",
        bedrooms: "",
        bathrooms: "",
        timeline: "",
      });
      onSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to submit. Please call (702) 500-0337.";
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your information has been received. Dr. Jan Duffy will contact you shortly.
        </p>
        <Button type="button" variant="outline" className="mt-4" onClick={() => setSuccess(false)}>
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-firstName" className="block text-sm font-medium mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="lead-firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="lead-lastName" className="block text-sm font-medium mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="lead-lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-email" className="block text-sm font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          id="lead-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
      </div>

      <div>
        <label htmlFor="lead-phone" className="block text-sm font-medium mb-1">
          Phone
        </label>
        <Input
          id="lead-phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          disabled={loading}
          placeholder="(702) 555-1234"
        />
      </div>

      {formType === "contact" && (
        <div>
          <label htmlFor="lead-interest" className="block text-sm font-medium mb-1">
            I am interested in
          </label>
          <select
            id="lead-interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            disabled={loading}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          >
            <option value="buying">Buying</option>
            <option value="selling">Selling</option>
            <option value="market_analysis">Market analysis</option>
            <option value="investment">Investment</option>
          </select>
        </div>
      )}

      {formType === "property-search" && (
        <>
          <div className="border-t pt-4 mt-4">
            <h3 className="font-semibold mb-3">Arcadia / Summerlin West criteria</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-priceMin" className="block text-sm font-medium mb-1">
                Min Price
              </label>
              <Input
                id="lead-priceMin"
                name="priceMin"
                type="number"
                value={formData.priceMin}
                onChange={handleChange}
                disabled={loading}
                placeholder="2000000"
              />
            </div>
            <div>
              <label htmlFor="lead-priceMax" className="block text-sm font-medium mb-1">
                Max Price
              </label>
              <Input
                id="lead-priceMax"
                name="priceMax"
                type="number"
                value={formData.priceMax}
                onChange={handleChange}
                disabled={loading}
                placeholder="4000000"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-bedrooms" className="block text-sm font-medium mb-1">
                Bedrooms
              </label>
              <Input
                id="lead-bedrooms"
                name="bedrooms"
                type="number"
                value={formData.bedrooms}
                onChange={handleChange}
                disabled={loading}
                min={1}
                max={10}
              />
            </div>
            <div>
              <label htmlFor="lead-timeline" className="block text-sm font-medium mb-1">
                Timeline
              </label>
              <select
                id="lead-timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                disabled={loading}
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              >
                <option value="">Select timeline...</option>
                <option value="Immediately">Immediately (ASAP)</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6-12 months">6-12 months</option>
                <option value="Just looking">Just looking</option>
              </select>
            </div>
          </div>
        </>
      )}

      <div>
        <label htmlFor="lead-message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="lead-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
          rows={4}
          className="w-full rounded-md border border-input bg-background px-3 py-2"
          placeholder="How can Dr. Jan Duffy help you with Arcadia Homes Las Vegas?"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Submitting..." : "Submit"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you consent to be contacted by Dr. Jan Duffy.
      </p>
    </form>
  );
}
