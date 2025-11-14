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
    <main className="min-h-screen flex flex-col items-center justify-start bg-black text-white">
      {/* Header */}
      <header className="w-full border-b border-white/10 bg-black/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-lg font-semibold tracking-[0.25em]">
            VIKA COLOMBIA
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            Agente de ventas B2B
          </span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl px-4 py-8 space-y-6">
        {/* Hero card */}
        <section className="rounded-3xl border border-white/10 bg-neutral-950/95 px-6 py-8">
          <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-2">
            Canal mayorista oficial
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Agente de ventas VIKA COLOMBIA
          </h1>
          <p className="text-sm md:text-base text-neutral-200 max-w-xl mb-3">
            Asistente exclusivo para tiendas, kioscos, bares y otros negocios
            que quieren vender VIKA Nicotine Pouches en Colombia. Aquí puedes
            solicitar precios por volumen, condiciones mayoristas y tu primer
            pedido.
          </p>
          <ul className="mt-2 space-y-1 text-xs text-neutral-300">
            <li>• Cotizaciones por sabor y cantidad</li>
            <li>• Verificación de cuenta B2B existente</li>
            <li>• Registro de nuevos clientes empresariales</li>
          </ul>
        </section>

        {/* Chat card */}
        <section className="rounded-3xl border border-white/15 bg-neutral-950/95 p-3 md:p-4">
          <div className="mb-2 text-sm text-neutral-300">
            Inicia el chat con nuestro agente B2B para recibir tu cotización
            personalizada.
          </div>
          <div className="h-[620px] w-full">
            <ChatKitPanel
              theme="dark"
              onWidgetAction={handleWidgetAction}
              onResponseEnd={handleResponseEnd}
              onThemeRequest={() => {
                /* forzamos siempre modo oscuro */
              }}
            />
          </div>
        </section>
      </div>

      <footer className="w-full border-t border-white/5 py-4 text-center text-[10px] text-neutral-500">
        VIKA COLOMBIA S.A.S · Distribuidor exclusivo VIKA of Sweden en Colombia
        · Solo para mayores de 18 años
      </footer>
    </main>
  );
}
