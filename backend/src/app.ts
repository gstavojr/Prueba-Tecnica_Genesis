import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { testConnection } from '@infrastructure/database/prismaClient';
import authRoute from '@interfaces/http/routes/auth.routes'
import bancaRoute from '@interfaces/http/routes/banca.route'
import { errorMiddleware } from '@interfaces/http/middlewares/error.middleware';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoute);
app.use('/api/banca', bancaRoute);

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy', status: 'ok' });
});

app.use(errorMiddleware);


app.listen(PORT, async () => {
  await testConnection();
  console.log(`Server is running on port ${PORT}`);
  console.log('Entorno: ', process.env.NODE_ENV);
})


export default app;