export const metadata = {
  title: "7 Raízes Piso Nobre",
  description:
    "Pisos de madeira, restauração, raspagem, decks, escadas e acabamentos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
