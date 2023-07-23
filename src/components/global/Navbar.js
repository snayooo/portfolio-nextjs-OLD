import styles from "../../../styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.img}>
					<Link href="/">
						<img src="logo.png" alt="Logo not availible" />
					</Link>
				</div>
                <div className={styles.list}>
                    <div className={styles.element}>
                        <Link href="/">.home()</Link>
                    </div>
                    <div className={styles.element}>
                        <Link href="#about">.about()</Link>
                    </div>
                    <div className={styles.element}>
                        <Link href="#projects">.projects()</Link>
                    </div>
                    <div className={styles.element}>
                        <Link href="#contact">.contact()</Link>
                    </div>
                </div>    
			</nav>
		</>
	);
}
