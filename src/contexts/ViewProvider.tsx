import { useState, ReactNode } from 'react';
import { ViewContext, type View } from './ViewContext';

export function ViewProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState<View>('home');

  const setView = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ViewContext.Provider value={{ currentView, setView }}>
      {children}
    </ViewContext.Provider>
  );
}
