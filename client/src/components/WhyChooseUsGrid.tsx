import { Award, BarChart3, UserCheck, TrendingUp, MessageCircle, Briefcase } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Trusted Expertise",
    description: "Serving Arcadia Homes Las Vegas and Summerlin West since 2008 with proven results.",
  },
  {
    icon: BarChart3,
    title: "Market Knowledge",
    description: "Deep understanding of 89135 and guard-gated community trends and values.",
  },
  {
    icon: UserCheck,
    title: "Personalized Service",
    description: "Dedicated attention to every client with customized solutions for $2M–$4M estates.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "45+ successful transactions in Arcadia and satisfied luxury home clients.",
  },
  {
    icon: MessageCircle,
    title: "Responsive",
    description: "Quick response times and seamless communication throughout your journey.",
  },
  {
    icon: Briefcase,
    title: "Full Service",
    description: "Complete support from search to closing and beyond in Arcadia Homes Las Vegas.",
  },
];

export function WhyChooseUsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of working with a trusted real estate professional in Arcadia Homes Las Vegas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
