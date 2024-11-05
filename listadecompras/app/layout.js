// app/layout.js

import "./globals.css";
import { Roboto } from "next/font/google";

// Configuração da fonte Roboto com pesos específicos
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Listando pesos específicos
});

// Metadados do documento
export const metadata = {
  title: "Lista de Compras",
  description: "Aplicativo para gerenciar lista de compras",
};

// Função principal do layout
export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
