import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { DEV_FLAGS } from '@/config/flags';

const navItems = [
  { to: '/', label: 'Home', flag: 'showFullSite' as const },
  { to: '/research', label: 'Research', flag: 'showResearch' as const },
  { to: '/papers', label: 'Papers', flag: 'showPapers' as const },
  { to: '/blog', label: 'Blog', flag: 'showBlog' as const },
  { to: '/about', label: 'About', flag: 'showAbout' as const },
];

export function NavRail() {
  const visibleItems = navItems.filter(item => {
    if (item.flag === 'showFullSite') return DEV_FLAGS.showFullSite;
    return DEV_FLAGS.showFullSite && DEV_FLAGS[item.flag];
  });

  return (
    <>
      {/* Desktop nav rail */}
      <nav
        className="hidden md:flex fixed left-0 top-0 bottom-0 w-48 flex-col items-center py-8 border-r border-border bg-background z-40"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className="mb-8 hover:opacity-70 transition-opacity"
          aria-label="reasoning.software home"
        >
          <img
            src="/reasoning-software.png"
            alt="reasoning.software"
            className="w-full h-auto px-2 dark:invert"
          />
        </NavLink>

        <div className="flex flex-col gap-1 flex-1 w-full px-3">
          {visibleItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-2 py-2 font-mono text-[10px] uppercase tracking-wider text-center transition-colors hover:bg-muted rounded ${
                  isActive ? 'bg-muted font-medium' : 'text-muted-foreground'
                }`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <ThemeToggle />
      </nav>

      {/* Mobile bottom bar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 h-14 flex items-center justify-around border-t border-border bg-background z-40 px-2"
        aria-label="Main navigation"
      >
        {visibleItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition-colors hover:bg-muted rounded ${
                isActive ? 'bg-muted font-medium' : 'text-muted-foreground'
              }`
            }
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        ))}
        <ThemeToggle />
      </nav>
    </>
  );
}
