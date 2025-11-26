'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { scaleIn, fadeUp, viewportConfig, bounceX } from "@/lib/animations";

export const Cta = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white particles-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          <motion.div 
            className="space-y-6 md:space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={scaleIn}
          >
            <h2 className="text-foreground text-center text-3xl tracking-tighter text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Suas vendas já estão acontecendo.{" "}
              <span className="text-primary">O que você não tem são os dados certos.</span>
            </h2>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
              variants={fadeUp}
            >
              A Trackfy entrega clareza, precisão e poder de escala.<br />
              Sem achismo. Sem desperdício. Sem travas.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(66, 227, 107, 0)',
                  '0 0 0 10px rgba(66, 227, 107, 0.1)',
                  '0 0 0 0 rgba(66, 227, 107, 0)'
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="inline-block rounded-full"
            >
              <Button 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 sm:px-8 md:px-10 h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://wa.me/5511995514020?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Trackfy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Chamar no WhatsApp agora
                  <motion.span
                    variants={bounceX}
                    initial="initial"
                    animate="animate"
                  >
                    <ArrowRight className="ml-2 h-5 md:h-6 w-5 md:w-6" />
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
