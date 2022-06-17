import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src="/profile_picture.png"
          alt="About"
          width={192}
          height={256}
        />
        <div>
          <p className={styles.img_txt}>Desarrollada por:</p>
          <p> Lucas Andrews</p>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Sobre la app</h2>
        <p className={styles.description}>
          La app fue hecha desde cero con React en el framework NextJS para el
          front-end y NodeJS & Express en el back-end. Consumiendo API REST
          desde mindicador.cl
        </p>
      </div>
    </div>
  );
}
