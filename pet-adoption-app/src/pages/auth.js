import { useState,useEffect } from 'react';
import logo from './../rabbit.png';

function Auth() {
    const [isLogin,setLogin] = useState(true);
    const [acc,setAcc] = useState(0)

    const [addrtype, setAddrtype] = useState(["Adopter", "Shelter"])
    const Add = addrtype.map(Add => Add
    )
    const handleAddrTypeChange = (e) => setAcc(e.target.value)

    useEffect(() => {
        setAcc(0)
      }, [isLogin]);

  return (
    <div className="Auth">
        <div className="flex flex-col justify-center items-center space-y-4">

        <img src={logo} alt="Davsan" className="overflow-visible ml-1 z-50 h-24 p-2"/>

            <div className="flex flex-row mt-5">
                {!isLogin && (<button onClick={() => setLogin(true)} className="bg-bunny-200 px-3 py-1 rounded-2xl text-white mr-5">Login</button>)}
                {isLogin && (<button  className="bg-bunny-300 px-3 py-1 rounded-2xl text-white mr-5">Login</button>)}
                {isLogin && (<button onClick={() => setLogin(false)} className="bg-bunny-200 px-3 py-1 rounded-2xl text-white ml-5">Register</button>)}
                {!isLogin && (<button className="bg-bunny-300 px-3 py-1 rounded-2xl text-white ml-5">Register</button>)}

            </div>

            {!isLogin && (
            < select
                onChange={e => handleAddrTypeChange(e)}
                className="border-2 rounded-lg border-slate-800 p-1" >
                {
                    Add.map((address, key) => <option value={key}>{address}</option>)
                }
            </select >)}
            
            {isLogin && (<p>Sign in to your account</p>)}
            {!isLogin && (<p>Sign up for {addrtype[acc]} account</p>)}
            <div className="flex flex-col justify-center space-y-3">
                <form className="flex flex-col items-center">
                    <label className="self-start text-sm">Username:</label>
                    <input  className="rounded-lg bg-bunny-100 p-1"  type="text"/> 
                </form>
                <form className="flex flex-col items-center">
                    <label className="self-start text-sm">Password:</label>
                    <input  className="rounded-lg bg-bunny-100 p-1" type="password"/> 
                </form>

            </div>
            {isLogin && (
            <div className="p-3 bg-bunny-400 rounded-2xl text-white">Login</div>
            )}
            {!isLogin && (
            <div className="p-3 bg-bunny-400 rounded-2xl text-white">Register</div>
            )}
            


        </div>
    </div>
  );
}

export default Auth;
