import styles from "./styles.module.scss";
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";
import { IoLogoDiscord } from "react-icons/io5";

export default function Contact() {
  return (
		<section className={styles.ContactContainer}>
			<h1>Contato</h1>
			<hr />
			<div>
				<ul>
					<li>
						<a
							href="https://github.com/izaiasmorais"
							target="_blank"
							rel="noreferrer"
						>
							<SiGithub /> Github
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/izaias-lima/"
							target="_blank"
							rel="noreferrer"
						>
							<SiLinkedin /> Linkedin
						</a>
					</li>
					<li>
						<a href="https://discord.com/users/734056109605650534">
							<IoLogoDiscord size={25} />
							Discord
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/izaias_morais_/"
							target="_blank"
							rel="noreferrer"
						>
							<SiInstagram /> Instagram
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/Izaias_lima_"
							target="_blank"
							rel="noreferrer"
						>
							<SiTwitter />
							Twitter
						</a>
					</li>
					<li>
						<a
							href="mailto:izaiaslima356@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<SiGmail />
							Email
						</a>
					</li>
					<li>
						<a
							href="https://wa.me/5586995360996"
							target="_blank"
							rel="noreferrer"
						>
							<SiWhatsapp /> Whatsapp
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
