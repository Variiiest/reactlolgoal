import './App.css';
import Navbar from './components/MainPageComp/Navbar';
import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';
import Footer from './components/MainPageComp/Footer';
import mainPage from './pages/mainPage';
import BlogPage from './Django/BlogPage';
import AllComp from './uicomp1/AllComp';
import DjangoBlocks from './Django/DjangoBlocks';
import Auth from './Uipages/CodePage/Auth';
import BlogComp from './Uipages/CodePage/BlogComp';
import Hero from './Uipages/CodePage/Hero';
import FreeTemplates from './components/Templates/FreeTemplates';
import Premium from './components/Templates/Premium';
import CardComp from './Uipages/CodePage/CardComp';
import Contact from './Uipages/CodePage/Contact';
import Content from './Uipages/CodePage/Content';
import CTA from './Uipages/CodePage/CTA';
import FAQ from './Uipages/CodePage/FAQ';
import Feature from './Uipages/CodePage/Feature';
import Footers from './Uipages/CodePage/Footers';
import Index from './components/DesignSystem/DesignOne';





function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path='/' component={mainPage}></Route>

        
        <Route path='/freetemp' component={FreeTemplates}></Route>
        <Route path='/tailwind' component={AllComp}></Route>
        <Route path='/premium' component={Premium}></Route>

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
        <Route path='/design'>
         <Index/>
        </Route>


        <Footer />

      </div>
    </Router>
  );
}

export default App;
