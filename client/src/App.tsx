import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Home from "@/pages/home";
import Community from "@/pages/community";
import Neighborhood from "@/pages/neighborhood";
import Lifestyle from "@/pages/lifestyle";
import Testimonials from "@/pages/testimonials";
import Homes from "@/pages/homes";
import HomeDetails from "@/pages/home-details";
import MarketReport from "@/pages/market-report";
import Amenities from "@/pages/amenities";
import Schools from "@/pages/schools";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import HomeValue from "@/pages/home-value";
import PropertyAlerts from "@/pages/property-alerts";
import MortgageCalculator from "@/pages/mortgage-calculator";
import MarketPredictions from "@/pages/market-predictions";
import BuyingGuide from "@/pages/buying-guide";
import SellingGuide from "@/pages/selling-guide";
import Resources from "@/pages/resources";
import Investment from "@/pages/investment";
import VirtualTours from "@/pages/virtual-tours";
import Relocation from "@/pages/relocation";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import NotFound from "@/pages/not-found";

const AIChatWidget = lazy(() => import("@/components/chat/AIChatWidget").then((m) => ({ default: m.AIChatWidget })));
const CalendlyBadge = lazy(() => import("@/components/calendly/CalendlyBadge").then((m) => ({ default: m.CalendlyBadge })));
const Gallery = lazy(() => import("@/pages/gallery"));
const FloorPlans = lazy(() => import("@/pages/floor-plans"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center" aria-hidden="true" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/homes" component={Homes} />
        <Route path="/homes/:id" component={HomeDetails} />
        <Route path="/floor-plans" component={FloorPlans} />
        <Route path="/community" component={Community} />
        <Route path="/neighborhood" component={Neighborhood} />
        <Route path="/lifestyle" component={Lifestyle} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/amenities" component={Amenities} />
        <Route path="/schools" component={Schools} />
        <Route path="/market-report" component={MarketReport} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/home-value" component={HomeValue} />
        <Route path="/property-alerts" component={PropertyAlerts} />
        <Route path="/mortgage-calculator" component={MortgageCalculator} />
        <Route path="/market-predictions" component={MarketPredictions} />
        <Route path="/buying-guide" component={BuyingGuide} />
        <Route path="/selling-guide" component={SellingGuide} />
        <Route path="/resources" component={Resources} />
        <Route path="/investment" component={Investment} />
        <Route path="/virtual-tours" component={VirtualTours} />
        <Route path="/relocation" component={Relocation} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <ErrorBoundary>
                <Router />
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
          <ExitIntentPopup />
          <Suspense fallback={null}>
            <AIChatWidget />
            <CalendlyBadge
              url="https://calendly.com/drjanduffy/showing"
              text="Schedule a showing"
              color="#235d8f"
              textColor="#ffffff"
            />
          </Suspense>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
