import styles from "../../../styles/projects.module.css";

export default function Projects() {
	return (
		<>
			<div className={styles.projects}>
				<h2>.projects()</h2>
				<div className={styles.wrapper}>
					<div className={styles.container}>
						<div className={styles.inprogress}>
							<p>In progress</p>
						</div>
						<div className={styles.img}>
							<img
								src="greenduckstudio.jpeg"
								alt="No pictures availible"
							/>
						</div>
						<div className={styles.content}>
							<h3>GreenDuckStudio.de</h3>
							<p>
								This is a website for the Youtuber
								GreenDuckStudio.
							</p>
						</div>
					</div>
					<div className={styles.container}>
						<div className={styles.inprogress}>
							<p>In progress</p>
						</div>
						<div className={styles.img}>
							<img src="logo.png" alt="No pictures availible" />
						</div>
						<div className={styles.content}>
							<h3>SpeedSSH</h3>
							<p>
								I'm currently working on my own SSH programm
								called SpeedSSH
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
