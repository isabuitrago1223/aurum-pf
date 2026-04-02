import Link from "next/link";
import Image from "next/image";
import { Gift } from "lucide-react";

export default function Home() {
  return (
    <main
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-aurum.jpg')" }}
    >
      <div className="relative w-[90%] max-w-6xl border border-[#d6a8b1] rounded-xl px-16 py-14 text-center bg-white/20 backdrop-blur-md shadow-xl">

        {/* Línea superior */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d6a8b1]" />

        {/* Texto pequeño */}
        <p className="text-[11px] tracking-[4px] text-[#7a4a55] mb-6">
          TIENDA DE SENTIMIENTOS
        </p>

        {/* Título */}
        <h1 className="text-8xl font-semibold text-[#7a4a55] mb-6">
          AURUM
        </h1>

        {/* Descripción */}
        <p className="text-[#7a4a55] max-w-3xl mx-auto mb-10 text-[13px] leading-relaxed">
          TIENDA DE SENTIMIENTOS DONDE ENCONTRARÁS REGALOS, ANCHETAS Y DESAYUNOS
          SORPRESA PERSONALIZADOS PARA SORPRENDER A QUIENES MÁS AMAS
        </p>

        {/* Botones */}
        <div className="flex justify-center gap-6 mb-12">

          <Link href="/about">
            <button className="bg-[#d6a8b1] text-[#5a2e37] px-8 py-2 rounded-full text-sm shadow-md hover:scale-105 transition">
              SOBRE NOSOTROS
            </button>
          </Link>

          <Link href="/dashboard">
            <button className="bg-[#d6a8b1] text-[#5a2e37] px-8 py-2 rounded-full text-sm shadow-md hover:scale-105 transition">
              PÁGINA PRINCIPAL
            </button>
          </Link>

        </div>

        {/* LOGO */}
        <div className="flex justify-center">
          <div className="w-44 h-44 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/logo.png"
              alt="Aurum Logo"
              width={180}
              height={180}
              className="object-cover"
            />
          </div>
        </div>

        {/* ICONOS LATERALES (como la referencia ✨) */}

        {/* Izquierda */}
        <div className="absolute left-10 bottom-10 text-[#d6a8b1] opacity-60">
          <Gift size={40} strokeWidth={1} />
        </div>

        {/* Derecha */}
        <div className="absolute right-10 bottom-10 text-[#d6a8b1] opacity-60">
          <Gift size={40} strokeWidth={1} />
        </div>

        {/* Línea inferior */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d6a8b1]" />

      </div>
    </main>
  );
}