import { Outlet } from 'react-router-dom';
import { NavRail } from './NavRail';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to content link */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <NavRail />

      {/* Main content area */}
      <main
        id="main-content"
        className="flex-1 md:ml-16 px-6 py-8 md:py-12 pb-20 md:pb-12"
      >
        <div className="max-w-2xl mx-auto">
          <Outlet />
        </div>
      </main>

      <div className="md:ml-16">
        <Footer />
      </div>
    </div>
  );
}
