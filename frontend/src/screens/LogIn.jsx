import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Header from '../components/Header';
const LogIn = () => {
  let navigate=useNavigate();
    const [credentials,setCredentials]=useState({email:'',password:''});
  
  
    function onChange(event){
        setCredentials({...credentials,[event.target.name]:event.target.value});
    }
  
    const handleSubmit=async (e)=>{
        e.preventDefault();
        let data=await fetch("https://g-foodie.vercel.app/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json=await data.json();
        console.log(json);

        if(!json.sucess) {
            alert("Enter Valid credential");
        }
        if(json.sucess){
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate("/")
        }

    }
  
  
    return (
        <>
        <Header />
    <div className="h-[100vh] w-[100%] flex flex-col items-center p-2 mt-20 ">
       <div className="text-[green] text-[30px]">Please Enter Your Credentails</div>
       
       <form onSubmit={handleSubmit} className="w-[40%] flex flex-col gap-4">
        <div className="flex flex-col ">
            <label className="text-[18px]">Email:</label>
            <input type="email" name='email' value={credentials.email} onChange={onChange} p-4 placeholder="Email Address" className="p-2 border-[2px] border-[grey] rounded-xl shadow-lg focus:shadow-[grey]"></input>
        </div>
        <div className="flex flex-col">
            <label className="text-[18px]">Password:</label>
            <input type="password" name='password' value={credentials.password} onChange={onChange} placeholder="Password" className="p-2 border-[2px] border-[grey] rounded-xl shadow-lg focus:shadow-[grey]"></input>
        </div>
        <button type="submit" className="bg-[green] p-2 w-[100%] mt-5 rounded-xl text-[white] font-extrabold">Login</button>
       </form>
      
    </div>
    </>
  )
}

export default LogIn