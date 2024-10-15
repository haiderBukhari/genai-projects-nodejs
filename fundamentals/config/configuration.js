import { config } from 'dotenv'
config();

const configurations = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
}

export default Object.freeze(configurations);