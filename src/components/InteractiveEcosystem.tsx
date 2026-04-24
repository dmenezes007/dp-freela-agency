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
        logoUrl: "/icons/adobe-illustrator.svg",
        accentColor: "#FF9A00",
        color: "border-[#FF9A00]/50",
        text: "text-[#FF9A00]",
        bg: "bg-[#261300]",
        functionalities: [
          "Criação de identidade visual e sistemas de marca",
          "Vetorização escalável para landing pages e materiais institucionais",
          "Definição de grid, tipografia e linguagem visual consistente",
          "Construção de brandbook e manual de identidade para escala",
          "Criação de ícones e ilustrações exclusivas para interfaces e materiais",
          "Design de logotipo e variações para aplicação digital e impressa",
          "Composição de banners, thumbnails e elementos visuais de campanha",
          "Padronização de assinatura visual para uso multicanal da marca"
        ]
      },
      {
        id: "ps",
        name: "Adobe Photoshop",
        logoUrl: "/icons/adobe-photoshop.svg",
        accentColor: "#00A4FF",
        color: "border-[#00A4FF]/50",
        text: "text-[#00A4FF]",
        bg: "bg-[#001A2D]",
        functionalities: [
          "Tratamento de imagens para aumento de percepção de valor",
          "Composição visual para criativos de ads e campanhas",
          "Otimização de assets para performance sem perda de impacto",
          "Manipulação de fotografia de produto com fundo neutro e destaque estratégico",
          "Criação de mockups realistas para apresentação de marca e portfólio",
          "Edição de avatares e imagens de perfil com identidade profissional",
          "Desenvolvimento de banners para redes sociais com hierarquia visual clara",
          "Geração de texturas e padrões gráficos exclusivos para identidade de campanha"
        ]
      },
      {
        id: "id",
        name: "Adobe InDesign",
        logoUrl: "/icons/adobe-indesign.svg",
        accentColor: "#FF3366",
        color: "border-[#FF3366]/50",
        text: "text-[#FF3366]",
        bg: "bg-[#2D0014]",
        functionalities: [
          "Diagramação de e-books e materiais ricos para autoridade",
          "Padronização editorial para apresentação premium de conteúdo",
          "Montagem de playbooks, propostas e apresentações comerciais",
          "Criação de catálogos e portfólios impressos ou digitais de alto padrão",
          "Formatação de relatórios e dossiês de marca com layout profissional",
          "Produção de kits de mídia e media kits para prospecção B2B",
          "Diagramação de newsletters e PDFs de conteúdo para nutrição de leads",
          "Montagem de decks de pitch com estrutura persuasiva e visual de impacto"
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
        logoUrl: "/icons/adobe-after-effects.svg",
        accentColor: "#9999FF",
        color: "border-[#9999FF]/50",
        text: "text-[#9999FF]",
        bg: "bg-[#00005B]",
        functionalities: [
          "Microinterações orientadas a comportamento para retenção",
          "Animações de interface para comunicar valor mais rápido",
          "Storytelling visual com transições e motion branding",
          "Produção de intros e outros animados para vídeos e reels de marca",
          "Animação de logotipo e elementos de identidade para uso digital",
          "Criação de motion graphics para conteúdo explicativo e vídeos institucionais",
          "Desenvolvimento de partículas e efeitos visuais para landing pages de alta conversão",
          "Animação de infográficos e dados para apresentações e materiais de autoridade"
        ]
      },
      {
        id: "pr",
        name: "Adobe Premiere Pro",
        logoUrl: "/icons/adobe-premiere-pro.svg",
        accentColor: "#EA77FF",
        color: "border-[#EA77FF]/50",
        text: "text-[#EA77FF]",
        bg: "bg-[#2D0033]",
        functionalities: [
          "Edição de vídeos de conversão para topo e meio de funil",
          "Cortes estratégicos para manter atenção e reduzir abandono",
          "Entrega de criativos em formatos otimizados para canais digitais",
          "Produção de depoimentos e cases em vídeo com edição de autoridade",
          "Montagem de reels e vídeos curtos para redes sociais e Meta Ads",
          "Criação de VSLs (Video Sales Letters) para funis de vendas de alto valor",
          "Edição de behind-the-scenes e conteúdo de bastidores para humanização da marca",
          "Correção de cor e tratamento de imagem para padronização estética da comunicação"
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
        logoUrl: "/icons/adobe-acrobat.svg",
        accentColor: "#FF0000",
        color: "border-[#FF0000]/50",
        text: "text-[#FF0000]",
        bg: "bg-[#320000]",
        functionalities: [
          "Assinatura e validação de contratos digitais com rastreabilidade",
          "Padronização de documentos de onboarding e compliance",
          "Redução de fricção no fechamento comercial com fluxos seguros",
          "Geração e distribuição de propostas em PDF com segurança e branding",
          "Criação de formulários PDF interativos para coleta de dados LGPD-compliant",
          "Compressão e otimização de arquivos para envio ágil em fluxos comerciais",
          "Proteção e controle de acesso a documentos sensíveis de clientes",
          "Conversão de layouts e materiais para PDF acessível e imprimível"
        ]
      },
    ],
  },
  {
    id: "webstack",
    title: "Implementação Web",
    description: "Transformamos estratégia em produto digital funcional, performático e escalável.",
    problem: "Execução travada por stack fragmentada e código sem padrão.",
    diagnosis: "Falta de consistência técnica, componentização e fluxo de entrega contínua.",
    solution: "Aplicação prática de fundamentos front-end e automações para acelerar produção.",
    glowType: "glow-blue",
    apps: [
      {
        id: "html",
        name: "HTML5",
        logoUrl: "/icons/html5.svg",
        accentColor: "#E34F26",
        color: "border-[#E34F26]/50",
        text: "text-[#E34F26]",
        bg: "bg-[#2A130E]",
        functionalities: [
          "Estrutura semântica para SEO e acessibilidade",
          "Arquitetura de conteúdo para páginas de conversão",
          "Markup limpo para facilitar manutenção e escala",
          "Construção de landing pages otimizadas para geração de leads",
          "Implementação de Open Graph e meta tags para compartilhamento social",
          "Estruturação de schema markup para rich snippets no Google",
          "Criação de templates HTML reutilizáveis para e-mails transacionais",
          "Desenvolvimento de páginas institucionais com foco em autoridade e conversão"
        ]
      },
      {
        id: "css",
        name: "CSS3",
        logoUrl: "/icons/css3.svg",
        accentColor: "#1572B6",
        color: "border-[#1572B6]/50",
        text: "text-[#1572B6]",
        bg: "bg-[#0E1D2A]",
        functionalities: [
          "Design system com tokens visuais e consistência de interface",
          "Layouts responsivos para desktop, tablet e mobile",
          "Estados visuais e animações orientadas à experiência",
          "Implementação de variáveis CSS para customização rápida de temas de marca",
          "Criação de microanimações CSS para retenção e engajamento sem dependências externas",
          "Estilização de formulários e CTAs para maximizar taxa de clique",
          "Otimização de performance visual com CSS modular e criticamente renderizado",
          "Grid e flexbox para layouts editoriais complexos em páginas de venda"
        ]
      },
      {
        id: "javascript",
        name: "JavaScript",
        logoUrl: "/icons/javascript.svg",
        accentColor: "#F7DF1E",
        color: "border-[#F7DF1E]/50",
        text: "text-[#F7DF1E]",
        bg: "bg-[#2A280E]",
        functionalities: [
          "Interações de interface e componentes dinâmicos",
          "Integrações com APIs para dados em tempo real",
          "Lógica de funil e eventos de conversão",
          "Implementação de tracking de eventos para Meta Pixel e Google Tag Manager",
          "Desenvolvimento de formulários inteligentes com validação e lógica condicional",
          "Integração com webhooks para automações de CRM e notificações de lead",
          "Scripts de A/B testing para otimização contínua de páginas de oferta",
          "Manipulação de DOM para experiências personalizadas por segmento de tráfego"
        ]
      },
      {
        id: "python",
        name: "Python",
        logoUrl: "/icons/python.svg",
        accentColor: "#3776AB",
        color: "border-[#3776AB]/50",
        text: "text-[#3776AB]",
        bg: "bg-[#0F1C2A]",
        functionalities: [
          "Automação de processos operacionais e marketing",
          "Scripts para análise e enriquecimento de dados",
          "Backoffice para produtividade e integrações internas",
          "Geração automática de relatórios de performance para clientes via script",
          "Web scraping para monitoramento de concorrentes e tendências de mercado",
          "Automação de envio de e-mails e sequências de nutrição via API",
          "Processamento e limpeza de bases de leads para segmentação de campanhas",
          "Integrações entre plataformas via APIs REST com autenticação segura"
        ]
      }
    ]
  },
];

const ALL_APPS = CLUSTERS.flatMap((cluster) =>
  cluster.apps.map((app) => ({
    ...app,
    clusterTitle: cluster.title,
    glowType: cluster.glowType,
  })),
);

function AppLogo({ app }: { app: EcosystemApp }) {
  return (
    <div className={cn("w-10 h-10 rounded-lg border flex items-center justify-center bg-black/30", app.color)}>
      <img src={app.logoUrl} alt={`${app.name} icon`} className="w-5 h-5" loading="lazy" decoding="async" />
    </div>
  );
}

export function InteractiveEcosystem() {
  const [activeApp, setActiveApp] = useState<string>(ALL_APPS[0].id);
  const selectedApp = ALL_APPS.find((app) => app.id === activeApp) ?? ALL_APPS[0];

  return (
    <section id="ecossistema" className="relative py-32 px-6 lg:min-h-screen flex flex-col items-center justify-center scroll-mt-20">
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="glass-panel rounded-3xl p-5 md:p-6 border border-white/10">
            <p className="text-[11px] uppercase tracking-[0.28em] font-black text-white/40 mb-5">Aplicativos e Stack</p>
            <div className="space-y-3 pr-1">
              {ALL_APPS.map((app, index) => {
                const isActive = activeApp === app.id;
                return (
                  <motion.button
                    key={app.id}
                    onClick={() => setActiveApp(app.id)}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    className={cn(
                      "w-full rounded-xl px-3 py-3 flex items-center gap-3 text-left border transition-all duration-300 cursor-pointer",
                      app.color,
                      isActive ? cn(app.bg, "shadow-[0_0_30px_rgba(0,0,0,0.35)]") : "bg-white/[0.02] hover:bg-white/[0.05]"
                    )}
                  >
                    <AppLogo app={app} />
                    <div className="min-w-0">
                      <p className={cn("text-[10px] uppercase tracking-[0.2em] font-black opacity-70", app.text)}>
                        {app.name.startsWith("Adobe") ? "Adobe" : "Web Tech"}
                      </p>
                      <p className="text-sm font-bold text-white truncate leading-tight">{app.name.replace("Adobe ", "")}</p>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mt-1 truncate">{app.clusterTitle}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Diagnostic Panel */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {selectedApp ? (
                <motion.div
                  key={selectedApp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={cn("glass-panel p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center border-l-4", selectedApp.glowType)}
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
                          {selectedApp.clusterTitle}
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
                  <p className="text-white/40 text-sm font-medium">Clique em qualquer aplicativo ao lado para visualizar as funcionalidades que aplicamos em cada etapa.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
