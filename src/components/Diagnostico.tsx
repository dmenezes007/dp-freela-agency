import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Mapeamento de Gaps",
    description:
      "Analisamos sua presença digital, funil de vendas e posicionamento de marca para identificar onde você está perdendo conversões e deixando dinheiro na mesa.",
    tags: ["Auditoria", "UX Review", "Funil"],
  },
  {
    number: "02",
    title: "Diagnóstico de Posicionamento",
    description:
      "Avaliamos proposta de valor, diferenciais competitivos e narrativa de marca para identificar falhas de comunicação e oportunidades de autoridade no mercado.",
    tags: ["Brand Strategy", "Copy", "Posicionamento"],
  },
  {
    number: "03",
    title: "Plano de Ação Estratégico",
    description:
      "Entregamos um roadmap prioritizado com ações de curto, médio e longo prazo para transformar diagnóstico em resultado mensurável e recorrente.",
    tags: ["Roadmap", "KPIs", "Execução"],
  },
];

export function Diagnostico() {
  return (
    <section
      id="diagnostico"
      className="py-32 px-6 relative border-t border-white/5 scroll-mt-20"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#00D1FF] rounded-full blur-[180px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-[#00D1FF]/60 mb-6">
            Método DP Freela
          </h3>
          <h2 className="text-4xl md:text-6xl font-sans font-black leading-[0.9] tracking-tighter">
            Diagnóstico <br />
            <span className="text-white/40 italic">Estratégico.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mt-6 font-light leading-relaxed">
            Antes de executar qualquer entrega, entendemos a fundo onde estão
            seus gaps de conversão, posicionamento e blindagem jurídica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col p-8 lg:p-10 rounded-3xl glass-panel border border-[#00D1FF]/10 hover:border-[#00D1FF]/30 transition-all group"
            >
              <div className="absolute top-0 right-0 p-8 text-6xl font-sans font-black text-[#00D1FF]/10 group-hover:text-[#00D1FF]/20 transition-colors pointer-events-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold uppercase mb-4 leading-snug mt-12 pr-6 text-[#00D1FF]">
                {step.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed mb-8 flex-grow">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-mono uppercase bg-[#00D1FF]/5 text-[#00D1FF]/60 border border-[#00D1FF]/20 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center gap-6 justify-center"
        >
          <p className="text-white/40 text-sm">
            Pronto para mapear seu potencial?
          </p>
          <a
            href="#form-diagnostico"
            className="px-8 py-4 rounded-xl font-bold bg-[#00D1FF]/10 border border-[#00D1FF]/40 text-[#00D1FF] text-[10px] uppercase tracking-widest hover:bg-[#00D1FF]/20 transition-all"
          >
            Agendar Diagnóstico
          </a>
        </motion.div>
      </div>
    </section>
  );
}
