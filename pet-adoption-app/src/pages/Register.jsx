import { useState,useEffect } from 'react';
import logo from './../rabbit.png';
import axios from 'axios';

function Register({accIndex}) {
    
    const [formData0, setFormData0] = useState({
        name: '',
        address: '',
        age: '', // Only for accIndex == 0
        //location: '', // Only for accIndex == 2
        //specialization: '', // Only for accIndex == 2
        username: '',
        password: ''
    });

    const handleChange0 = (e) => {
        setFormData0({
            ...formData0,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit0 = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to a server or API
        console.log('Form Data:', formData0);

        axios.post('https://localhost:7073/api/User/RegisterAdopter', formData0).then(response => {

        });
        

    };
    const [formData1, setFormData1] = useState({
        name: '',
        address: '',
        username: '',
        password: ''
    });

    const handleChange1 = (e) => {
        setFormData1({
            ...formData1,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit1 = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData1);
        // Add your form submission logic here
        axios.post('https://localhost:7073/api/User/RegisterVet', formData1).then(response => {

        });

    };
    const [formData2, setFormData2] = useState({
        name: '',
        location: '',
        specialization: '',
        username: '',
        password: ''
    });

    const handleChange2 = (e) => {
        setFormData2({
            ...formData2,
            [e.target.name]: e.target.value
        });
        

    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData2);
        axios.post('https://localhost:7073/api/User/RegisterVet', formData2).then(response => {

        });
        // Add your form submission logic here
    };

  return (
    <div className="Auth">
        <div className="flex flex-col justify-center items-center space-y-4">

        
            
            <div className="flex flex-col justify-center space-y-3">
                {(accIndex == 0) && (
                <form className="flex flex-col items-center" onSubmit={handleSubmit0}>
                <label className="self-start text-sm">Name:</label>
                <input
                    className="rounded-lg bg-bunny-100 p-1"
                    type="text"
                    name="name"
                    value={formData0.name}
                    onChange={handleChange0}
                    placeholder="Name"
                />

                <label className="self-start text-sm">Address:</label>
                <input
                    className="rounded-lg bg-bunny-100 p-1"
                    type="text"
                    name="address"
                    value={formData0.address}
                    onChange={handleChange0}
                    placeholder="Address"
                />

                <label className="self-start text-sm">Age:</label>
                <input
                    className="rounded-lg bg-bunny-100 p-1"
                    type="number"
                    name="age"
                    value={formData0.age}
                    onChange={handleChange0}
                    placeholder="Age"
                />

                <label className="self-start text-sm">Username:</label>
                <input
                    className="rounded-lg bg-bunny-100 p-1"
                    type="text"
                    name="username"
                    value={formData0.username}
                    onChange={handleChange0}
                    placeholder="Username"
                />

                <label className="self-start text-sm">Password:</label>
                <input
                    className="rounded-lg bg-bunny-100 p-1"
                    type="password"
                    name="password"
                    value={formData0.password}
                    onChange={handleChange0}
                    placeholder="Password"
                />

                <button
                    className="p-3 bg-bunny-400 rounded-2xl text-white cursor-pointer"
                    type="submit"
                >
                    Sign Up
                </button>
            </form>
                )}

            {(accIndex == 1) && (
                <form className="flex flex-col items-center" onSubmit={handleSubmit1}>
                    <label className="self-start text-sm">Name:</label>
                    <input
                        className="rounded-lg bg-bunny-100 p-1"
                        type="text"
                        name="name"
                        value={formData1.name}
                        onChange={handleChange1}
                        placeholder="Name"
                    />

                    <label className="self-start text-sm">Address:</label>
                    <input
                        className="rounded-lg bg-bunny-100 p-1"
                        type="text"
                        name="address"
                        value={formData1.address}
                        onChange={handleChange1}
                        placeholder="Address"
                    />

                    <label className="self-start text-sm">Username:</label>
                    <input
                        className="rounded-lg bg-bunny-100 p-1"
                        type="text"
                        name="username"
                        value={formData1.username}
                        onChange={handleChange1}
                        placeholder="Username"
                    />

                    <label className="self-start text-sm">Password:</label>
                    <input
                        className="rounded-lg bg-bunny-100 p-1"
                        type="password"
                        name="password"
                        value={formData1.password}
                        onChange={handleChange1}
                        placeholder="Password"
                    />

                    <button
                        className="p-3 bg-bunny-400 rounded-2xl text-white cursor-pointer"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
                )}

                {(accIndex == 2) && (
                    //name location spezilization username passowrd
                    <form className="flex flex-col items-center" onSubmit={handleSubmit2}>
                    <label className="self-start text-sm">Name:</label>
                    <input
                        className="rounded-lg bg-bunny-100 p-1"
                        type="text"
                        name="name"
                        value={formData2.name}
                        onChange={handleChange2}
                        placeholder="Name"
                    />

                    <label className="self-start text-sm">Location:</label>
                    <input
                        className="rounded-lg bg-bunny-100 p-1"
                        type="text"
                        name="location"
                        value={formData2.location}
                        onChange={handleChange2}
                        placeholder="Location"
                    />

                    <label className="self-start text-sm">Specialization:</label>
                    <input
                        className="rounded-lg bg-bunny-100 p-1"
                        type="text"
                        name="specialization"
                        value={formData2.specialization}
                        onChange={handleChange2}
                        placeholder="Specialization"
                    />

                    <label className="self-start text-sm">Username:</label>
                    <input
                        className="rounded-lg bg-bunny-100 p-1"
                        type="text"
                        name="username"
                        value={formData2.username}
                        onChange={handleChange2}
                        placeholder="Username"
                    />

                    <label className="self-start text-sm">Password:</label>
                    <input
                        className="rounded-lg bg-bunny-100 p-1"
                        type="password"
                        name="password"
                        value={formData2.password}
                        onChange={handleChange2}
                        placeholder="Password"
                    />

                    <button
                        className="p-3 bg-bunny-400 rounded-2xl text-white cursor-pointer"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
                )}
            </div>
        </div>
    </div>                    
    )

}

export default Register;
