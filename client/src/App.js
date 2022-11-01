import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import PostEmployee from './components/postEmployee/PostEmployee';
import GetAllEmployees from './components/getAllEmployees/GetAllEmployees';
import Home from './components/home/Home';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/post-employee"> Post employee </Link>
        <Link to="get-all-employees"> Get all employees </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/post-employee" element={<PostEmployee />}/>
        <Route path="/get-all-employees" element={<GetAllEmployees />}/>
      </Routes>
    </Router>


    // <div className="App">
    //   <PostEmployee />
      
    // </div>
  );
}

export default App;
