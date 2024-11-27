import Image from "next/image";

export default function Card() {
  const title = "Minhas habilidades";

  const habilitys = [
    {
      title: "Linguagens de Programação",
      description: "Node.js, React, NextJS",
      image: "/img1.png",
    },
    {
      title: "Bancos de Dados",
      description: "MySQL e NoSQL",
      image: "/img2.png",
    },
  ];

  return (
    <div>
      <p className="py-6 text-2xl text-secondaryColor font-bold">{title}</p>

      <div className="flex flex-col gap-5 lg:flex-row">
        {habilitys.map((hability, index) => (
          <div key={index} className="w-full">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                alt="tech1"
                src={hability.image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="bg-gray-900 flex flex-col gap-4 py-4 px-8">
              <p className="text-secondaryColor">{hability.title}</p>
              <p>{hability.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
