import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DEV_FLAGS } from '@/config/flags';
import { Layout } from '@/components/layout/Layout';
import { Landing } from '@/pages/Landing';
import { Home } from '@/pages/Home';
import { Research } from '@/pages/Research';
import { Papers } from '@/pages/Papers';
import { PaperDetail } from '@/pages/PaperDetail';
import { Tools } from '@/pages/Tools';
import { Notes } from '@/pages/Notes';
import { NoteDetail } from '@/pages/NoteDetail';
import { About } from '@/pages/About';

function FullSiteRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {DEV_FLAGS.showResearch && (
          <Route path="/research" element={<Research />} />
        )}
        {DEV_FLAGS.showPapers && (
          <>
            <Route path="/papers" element={<Papers />} />
            <Route path="/papers/:slug" element={<PaperDetail />} />
          </>
        )}
        {DEV_FLAGS.showTools && <Route path="/tools" element={<Tools />} />}
        {DEV_FLAGS.showNotes && (
          <>
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/:slug" element={<NoteDetail />} />
          </>
        )}
        {DEV_FLAGS.showAbout && <Route path="/about" element={<About />} />}
      </Route>
    </Routes>
  );
}

function LandingOnlyRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}

export function App() {
  return (
    <BrowserRouter>
      {DEV_FLAGS.showFullSite ? <FullSiteRoutes /> : <LandingOnlyRoutes />}
    </BrowserRouter>
  );
}

export default App;
