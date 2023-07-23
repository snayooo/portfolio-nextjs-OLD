import styles from "../../styles/homepage.module.css";
import Head from "next/head";

//Components
import Navbar from "../components/global/navbar";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Home from "../components/sections/home";
import Projects from "../components/sections/projects";
import Footer from "../components/global/footer";

export default function Homepage() {
	return (
		<>
            <Head>
                <title>Snayo | snayo.net</title>
            </Head>
			<div className="homepage">
				<div className={styles.start}>
					<Navbar />
					<Home />
				</div>
				<div className={styles.about} id="about">
					<About />
				</div>
				<div className={styles.projects} id="projects">
					<Projects />
				</div>
				<div className={styles.contact}>
					<Contact />
				</div>
				<div className={styles.footer}>
                    <hr />
                    <Footer />
                </div>
			</div>
		</>
	);
}
