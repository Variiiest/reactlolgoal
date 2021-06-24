import './App.css';

import { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import SuspenseTheme from './MainPageComp/SuspenseTheme';
import LandingPage from './landingpages/LandingPage';
import LandingCode from './landingpages/Landingcode';
import Industries from './MainPageComp/Industries';
import Navbar from './MainPageComp/Navbar';
import Footer from './MainPageComp/Footer';
import { ThemeProvider } from './themes/themeContext';
import CourseCatalog from './pages/CoursePage';
import BlogSecond from './Blog/BlogSecond';

const LightCompPage = lazy(() => import('./pages/LightCompPage'))
const mainPage = lazy(() => import('./pages/mainPage'))
const BlogPage = lazy(() => import('./Blog/BlogPage'))
const TailwindBlocks = lazy(() => import('./pages/TailwindBlocks'))
const DjangoBlocks = lazy(() => import('./Blog/DjangoBlocks'))
const Auth = lazy(() => import('./Uipages/CodePage/Auth'))
const BlogComp = lazy(() => import('./Uipages/CodePage/BlogComp'))
const Hero = lazy(() => import('./Uipages/CodePage/Hero'))
const Freetools = lazy(() => import('./Uipages/Freetools'))
const CardComp = lazy(() => import('./Uipages/CodePage/CardComp'))
const Contact = lazy(() => import('./Uipages/CodePage/Contact'))
const Content = lazy(() => import('./Uipages/CodePage/Content'))
const CTA = lazy(() => import('./Uipages/CodePage/CTA'))
const FAQ = lazy(() => import('./Uipages/CodePage/FAQ'))
const Feature = lazy(() => import('./Uipages/CodePage/Feature'))
const Footers = lazy(() => import('./Uipages/CodePage/Footers'))
const Alerts = lazy(() => import('./Uipages/CodePage/Alerts'))
const Addresses = lazy(() => import('./Uipages/CodePage/Addresses'))
const Buttons = lazy(() => import('./Uipages/CodePage/Buttons'))

function App() {
  return (
    <Suspense fallback={<SuspenseTheme />}>
      <ThemeProvider>
        <Router>

          <div className="App">
            <Route exact path='/' component={mainPage}></Route>


            <Route path='/tools' component={Freetools}></Route>
            <Route path='/themes' component={TailwindBlocks}></Route>

            <Route path='/fullstack' component={DjangoBlocks}></Route>
            <Route path='/blogdet/:slug' component={BlogPage}>


            </Route>

            <Route path='/tutorials'>
              <Navbar />
              <BlogSecond />
            </Route>



            <Route path='/auth'>
              <Navbar />

              <Auth />
              <Footer />
            </Route>
            <Route path='/alert'>
              <Navbar />
              <Alerts />
            </Route>

            <Route path='/address'>
              <Navbar />
              <Addresses />
            </Route>

            <Route path='/button'>
              <Navbar />
              <Buttons />
            </Route>


            <Route path='/blog'>
              <Navbar />
              <BlogComp />
            </Route>

            <Route path='/hero'>
              <Navbar />
              <Hero />
            </Route>

            <Route path='/card'>
              <Navbar />
              <CardComp />
            </Route>

            <Route path='/contactdes'>
              <Navbar />
              <Contact />
            </Route>

            <Route path='/contentdes'>
              <Navbar />
              <Content />
            </Route>

            <Route path='/ctacomp'>
              <Navbar />
              <CTA />
            </Route>
            <Route path='/courses'>
              <Navbar />
              <CourseCatalog />
              <Footer/>
            </Route>

            <Route path='/faqcomp'>
              <Navbar />
              <FAQ />
            </Route>

            <Route path='/features'>
              <Navbar />
              <Feature />
            </Route>

            <Route path='/footers'>
              <Navbar />
              <Footers />
            </Route>




            <Route path='/temp/:slug' component={LandingCode}></Route>




            {/* LandingPages */}

            <Route path="/landingpages">
              <Navbar />
              <LandingPage />
            </Route>

            <Route path="/industries">
              <Navbar />
              <Industries />
            </Route>


            <Route path="/lightcomp">
              <Navbar />
              <LightCompPage />
            </Route>






          </div>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
