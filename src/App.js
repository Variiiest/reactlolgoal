import './App.css';

import {lazy,Suspense} from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import SuspenseTheme from './components/MainPageComp/SuspenseTheme';
import LandingPage from './landingpages/LandingPage';
import LandingCode from './landingpages/Landingcode';
import Industries from './components/MainPageComp/Industries';
import Navbar from './components/MainPageComp/Navbar';
import Footer from './components/MainPageComp/Footer';

const mainPage = lazy(() => import('./pages/mainPage'))
const BlogPage = lazy(() => import('./Django/BlogPage'))
const TailwindBlocks = lazy(() => import('./pages/TailwindBlocks'))
const DjangoBlocks = lazy(() => import('./Django/DjangoBlocks'))
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
const GeneratePage = lazy(() => import('./Django/Codegenerator/GeneratePage'))
const Alerts = lazy(() => import('./Uipages/CodePage/Alerts'))
const Addresses = lazy(() => import('./Uipages/CodePage/Addresses'))
const Buttons = lazy(() => import('./Uipages/CodePage/Buttons'))

function App() {
  return (
    <Suspense fallback={<SuspenseTheme/>}>
    <Router>
    
      <div className="App">
        <Route exact path='/' component={mainPage}></Route>

        
        <Route path='/tools' component={Freetools}></Route>
        <Route path='/tailwind' component={TailwindBlocks}></Route>
        
        <Route path='/django' component={DjangoBlocks}></Route>
        <Route path='/blogdet/:slug' component={BlogPage}></Route>

        <Route path='/auth'>
          <Navbar/>

         <Auth/>
         <Footer/>
        </Route>
        <Route path='/alert'>
        <Navbar/>
        <Alerts/>
        </Route>

        <Route path='/address'>
        <Navbar/>
         <Addresses/>
        </Route>

        <Route path='/button'>
        <Navbar/>
        <Buttons/>
       </Route>


        <Route path='/blog'>
        <Navbar/>
         <BlogComp/>
        </Route>

        <Route path='/hero'>
        <Navbar/>
         <Hero/>
        </Route>

        <Route path='/card'>
        <Navbar/>
         <CardComp/>
        </Route>
        
        <Route path='/contactdes'>
        <Navbar/>
         <Contact/>
        </Route>

        <Route path='/contentdes'>
        <Navbar/>
         <Content/>
        </Route>

        <Route path='/ctacomp'>
        <Navbar/>
         <CTA/>
        </Route>

        <Route path='/faqcomp'>
        <Navbar/>
         <FAQ/>
        </Route>

        <Route path='/features'>
        <Navbar/>
         <Feature/>
        </Route>

        <Route path='/footers'>
        <Navbar/>
         <Footers/>
        </Route>

        <Route path="/generate">
        <Navbar/>
          <GeneratePage/>
        </Route>


        <Route path='/temp/:slug' component={LandingCode}></Route>

        


{/* LandingPages */}
       
        <Route path="/landingpages">
        <Navbar/>
          <LandingPage/>
        </Route>

        <Route path="/industries">
        <Navbar/>
          <Industries/>
        </Route>







      </div>
    </Router>
    </Suspense>
  );
}

export default App;
