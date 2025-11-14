"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

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
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-white/10 bg-black/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            {/* If you upload a logo to /public, replace this span with an <img src="/vika-logo.svg" /> */}
            <span className="text-lg font-semibold tracking-[0.25em]">
              VIKA COLOMBIA
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            Agente de ventas B2B
          </span>
        </div>
      </header>

      {/* Content */}
      <section className="flex flex-1 justify-center px-4 py-8">
        <div className="mx-auto grid w-full max-w-5xl items-stretch gap-6 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">
          {/* Left side: hero / explanation */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950">
            {/* Optional background image – upload /public/vika-hero.jpg and keep this line */}
            <div className="pointer-events-none absolute inset-0 bg-[url('/vika-hero.jpg')] bg-cover bg-center opacity-70" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end space-y-4 p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                Canal mayorista oficial
              </p>
              <h1 className="text-2xl font-semibold md:text-3xl">
                Agente de ventas VIKA COLOMBIA
              </h1>
              <p className="max-w-md text-sm text-neutral-200 md:text-base">
                Asistente exclusivo para tiendas, kioscos, bares y otros
                negocios que quieren vender VIKA Nicotine Pouches en Colombia.
                Aquí puedes solicitar precios por volumen, condiciones
                mayoristas y tu primer pedido.
              </p>
              <ul className="mt-2 space-y-1 text-xs text-neutral-300">
                <li>• Cotizaciones por sabor y cantidad</li>
                <li>• Verificación de cuenta B2B existente</li>
                <li>• Registro de nuevos clientes empresariales</li>
              </ul>
            </div>
          </div>

          {/* Right side: Chat panel */}
          <div className="rounded-3xl border border-white/15 bg-neutral-950/90 p-3 md:p-4">
            <div className="h-[520px] w-full">
              <ChatKitPanel
                theme={scheme}
                onWidgetAction={handleWidgetAction}
                onResponseEnd={handleResponseEnd}
                onThemeRequest={setScheme}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-4 text-center text-[10px] text-neutral-500">
        VIKA COLOMBIA S.A.S · Distribuidor exclusivo VIKA of Sweden en Colombia
        · Solo para mayores de 18 años
      </footer>
    </main>
  );
}
