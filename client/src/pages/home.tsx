import { Hero } from "@/components/Hero";
import { WhyChooseBHHSArcadia } from "@/components/WhyChooseBHHSArcadia";
import { MarketStats } from "@/components/MarketStats";
import { FeaturedHomes } from "@/components/FeaturedHomes";
import { NeighborhoodsArcadia } from "@/components/NeighborhoodsArcadia";
import { WhyChooseUsGrid } from "@/components/WhyChooseUsGrid";
import { SocialProofWidget } from "@/components/SocialProofWidget";
import { FAQSection } from "@/components/FAQSection";
import { CommunityOverview } from "@/components/CommunityOverview";
import { MarketInsiderAlert } from "@/components/MarketInsiderAlert";
import { LocalLandmarks } from "@/components/LocalLandmarks";
import { WhyChooseArcadia } from "@/components/WhyChooseArcadia";
import { AboutDrDuffy } from "@/components/AboutDrDuffy";
import { ContactCTA } from "@/components/ContactCTA";
import { LeadMagnetPopup } from "@/components/LeadMagnetPopup";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";

const arcadiaFAQs = [
  {
    question: "What is Arcadia Homes Las Vegas?",
    answer: "Arcadia Homes Las Vegas is an exclusive guard-gated community in Summerlin West (ZIP 89135) with about 45 custom luxury estates. Homes typically range from $2M to $4M and offer Red Rock Canyon views, 24/7 security, and easy access to Downtown Summerlin and top schools.",
  },
  {
    question: "Where is Arcadia Homes Las Vegas located?",
    answer: "Arcadia is in Summerlin West, Las Vegas, NV 89135—minutes from Red Rock Canyon National Conservation Area and Downtown Summerlin. The community is guard-gated with controlled access.",
  },
  {
    question: "What price range are homes in Arcadia?",
    answer: "Arcadia Homes Las Vegas typically sees sale prices between $2 million and $4 million. Custom builds and view premiums can vary. Dr. Jan Duffy provides current market analysis and home valuations for the community.",
  },
  {
    question: "What schools serve Arcadia Homes Las Vegas?",
    answer: "Arcadia is served by the Clark County School District, including highly rated schools such as Palo Verde High School. Dr. Duffy can provide detailed school and neighborhood information for families.",
  },
  {
    question: "How do I get a home valuation in Arcadia?",
    answer: "Use the Home Value tool on this site or contact Dr. Jan Duffy at (702) 500-0337 or DrDuffy@arcadiahomeslasvegas.com for a personalized valuation and market report for Arcadia Homes Las Vegas.",
  },
  {
    question: "Why work with Dr. Jan Duffy for Arcadia?",
    answer: "Dr. Jan Duffy is a Berkshire Hathaway HomeServices Nevada Properties agent who specializes in Arcadia Homes Las Vegas and Summerlin West. She has served the area since 2008 and offers hyperlocal expertise, white-glove service, and access to off-market and pre-listing opportunities.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div id="home-content">
        <WhyChooseBHHSArcadia />
        <MarketStats />
        <FeaturedHomes />
        <NeighborhoodsArcadia />
        <WhyChooseUsGrid />
        <SocialProofWidget />
        <FAQSection
          title="Frequently Asked Questions"
          description="Get answers to common questions about Arcadia Homes Las Vegas and working with Dr. Jan Duffy."
          faqs={arcadiaFAQs}
          schemaId="home-faq-arcadia"
        />
        <CommunityOverview />
        <MarketInsiderAlert />
        <LocalLandmarks />
        <WhyChooseArcadia />
        <AboutDrDuffy />
        <ContactCTA />
      </div>
      <LeadMagnetPopup />
      <FloatingContactWidget />
    </>
  );
}
