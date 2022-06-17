import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Indicadores económicos</title>
        <meta name="Economic indicators" content="Economic indicators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenidos a la app de indicadores económicos
        </h1>
        <h3 className={styles.description}>
          <u>
            <Link href="/indicadores">Click aquí</Link>
          </u>{" "}
          para entrar a la app...
        </h3>
        <p className={styles.codedby}>Coded by Lucas Andrews</p>
      </main>
    </div>
  );
}
