import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';
import { DEV_FLAGS } from '@/config/flags';
import { Layout } from '@/components/layout/Layout';
import { Landing } from '@/pages/Landing';
import { Home } from '@/pages/Home';
import { Research } from '@/pages/Research';
import { ProgramDetail } from '@/pages/ProgramDetail';
import { Papers } from '@/pages/Papers';
import { PaperDetail } from '@/pages/PaperDetail';
import { Blog } from '@/pages/Blog';
import { BlogPostDetail } from '@/pages/BlogPostDetail';
import { About } from '@/pages/About';

function LegacyNoteRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/blog/${slug}` : '/blog'} replace />;
}

function FullSiteRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {DEV_FLAGS.showResearch && (
          <>
            <Route path="/research" element={<Research />} />
            <Route path="/research/:slug" element={<ProgramDetail />} />
          </>
        )}
        {DEV_FLAGS.showPapers && (
          <>
            <Route path="/papers" element={<Papers />} />
            <Route path="/papers/:slug" element={<PaperDetail />} />
          </>
        )}
        {DEV_FLAGS.showBlog && (
          <>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/notes" element={<Navigate to="/blog" replace />} />
            <Route path="/notes/:slug" element={<LegacyNoteRedirect />} />
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
