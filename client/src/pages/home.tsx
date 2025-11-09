import { Phone, UserCheck, CreditCard, Shield, AlertCircle, Lock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const services = [
    {
      icon: UserCheck,
      title: "Account setup and verification",
    },
    {
      icon: CreditCard,
      title: "Buying, selling, or transferring crypto",
    },
    {
      icon: Shield,
      title: "Wallet security and recovery",
    },
    {
      icon: AlertCircle,
      title: "Transaction disputes or errors",
    },
    {
      icon: Lock,
      title: "Two-factor authentication support",
    },
    {
      icon: GraduationCap,
      title: "General crypto education",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 flex items-center justify-center bg-dark-blue px-6 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            data-testid="text-hero-title"
          >
            24/7 Customer Support
          </h1>
          
          <p 
            className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto text-white/90"
            data-testid="text-hero-description"
          >
            Need help with your Onchain account or crypto transactions? Our support team is available around the clock to guide you with security, payments, and account issues.
          </p>

          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all bg-white text-blue hover:bg-white/95"
              data-testid="button-call-support"
            >
              <a href="tel:+14134448086" className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 (413) 444-8086</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-blue px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white"
            data-testid="text-services-title"
          >
            How We Can Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-white rounded-xl border-0 shadow-md hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-service-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-blue">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 
                      className="text-lg font-semibold leading-tight pt-2 text-dark-blue"
                      data-testid={`text-service-title-${index}`}
                    >
                      {service.title}
                    </h3>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-dark-blue px-6 py-8 border-t border-blue">
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-center text-sm text-white/70"
            data-testid="text-footer-copyright"
          >
            © 2025 Support – This page provides customer support information only.
          </p>
        </div>
      </footer>
    </div>
  );
}
