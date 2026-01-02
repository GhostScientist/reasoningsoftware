import { useState, useEffect, useCallback } from 'react';

export type Theme = 'paper' | 'inked';

const STORAGE_KEY = 'reasoning-theme';

function getSystemPreference(): Theme {
  if (typeof window === 'undefined') return 'paper';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'inked' : 'paper';
}

function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'paper' || stored === 'inked') return stored;
  return null;
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    return getStoredTheme() ?? getSystemPreference();
  });

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'paper' ? 'inked' : 'paper');
  }, [theme, setTheme]);

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'inked') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      if (!getStoredTheme()) {
        setThemeState(e.matches ? 'inked' : 'paper');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return { theme, setTheme, toggleTheme };
}
