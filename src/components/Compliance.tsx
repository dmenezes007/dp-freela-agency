import { motion } from "framer-motion";

const items = [
  {
    icon: "⚖️",
    title: "Contratos Digitais",
    description:
      "Elaboração e revisão de contratos de prestação de serviços digitais com cláusulas de proteção de propriedade intelectual, rescisão e confidencialidade.",
  },
  {
    icon: "🔒",
    title: "Adequação LGPD",
    description:
      "Mapeamento de dados, política de privacidade, termos de uso e fluxos de consentimento conformes com a Lei Geral de Proteção de Dados.",
  },
  {
    icon: "🛡️",
    title: "Proteção de Marca",
    description:
      "Orientação para registro de marca, proteção de naming e ativos de identidade visual no INPI para blindagem do seu patrimônio intangível.",
  },
  {
    icon: "📋",
    title: "Onboarding Jurídico",
    description:
      "Estruturação de fluxo de onboarding de clientes com documentação, termos e formulários seguros que eliminam fricção sem abrir brechas legais.",
  },
  {
    icon: "🔍",
    title: "Auditoria de Conformidade",
    description:
      "Revisão técnica da operação digital: formulários, cookies, tracking e coleta de dados à luz da legislação brasileira vigente.",
  },
  {
    icon: "📄",
    title: "Documentação Estratégica",
    description:
      "Produção de SLAs, NDAs, políticas internas e documentos de gestão que dão suporte à operação e ao relacionamento com clientes e parceiros.",
  },
];

export function Compliance() {
  return (
    <section
      id="compliance"
      className="py-32 px-6 relative border-t border-white/5 bg-white/[0.01] scroll-mt-20"
    >
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#7A5CFF] rounded-full blur-[180px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-[#7A5CFF]/60 mb-6">
            Blindagem Jurídica
          </h3>
          <h2 className="text-4xl md:text-6xl font-sans font-black leading-[0.9] tracking-tighter">
            Compliance &<br />
            <span className="text-white/40 italic">Conformidade.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mt-6 font-light leading-relaxed">
            Sua operação digital precisa de fundação legal. Integramos
            compliance, LGPD e proteção de marca ao processo criativo — sem
            fricção, com segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl glass-panel border border-[#7A5CFF]/10 hover:border-[#7A5CFF]/30 transition-all group"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-[#7A5CFF]">
                {item.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                {item.description}
              </p>
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
            Quer blindar sua operação digital?
          </p>
          <a
            href="#diagnostico"
            className="px-8 py-4 rounded-xl font-bold bg-[#7A5CFF]/10 border border-[#7A5CFF]/40 text-[#7A5CFF] text-[10px] uppercase tracking-widest hover:bg-[#7A5CFF]/20 transition-all"
          >
            Iniciar Diagnóstico
          </a>
        </motion.div>
      </div>
    </section>
  );
}
