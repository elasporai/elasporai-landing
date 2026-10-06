import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#fdf2f4] flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl flex justify-center items-center">
        <div className="hidden md:block w-full">
          <Image
            src="/construction-desktop.jpg"
            alt="Elas por Aí - Site em Construção"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto rounded-2xl shadow-xl object-contain"
          />
        </div>

        <div className="block md:hidden w-full max-w-sm">
          <Image
            src="/construction-mobile.jpg"
            alt="Elas por Aí - Site em Construção"
            width={1080}
            height={1920}
            priority
            className="w-full h-auto rounded-2xl shadow-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
