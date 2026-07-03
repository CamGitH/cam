import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageProvider';
import { ThemeProvider } from './contexts/ThemeProvider';
import { ViewProvider } from './contexts/ViewProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <ViewProvider>
          <App />
        </ViewProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
