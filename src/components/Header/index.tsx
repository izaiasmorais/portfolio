import styles from "./styles.module.scss";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

export function Header() {
  const [state, setState] = useState(false);

  return (
    <header className={styles.HeaderContainer}>
      <div>
        <Link href="/">
          <a>Portfólio</a>
        </Link>

        <button onClick={() => setState(!state)}>
          <AiOutlineMenu size={25} color="white" />
        </button>

        <nav className={styles.menu}>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/about" activeClassName={styles.active}>
            <a>Sobre</a>
          </ActiveLink>
          <ActiveLink href="/projects" activeClassName={styles.active}>
            <a>Projetos</a>
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName={styles.active}>
            <a>Contato</a>
          </ActiveLink>
        </nav>

        {state && (
          <nav className={styles.dropDown}>
            <ActiveLink href="/" activeClassName={styles.active}>
              <a onClick={() => setState(false)}>Home</a>
            </ActiveLink>
            <ActiveLink href="/about" activeClassName={styles.active}>
              <a onClick={() => setState(false)}>Sobre</a>
            </ActiveLink>
            <ActiveLink href="/projects" activeClassName={styles.active}>
              <a onClick={() => setState(false)}>Projetos</a>
            </ActiveLink>
            <ActiveLink href="/contact" activeClassName={styles.active}>
              <a onClick={() => setState(false)}>Contato</a>
            </ActiveLink>
          </nav>
        )}
      </div>
    </header>
  );
}
