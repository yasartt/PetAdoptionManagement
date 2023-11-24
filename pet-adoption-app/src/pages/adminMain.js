//import './App.css';
import {Link } from "react-router-dom";
import davsan from './../davsan.jpeg';


function AdminM() {
  return (
    <div className="flex flex-col items-center space-y-3">
        <p className="mt-5">Welcome: </p>
        <p>Waiting Applications:</p>
        <Link to="/adminDetails" className="flex flex-row bg-bunny-100 rounded-lg border-2 border-bunny-300 w-1/2 justify-between">
            <div className="flex flex-col p-2 w-3/4text-left">
                <p>Adopter Name: </p>
                <p>Pet Name: </p>
                <p>Shelter Name: </p>
            </div>
            <div className="flex bg-bunny-400 rounded-r-sm w-1/4 items-center justify-center text-white">CU</div>
        </Link>
        
    </div>
  );
}

export default AdminM;
