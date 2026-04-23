import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../lib/utils";

type EcosystemApp = {
  id: string;
  name: string;
  logoUrl: string;
  accentColor: string;
  color: string;
  text: string;
  bg: string;
  functionalities: string[];
};

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
      {
        id: "ai",
        name: "Adobe Illustrator",
        logoUrl: "https://cdn.simpleicons.org/adobeillustrator/FF9A00",
        accentColor: "#FF9A00",
        color: "border-[#FF9A00]/50",
        text: "text-[#FF9A00]",
        bg: "bg-[#261300]",
        functionalities: [
          "Criação de identidade visual e sistemas de marca",
          "Vetorização escalável para landing pages e materiais institucionais",
          "Definição de grid, tipografia e linguagem visual consistente"
        ]
      },
      {
        id: "ps",
        name: "Adobe Photoshop",
        logoUrl: "https://cdn.simpleicons.org/adobephotoshop/00A4FF",
        accentColor: "#00A4FF",
        color: "border-[#00A4FF]/50",
        text: "text-[#00A4FF]",
        bg: "bg-[#001A2D]",
        functionalities: [
          "Tratamento de imagens para aumento de percepção de valor",
          "Composição visual para criativos de ads e campanhas",
          "Otimização de assets para performance sem perda de impacto"
        ]
      },
      {
        id: "id",
        name: "Adobe InDesign",
        logoUrl: "https://cdn.simpleicons.org/adobeindesign/FF3366",
        accentColor: "#FF3366",
        color: "border-[#FF3366]/50",
        text: "text-[#FF3366]",
        bg: "bg-[#2D0014]",
        functionalities: [
          "Diagramação de e-books e materiais ricos para autoridade",
          "Padronização editorial para apresentação premium de conteúdo",
          "Montagem de playbooks, propostas e apresentações comerciais"
        ]
      },
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
      {
        id: "ae",
        name: "Adobe After Effects",
        logoUrl: "https://cdn.simpleicons.org/adobeaftereffects/9999FF",
        accentColor: "#9999FF",
        color: "border-[#9999FF]/50",
        text: "text-[#9999FF]",
        bg: "bg-[#00005B]",
        functionalities: [
          "Microinterações orientadas a comportamento para retenção",
          "Animações de interface para comunicar valor mais rápido",
          "Storytelling visual com transições e motion branding"
        ]
      },
      {
        id: "pr",
        name: "Adobe Premiere Pro",
        logoUrl: "https://cdn.simpleicons.org/adobepremierepro/EA77FF",
        accentColor: "#EA77FF",
        color: "border-[#EA77FF]/50",
        text: "text-[#EA77FF]",
        bg: "bg-[#2D0033]",
        functionalities: [
          "Edição de vídeos de conversão para topo e meio de funil",
          "Cortes estratégicos para manter atenção e reduzir abandono",
          "Entrega de criativos em formatos otimizados para canais digitais"
        ]
      },
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
      {
        id: "ac",
        name: "Adobe Acrobat",
        logoUrl: "https://cdn.simpleicons.org/adobeacrobatreader/FF0000",
        accentColor: "#FF0000",
        color: "border-[#FF0000]/50",
        text: "text-[#FF0000]",
        bg: "bg-[#320000]",
        functionalities: [
          "Assinatura e validação de contratos digitais com rastreabilidade",
          "Padronização de documentos de onboarding e compliance",
          "Redução de fricção no fechamento comercial com fluxos seguros"
        ]
      },
    ],
  },
];

function AppLogo({ app }: { app: EcosystemApp }) {
  return (
    <div className={cn("w-10 h-10 rounded-lg border flex items-center justify-center bg-black/30", app.color)}>
      <img
        src={app.logoUrl}
        alt={`${app.name} logo`}
        className="w-5 h-5"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export function InteractiveEcosystem() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const selectedCluster = CLUSTERS.find((cluster) => cluster.apps.some((app) => app.id === activeApp));
  const selectedApp = selectedCluster?.apps.find((app) => app.id === activeApp);

  return (
    <section className="relative py-32 px-6 lg:min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-sans font-black leading-[0.9] tracking-tighter mb-6">
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
              const radiusX = window.innerWidth < 768 ? 145 : 250;
              const radiusY = window.innerWidth < 768 ? 100 : 160; // Elliptical orbit

              return (
                <div key={cluster.id} className="absolute inset-0 flex items-center justify-center">
                  {cluster.apps.map((app, aIndex) => {
                    const offsetAngle = (aIndex - (cluster.apps.length - 1) / 2) * 0.4;
                    const finalAngle = baseAngle + offsetAngle;
                    
                    const x = Math.cos(finalAngle) * radiusX;
                    const y = Math.sin(finalAngle) * radiusY;

                    const isActive = activeApp === app.id;
                    const isFaded = !!activeApp && activeApp !== app.id;

                    return (
                      <motion.button
                        key={app.id}
                        onClick={() => setActiveApp(isActive ? null : app.id)}
                        className={cn(
                          "absolute w-[170px] md:w-[200px] h-16 rounded-xl px-3 flex items-center gap-3 transition-all duration-500 cursor-pointer overflow-hidden border",
                          "hover:scale-105 hover:z-30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
                          app.color,
                          isActive && "scale-105 z-20 shadow-[0_0_40px_rgba(0,0,0,0.5)]",
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
                        <AppLogo app={app} />
                        <div className="text-left min-w-0">
                          <p className={cn("text-[10px] uppercase tracking-[0.2em] font-black opacity-60", app.text)}>
                            Adobe
                          </p>
                          <p className="text-sm font-bold text-white truncate leading-tight">
                            {app.name.replace("Adobe ", "")}
                          </p>
                        </div>
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
              {selectedApp && selectedCluster ? (
                <motion.div
                  key={selectedApp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={cn("glass-panel p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center border-l-4", selectedCluster.glowType)}
                  style={{ borderLeftColor: selectedApp.accentColor }}
                >
                  <div className="inline-flex px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest mb-6 rounded-full w-fit" style={{ color: selectedApp.accentColor }}>
                    Funcionalidades por Aplicativo
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <AppLogo app={selectedApp} />
                      <div>
                        <h3 className="text-3xl font-sans font-black tracking-tighter leading-[0.9]">
                          {selectedApp.name}
                        </h3>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-2">
                          {selectedCluster.title}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {selectedApp.functionalities.map((item) => (
                        <div key={item} className="border-l-4 pl-4 py-2 bg-white/[0.03] rounded-r-xl" style={{ borderLeftColor: selectedApp.accentColor }}>
                          <p className="text-white/85 text-sm font-medium leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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
                  <p className="text-white/40 text-sm font-medium">Clique em um aplicativo Adobe ao lado para visualizar as funcionalidades que aplicamos em cada etapa.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
