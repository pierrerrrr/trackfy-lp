'use client';

import { Workflow } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp, viewportConfig } from "@/lib/animations";

export const Footer = () => {
    return (
        <footer className="bg-muted/30 border-t border-border/50 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={staggerContainer}
                    >
                        <motion.div className="space-y-4" variants={staggerItem}>
                            <Link
                                prefetch={false}
                                href="/"
                                className="flex items-center space-x-2 group"
                            >
                                <motion.div 
                                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Workflow className="h-6 w-6 text-primary" />
                                </motion.div>
                                <span className="text-xl font-bold text-black group-hover:text-primary transition-colors">
                                    Trackfy
                                </span>
                            </Link>
                            <p className="text-muted-foreground">
                                Rastreamento avançado e automação inteligente
                            </p>
                        </motion.div>

                        <motion.div className="space-y-4" variants={staggerItem}>
                            <h4 className="font-semibold text-foreground">Confiança</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="hover:text-primary transition-colors cursor-default">Implementação em 72h</li>
                                <li className="hover:text-primary transition-colors cursor-default">API oficial Meta</li>
                                <li className="hover:text-primary transition-colors cursor-default">Time especializado</li>
                            </ul>
                        </motion.div>

                        <motion.div className="space-y-4" variants={staggerItem}>
                            <h4 className="font-semibold text-foreground">Produto</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="hover:text-primary transition-colors cursor-default">Tracking WhatsApp</li>
                                <li className="hover:text-primary transition-colors cursor-default">API de Conversões</li>
                                <li className="hover:text-primary transition-colors cursor-default">Automações n8n</li>
                            </ul>
                        </motion.div>

                        <motion.div className="space-y-4" variants={staggerItem}>
                            <h4 className="font-semibold text-foreground">Contato</h4>
                            <motion.a 
                                href="https://wa.me/5511995514020?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Trackfy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                                whileHover={{ x: 5 }}
                            >
                                Fale com nosso time comercial via WhatsApp
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={fadeUp}
                    >
                        <p>© 2025 Trackfy. Todos os direitos reservados.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};
