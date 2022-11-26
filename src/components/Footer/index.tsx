import styles from "./styles.module.scss";
import { SiGithub } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoDiscord } from "react-icons/io5";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        Portfolio © Todos os direitos reservados
      </div>
      <div className={styles.social}>
        <a href="https://github.com/izaiasmorais">
          <SiGithub size={25} />
        </a>
        <a href="https://www.instagram.com/izaias_morais_/">
          <RiInstagramFill size={30} />
        </a>
        <a href="https://discord.com/users/734056109605650534">
          <IoLogoDiscord size={25} />
        </a>
      </div>
    </footer>
  );
}
