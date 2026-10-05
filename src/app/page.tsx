import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#fdf2f4]">
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src="/construction-desktop.jpg"
          alt="Elas por Aí - Site em Construção"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/construction-mobile.jpg"
          alt="Elas por Aí - Site em Construção"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </main>
  );
}
