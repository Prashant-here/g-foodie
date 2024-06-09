import React, { useState } from 'react'
import foodC1 from '../assets/foodC1.jpg'
import { useDispatchCart,useCart } from './ContextReducer';







const Card = ({foodItem,options}) => {
  
  
    let dispatch=useDispatchCart();
    let toptions=options;
    let Poptions=Object.keys(toptions);
    let foodItems=foodItem
    const [qty,setQty]=useState(1);
    const [size,setSize]=useState("half");
    
    let finalprice=qty*parseInt(options[size]);



    const handleAddtoCart=async ()=>{
           await dispatch({type:"ADD",id:foodItem._id,name:foodItem.name,img:foodItem.img,price:finalprice,qty:qty,size:size});
           console.log(data);
    }
    let data=useCart();



    return (



    <div className=" mt-10 ml-10 h-[60vh] w-[80%] border-[2px]  flex flex-col gap-2 rounded-md shadow-xl">
        <div className="h-[32vh]  "><img src={foodItem.img} className="h-[30vh] w-[100%]" w></img></div>
        <div className="text-[#463be6] text-[18px] font-extrabold p-4">{foodItem.name}</div>
        <div className=" flex flex-row gap-3 mt-1"> 
            <select className=" px-4 bg-[#a5fdfd] mx-4" onChange={(e)=>setQty(e.target.value)}>
                <option key={1}>1</option>
                <option  key={2}>2</option>
                <option  key={3}>2</option>
                <option key={4}>3</option>
                <option key={5}>4</option>
                <option key={6}>5</option>
                <option key={7}>6</option>
                <option key={8}>7</option>
            </select>
            <select className="px-4 py-1 bg-[#aef0f0]" onChange={(e)=>setSize(e.target.value)}>
               {
                Poptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
               })
               }
            </select>
            </div>
            <div>Rs{finalprice}/-</div>
            <div className="px-4"><hr></hr></div>
            <button className="bg-[green] hover:bg-[#084308] text-[white] font-extrabold w-fit p-2 rounded-sm mx-2" onClick={handleAddtoCart}>Add to Cart</button>
        
    </div>
  )
}

export default Card