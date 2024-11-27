import Image from "next/image";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import MyLinks from "./components/MyLinks/MyLinks";

export default function Home() {
  const myName = "Rodrigo Medeiros";

  return (
    <div className="bg-primaryColor min-h-screen text-white flex flex-col items-center">
      <main className="w-[95%] lg:max-w-[800px]">
        <header className="flex flex-row items-center justify-between my-10">
          <h1 className="text-3xl text-secondaryColor font-bold">Meus Links</h1>

          <Image
            width={120}
            height={120}
            alt="icon"
            src={"/logo.svg"}
            className="bg-secondaryColor p-3 rounded-full"
          />
        </header>

        <section className="flex flex-col gap-8">
          <div className="relative h-[300px] md:h-[500px]">
            <Image
              alt="Minha Foto"
              src={"/pessoa.jpg"}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
          </div>

          <p className="text-3xl text-secondaryColor font-bold">
            Olá, eu sou {myName}
          </p>
          <p className="text-lg">
            Um apaixonado desenvolvedor full stack com uma paixão por criar
            soluções digitais inovadoras. Minha jornada começou na universidade,
            onde me formei em Ciência da Computação, e desde então, tenho
            dedicado minha carreira ao aprimoramento contínuo e à entrega de
            projetos excepcionais.
          </p>

          <Button />
        </section>

        <section className="mb-8">
          <Card />
        </section>

        <section className="mb-8">
          <MyLinks />
        </section>

        <section className="flex flex-col gap-8 text-lg">
          <p className="text-secondaryColor text-2xl font-bold">
            Entre em contato
          </p>
          <p>
            Estou entusiasmado para explorar novas oportunidades e contribuir
            para projetos desafiadores. Se você está buscando um desenvolvedor
            full stack dedicado e apaixonado, estou pronto para ajudar.
          </p>

          <Button />
        </section>
      </main>

      <footer className="w-full flex flex-col gap-4 text-center mt-10 bg-gray-900 py-10">
        <p>Feito por {myName}</p>
        <p>2024 © Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
