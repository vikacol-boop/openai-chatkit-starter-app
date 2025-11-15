"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";

const SHOP_URL = "https://vika-colombia.com";

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
      {/* Header similar to Shopify */}
      <header className="w-full bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
          {/* Left nav */}
          <nav className="flex items-center gap-10 text-xs md:text-sm uppercase tracking-[0.25em]">
            <a href={https://vika-colombia.com/collections/all} className="text-neutral-200 hover:text-white">
              PRODUCTOS
            </a>
            <a href={SHOP_URL} className="text-neutral-200 hover:text-white">
              CONTACTO
            </a>
            <a href={SHOP_URL} className="text-neutral-200 hover:text-white">
              NOSOTROS
            </a>
            <a href={SHOP_URL} className="text-neutral-200 hover:text-white">
              USAR
            </a>
            <a href={SHOP_URL} className="text-neutral-50 hover:text-white">
              EMPRESARIALES
            </a>
          </nav>

          {/* Right side: logo + icons */}
          <div className="flex items-center gap-6">
            {/* Simple text logo – replace with your SVG/IMG */}
            <a href={SHOP_URL} className="text-sm tracking-[0.35em]">
              VIKA
            </a>

            {/* Icons */}
            <a href={SHOP_URL} className="hover:text-white">
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
            <a href={SHOP_URL} className="hover:text-white">
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
            <a href={SHOP_URL} className="hover:text-white">
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

      {/* Main: only chat card (and optional text) */}
      <main className="flex justify-center px-4 py-10">
        <div className="w-full max-w-5xl rounded-[32px] border border-white/10 bg-neutral-950 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
          <div className="px-4 pb-6 pt-4 md:px-6 md:pt-6">
            <section className="rounded-3xl border border-white/15 bg-black">
              <div className="min-h-[420px]">
                <ChatKitPanel
                  theme="dark"
                  onWidgetAction={handleWidgetAction}
                  onResponseEnd={handleResponseEnd}
                  onThemeRequest={() => {
                    /* always dark */
                  }}
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
