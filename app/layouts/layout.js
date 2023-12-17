import { Pacifico } from "next/font/google";
import Head from "next/head";

const cormorant = Pacifico({ subsets: ["cyrillic"], weight: "400" });

export const metadata = {
  title: "Secret Santa 2023",
  description: "Угадай кто твой санта",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
