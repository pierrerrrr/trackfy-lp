'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="bg-background relative w-full overflow-hidden p-20  ">
      <div className="absolute inset-0 z-0">
        <div className="from-primary/20 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"></div>
        <div className="bg-primary/5 absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15"></div>

      <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground text-center text-4xl tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-8xl"
          >
            Rastreamento avançado que mostra <span className='text-primary'>de onde suas vendas</span> realmente vêm
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-center text-xl"
          >
            Transforme conversas em dados, dados em decisões e decisões em lucro
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group bg-black text-white hover:shadow-primary/30 relative overflow-hidden rounded-full px-10 py-7 shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 flex items-center text-lg">
                Fale com o time comercial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="from-primary via-primary/90 to-primary/80 absolute inset-0 z-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Button>
          </motion.div>

          <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
              <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                <div className="space-y-4">
                  <div className="text-4xl font-semibold">72h</div>
                  <p>Implementação completa</p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-semibold">100%</div>
                  <p>Atribuição precisa</p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-semibold text-primary">CAPI</div>
                  <p>API validada Meta</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
