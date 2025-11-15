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
      <div className="w-full max-w-5xl rounded-[32px] border border-white/10 bg-neutral-950 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Top bar with title + back button */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-white/10">
          <span className="text-sm font-semibold tracking-[0.25em]">
            VIKA COLOMBIA
          </span>

          <div className="flex items-center gap-4">
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-neutral-400 sm:inline">
              Agente de ventas B2B
            </span>
            <a
              href="https://vika-colombia.com"
              className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-medium tracking-wide text-neutral-100 hover:bg-white hover:text-black transition"
            >
              Volver al sitio web
            </a>
          </div>
        </div>

        {/* Chat first, then text */}
        <div className="px-4 pb-6 pt-4 md:px-6 md:pt-6">
          {/* CHAT PANEL */}
          <section className="h-[600px] md:h-[640px] w-full rounded-3xl border border-white/15 bg-black overflow-hidden">
            <div className="h-full w-full bg-black">
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

          {/* Text below chat */}
          <section className="mt-8 px-2 pb-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-3">
              Canal mayorista oficial
            </p>
            <h1 className="text-xl md:text-2xl font-semibold mb-3">
              Agente de ventas VIKA COLOMBIA
            </h1>
            <p className="text-sm md:text-base text-neutral-200 mb-3 max-w-3xl">
              Asistente exclusivo para tiendas, kioscos, bares y otros negocios
              que quieren vender VIKA Nicotine Pouches en Colombia. Aquí puedes
              solicitar precios por volumen, condiciones mayoristas y coordinar
              tu primer pedido.
            </p>
            <ul className="space-y-1 text-xs text-neutral-300">
              <li>• Cotizaciones por sabor y cantidad</li>
              <li>• Verificación de cuenta B2B existente</li>
              <li>• Registro de nuevos clientes empresariales</li>
            </ul>
            <p className="mt-4 text-[11px] text-neutral-500">
              Solo para mayores de 18 años. Uso exclusivo empresarial.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
