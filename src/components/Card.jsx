import React, { useState,useRef, useEffect } from "react";
import { useDispatchCart,useCart } from "./ContextReducer";
//import { useNavigate } from "react-router-dom";
export default function Card(props) {
 let dispatch=useDispatchCart();
 let data=useCart();
 //let navigate=useNavigate();
 const priceRef=useRef()
  let options=props.options;
  let priceOptions=Object.keys(options)
  //let foodItem=props.foodItems;
  const [qty,setQty]=useState(1);
  const[size,setSize]=useState("");

  const handleAddToCart=async()=>{
    let food=[]
    for (const item of data){
      if(item.id===props.foodItem._id){
        food=item
        break;
      }

    }
    if(food!==[]){
      if(food.size===size){
        await dispatch({type:"UPDATE",id:props.foodItem._id,qty:qty,price:finalPrice})
      
        return;

      }
    else if((food.size)!==size){
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    return
   // console.log(data)
    }
    return
  }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
  }  
  let finalPrice=qty*parseInt(options[size])
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <div>
      <div class="card m-3 p-3  " style={{ width: "18rem", maxHeight: "460px" }}>
        <img src={props.foodItem.img} class="card-img-top" alt="..."  style={{height:"150px",objectFit:"fill"}}/>
        <div class="card-body">
          <h5 class="card-title">{props.foodItem.name}</h5>
          {/* <p class="card-text">{props.desc}</p> */}
          <div className="container w-100  ">
            <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
              {priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>;
              })}
            </select>

            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr>
          </hr>
          <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}























//useRef is used to change the dom element
//here it is used in the dropdown section of the select quantity button (1,2,3,...)
//useState re-renders the component whereas useRef does not re-render the component
