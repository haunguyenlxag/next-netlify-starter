import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
	return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extractFeedback(filePath) {
	const fileData = fs.readFileSync(filePath);
	const data = JSON.parse(fileData);
	return data;
}

function handler(req, res) {
	console.log('Co request den');
	console.log(req.body);
	//console.log(req);
	//const filePath = buildFeedbackPath();
	//const data = extractFeedback(filePath);
	res.status(200).json({ feedback: "OK" });
}

export default handler;
