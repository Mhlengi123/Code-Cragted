import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Security Middlewares
  app.use(helmet({
    contentSecurityPolicy: false, // Disable for Vite development
  }));
  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'active', system: 'CodeCrafted Secure Infrastructure' });
  });

  app.post('/api/payment/initiate', (req, res) => {
    // Placeholder for payment logic
    const { amount, currency, reference } = req.body;
    console.log(`Payment Initiation Internal Log: ${amount} ${currency} [Ref: ${reference}]`);
    res.json({ 
      success: true, 
      message: 'Strategic Capital Transfer Initiated',
      transactionId: `TXN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    });
  });

  // Vite middleware setup for Development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production: Serve static files from dist
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CodeCrafted Deployment Active: Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Critical Architecture Failure:', err);
  process.exit(1);
});
