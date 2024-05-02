const { GoogleGenerativeAI } = require("@google/generative-ai");
import JSON5 from 'json5'

const api = "AIzaSyBwEkrWGToWZKibCQqOYLm38m9kq2-dlU8"

const genAI = new GoogleGenerativeAI(api);

type userSelection = {
  age: string;
  difficulty: string;
  duration: string;
}

async function run(userPrompt: userSelection) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
  const prompt = `Create ${userPrompt.duration} maths questions with 4 options for each question, out of which one is right and 3 are wrong. 
  Keep the difficulty level ${userPrompt.difficulty} and the questions should be as such that a ${userPrompt.age} year old can solve them.
  Give response in JSON format where there is a 'question', 'options' arrays and the  'answer' attribute. Also, keep questions diversified ,not repetitive and purely mathematical.
  Avoid questions which requires pictures or diagrams. Also avoid long name for the options, keep them as short as possible.
  For example, [{'question': 'What is 2+2?', 'options': ['1', '2', '3', '4'], 'answer': '4'}, {'question': 'What is 2+2?', 'options': ['1', '2', '3', '4'], 'answer': '4'}]`;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  const data = JSON5.parse(text);
  return data;

}

export default run;

