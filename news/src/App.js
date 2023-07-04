import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Weather from './pages/Weather';
import Blogs from './pages/Blogs';
import Articles from './pages/Articles';
import Image from './pages/Image';
import ErrorMessage from './pages/ErrorMessage';
import About from './pages/About';
import Login from './pages/loginForm';
import Register from './pages/signUpForm';
import Logout from './pages/Logout';
import Reset from './pages/reset';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDetails from "./pages/userDetails";

function App() {
  const isLoggedIn =window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={isLoggedIn == "true"? Home : Login} /> */}
          <Route path="/" exact component={Home}/>
          <Route path="/Home" exact component={Home}/>
          <Route path="/News" exact component={News}/>
          <Route path="/Weather" exact component={Weather}/>
          <Route path="/Blogs" exact component={Blogs}/>
          <Route path="/Articles" exact component={Articles}/>
          <Route path="/Image" exact component={Image}/>
          <Route path="/errormessage" exact component={ErrorMessage}/>
          <Route path="/About" exact component={About}/>
          <Route path="/loginForm" exact component={Login}/>
          <Route path="/signUpForm" exact component={Register}/>
          <Route path="/Logout" exact component={Logout}/>
          <Route path="/reset" exact component={Reset}/>
          <Route path="/userDetails" exact component={UserDetails}/>
        </Switch>
        <Footer />
      </Router>    
    </div>
  );
}

export default App;