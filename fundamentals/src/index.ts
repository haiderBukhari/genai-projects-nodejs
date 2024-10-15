const configurations = require('./config/configuration.ts')
const { OpenAI  } = require('openai')

const openai = new OpenAI({
    apiKey: configurations.OPENAI_API_KEY,
})
 
async function generateText(prompt:string) {
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
        if (response && response.choices && response.choices.length > 0 && response.choices[0].message.content) {
            console.log(response.choices[0].message.content.trim());
        }else{
            console.log('No answer generated.')
        }
    }catch(err){
        console.error(err)
        return null;
    }
}

generateText('What is the purepose of node js short and concise.')