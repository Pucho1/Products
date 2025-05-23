import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { injectSpeedInsights } from '@vercel/speed-insights';

import './assets/i18n.ts';
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </StrictMode>,
)

injectSpeedInsights()
