"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState("");

  // Reloj en vivo para demostrar que React está reaccionando
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("es-CO", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Las 8 recetas iniciales (mockup, datos reales vienen en la fase 2)
  const recipes = [
    "Promo 1 deal destacado",
    "Promo multi-deal",
    "Promo small deals",
    "Value prop puro",
    "Newsletter editorial",
    "Mail de logos/marcas",
    "Paso a paso (dos columnas)",
    "Solo banner",
  ];

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero con gradiente Neon oficial */}
      <section className="bg-neon-hero py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-4">
            MailForge OS
          </p>
          <h1 className="text-white text-6xl md:text-7xl font-bold mb-6">
            VISION
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Hub de generación de mails Braze. Construye con bloques de LEGO,
            no desde cero.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-white rounded-full pulse-neon"></span>
            <span className="text-white/90 text-sm">Hello world activo · {time}</span>
          </div>
        </div>
      </section>

      {/* Sección de prueba de interactividad */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-neutral-50 text-3xl font-bold mb-2">
            Prueba de vida
          </h2>
          <p className="text-neutral-400 mb-8">
            Si este contador sube cuando haces clic, React está funcionando
            correctamente. Si los colores se ven Neon, Tailwind está
            funcionando. Si esta página apareció en una URL pública, Vercel
            está funcionando.
          </p>

          <div className="bg-neutral-800 rounded-2xl p-8 flex items-center justify-between">
            <div>
              <p className="text-neutral-400 text-sm uppercase tracking-wide">
                Contador
              </p>
              <p className="text-neon-orange text-6xl font-bold">{counter}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setCounter(counter - 1)}
                className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-xl transition"
              >
                −
              </button>
              <button
                onClick={() => setCounter(counter + 1)}
                className="bg-neon-red hover:bg-neon-pink text-white px-6 py-3 rounded-xl transition"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo conceptual de recetas (mockup, vienen en la fase 2) */}
      <section className="py-16 px-6 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-neutral-50 text-3xl font-bold mb-2">
            Las 8 recetas que vienen
          </h2>
          <p className="text-neutral-400 mb-8">
            Esto es solo un mockup. En la siguiente fase cada tarjeta lleva al
            editor visual de la receta correspondiente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipes.map((recipe, i) => (
              <div
                key={i}
                className="bg-neutral-800 hover:bg-neutral-700 transition rounded-xl p-6 cursor-pointer border border-neutral-700 hover:border-neon-pink"
              >
                <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">
                  Receta {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-neutral-50 text-lg font-semibold">
                  {recipe}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer con info del sistema */}
      <footer className="py-8 px-6 bg-neutral-900 border-t border-neutral-800 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>VISION · MailForge OS · Rappi</p>
          <p>
            Figma: <span className="text-neutral-300">sTTrCFxXKOYmbdw4GjxKJO</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
