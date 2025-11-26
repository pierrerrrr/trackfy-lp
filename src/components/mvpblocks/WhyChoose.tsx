'use client';

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, scaleBounce, viewportConfig, hoverLift } from "@/lib/animations";

export const WhyChoose = () => {
  const reasons = [
    "Especialistas em rastreamento avançado",
    "Entrega rápida em até 72 horas",
    "Fluxos n8n inteligentes",
    "API configurada com precisão",
    "Dados organizados e confiáveis",
    "Melhor custo-benefício do mercado",
    "Suporte humano e direto",
    "Método testado em dezenas de contas reais"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <motion.div 
            className="text-center space-y-4 md:space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
          >
            <h2 className="text-foreground text-center text-3xl tracking-tighter text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Por que escolher a <span className="text-primary">Trackfy</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all"
                variants={staggerItem}
                whileHover={hoverLift}
              >
                <motion.div variants={scaleBounce}>
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                </motion.div>
                <span className="text-lg text-foreground">{reason}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
