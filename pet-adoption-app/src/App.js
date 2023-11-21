import { BrowserRouter as Router, Routes, Route, useLocation }
    from 'react-router-dom';
import Home from './pages';
import Auth from './pages/auth';
import Layout from './pages/layout';
import './index.css';


function App() {
  return (
    <div className="App">

        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='/auth' element={<Auth />} />
                </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
