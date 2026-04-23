import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-24 px-6 overflow-hidden mt-32 border-t border-white/5 pb-40">
      <div className="absolute inset-0 bg-[#00FFB2]/5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#00D1FF]/10 via-background to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-sans font-black leading-[0.9] tracking-tighter mb-8"
        >
          PRONTO PARA <span className="text-white/40">ESCALAR?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/50 max-w-xl mx-auto mb-12"
        >
          Agende um pré-diagnóstico com nosso time. Sem pitches genéricos. Apenas análise de gaps e potencial de conversão.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="px-10 py-5 rounded-xl font-bold bg-[#00FFB2]/10 border border-[#00FFB2]/30 text-[#00FFB2] text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(0,255,178,0.2)] transition-all"
        >
          Agendar Diagnóstico
        </motion.button>
        
        <div className="w-full h-12 bg-white/5 border-t border-white/10 px-10 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] font-medium opacity-40 mt-32 absolute bottom-0 left-0">
          <div className="flex gap-8">
            <span>User Interface: Optimized</span>
            <span className="hidden md:inline">Legal Logic: Integrated</span>
          </div>
          <div>DP FREELA © {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
}
