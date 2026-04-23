import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../lib/utils";

const CLUSTERS = [
  {
    id: "design",
    title: "Design & Estrutura Visual",
    description: "Criamos a base visual com propósito. Marcas que convertem, interfaces estruturadas e materiais editoriais de autoridade.",
    problem: "Seu site tem tráfego, mas não converte. A identidade não transmite o valor real do serviço.",
    diagnosis: "Falta de hierarquia visual, ausência de gatilhos comportamentais e UX desalinhado com a jornada do cliente.",
    solution: "Arquitetura orientada à decisão (Illustrator), otimização visual de ativos (Photoshop) e design editorial persuasivo (InDesign).",
    glowType: "glow-green",
    apps: [
      { id: "ai", name: "Illustrator", color: "border-[#FF9A00]/50", text: "text-[#FF9A00]", bg: "bg-[#261300]", label: "Ai" },
      { id: "ps", name: "Photoshop", color: "border-[#00FFB2]/50", text: "text-[#00FFB2]", bg: "bg-[#001E18]", label: "Ps" },
      { id: "id", name: "InDesign", color: "border-[#FF3366]/50", text: "text-[#FF3366]", bg: "bg-[#2D0014]", label: "Id" },
    ],
  },
  {
    id: "motion",
    title: "Motion & Experiência",
    description: "Retemos atenção com movimento estratégico. Storytelling visual e microinterações que conduzem a ação.",
    problem: "Alta taxa de rejeição e pouco engajamento. Usuários abandonam a página antes de entender a oferta.",
    diagnosis: "Atenção fragmentada. Falta de retenção visual e fluidez na apresentação do problema-solução.",
    solution: "Vídeos de conversão de alto impacto (Premiere) e interações e micro-animações cognitivas (After Effects).",
    glowType: "glow-blue",
    apps: [
      { id: "ae", name: "After Effects", color: "border-[#9999FF]/50", text: "text-[#9999FF]", bg: "bg-[#00005B]", label: "Ae" },
      { id: "pr", name: "Premiere Pro", color: "border-[#EA77FF]/50", text: "text-[#EA77FF]", bg: "bg-[#2D0033]", label: "Pr" },
    ],
  },
  {
    id: "compliance",
    title: "Documento & Conformidade",
    description: "Blindamos sua operação. Contratos ágeis, fluxos com validade jurídica e adequação LGPD.",
    problem: "Processos de fechamento lentos. Insegurança na coleta de dados e proteção de propriedade intelectual.",
    diagnosis: "Fricção no onboarding de clientes e falhas perigosas na conformidade legal de formulários e contratos.",
    solution: "Automação de documentos seguros e contratos digitais rastreáveis (Acrobat), integrados a fluxos UX fluídos.",
    glowType: "glow-purple",
    apps: [
      { id: "ac", name: "Acrobat", color: "border-[#FF0000]/50", text: "text-[#FF0000]", bg: "bg-[#320000]", label: "Ac" },
    ],
  },
];

export function InteractiveEcosystem() {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  return (
    <section className="relative py-32 px-6 lg:min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
            O Ecossistema de <span className="text-gradient">Conversão</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Integramos ferramentas líderes a metodologias próprias. Explore nosso motor de resultados baseado em diagnóstico e ação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D App Ecosystem Visualization */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            {/* Pulsing center globe/core */}
            <div className="absolute w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md z-10">
               <span className="font-display font-bold text-xl tracking-widest text-white/80">DP.</span>
               <div className="absolute inset-0 rounded-full bg-neon-blue/20 blur-xl -z-10 animate-pulse" />
            </div>

            {CLUSTERS.map((cluster, cIndex) => {
              const baseAngle = (cIndex / CLUSTERS.length) * Math.PI * 2 - Math.PI / 2;
              const radiusX = window.innerWidth < 768 ? 130 : 180;
              const radiusY = window.innerWidth < 768 ? 90 : 120; // Elliptical orbit

              return (
                <div key={cluster.id} className="absolute inset-0 flex items-center justify-center">
                  {cluster.apps.map((app, aIndex) => {
                    const offsetAngle = (aIndex - (cluster.apps.length - 1) / 2) * 0.4;
                    const finalAngle = baseAngle + offsetAngle;
                    
                    const x = Math.cos(finalAngle) * radiusX;
                    const y = Math.sin(finalAngle) * radiusY;

                    const isActive = activeCluster === cluster.id;
                    const isFaded = activeCluster && activeCluster !== cluster.id;

                    return (
                      <motion.button
                        key={app.id}
                        onClick={() => setActiveCluster(isActive ? null : cluster.id)}
                        className={cn(
                          "absolute w-16 h-16 rounded-xl flex flex-col items-center justify-center transition-all duration-500 cursor-pointer overflow-hidden border",
                          "hover:scale-110 hover:z-30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
                          app.color,
                          isActive && "scale-110 z-20 shadow-[0_0_40px_rgba(0,0,0,0.5)]",
                          isActive ? app.bg : "glass-panel",
                          isFaded && "opacity-20 scale-90"
                        )}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                          x, 
                          y, 
                          opacity: isFaded ? 0.3 : 1,
                        }}
                        transition={{
                          x: { type: "spring", stiffness: 50, damping: 15 },
                          y: { type: "spring", stiffness: 50, damping: 15 }
                        }}
                        // @ts-ignore
                        style={{
                          transform: `translate(${x}px, ${y}px)`
                        }}
                      >
                        <span className={cn("font-black text-xl leading-none", app.text)}>
                          {app.label}
                        </span>
                        {isActive && (
                           <motion.div 
                             layoutId="glow"
                             className={cn("absolute inset-0 -z-10 rounded-xl blur-lg opacity-30", cluster.glowType)}
                           />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Diagnostic Panel */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeCluster ? (
                <motion.div
                  key={activeCluster}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={cn("glass-panel p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center border-l-4", CLUSTERS.find(c => c.id === activeCluster)?.glowType, `border-l-${activeCluster === 'design' ? '[#00FFB2]' : activeCluster === 'motion' ? '[#00D1FF]' : '[#7A5CFF]'}`)}
                >
                  <div className="inline-flex px-3 py-1 bg-white/5 border border-white/10 rounded-max text-[10px] font-black uppercase tracking-widest text-[#00D1FF] mb-6 rounded-full w-fit">
                    Micro-Diagnóstico Estratégico
                  </div>
                  
                  {CLUSTERS.filter(c => c.id === activeCluster).map(cluster => (
                    <div key={cluster.id}>
                      <h3 className="text-3xl font-sans font-black tracking-tighter mb-8 leading-[0.9]">
                        {cluster.title}
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="border-l-4 border-[#00FFB2] pl-4 py-1 glass-panel bg-transparent border-t-0 border-r-0 border-b-0 rounded-none backdrop-blur-none">
                          <p className="text-[#00FFB2] text-[10px] font-bold tracking-widest uppercase mb-2">Problema Comum</p>
                          <p className="text-white/80 text-sm italic">"{cluster.problem}"</p>
                        </div>
                        
                        <div className="border-l-4 border-white/20 pl-4 py-1">
                          <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1">Nosso Diagnóstico</p>
                          <p className="text-white/60 text-sm font-medium">{cluster.diagnosis}</p>
                        </div>
                        
                        <div className="border-l-4 border-[#00D1FF] pl-4 py-1 bg-[#00D1FF]/5 -ml-4 p-4 rounded-r-xl">
                          <p className="text-[#00D1FF] text-[10px] font-bold tracking-widest uppercase mb-1">Solução DP Freela</p>
                          <p className="text-white text-sm font-bold">{cluster.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-white/10 justify-self-stretch rounded-3xl bg-white/[0.02]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00D1FF]/10 flex flex-items-center justify-center mb-6">
                     <span className="text-3xl opacity-50 block mt-3">⚡️</span>
                  </div>
                  <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-[#00D1FF] mb-2">Análise Constante</h3>
                  <p className="text-white/40 text-sm font-medium">Selecione um grupo de ferramentas ao lado para entender nossa lógica de diagnóstico e atuação.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
