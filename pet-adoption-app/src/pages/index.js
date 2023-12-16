//import './App.css';
import {Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
        <Link to="/auth">Auth</Link>
    </div>
  );
}

export default Home;
