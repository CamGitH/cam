import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageProvider';
import { ViewProvider } from './contexts/ViewProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ViewProvider>
        <App />
      </ViewProvider>
    </LanguageProvider>
  </StrictMode>
);
