import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import styles from "./projects.module.scss";
import { BiLinkExternal } from "react-icons/bi";
import { SiGithub } from "react-icons/si";

interface ProjectsProps {
  projects: {
    strong: string;
    site?: string;
    image: string;
    description: string;
    github?: string;
  }[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section>
      <div className={styles.ProjectContainer}>
        <h1>Projetos</h1>
        <hr />
        <ul className={styles.gallery}>
          {projects.map((project) => (
            <li key={project.strong}>
              <div className={styles.image}>
                <img src={project.image} alt={project.strong} />
              </div>
              <div className={styles.content}>
                <strong>{project.strong}</strong>
                <p>{project.description}</p>
                <div className={styles.buttons}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub /> Repositório
                  </a>

                  {project.site !== " " ? (
                    <a
                      href={project.site}
                      target="_blank"
                      color="#393f44"
                      rel="noopener norenoreferrer"
                    >
                      <BiLinkExternal /> Demo
                    </a>
                  ) : (
                    <a
                      target="_blank"
                      rel="noopener norenoreferrer"
                      className={styles.blocked}
                    >
                      <BiLinkExternal /> Demo
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const response = await client.query<ProjectsProps>({
    query: gql`
      query MyQuery {
        projects(last: 12, orderBy: order_ASC) {
          image
          strong
          description
          site
          github
        }
      }
    `,
  });

  const data = response.data;

  const projects = data.projects;

  return {
    props: {
      projects,
    },
    // revalidate: 60 * 60 * 24, // 24 hours
  };
}
