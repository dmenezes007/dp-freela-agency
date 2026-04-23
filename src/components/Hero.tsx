import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FFB2] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-white/10"
        >
          <Sparkles className="w-4 h-4 text-[#00D1FF]" />
          <span className="text-[12px] uppercase tracking-widest font-semibold text-[#00D1FF]">
            Micro-Diagnóstico Estratégico
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[120px] font-sans font-black leading-[0.9] tracking-tighter mb-8"
        >
          NÃO <br className="hidden md:block"/>ENTREGAMOS<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">PEÇAS.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-white/60 max-w-3xl mb-12 font-light leading-relaxed"
        >
          Projetamos soluções digitais baseadas em <span className="text-white font-normal">ciência comportamental</span> e <span className="text-white font-normal">blindagem jurídica</span>. Conversão não é sorte, é arquitetura.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col sm:flex-row gap-4"
        >
          <button className="group relative px-8 py-4 bg-[#00FFB2]/10 border border-[#00FFB2]/50 text-[#00FFB2] rounded-xl font-bold tracking-widest text-[10px] uppercase overflow-hidden hover:bg-[#00FFB2]/20 transition-all duration-300">
             <span className="relative flex items-center justify-center gap-2">
               Iniciar Diagnóstico
             </span>
          </button>
          
          <button className="px-8 py-4 rounded-xl font-bold tracking-widest text-[10px] uppercase glass-panel text-white hover:bg-white/10 transition-colors">
            Ver Ecossistema
          </button>
        </motion.div>
      </div>
    </section>
  );
}
