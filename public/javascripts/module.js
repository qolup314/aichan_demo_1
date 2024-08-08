import {GoogleGenerativeAI} from "@google/generative-ai";
import "marked";

// Gemini_API_KEY
// const apiKey="AIzaSyD5X-Co-gbexOjn32TZBDR2eAciGvZbI-A";
// const genAI=new GoogleGenerativeAI(apiKey);

// require('dotenv').config();
// const apiKey = process.env.Gemini_API_KEY;
// const genAI=new GoogleGenerativeAI(apiKey);
// console.log(process.env);

const apiKey=config.apikey;
const genAI=new GoogleGenerativeAI(apiKey);


// parameters
const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};

// safety settings
const safe = {
  "HARM_CATEGORY_HARASSMENT": "BLOCK_NONE",
  "HARM_CATEGORY_HATE_SPEECH": "BLOCK_NONE",
  "HARM_CATEGORY_SEXUALLY_EXPLICIT": "BLOCK_NONE",
  "HARM_CATEGORY_DANGEROUS_CONTENT": "BLOCK_NONE",
};

const model=genAI.getGenerativeModel(
  {
    model: "gemini-pro",
    geminiConfig,
    safe,
  }
);

window.getMessage=async function(prompt, message){
  message.innerHTML="<p>考え中...お待ちください</p>";
  const result=await model.generateContent(prompt);
  const response=await result.response;
  const content=response.text();
  message.innerHTML=marked.parse(content);
}
