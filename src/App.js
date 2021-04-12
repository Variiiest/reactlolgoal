import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
 
} from 'react-router-dom';
import Footer from './components/Footer';
import mainPage from './pages/Projects/mainPage';
import BlogMainpage from './pages/Blog/BlogMainpage';


function App() {
  return (
    <Router>
      <Navbar/>
           <div className="App">
           <Route exact path='/' component={mainPage}></Route>
<Route path='/frontend' component={BlogMainpage}></Route>
<Footer/>

           </div>
       </Router>
  );
}

export default App;
