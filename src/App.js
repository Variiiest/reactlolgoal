import './App.css';

import {lazy,Suspense} from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import SuspenseTheme from './components/MainPageComp/SuspenseTheme';


const Navbar = lazy(() => import('./components/MainPageComp/Navbar'));


const Footer = lazy(() => import('./components/MainPageComp/Footer'))
const mainPage = lazy(() => import('./pages/mainPage'))
const BlogPage = lazy(() => import('./Django/BlogPage'))
const AllComp = lazy(() => import('./uicomp1/AllComp'))
const DjangoBlocks = lazy(() => import('./Django/DjangoBlocks'))
const Auth = lazy(() => import('./Uipages/CodePage/Auth'))
const BlogComp = lazy(() => import('./Uipages/CodePage/BlogComp'))
const Hero = lazy(() => import('./Uipages/CodePage/Hero'))
const FreeTemplates = lazy(() => import('./components/Templates/FreeTemplates'))
const CardComp = lazy(() => import('./Uipages/CodePage/CardComp'))
const Contact = lazy(() => import('./Uipages/CodePage/Contact'))
const Content = lazy(() => import('./Uipages/CodePage/Content'))
const CTA = lazy(() => import('./Uipages/CodePage/CTA'))
const FAQ = lazy(() => import('./Uipages/CodePage/FAQ'))
const Feature = lazy(() => import('./Uipages/CodePage/Feature'))
const Footers = lazy(() => import('./Uipages/CodePage/Footers'))
const GeneratePage = lazy(() => import('./Django/Codegenerator/GeneratePage'))
const Deeva = lazy(() => import('./components/Templates/Deeva/Deeva'))
const DenimComp = lazy(() => import('./components/Templates/Denim/DenimComp'))
const Merit = lazy(() => import('./components/Templates/Merit/Merit'))


function App() {
  return (
    <Suspense fallback={<SuspenseTheme/>}>
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path='/' component={mainPage}></Route>

        
        <Route path='/freetemp' component={FreeTemplates}></Route>
        <Route path='/tailwind' component={AllComp}></Route>
        
        <Route path='/django' component={DjangoBlocks}></Route>
        <Route path='/blogdet/:slug' component={BlogPage}></Route>

        <Route path='/auth'>
         <Auth/>
        </Route>
        <Route path='/blog'>
         <BlogComp/>
        </Route>

        <Route path='/hero'>
         <Hero/>
        </Route>

        <Route path='/card'>
         <CardComp/>
        </Route>
        
        <Route path='/contactdes'>
         <Contact/>
        </Route>
        <Route path='/contentdes'>
         <Content/>
        </Route>

        <Route path='/ctacomp'>
         <CTA/>
        </Route>
        <Route path='/faqcomp'>
         <FAQ/>
        </Route>
        <Route path='/features'>
         <Feature/>
        </Route>
        <Route path='/footers'>
         <Footers/>
        </Route>
        <Route path="/generate">
          <GeneratePage/>
        </Route>

        <Route path='/deeva/:name' component={Deeva}></Route>

        
        <Route path="/denim">
          <DenimComp/>
        </Route>


        <Route path='/merit/:name' component={Merit}></Route>

        
        
        <Footer />


      </div>
    </Router>
    </Suspense>
  );
}

export default App;
