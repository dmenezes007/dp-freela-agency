import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export function StrategyGrid() {
  const pillars = [
    {
      number: "01",
      title: "Landing Pages de Alta Conversão",
      description: "Arquitetura orientada à decisão. Aplicamos nudging e psicologia comportamental em interfaces hiper-rápidas para dominar a atenção do usuário.",
      tags: ["UX Strategy", "Performance", "Copywriter"]
    },
    {
      number: "02",
      title: "E-books & Conteúdo Estruturado",
      description: "Do rascunho à diagramação avançada. Transformamos conhecimento abstrato em produtos digitais escaláveis que criam autoridade imediata.",
      tags: ["Editorial", "Curation IA", "Scale"]
    },
    {
      number: "03",
      title: "Marcas, Estratégia e Brand",
      description: "Sua marca não é só um logo, é um ativo. Unimos identidade visual premium à proteção de propriedade intelectual (PI) e adequação LGPD.",
      tags: ["Branding", "Legal Framework", "Naming"]
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-white/40 mb-6">Nossos Pilares</h3>
          <h2 className="text-4xl md:text-6xl font-sans font-black leading-[0.9] tracking-tighter">
            A Anatomia do <br />
            <span className="text-white/40 italic">Nosso Trabalho.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative flex flex-col p-8 lg:p-10 rounded-3xl glass-panel hover:bg-white/[0.04] transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 text-6xl font-sans font-black text-[#00D1FF]/10 group-hover:text-[#00D1FF]/30 transition-colors pointer-events-none">
                {pillar.number}
              </div>
              
              <h3 className="text-xl font-bold uppercase mb-4 leading-snug mt-12 pr-6">
                {pillar.title}
              </h3>
              
              <p className="text-white/50 text-xs leading-relaxed mb-8 flex-grow">
                {pillar.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {pillar.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono uppercase bg-white/5 text-white/50 border border-white/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-3 text-sm font-medium text-neon-blue cursor-pointer group/btn w-fit">
                Explorar Caso
                <MoveRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
