"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";

export default function App() {
  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-black shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Top bar inside card */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-white/10">
          <span className="text-sm font-semibold tracking-[0.25em]">
            VIKA COLOMBIA
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            Agente de ventas B2B
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-0 md:grid-cols-[minmax(0,1.1fr),minmax(0,1.3fr)]">
          {/* Left: copy */}
          <section className="px-8 py-8 md:py-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-3">
              Canal mayorista oficial
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              Agente de ventas VIKA COLOMBIA
            </h1>
            <p className="text-sm md:text-base text-neutral-200 mb-4">
              Asistente exclusivo para tiendas, kioscos, bares y otros negocios
              que quieren vender VIKA Nicotine Pouches en Colombia.
            </p>
          </section>

          {/* Right: chat */}
          <section className="p-3 md:p-4">
            <div className="h-[560px] w-full rounded-3xl border border-white/15 bg-neutral-950/95">
              <ChatKitPanel
                theme="dark"
                onWidgetAction={handleWidgetAction}
                onResponseEnd={handleResponseEnd}
                onThemeRequest={() => {
                  /* siempre oscuro */
                }}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
