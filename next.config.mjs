import dotenv from 'dotenv';

dotenv.config();  // Ensure .env.local is loaded

const nextConfig = {
    reactStrictMode: true,
    env: {
        HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY,  // Explicitly add env var
    },
};

export default nextConfig;
