import styles from './Footer.module.css';
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Desenvolvido por Igor Borges.</p>
      <a href="https://github.com/gori2016"><FaGithub size="50" color='black'></FaGithub></a>
     
    </footer>
  );
}

export default Footer;