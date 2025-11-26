'use client';

import {
  Building2,
  Lightbulb,
  ScreenShare,
  Trophy,
  User,
  User2,
  LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { 
  staggerContainer, 
  slideFromLeft, 
  slideFromRight, 
  scaleIn,
  fadeUp,
  viewportConfig,
  hoverLift
} from '@/lib/animations';

// Define the feature item type
type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: 'left' | 'right';
  cornerStyle?: string;
};

// Create feature data arrays for left and right columns
const leftFeatures: FeatureItem[] = [
  {
    icon: Building2,
    title: 'E-commerce',
    description:
      'Obtenha rastreamento preciso para sua loja online e campanhas de marketing.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: User2,
    title: 'Infoprodutos',
    description:
      'Obtenha rastreamento preciso para seus produtos digitais e campanhas de marketing.',
    position: 'left',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Trophy,
    title: 'Negócios locais',
    description:
      'Obtenha rastreamento preciso para seus negócios locais e campanhas de marketing.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: ScreenShare,
    title: 'Gestores de tráfeg',
    description:
      'Monitore o desempenho das campanhas de seus clientes com rastreamento avançado.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: User,
    title: 'Times comerciais',
    description:
      'Forneça à sua equipe de vendas dados precisos para otimizar conversões.',
    position: 'right',
    cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Lightbulb,
    title: 'Agências de marketing',
    description:
      'Ofereça aos seus clientes soluções de rastreamento avançado para maximizar resultados.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
  },
];

// Feature card component
const FeatureCard = ({ feature, direction }: { feature: FeatureItem; direction: 'left' | 'right' }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={direction === 'left' ? slideFromLeft : slideFromRight}
      whileHover={hoverLift}
    >
      <div
        className={cn(
          'relative rounded-2xl px-4 pt-4 pb-4 text-sm transition-all duration-300',
          'bg-white ring-border ring border hover:border-primary hover:shadow-lg',
          feature.cornerStyle,
        )}
      >
        <motion.div 
          className="text-primary mb-3 text-[2rem]"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon />
        </motion.div>
        <h2 className="text-foreground mb-2.5 text-2xl">{feature.title}</h2>
        <p className="text-muted-foreground text-base text-pretty">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </motion.div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="pt-20 pb-8 bg-zinc-50" id="features">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <motion.div 
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} direction="left" />
            ))}
          </motion.div>

          {/* Center column */}
          <motion.div 
            className="order-[1] mb-6 self-center sm:order-[0] md:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={scaleIn}
          >
            <h2 className="text-primary mb-2 text-center text-4xl sm:mb-2.5 md:text-[2.7rem]">
              Quem <br /> atendemos
            </h2>
          </motion.div>

          {/* Right column */}
          <motion.div 
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} direction="right" />
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUp}
      >
        <div className="text-center p-6 md:p-8 rounded-3xl bg-primary/5 border border-primary/20 mx-4">
          <p className="text-foreground text-center text-xl tracking-tighter text-balance sm:text-2xl md:text-3xl">
            Se você vende pelo WhatsApp,{" "}
            <span className="text-primary">a Trackfy é para você</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
