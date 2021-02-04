import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ?? 3333;

app.listen(PORT, () => console.log(`🔥 Server at http://127.0.0.1:${PORT} 🔥`));