import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
 
} from 'react-router-dom';
import Footer from './components/Footer';
import mainPage from './pages/mainPage';
import BlogMainpage from './pages/Blog/BlogMainpage';
import BlogPage from './pages/Blog/BlogPage';
import StoryMain from './pages/Stories/StoryMain';
import CoursePage from './pages/Course/CoursePage';


function App() {
  return (
    <Router>
      <Navbar/>
           <div className="App">
           <Route exact path='/' component={mainPage}></Route>
<Route path='/frontend' component={BlogMainpage}></Route>
<Route path='/blogdet' component={BlogPage}></Route>
<Route path='/story' component={StoryMain}></Route>
<Route path='/courses' component={CoursePage}></Route>
<Footer/>

           </div>
       </Router>
  );
}

export default App;
