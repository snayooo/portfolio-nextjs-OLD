import styles from "../../../styles/about.module.css";
import Link from "next/link";

export default function About() {
	return (
		<>
			<div className={styles.about}>
				<h2>.about()</h2>
				<div className={styles.timeline}>
					<div className={styles.line}>
						<div className={styles.container}>
							<div className={styles.dot}></div>
							<div className={styles.content}>
								<h3 className={styles.heading}>
									2020 - First lines of code
								</h3>
								<hr />
								<p className={styles.text}>
									In 2020, in the pandemic, I was bored. I
									watched a lot of videos on YouTube or played
									video games with my friends from school.
									That is when I discovered Scratch, a
									block-based programming language. I got
									really interested and started to make some
									small 2D video games, but after 2 weeks I
									got bored and stopped making small video
									games.
								</p>
							</div>
						</div>
						<div className={styles.container}>
							<div className={styles.dot}></div>
							<div className={styles.content}>
								<h3 className={styles.heading}>
									2021 - HTML, CSS and JS
								</h3>
								<hr />
								<p className={styles.text}>
									In 2021, I didn't touch Scratch one single
									time. In school, our teacher told us, that
									we are going to code a website. That is when
									I got interested in programming again. My
									first website wasn't the prettiest website
									in existence but for the first website, it
									was alright. It could'nt do much and some
									elements weren't styled but somehow it was
									the best of the class. That is when I
									started to learn more about websites.
								</p>
							</div>
						</div>
						<div className={styles.container}>
							<div className={styles.dot}></div>
							<div className={styles.content}>
								<h3 className={styles.heading}>
									2022 - Frameworks
								</h3>
								<hr />
								<p className={styles.text}>
									In 2022, I made some more websites and
									teached me some new things about web
									developement. On the 28th of November, I
									somehow managed to get the "Developer" -
									role on a Discord server from a small
									Youtuber. I made my websites with HTML and
									CSS, until I met{" "}
									<Link
										href="http://tiqan.de"
										target="_blank"
									>
										Tiqan
									</Link>
									, another Developer on the server. He
									introduced me to the Framework ReactJS and
									later on to NextJS. And maybe you noticed,
									but at the time I only could make websites
									and 2D Scratch games. That changed when I
									met{" "}
									<Link
										href="http://cyklon-developement.gs"
										target="_blank"
									>
										Cyklon
									</Link>{" "}
									who was also a Developer on that server. He
									introduced me to Java and sent me some good
									tutorials. I didn't really had fun with
									Java, so{" "}
									<Link href="http" target="_blank">
										Cyklon
									</Link>{" "}
									and{" "}
									<Link
										href="http://alpha6565.de"
										target="_blank"
									>
										alpha
									</Link>{" "}
									introduced me to Python.
								</p>
							</div>
						</div>
						<div className={styles.container}>
							<div className={styles.dot}></div>
							<div className={styles.content}>
								<h3 className={styles.heading}>
									2023 - Java and Python
								</h3>
								<hr />
								<p className={styles.text}>
									In 2023, I gave Java another go but sadly I
									gave up, again. On the other hand, I really
									enjoyed using Python. I learned how to make
									Discord bots in Python and I also started
									some bigger projects.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
