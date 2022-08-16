import styles from "./styles.module.scss";
import { DiCss3, DiHtml5, DiJsBadge, DiReact } from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiFigma,
  SiTailwindcss,
  SiChakraui,
  SiNotion,
  SiSass,
} from "react-icons/si";
import { GrGraphQl, GrStripe } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";

export default function About() {
  return (
    <section className={styles.AboutContainer}>
      <h1>Informações</h1>
      <hr />
      <div className={styles.aboutDiv}>
        <div>
          <p>
            Olá, me chamo Izaías e sou apaixonado por Programação. Venho
            estudando tecnologias na área há cerca de 3 anos, com foco no
            desenvolvimento de aplicações Web. Sigo buscando oportunidades para
            resolver problemas. <br /> <br />
            Minha jornada como programador começou em 2019, onde estudei o
            básico de Pyhton e depois migrei para JavaScript, uma linguagem que
            me encantou bastante. Ao longo de todos esses anos desenvolvi vários
            projetos, sempre buscando criar soluções para problemas reais, e até
            posso dizer que quem me conhece sabe que eu nunca gostei muito de
            projetos &quot;estáticos&quot;, que não resolviam nenhum problema ou
            não possuíam alguma funcionalidade.
          </p>
        </div>
      </div>
      <div className={styles.technologies}>
        <h1>Tecnologias</h1>
        <div>
          <div>
            <DiHtml5 size={40} />
          </div>
          <div>
            <DiCss3 size={40} />
          </div>
          <div>
            <DiJsBadge size={40} />
          </div>
          <div>
            <SiTypescript size={40} />
          </div>
          <div>
            <DiReact size={40} />
          </div>
          <div>
            <SiNextdotjs size={40} />
          </div>
          <div>
            <SiVuedotjs size={40} />
          </div>

          <div>
            <SiFigma size={40} />
          </div>
          <div>
            <SiTailwindcss size={40} />
          </div>
          <div>
            <SiChakraui size={40} />
          </div>
          <div>
            <img
              src="https://api.iconify.design/simple-icons:fauna.svg?color=%23ffffff"
              width={40}
              height={40}
            />
          </div>
          <div>
            <GrGraphQl size={40} />
          </div>
          <div>
            <SiNotion size={40} />
          </div>
          <div>
            <VscAzure size={40} />
          </div>
          <div>
            <img
              src="https://api.iconify.design/file-icons:styledcomponents.svg?color=%23ffffff"
              width={40}
              height={40}
            />
          </div>
          <div>
            <SiSass size={40} />
          </div>
          <div>
            <GrStripe size={40} />
          </div>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <div>
          <h1>Histórico Acadêmico</h1>
          <a href="https://www.ifpi.edu.br/" target="_blank" rel="noreferrer">
            IFPI Campus Teresina Central
          </a>
          <p>Técnico em administração | Fev. de 2019 - Jun. de 2022</p>
        </div>

        <div>
          <h1>Cursos | Bootcamps</h1>
          <a href="https://www.origamid.com/" target="_blank" rel="noreferrer">
            Origamid
          </a>
          <p>
            Programa de formação em desenvolvimento web, onde cursei Webdesign
            completo, CSS layouts, JavaScript completo ES6 e Vue JS 2 Completo.
          </p>
          <br />
          <a
            href="https://www.rocketseat.com.br/ignite"
            target="_blank"
            rel="noreferrer"
          >
            Rocketseat Ignite trilha ReactJS e Node.JS
          </a>
          <p>
            Programa de aceleração com foco em especialização na programação,
            onde me especializei em desenvolvimento com ReactJS. Atualmente
            estou estudando Node.JS no programa.
          </p>
        </div>
      </div>
    </section>
  );
}
