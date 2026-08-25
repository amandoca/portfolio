import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router";
import '@/index.css'
import { ErrorBoundary, Loading, NotFound } from "@/components";
import { MainLayout } from "@/layouts";
import { ThemeProvider } from "@/components/theme-provider"
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { lazyWithDelay } from '@/lib/lazy-with-delay';

const Home = lazy(() => lazyWithDelay(() => import('@/pages/home')))
const Resume = lazy(() => lazyWithDelay(() => import('@/pages/resume')))
const Projects = lazy(() => lazyWithDelay(() => import('@/pages/projects')))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <ErrorBoundary>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>,
)
