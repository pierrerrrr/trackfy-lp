'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportConfig, hoverLift } from "@/lib/animations";

export const PainSection = () => {
  const pains = [
    "O pixel não registra tudo",
    "WhatsApp gera vendas, mas você não sabe qual anúncio trouxe o cliente",
    "Equipe comercial vende, mas o gestor não vê a conversão",
    "Plataformas mostram dados diferentes (Meta, Google, WhatsApp, CRM…)",
    "Seus relatórios não batem com a realidade",
    "Você otimiza campanhas no escuro"
  ];

  return (
    <section className="bg-zinc-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 md:p-20">
        <div className="max-w-4xl mx-auto text-center space-y-12 md:space-y-16">
          <motion.h2 
            className="text-foreground text-center text-4xl tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
          >
            Você está perdendo dinheiro por não saber{" "}
            <span className="text-primary">de onde vêm suas vendas</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {pains.map((pain, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all"
                variants={staggerItem}
                whileHover={hoverLift}
              >
                <p className="text-lg text-foreground">{pain}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="pt-6 md:pt-8 space-y-6 md:space-y-8 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
          >
            <p className="text-xl sm:text-2xl font-semibold text-foreground max-w-3xl mx-auto">
              A falta de atribuição correta está fazendo você escalar errado, gastar mal e perder lucro todos os dias.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-lg border-2 hover:text-white hover:border hover:border-primary w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://wa.me/5511995514020?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Trackfy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <span className="truncate">Descobrir de onde vêm minhas vendas</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
