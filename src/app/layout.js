import "../globals.scss";
export const metadata = {
  title: "Viajemos",
  description: "Renta de vehículos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
