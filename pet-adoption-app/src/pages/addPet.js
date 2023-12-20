//import './App.css';
import {Link } from "react-router-dom";
import davsan from './../davsan.jpeg';
import React, { useState } from 'react';
import axios from 'axios';



function AddPet() {
    const [formData, setFormData] = useState({
        petPhoto: null,
        name: '',
        age: '',
        breed: '',
        gender: '',
        status: '', // aciklama
        isAvailable: false,
        photoId: '',
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.name === 'petPhoto' ? e.target.files[0] : e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        axios.post('https://localhost:7073/api/Pet/AddPet', formData).then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    };
  return (
    <div className="flex flex-col items-center">

       <div className="flex flex-row m-5 space-x-4">

            <div className="flex flex-col w-1/2 space-y-2 bg-bunny-100 rounded-lg p-2 items-center">
                <div className="flex flex-col items-center">
                    <p>Upload Pet Photo</p>
                    <p className="text-7xl mt-12">+</p>
                </div>
            </div>

            <div className="flex flex-col w-1/2 space-y-2 items-center">
                <form className="flex flex-col items-center">
                    <label className="self-start text-sm">Pet name: </label>
                    <input  
                    type="text"
                    name="petName"
                    value={formData.petName}
                    className="rounded-lg bg-bunny-100 p-1"  
                    /> 
                </form>
                <form className="flex flex-col items-center">
                    <label className="self-start tex    t-sm">Age:</label>
                    <input  
                    type="number"
                    name="petAge"
                    value={formData.petAge}
                    onChange={handleInputChange}
                    className="rounded-lg bg-bunny-100 p-1"/> 
                </form>

                <div className="flex flex-col items-start">
                    <label for="animals" className="text-sm">Select Type:</label>
                    <select name="animals" id="animals" className="bg-bunny-100 p-1 rounded-lg">
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rat">Rat</option>
                    <option value="shark">Shark</option>
                    </select>
                </div>

                <div className="flex flex-col items-center">
                    <label for="sex" className="text-sm">Select Sex:</label>
                    <select name="sex" id="sex" className="bg-bunny-100 p-1 rounded-lg">
                    <option value="cu">LGBTQ Pro Max Plus</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                </div>
                
            
            </div>


       </div>
       <p className="bg-bunny-100 rounded-lg w-11/12 p-3 h-32">Information about pet</p>

       <div className="fixed z-50 flex flex-row justify-center bottom-10 inset-x-0 space-x-16 ml-24">
                <div className="bg-green-600 rounded-lg text-white p-3 ">Add Animal</div>
                <Link to="/listShelter" className="bg-red-600 rounded-lg text-white p-3  ">Cancel</Link>
        </div>

    </div>
  );
}

export default AddPet;
