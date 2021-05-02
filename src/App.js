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
import Auth from './Uipages/Auth';
import BlogComp from './Uipages/BlogComp';
import Hero from './Uipages/Hero';
import FreeTemplates from './components/Templates/FreeTemplates';
import Premium from './components/Templates/Premium';
import CardComp from './Uipages/CardComp';





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
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
