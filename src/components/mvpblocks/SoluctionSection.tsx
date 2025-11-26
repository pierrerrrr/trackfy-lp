import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const SolutionSection = () => {
  const deliverables = [
    "Instalação completa da API (Meta CAPI)",
    "Tracking WhatsApp → evento de lead",
    "Tracking WhatsApp → evento de conversão (venda)",
    "Fluxos n8n sob medida",
    "Dados limpos e sem duplicidade",
    "Validação do Events Manager",
    "Relatório base de dados",
    "Acompanhamento inicial"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="text-center space-y-6 md:space-y-8 px-4">
            <h2 className="text-foreground text-center text-4xl tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-6xl">
              O rastreamento completo que você sempre quis,{" "}
              <span className="text-primary">funcionando na prática</span>
            </h2>
            
            <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A Trackfy se conecta ao seu WhatsApp, Pixel, API de Conversões e automações n8n 
              para rastrear cada ação do cliente em tempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all"
              >
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">{item}</span>
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
                Falar com um especialista Trackfy
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
