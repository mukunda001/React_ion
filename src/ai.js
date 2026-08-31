import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Initialize the Gemini SDK. 
// Notice we use import.meta.env for Vite!
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_TOKEN);

export async function getRecipeFromGemini(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    
    try {
        // gemini-2.5-flash is extremely fast and perfect for this kind of text generation
        const model = genAI.getGenerativeModel({ 
            model: "gemini-3.6-flash",
            systemInstruction: SYSTEM_PROMPT,
        });

        const prompt = `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;
        
        const result = await model.generateContent(prompt);
        return result.response.text();
        
    } catch (err) {
        console.error("Error generating recipe:", err.message);
    }
}