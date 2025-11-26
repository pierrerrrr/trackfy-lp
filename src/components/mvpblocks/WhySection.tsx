export const WhySection = () => {
  const reasons = [
    "O cliente cai no WhatsApp",
    "Há atendimento manual",
    "Existem etapas intermediárias",
    "Acontecem vendas fora do site",
    "Existe troca de dispositivo",
    "O funil envolve CRM e equipe comercial"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4 md:space-y-6 px-4">
            <h2 className="text-foreground text-center text-4xl tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-6xl">
              Por que isso acontece?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              O rastreamento tradicional (pixel e UTMs) não funciona bem quando:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="p-6 text-center rounded-2xl bg-white border border-border/50"
              >
                <p className="text-base text-foreground">{reason}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-6 md:p-8 rounded-3xl bg-primary/5 border border-primary/20 mx-4">
            <p className="text-foreground text-center text-xl tracking-tighter text-balance sm:text-2xl md:text-3xl">
              A Trackfy elimina esses buracos e faz o tracking completo do caminho do cliente,{" "}
              <span className="text-primary">do anúncio até a venda fechada</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
