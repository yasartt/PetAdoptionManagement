//import './App.css';
import {Link } from "react-router-dom";
import davsan from './../davsan.jpeg';


function ListS() {
  return (
    <div className="flex flex-col items-center space-y-5">

        <p className="mt-5">Welcome:</p>
        <p>List of Animals</p>

        <div className="flex flex-row bg-bunny-100 border-2 border-bunny-400 rounded-xl m-4">
            <img src={davsan} alt="Davsan" className="w-1/4 rounded-l-lg overflow-clip"/>
            <div className="flex flex-col space-y-1 w-2/4 m-2 text-white justify-evenly">
                <p className="bg-bunny-400 rounded-lg p-1">Name:</p>
                <p className="bg-bunny-400 rounded-lg p-1">Type:</p>
                <div className="flex flex-row space-x-2 justify-around">
                    <p className="bg-bunny-400 rounded-lg p-1">Age:</p>
                    <p className="bg-bunny-400 rounded-lg p-1">Sex:</p>
                </div>                

            </div>
            <p className="bg-bunny-400 rounded-lg w-1/4 m-2 text-white p-1">Address:</p>

        </div>
        <div className="fixed z-50 flex flex-row justify-center bottom-10 inset-x-0 space-x-16 ml-24">
                <div className="bg-bunny-300 rounded-lg text-white p-3 border-2 border-bunny-400">+ Add Pet</div>
        </div>
    </div>
  );
}

export default ListS;
