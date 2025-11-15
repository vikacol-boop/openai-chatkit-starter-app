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
    <div className="min-h-screen bg-black text-white">
      {/* Fake Shopify header – whole bar links to main site */}
      <header className="w-full bg-black">
        <a
          href="https://vika-colombia.com"
          className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4"
        >
          {/* Left nav labels */}
          <nav className="flex items-center gap-10 text-xs md:text-sm uppercase tracking-[0.25em]">
            <span className="text-neutral-200">PRODUCTOS</span>
            <span className="text-neutral-200">CONTACTO</span>
            <span className="text-neutral-200">NOSOTROS</span>
            <span className="text-neutral-200">USAR</span>
            <span className="text-neutral-50">EMPRESARIALES</span>
          </nav>

          {/* Simple logo placeholder on the right – you can later swap for SVG */}
          <div className="flex items-center gap-6">
            <span className="text-sm tracking-[0.35em] font-semibold">
              VIKA
            </span>
          </div>
        </a>
      </header>

      {/* Main: only chat card */}
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
