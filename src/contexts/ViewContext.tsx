import { createContext, useContext } from 'react';

export type View = 'home' | 'skills' | 'certificates';

export interface ViewContextType {
  currentView: View;
  setView: (view: View) => void;
}

export const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function useView() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
}
