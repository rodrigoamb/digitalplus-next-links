import Link from "next/link";

export default function Button() {
  return (
    <Link
      href={
        "https://wa.me/5585997173536?text=Ol%C3%A1%20Rodrigo,%20quero%20conversar%20com%20voc%C3%AA!"
      }
      target="_blank"
      className="bg-secondaryColor w-fit text-black px-6 py-3 rounded-full text-xl hover:bg-secondaryColorLight"
    >
      Fale comigo
    </Link>
  );
}
