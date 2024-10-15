import { OpenAI  } from 'openai'
import configurations from '../config/configuration.js'

const openai = new OpenAI({
    apiKey: configurations.OPENAI_API_KEY,
})
 
async function generateText(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: 'assistant',
                    content: 'You will be given a task. You will not generate a detailed and long answer. While answering think step-by-step and justify your answer.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ]
        });
        return response.choices[0].message.content.trim();
    }catch(err){
        console.error(err)
        return null;
    }
}

console.log(await generateText('What is the purepose of node js short and concise.'))