import Image from "next/image";
import { Gift } from "lucide-react";

export default function About() {
  return (
    <main className="bg-[#fff7f9] text-[#6e3f4a]">

      {/* HERO */}
      <section className="text-center py-24 relative">
        <h1 className="text-8xl font-semibold mb-6">
          Nuestra Historia
        </h1>

        <p className="max-w-4xl mx-auto text-lg italic opacity-80">
          “Donde los detalles se convierten en recuerdos, y los regalos en sentimientos compartidos.”
        </p>

        {/* decorativo */}
        <div className="absolute left-10 bottom-10 opacity-6">
          <Gift size={60} />
        </div>

        <div className="absolute right-10 top-10 opacity-20">
          <Gift size={60} />
        </div>
      </section>

      {/* HISTORIA */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 gap-16 items-center">
        
        <Image
          src="/historiaurum.png"
          alt="Historia Aurum"
          width={500}
          height={500}
          className="rounded-xl shadow-xl object-cover"
        />

        <div>
          <h2 className="text-7xl font-semibold mb-6">
            El Corazón de Aurum
          </h2>
          <p className="mb-4 opacity-100 leading-relaxed">
            Aurum Decoraciones nació del deseo de convertir regalos en momentos inolvidables. Inspirado en el significado de “oro”, nuestro nombre representa el valor de los detalles hechos con amor.

Nuestro logo, con tonos suaves y formas delicadas, refleja ternura, armonía y el cuidado que ponemos en cada ancheta. Así, poco a poco, Aurum fue creciendo con una sola misión: sorprender y hacer sentir especiales a las personas.
          </p>

          <p className="opacity-80 leading-relaxed">
            Cada detalle representa amor, dedicación y momentos inolvidables.
          </p>
        </div>

      </section>

      {/* MISION Y VISION */}
      <section className="bg-[#fdecef] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-xl shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">
              Nuestra Misión
            </h3>
            <p className="opacity-100">
              Ofrecer detalles personalizados y decoraciones creativas que permitan a nuestros clientes
expresar emociones y celebrar momentos especiales, utilizando materiales de calidad, productos
frescos y brindando un servicio responsable y confiable.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">
              Nuestra Visión
            </h3>
            <p className="opacity-100">
              Ofrecer detalles personalizados y decoraciones creativas que permitan a nuestros clientes
expresar emociones y celebrar momentos especiales, utilizando materiales de calidad, productos
frescos y brindando un servicio responsable y confiable.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl text-center mb-16">
          Creamos con amor
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src="/Seleccion.jpg" alt="" width={400} height={300} />
            <p className="p-2 text-center">Selección</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src="/personalizacion.png" alt="" width={400} height={300} />
            <p className="p-2 text-center">Personalización</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src="/entrega.png" alt="" width={400} height={300} />
            <p className="p-2 text-center">Entrega</p>
          </div>

        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-[#fdecef] py-24 text-center">
        <h2 className="text-3xl mb-12">
          Las manos detrás de Aurum
        </h2>

        <div className="flex justify-center gap-16">

          <div>
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
              <Image src="/tati.jpeg" alt="" width={160} height={160} />
            </div>
            <p className="font-semibold">Tatiana</p>
            <p className="text-sm opacity-100">Apoyo técnico/Backend</p>
          </div>

          <div>
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
              <Image src="/isa.jpg" alt="" width={160} height={160} />
            </div>
            <p className="font-semibold">Isabella</p>
            <p className="text-sm opacity-100">Líder/Full Stack </p>
          </div>

          <div>
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
              <Image src="/kar.jpeg" alt="" width={160} height={160} />
            </div>
            <p className="font-semibold">Karen</p>
            <p className="text-sm opacity-100">Apoyo técnico/Frontend</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl mb-6">
          ¿Lista para sorprender?
        </h2>

        <button className="bg-[#d6a8b1] px-8 py-3 rounded-full shadow-md hover:scale-105 transition">
          Ver productos
        </button>
      </section>

    </main>
  );
}