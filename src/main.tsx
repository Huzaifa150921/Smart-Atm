import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BalanceProvider } from './components/context/Context.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BalanceProvider initialBalance={5000}>
      <App />
    </BalanceProvider>
  </StrictMode >,
)
