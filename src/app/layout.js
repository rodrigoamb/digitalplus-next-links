import "./styles/globals.css";

export const metadata = {
  title: "Meus Links",
  description: "Minha página de links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
