const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const queryBookChapter = async (book, chapter) => {
	const result = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `Summarize the ${chapter} chapter of the book ${book}.`,
	});
	console.log(result);
	const summary = result.data.choices[0].text;
	console.log(summary);
};

queryBookChapter("Atomic Habits", "first");
// queryBookChapter("Atomic Habits", "second");
