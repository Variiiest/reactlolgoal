import './App.css';
import Navbar from './components/MainPageComp/Navbar';
import {
  BrowserRouter as Router,
  Route,
 
} from 'react-router-dom';
import Footer from './components/MainPageComp/Footer';
import mainPage from './pages/mainPage';
import BlogPage from './pages/Blog/BlogPage';
import StoryMain from './pages/Stories/StoryMain';
import CoursePage from './pages/Course/CoursePage';
import FrontendProjects from './pages/Projects/FrontendProjects';
import BackendProjects from './pages/Projects/BackendProjects';
import Frontend from './pages/Blog/Frontend';
import Backend from './pages/Blog/Backend';
import DataStructure from './pages/Blog/DataStructure';
import FrontendAll from './pages/Projects/FrontendAll';
import Authentication from './Uipages/Authenticate/Authleft';
import CardComp from './Uipages/CardComp';
import contact from './Uipages/contact';
import AllComp from './uicomp1/AllComp';


import heroleft from './Uipages/Hero/heroleft';
import DjangoBlocks from './Django/DjangoBlocks';
import heroCenter from './Uipages/Hero/heroCenter';
import HeroSpe from './Uipages/Hero/HeroSpe';
import HeroRight from './Uipages/Hero/HeroRight';


import AuthRight from './Uipages/Authenticate/AuthRight';
import Authcenter from './Uipages/Authenticate/Authcenter';
import AllBlog from './Uipages/Blog/AllBlog';
import List from './Uipages/Blog/List';
import Single from './Uipages/Blog/Single';
import Special from './Uipages/Blog/Special';






function App() {
  return (
    <Router>
      <Navbar/>
           <div className="App">
           <Route exact path='/' component={mainPage}></Route>
<Route path='/frontend' component={Frontend}></Route>

<Route path='/story' component={StoryMain}></Route>
<Route path='/courses' component={CoursePage}></Route>
<Route path='/tailcomp' component={AllComp}></Route>
<Route path='/templates' component={FrontendAll}></Route>
<Route path='/frontendsys/allpurpose' component={FrontendProjects}></Route>
<Route path='/backendsystems' component={BackendProjects}></Route>
<Route path='/backend' component={Backend}></Route>
<Route path='/datastructure' component={DataStructure}></Route>





<Route path='/comp/lefthero' component={heroleft}></Route>
<Route path='/comp/centeredhero' component={heroCenter}></Route>
<Route path='/comp/specialhero' component={HeroSpe}></Route>
<Route path='/comp/righthero' component={HeroRight}></Route>


<Route path='/comp/authleft' component={Authentication}></Route>
<Route path='/comp/authright' component={AuthRight}></Route>
<Route path='/comp/centerauth' component={Authcenter}></Route>
<Route path='/components/card' component={CardComp}></Route>
<Route path='/components/contact' component={contact}></Route>


<Route path='/comp/bloglist' component={List}></Route>
<Route path='/comp/blogspec' component={Special}></Route>
<Route path='/comp/singlepost' component={Single}></Route>
<Route path='/comp/blogpag' component={AllBlog}></Route>




<Route path='/django' component={DjangoBlocks}></Route>
<Route path='/blogdet/:slug' component={BlogPage}></Route>
<Footer/>

           </div>
       </Router>
  );
}

export default App;
