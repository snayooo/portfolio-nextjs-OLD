export default async function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, subject, message } = req.body;
		console.log(email, name, subject, message);

		await fetch("https://api.useplunk.com/v1/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer sk_f5308d95cc728283761494399bb1814d509d4d81a0512339",
			},
			body: JSON.stringify({
				to: "contact@snayo.net",
				subject: `snayo.net contact: ${subject}`,
				body: `
                    <div>
                        <h1>Contact form</h1>
                        <p>Name: ${name}</p>
                        <p>Email: ${email}</p>
                        <p>Subject: ${subject}</p>
                        <p>Message: ${message}</p>
                    </div>`,
			}),
		});

		res.redirect(302, "/thankyou");
	}
}
