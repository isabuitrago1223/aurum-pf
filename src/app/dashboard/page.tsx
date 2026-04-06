"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);

  //  FUNCIÓN CATÁLOGO
  const goToCatalogo = () => {
    if (user) {
      window.location.href = "/catalogo";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <main className="bg-[#F6EDEE] text-[#7A4E57] min-h-screen">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#F6EDEE]/80 backdrop-blur-md border-b border-[#EAD5D8] px-6 lg:px-20 py-4">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">

          <h1 className="text-2xl font-[Playfair_Display] tracking-wide">
            AURUM
          </h1>

          {/* NAV */}
          <nav className="hidden md:flex gap-8 text-sm text-[#6B5B68]">

            <a href="#inicio" className="hover:text-[#E8AFCF] transition">
              Inicio
            </a>

            <a href="#ocasiones" className="hover:text-[#E8AFCF] transition">
              Ocasiones
            </a>

            {/*  BOTÓN INTELIGENTE */}
            <button
  onClick={goToCatalogo}
  className="hover:text-[#E8AFCF] transition"
>
  Catálogo
</button>

            <Link href="/about">
              <span className="hover:text-[#E8AFCF] cursor-pointer transition">
                Nosotros
              </span>
            </Link>

          </nav>

          <Link href="/login">
            <button className="bg-[#D9A5AE] text-white px-6 py-2 rounded-full text-sm shadow hover:scale-105 transition">
              {user ? "Mi cuenta" : "Iniciar sesión"}
            </button>
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="px-6 lg:px-20 py-20">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="tracking-widest text-sm mb-3 text-[#9A7A80]">
              TIENDA DE SENTIMIENTOS
            </p>

            <h2 className="text-5xl lg:text-6xl font-[Playfair_Display] mb-4 leading-tight">
              Aurum
            </h2>

            <p className="text-[#8A6A70] mb-2">
              Detalles que convierten momentos en recuerdos inolvidables.
            </p>

            <p className="text-sm italic text-[#B08990] mb-6">
              Hecho a mano, detalles con amor 💖
            </p>

            <button
  onClick={goToCatalogo}
  className="bg-[#D9A5AE] text-white px-8 py-3 rounded-full shadow hover:scale-105 transition"
>
  Ver catálogo
</button>

          </div>

          {/* IMAGEN */}
          <div className="flex justify-center">
            <img
              src="/logo.png"
              className="rounded-[18em] shadow-xl w-[320px] md:w-[450px]"
            />
          </div>

        </div>
      </section>

      {/* OCASIONES */}
      <section id="ocasiones" className="px-6 lg:px-20 py-16 text-center">

        <h3 className="text-3xl font-[Playfair_Display] mb-2">
          Ocasiones Especiales
        </h3>

        <p className="text-[#9A7A80] max-w-xl mx-auto mb-10">
          Cada detalle está pensado para acompañar tus momentos más importantes.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-[900px] mx-auto">

          <div className="bg-[#EBC1C7] p-6 rounded-3xl shadow hover:scale-105 transition">
            <div className="overflow-hidden rounded-2xl mb-4">
              <img src="/cumple.jpeg" className="h-40 w-full object-cover hover:scale-110 transition"/>
            </div>
            <h4>Cumpleaños</h4>
          </div>

          <div className="bg-[#EFE4E6] p-6 rounded-3xl shadow hover:scale-105 transition">
            <div className="overflow-hidden rounded-2xl mb-4">
              <img src="/grados.jpeg" className="h-40 w-full object-cover hover:scale-110 transition"/>
            </div>
            <h4>Grados</h4>
          </div>

          <div className="bg-[#EFE4E6] p-6 rounded-3xl shadow hover:scale-105 transition">
            <div className="overflow-hidden rounded-2xl mb-4">
              <img src="/babyshower.jpeg" className="h-40 w-full object-cover hover:scale-110 transition"/>
            </div>
            <h4>Baby Shower</h4>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-[Playfair_Display] mb-4">
          ¿Listo para sorprender?
        </h2>

        <a
          href="https://wa.me/573193814755"
          target="_blank"
          className="bg-[#25D366] text-white px-8 py-3 rounded-full inline-flex items-center gap-2 shadow hover:scale-105 transition"
        >
          Escríbenos por WhatsApp
        </a>
      </section>

    </main>
  );
}