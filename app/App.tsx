"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";

const SHOP_URL = "https://vika-colombia.com";
const B2B_URL = "https://b2b.vika-colombia.com";

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
    <div className="min-h-screen bg-black text-white">
      {/* HEADER – mimic Shopify nav */}
      <header className="w-full bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
          {/* Left nav */}
          <nav className="flex items-center gap-10 text-xs md:text-sm uppercase tracking-[0.25em]">
            <a href={https://vika-colombia.com/collections/all} className="text-neutral-200 hover:text-white">
              PRODUCTOS
            </a>
            <a href={https://vika-colombia.com/pages/contact} className="text-neutral-200 hover:text-white">
              CONTACTO
            </a>
            <a href={https://vika-colombia.com/pages/quien-somos} className="text-neutral-200 hover:text-white">
              NOSOTROS
            </a>
            <a href={https://vika-colombia.com/pages/como-usar} className="text-neutral-200 hover:text-white">
              USAR
            </a>
            <a
              href={https://b2b.vika-colombia.com/}
              className="text-neutral-50 hover:text-white"
            >
              EMPRESARIALES
            </a>
          </nav>

          {/* Center logo – replace src with your actual logo URL */}
          <a
            href={https://cdn.shopify.com/s/files/1/0972/5273/7364/files/VIKA_no_bg.png?v=1760951510}
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
          >
            {/* Example text logo; swap for img */}
            {/* <img src="/vika-logo.svg" alt="VIKA COLOMBIA" className="h-8" /> */}
            <span className="text-lg tracking-[0.35em] font-semibold">
              V
            </span>
          </a>

          {/* Right icons */}
          <div className="flex items-center gap-6 text-neutral-200">
            {/* search */}
            <a href={} className="hover:text-white">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="6" />
                <line x1="16" y1="16" x2="21" y2="21" />
              </svg>
            </a>
            {/* user */}
            <a href={https://vika-colombia.com/} className="hover:text-white">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="9" r="3" />
                <path d="M6 19c1.5-3 4-4 6-4s4.5 1 6 4" />
              </svg>
            </a>
            {/* cart */}
            <a href={https://vika-colombia.com/} className="hover:text-white">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 6h15l-1.5 9h-12z" />
                <path d="M6 6 5 3H3" />
                <circle cx="9" cy="19" r="1" />
                <circle cx="17" cy="19" r="1" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN – chat card under header */}
      <main className="flex justify-center px-4 py-10">
        <div className="w-full max-w-5xl rounded-[32px] border border-white/10 bg-neutral-950 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
          <div className="px-4 pb-6 pt-4 md:px-6 md:pt-6">
            {/* Chat card */}
            <section className="rounded-3xl border border-white/15 bg-black">
              <div className="min-h-[420px]">
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

            {/* Text below chat – keep or remove as you like */}
            <section className="mt-8 px-2 pb-2">
              <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-3">
                Canal mayorista oficial
              </p>
              <h1 className="text-xl md:text-2xl font-semibold mb-3">
                Agente de ventas VIKA COLOMBIA
              </h1>
              <p className="text-sm md:text-base text-neutral-200 mb-3 max-w-3xl">
                Asistente exclusivo para tiendas, kioscos, bares y otros
                negocios que quieren vender VIKA Nicotine Pouches en Colombia.
                Aquí puedes solicitar precios por volumen, condiciones
                mayoristas y coordinar tu primer pedido.
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
    </div>
  );
}
