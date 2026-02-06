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
        className="flex-1 md:ml-48 px-6 py-8 md:py-12 pb-20 md:pb-12"
      >
        <div className="mx-auto max-w-5xl">
          <Outlet />
        </div>
      </main>

      <div className="md:ml-48">
        <Footer />
      </div>
    </div>
  );
}
