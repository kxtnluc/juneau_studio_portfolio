import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Emulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables from .env.production
dotenv.config({ path: path.join(__dirname, '.env.production') });

// Start your built app
import('./build/index.js');
