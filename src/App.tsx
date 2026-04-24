/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ParticlesBackground } from "./components/ParticlesBackground";
import { Hero } from "./components/Hero";
import { StrategyGrid } from "./components/StrategyGrid";
import { InteractiveEcosystem } from "./components/InteractiveEcosystem";
import { Footer } from "./components/Footer";
import { Diagnostico } from "./components/Diagnostico";
import { Compliance } from "./components/Compliance";
import { CaseDigital } from "./components/CaseDigital";

function Nav() {
  return (
    <nav className="h-20 w-full fixed top-0 flex items-center justify-between px-6 lg:px-10 border-b border-white/10 z-50 bg-background/50 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="font-bold tracking-tighter text-xl italic hidden sm:block">DP FREELA <span className="font-light opacity-50">AGENCY</span></span>
      </div>
      <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium opacity-60">
        <a href="#diagnostico" className="hover:opacity-100 transition-opacity">Diagnóstico</a>
        <a href="#ecossistema" className="hover:opacity-100 transition-opacity">Ecossistema</a>
        <a href="#compliance" className="hover:opacity-100 transition-opacity">Compliance</a>
        <a href="#case-digital" className="text-[#00FFB2] opacity-100 hover:opacity-100 transition-opacity">Case Digital</a>
      </div>
      <a href="#diagnostico" className="px-6 py-2 glass-panel border border-[#00FFB2]/40 text-[#00FFB2] text-[10px] uppercase font-bold tracking-widest hidden sm:block">
        Start Project
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-[#00D1FF]/30 selection:text-white pt-20">
      <Nav />
      <ParticlesBackground />
      <Hero />
      <StrategyGrid />
      <Diagnostico />
      <div className="h-12" />
      <InteractiveEcosystem />
      <Compliance />
      <CaseDigital />
      <Footer />
    </main>
  );
}
