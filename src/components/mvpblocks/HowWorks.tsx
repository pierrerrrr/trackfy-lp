import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Entendemos seu funil e seu processo de venda"
    },
    {
      number: "02",
      title: "Mapeamento dos eventos",
      description: "Definimos o que será rastreado"
    },
    {
      number: "03",
      title: "Implementação técnica",
      description: "API + CAPI + WhatsApp + n8n"
    },
    {
      number: "04",
      title: "Validação e testes",
      description: "Garantimos que tudo está funcionando"
    },
    {
      number: "05",
      title: "Entrega e acompanhamento",
      description: "Você recebe um tracking 100% preciso"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="text-center space-y-4 md:space-y-6 px-4">
            <h2 className="text-foreground text-center text-4xl tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-6xl">
              Como funciona <span className="text-primary">na prática</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 px-4">
            {steps.map((step, index) => (
              <div key={index} className="space-y-3 md:space-y-4 text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary/50">{step.number}</div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center px-4">
            <Button 
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Quero implementar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
