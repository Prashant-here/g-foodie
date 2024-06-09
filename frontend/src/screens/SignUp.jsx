import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';

const SignUp = () => {
   const [credentials,setCredentials]=useState({ name:'',email:'',password:'',location:''});
  
   const handleSubmit= async (e)=>{
    e.preventDefault();
    const response=await fetch("https://g-foodie.vercel.app/api/createuser", {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
    })
    const json= await response.json();
    console.log(json);
     
    if(!json.sucess){
        alert("Enter valid Credentials");
    }
    else{
        alert("Account Created Successfully");
    }


   }
  



   function onChange(event){
    setCredentials({...credentials,[event.target.name]:event.target.value});
   }



   
  
  
  
  
    return (
       <>

<Header />
    <div className="h-[80vh] w-[100%] flex items-center justify-center ">
    
    <div className="w-[50%] flex flex-col bg-[#fffffff9]">
    <div className="text-[40px] text-[green] p-10 text-center">Hi! Create Your Account</div>
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
       <label className="text-[18px]">Name:</label>
       <input type="text" placeholder="Name" name='name' value={credentials.name}
       onChange={onChange}
       className="p-2 border-[2px] border-[grey] rounded-xl shadow-lg focus:shadow-[grey]"></input>
       <label className="text-[18px]">Email:</label>
       <input type="email" placeholder="Email" name='email' value={credentials.email} onChange={onChange} className="p-2 border-[2px] border-[grey] rounded-xl shadow-lg focus:shadow-[grey]"></input>
       <label className="text-[18px]">Password:</label>
       <input type="password" placeholder="Password" name='password' value={credentials.password} onChange={onChange} className="p-2 border-[2px] border-[grey] rounded-xl shadow-lg focus:shadow-[grey]"></input>
       <label className="text-[18px]">Address:</label>
       <input type="text" placeholder="Address" name='location' value={credentials.location} onChange={onChange} className="p-2 border-[2px] border-[grey] rounded-xl shadow-lg focus:shadow-[grey]"></input>
       <button type="submit" className="bg-[green] text-[white] p-2 mt-2" 
       >Sign Up</button>
       </form>
       
       <Link to="/login"><div className="text-[blue] text-[18px]">Already a User?</div></Link>
       </div>
    </div>
    </> 
  )
}

export default SignUp