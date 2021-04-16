import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
 
} from 'react-router-dom';
import Footer from './components/Footer';
import mainPage from './pages/mainPage';
import BlogPage from './pages/Blog/BlogPage';
import StoryMain from './pages/Stories/StoryMain';
import CoursePage from './pages/Course/CoursePage';
import DesignProjects from './pages/Projects/DesignProjects';
import FrontendProjects from './pages/Projects/FrontendProjects';
import BackendProjects from './pages/Projects/BackendProjects';
import Frontend from './pages/Blog/Frontend';
import Backend from './pages/Blog/Backend';
import DataStructure from './pages/Blog/DataStructure';
import FrontendAll from './pages/Projects/FrontendAll';
import authentication from './Uipages/authentication';
import CardComp from './Uipages/CardComp';
import BlogComp from './Uipages/BlogComp';
import contact from './Uipages/contact';
import AllComp from './uicomp1/AllComp';
import heroleft from './Uipages/heroleft';


function App() {
  return (
    <Router>
      <Navbar/>
           <div className="App">
           <Route exact path='/' component={mainPage}></Route>
<Route path='/frontend' component={Frontend}></Route>
<Route path='/blogdet' component={BlogPage}></Route>
<Route path='/story' component={StoryMain}></Route>
<Route path='/courses' component={CoursePage}></Route>
<Route path='/designsystems' component={DesignProjects}></Route>
<Route path='/tailcomp' component={AllComp}></Route>
<Route path='/frontendsystems' component={FrontendProjects}></Route>
<Route path='/frontendsys/allpurpose' component={FrontendAll}></Route>
<Route path='/backendsystems' component={BackendProjects}></Route>
<Route path='/backend' component={Backend}></Route>
<Route path='/datastructure' component={DataStructure}></Route>





<Route path='/comp/lefthero' component={heroleft}></Route>
<Route path='/components/authentication' component={authentication}></Route>
<Route path='/components/card' component={CardComp}></Route>
<Route path='/components/blog' component={BlogComp}></Route>

<Route path='/components/contact' component={contact}></Route>



<Footer/>

           </div>
       </Router>
  );
}

export default App;
