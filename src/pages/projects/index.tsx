import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import styles from "./projects.module.scss";
import { BiLinkExternal } from "react-icons/bi";
import { SiGithub } from "react-icons/si";

interface ProjectsProps {
  projects: {
    strong: string;
    site?: string;
    description: string;
    github?: string;
    image: {
      url: string;
    };
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
                <img src={project.image?.url} alt={project.strong} />
              </div>
              <div className={styles.content}>
                <strong>{project.strong}</strong>
                <p>{project.description}</p>
                <div className={styles.buttons}>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <SiGithub /> Repositório
                  </a>

                  {project.site !== " " ? (
                    <a
                      href={project.site}
                      color="#393f44"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiLinkExternal /> Demo
                    </a>
                  ) : (
                    <a
                      className={styles.blocked}
                      target="_blank"
                      rel="noreferrer"
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
        projects(last: 25, orderBy: order_ASC) {
          github
          description
          site
          strong
          image {
            url
          }
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
    revalidate: 60 * 60 * 24, // 24 hours
  };
}
