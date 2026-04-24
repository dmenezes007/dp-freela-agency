import { motion } from "framer-motion";

const cases = [
  {
    label: "Case 01",
    title: "Landing Page de Alta Conversão",
    category: "UX + Copy + Dev",
    result: "+340% em leads qualificados",
    description:
      "Reestruturação completa de landing page para produto digital B2C. Aplicação de arquitetura de decisão, copywriting comportamental e performance técnica para maximizar conversão orgânica e paga.",
    tags: ["HTML5", "CSS3", "JavaScript", "Illustrator"],
    accentColor: "#00FFB2",
  },
  {
    label: "Case 02",
    title: "Identidade Visual & Brand System",
    category: "Branding + Editorial",
    result: "Marca registrada no INPI",
    description:
      "Criação de identidade visual completa com brandbook, manual de aplicação e proteção legal da marca para startup de serviços financeiros — do naming ao registro.",
    tags: ["Illustrator", "InDesign", "Acrobat"],
    accentColor: "#FF9A00",
  },
  {
    label: "Case 03",
    title: "E-book & Funil de Conteúdo",
    category: "Editorial + Automação",
    result: "4.200 leads em 30 dias",
    description:
      "Produção de e-book de autoridade com diagramação premium, integrado a funil de captura e sequência de e-mails automatizada para nutrição de leads qualificados.",
    tags: ["InDesign", "Python", "After Effects"],
    accentColor: "#EA77FF",
  },
  {
    label: "Case 04",
    title: "VSL + Motion para Lançamento",
    category: "Motion + Vídeo",
    result: "R$ 280k em 7 dias de lançamento",
    description:
      "Produção de vídeo de vendas (VSL) com motion graphics e edição estratégica para lançamento de infoproduto no modelo PLF, com criativos para Meta Ads e orgânico.",
    tags: ["After Effects", "Premiere Pro", "Illustrator"],
    accentColor: "#9999FF",
  },
];

export function CaseDigital() {
  return (
    <section
      id="case-digital"
      className="py-32 px-6 relative border-t border-white/5 scroll-mt-20"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00FFB2] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-[#00FFB2]/60 mb-6">
            Resultados Reais
          </h3>
          <h2 className="text-4xl md:text-6xl font-sans font-black leading-[0.9] tracking-tighter">
            Cases <br />
            <span className="text-white/40 italic">Digitais.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mt-6 font-light leading-relaxed">
            Estratégia sem resultado é teoria. Veja como transformamos
            diagnóstico em performance mensurável para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((c, index) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 lg:p-10 rounded-3xl glass-panel border-l-4 hover:bg-white/[0.04] transition-all group"
              style={{ borderLeftColor: c.accentColor }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.25em] font-black mb-1"
                    style={{ color: c.accentColor }}
                  >
                    {c.label} · {c.category}
                  </p>
                  <h3 className="text-xl font-bold uppercase leading-snug">
                    {c.title}
                  </h3>
                </div>
              </div>

              <p className="text-white/50 text-xs leading-relaxed mb-6">
                {c.description}
              </p>

              <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-lg">📈</span>
                <span
                  className="text-sm font-bold"
                  style={{ color: c.accentColor }}
                >
                  {c.result}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-mono uppercase bg-white/5 text-white/40 border border-white/10 px-2 py-1 rounded"
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
            Quer resultados como esses?
          </p>
          <a
            href="#form-diagnostico"
            className="px-8 py-4 rounded-xl font-bold bg-[#00FFB2]/10 border border-[#00FFB2]/40 text-[#00FFB2] text-[10px] uppercase tracking-widest hover:bg-[#00FFB2]/20 transition-all"
          >
            Iniciar Diagnóstico
          </a>
        </motion.div>
      </div>
    </section>
  );
}
