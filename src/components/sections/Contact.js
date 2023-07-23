import styles from "../../../styles/contact.module.css";

export default function Contact() {
	return (
		<>
			<div className={styles.contact}>
				<h2>.contact()</h2>
				<div className={styles.wrapper}>
					<form
						method="POST"
						action="/api/contact"
						className={styles.form}
					>
						<input
							name="name"
							placeholder="Your name"
							className={styles.name}
							type="text"
							required
						/>
						<input
							name="email"
							placeholder="Your Email address"
							className={styles.email}
							type="email"
							required
						/>
						<input
							name="subject"
							placeholder="Subject"
							className={styles.subject}
							type="text"
							maxLength="50"
							required
						/>
						<textarea
							name="message"
							maxLength="600"
							placeholder="Type something here..."
                            rows="5"
                            required
						></textarea>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</>
	);
}
