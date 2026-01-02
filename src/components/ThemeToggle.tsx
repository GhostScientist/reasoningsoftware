import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 font-mono text-xs hover:bg-muted rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      aria-label={`Switch to ${theme === 'paper' ? 'inked' : 'paper'} theme`}
      title={`Currently: ${theme}. Click to switch.`}
    >
      {theme === 'paper' ? 'inked' : 'paper'}
    </button>
  );
}
