import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

async function fetchData(preferences, budget, numTravelers, numDays, month) {
  const prompt = `Discover your ideal travel destination based on your preferences. Plan your trip with a budget of Rs${budget} for  ${numTravelers} travelers in INR, intending to travel in the month of ${month} for ${numDays} days. Your main preferences are ${preferences}.Immerse yourself in breathtaking scenic landscapes, embrace rich cultural experiences, and explore thrilling adventure opportunities.
      Additionally, gain insights into the local community and their way of life. 
      Please avoid using bold text to highlight the responses.
      only use commonmark markdown for response, use #, ##, ### for headings.`;

  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const res = text;
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default fetchData;
