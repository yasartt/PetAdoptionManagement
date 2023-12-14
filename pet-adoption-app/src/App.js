
import { BrowserRouter as Router, Routes, Route, useLocation }
    from 'react-router-dom';
import Home from './pages';
import Auth from './pages/auth';
import Layout from './pages/layout';
import List from './pages/list';
import Details from './pages/details';
import Profile from './pages/profile';
import AdminM from './pages/adminMain';
import AdminD from './pages/adminDetails';
import ListS from './pages/listShelter';
import ProfileS from './pages/profileShelter';
import DetailsS from './pages/detailsShelter';
import './index.css';
import AddPet from './pages/addPet';
import SelectAppointment from './components/SelectAppointment';


function App() {
  return (
    <div className="App">

        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='/auth' element={<Auth />} />
                  <Route path='/list' element={<List />} />
                  <Route path='/details' element={<Details />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/adminMain' element={<AdminM />} />
                  <Route path='/adminDetails' element={<AdminD />} />
                  <Route path='/listShelter' element={<ListS />} />
                  <Route path='/profileShelter' element={<ProfileS />} />
                  <Route path='/detailsShelter' element={<DetailsS />} />
                  <Route path='/addPet' element={<AddPet />} />
                  <Route path='/selectAppointment' element={<SelectAppointment/>} />
                </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
