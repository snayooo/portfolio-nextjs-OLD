import styles from "../../styles/404.module.css";
import Link from "next/link";

export default function Custom404() {
	return (
		<>
			<div className={styles.error}>
				<div className={styles.window}>
					<div className={styles.bar}>
						<div className={styles.red}></div>
						<div className={styles.green}></div>
						<div className={styles.orange}></div>
					</div>
					<div className={styles.container}>
						<div className={styles.row}>
							<h3>[SYSTEM/Error] </h3>
							<p className={styles.system}>ERROR 404</p>
						</div>
						<div className={styles.row}>
							<h3>[SYSTEM/Error] </h3>
							<p className={styles.system}>The page you are looking for apparently doesn't exist!</p>
						</div>
						<div className={styles.row}>
                            <h3 className={styles.visitor}>visitor@snayo.net ~ # </h3>
                            <p><Link href="/">Back to the homepage</Link></p>
                        </div>
					</div>
				</div>
			</div>
		</>
	);
}
