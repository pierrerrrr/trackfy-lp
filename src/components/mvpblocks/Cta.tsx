import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Cta = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white particles-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-foreground text-center text-3xl tracking-tighter text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Suas vendas já estão acontecendo.{" "}
              <span className="text-primary">O que você não tem são os dados certos.</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              A Trackfy entrega clareza, precisão e poder de escala.<br />
              Sem achismo. Sem desperdício. Sem travas.
            </p>
          </div>

          <Button 
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 sm:px-8 md:px-10 h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl w-full sm:w-auto"
            asChild
          >
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp agora
              <ArrowRight className="ml-2 h-5 md:h-6 w-5 md:w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
