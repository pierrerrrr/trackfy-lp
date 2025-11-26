'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

// Custom variant para steps horizontais
const stepVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

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
          <motion.div 
            className="text-center space-y-4 md:space-y-6 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
          >
            <h2 className="text-foreground text-center text-4xl tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-6xl">
              Como funciona <span className="text-primary">na prática</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="space-y-3 md:space-y-4 text-center"
                custom={index}
                variants={stepVariant}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary/50"
                  whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center px-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://wa.me/5511995514020?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Trackfy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Quero implementar agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
