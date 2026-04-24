import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const timeOptions = Array.from({ length: 12 }, (_, index) => {
  const hour = index + 8;
  return `${String(hour).padStart(2, "0")}:00`;
});

const today = new Date().toISOString().split("T")[0];

export function DiagnosticoFormPage() {
  const handleNavigateBack = () => {
    window.location.hash = "#diagnostico";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get("nome"),
      data: formData.get("data"),
      horario: formData.get("horario"),
      necessidade: formData.get("necessidade"),
    };
    console.log("Form submitted:", data);
    // TODO: Integrar com backend para enviar dados
    alert("Diagnóstico solicitado! Em breve entraremos em contato.");
    e.currentTarget.reset();
  };

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-[#00D1FF]/30 selection:text-white">
      <nav className="h-20 w-full fixed top-0 flex items-center justify-between px-6 lg:px-10 border-b border-white/10 z-50 bg-background/50 backdrop-blur-md">
        <button
          onClick={handleNavigateBack}
          className="flex items-center gap-3 font-bold tracking-tighter text-lg italic hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">
            DP FREELA <span className="font-light opacity-50">AGENCY</span>
          </span>
        </button>
        <div className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#00FFB2]">
          Diagnóstico Guiado
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-x-0 top-32 mx-auto h-[320px] w-[520px] max-w-full rounded-full bg-[#00FFB2]/5 blur-[180px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-[32px] border border-white/10 p-8 md:p-12"
          >
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] uppercase tracking-[0.3em] font-black text-[#00FFB2]/70 mb-4">
                Diagnóstico Guiado
              </p>
              <h1 className="text-4xl md:text-5xl font-sans font-black leading-[0.92] tracking-tighter mb-5">
                Escolher a <span className="text-[#00FFB2]">DP Freela Agency</span> é trocar achismo por direção estratégica,
                com design, tecnologia e blindagem jurídica atuando no mesmo plano de
                crescimento.
              </h1>
              <p className="text-white/50 text-base md:text-lg leading-relaxed">
                Preencha os dados abaixo para alinharmos contexto, disponibilidade e a
                necessidade real do seu projeto.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-3">
                <span className="text-[11px] uppercase tracking-[0.28em] font-black text-white/45">
                  Nome
                </span>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  required
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
                  required
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
                  required
                  className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white outline-none transition-colors focus:border-[#00FFB2]/50"
                >
                  <option value="" disabled className="bg-[#0A0A0A] text-white/40">
                    Selecione um horário
                  </option>
                  {timeOptions.map((time) => (
                    <option
                      key={time}
                      value={time}
                      className="bg-[#0A0A0A] text-white"
                    >
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
                  required
                  className="min-h-36 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00FFB2]/50 resize-y"
                />
              </label>

              <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-end gap-4 pt-2">
                <p className="text-sm text-white/35 leading-relaxed flex-1">
                  Este formulário organiza o primeiro contato e acelera a leitura estratégica antes da conversa.
                </p>
                <button
                  type="submit"
                  className="px-8 py-4 rounded-2xl font-bold bg-[#00FFB2]/10 border border-[#00FFB2]/40 text-[#00FFB2] text-[10px] uppercase tracking-widest hover:bg-[#00FFB2]/20 transition-all flex-shrink-0 whitespace-nowrap"
                >
                  Solicitar Diagnóstico
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 mt-12 -mx-6 px-6 md:px-10 h-12 bg-white/5 border-t border-white/10 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] font-medium opacity-40">
        <div>DP FREELA © {new Date().getFullYear()}</div>
      </div>
    </main>
  );
}
