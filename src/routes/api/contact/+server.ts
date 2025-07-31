import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { email, subject, message, topic } = await request.json();

	if (!email || !subject || !message || topic == 'Choose a Topic') {
		return json({ error: 'Missing fields' }, { status: 400 });
	}

	// Configure Gmail SMTP
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.SMTP_USER, // from .env
			pass: process.env.SMTP_PASS  // from .env (App Password)
		}
	});

	try {
		await transporter.sendMail({
			from: email, // Gmail will force the "from" to be from me anyway
			to: process.env.SMTP_USER,
			subject: `${topic} - ${subject}`,
			text: `Message from: ${email}\n\n${message}`,
      replyTo: email  // ← this is what allows you to reply to the user
		});

		return json({ success: true });
	} catch (error) {
		console.error('Email error:', error);
		return json({ error: 'Failed to send email' }, { status: 500 });
	}
};
