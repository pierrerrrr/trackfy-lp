import { Workflow } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-muted/30 border-t border-border/50 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">
                        <div className="space-y-4">
                            <Link
                                prefetch={false}
                                href="/"
                                className="flex items-center space-x-2"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                                    <Workflow className="h-6 w-6 text-primary" />
                                </div>
                                <span className="text-xl font-bold text-black">
                                    Trackfy
                                </span>
                            </Link>
                            <p className="text-muted-foreground">
                                Rastreamento avançado e automação inteligente
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-foreground">Confiança</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Implementação em 72h</li>
                                <li>API oficial Meta</li>
                                <li>Time especializado</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-foreground">Produto</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Tracking WhatsApp</li>
                                <li>API de Conversões</li>
                                <li>Automações n8n</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-foreground">Contato</h4>
                            <a 
                                href="https://wa.me/5511995514020?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Trackfy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                Fale com nosso time comercial via WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                        <p>© 2025 Trackfy. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
