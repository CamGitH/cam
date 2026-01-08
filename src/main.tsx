import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { ViewProvider } from './contexts/ViewContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ViewProvider>
        <App />
      </ViewProvider>
    </LanguageProvider>
  </StrictMode>
);
