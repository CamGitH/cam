import { useEffect, useState, ReactNode } from 'react';
import { ViewContext, type View } from './ViewContext';

const VIEWS: View[] = ['home', 'projects', 'skills', 'certificates'];

function viewFromHash(): View {
  const hash = window.location.hash.replace('#', '');
  return (VIEWS as string[]).includes(hash) ? (hash as View) : 'home';
}

export function ViewProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState<View>(viewFromHash);

  // Keep the view in sync with browser back/forward navigation.
  useEffect(() => {
    const onPopState = () => {
      setCurrentView(viewFromHash());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const setView = (view: View) => {
    if (view !== currentView) {
      // pushState (instead of setting location.hash) avoids the native anchor jump.
      history.pushState(null, '', view === 'home' ? window.location.pathname : `#${view}`);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ViewContext.Provider value={{ currentView, setView }}>
      {children}
    </ViewContext.Provider>
  );
}
