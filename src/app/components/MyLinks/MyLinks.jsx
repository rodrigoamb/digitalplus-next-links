import Link from "next/link";

export default function MyLinks() {
  const links = [
    {
      href: "https://google.com.br",
      text: "Meu Currículo Lattes",
    },
    {
      href: "https://google.com.br",
      text: "Linkedin",
    },
    {
      href: "https://google.com.br",
      text: "Github",
    },
    {
      href: "https://google.com.br",
      text: "Instagram",
    },
    {
      href: "https://wa.me/5585997173536?text=Ol%C3%A1%20Rodrigo,%20quero%20conversar%20com%20voc%C3%AA!",
      text: "Fale comigo no Whatsapp",
    },
  ];

  return (
    <div>
      <p className={"text-2xl text-secondaryColor mb-8 font-bold"}>
        Links complementares
      </p>
      <div className="flex flex-col gap-5">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="bg-secondaryColor text-xl text-black py-3 text-center rounded-lg hover:bg-secondaryColorLight"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
