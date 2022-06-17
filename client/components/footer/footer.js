import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footmargin}></div>
      <footer className={styles.footer}>
        <a
          href="https://portfolio-lucas-andrews.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coded by Lucas Andrews
        </a>
      </footer>
    </>
  );
}
