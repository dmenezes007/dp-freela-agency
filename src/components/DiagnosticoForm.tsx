import { motion } from "framer-motion";

const timeOptions = Array.from({ length: 12 }, (_, index) => {
  const hour = index + 8;
  return `${String(hour).padStart(2, "0")}:00`;
});

const today = new Date().toISOString().split("T")[0];

export function DiagnosticoForm() {
  return (
    <section
      id="form-diagnostico"
      className="py-20 px-6 relative scroll-mt-20"
    >
      <div className="absolute inset-x-0 top-10 mx-auto h-[320px] w-[520px] max-w-full rounded-full bg-[#00FFB2]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel rounded-[32px] border border-white/10 p-8 md:p-12"
        >
          <div className="max-w-2xl mb-10">
            <p className="text-[11px] uppercase tracking-[0.3em] font-black text-[#00FFB2]/70 mb-4">
              Diagnóstico Guiado
            </p>
            <h2 className="text-4xl md:text-5xl font-sans font-black leading-[0.92] tracking-tighter mb-5">
              Escolher a DP Freela Agency é trocar achismo por direção estratégica,
              com design, tecnologia e blindagem jurídica atuando no mesmo plano de crescimento.
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed">
              Preencha os dados abaixo para alinharmos contexto, disponibilidade e a necessidade real do seu projeto.
            </p>
          </div>

          <form className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-[0.28em] font-black text-white/45">
                Nome
              </span>
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00FFB2]/50"
              />
            </label>

            <label className="flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-[0.28em] font-black text-white/45">
                Data
              </span>
              <input
                type="date"
                name="data"
                min={today}
                className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white outline-none transition-colors [color-scheme:dark] focus:border-[#00FFB2]/50"
              />
            </label>

            <label className="flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-[0.28em] font-black text-white/45">
                Horário
              </span>
              <select
                name="horario"
                defaultValue=""
                className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white outline-none transition-colors focus:border-[#00FFB2]/50"
              >
                <option value="" disabled className="bg-[#0A0A0A] text-white/40">
                  Selecione um horário
                </option>
                {timeOptions.map((time) => (
                  <option key={time} value={time} className="bg-[#0A0A0A] text-white">
                    {time}
                  </option>
                ))}
              </select>
            </label>

            <div className="hidden md:block" />

            <label className="flex flex-col gap-3 md:col-span-2">
              <span className="text-[11px] uppercase tracking-[0.28em] font-black text-white/45">
                Necessidade
              </span>
              <textarea
                name="necessidade"
                rows={4}
                placeholder="Descreva o que você precisa resolver, qual seu contexto atual e o objetivo deste diagnóstico."
                className="min-h-36 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00FFB2]/50 resize-y"
              />
            </label>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="text-sm text-white/35 leading-relaxed max-w-xl">
                Este formulário organiza o primeiro contato e acelera a leitura estratégica antes da conversa.
              </p>
              <button
                type="submit"
                className="px-8 py-4 rounded-2xl font-bold bg-[#00FFB2]/10 border border-[#00FFB2]/40 text-[#00FFB2] text-[10px] uppercase tracking-widest hover:bg-[#00FFB2]/20 transition-all"
              >
                Solicitar Diagnóstico
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
