import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Legit.Users</title>
        <meta name="description" content="Welcome to Legit.Users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        Hello World
      </main>
    </>
  );
}
