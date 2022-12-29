import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { ImHome } from "react-icons/im";
import { MdProductionQuantityLimits} from "react-icons/md";


function Cart() {
  const { cart, setCart } = useStateContext([]);
  const[totalPrice,setTotalPrice]=useState()
  const[totalQty,setTotalQty]=useState()


useEffect(()=>{
const updatedPriceAll= cart.reduce((prev,curr)=>{
  // console.log(prev);
return prev+curr.quantity*curr.price

},0 )
setTotalPrice(updatedPriceAll)


const totQty=cart.reduce((previ,curre)=>{
  return previ+curre.quantity
},0)
setTotalQty(totQty)


},[cart])
console.log(totalPrice);

  const deleteEvent = (id) => {
    const fltr = cart.filter((match) => match.id!== id);
    setCart(fltr);
  };

  const handleIncrement = (id) => { 
  const updatedCart=[...cart]
    setCart(updatedCart=> updatedCart.map((item)=>id===item.id?{...item,quantity:item.quantity+(item.quantity<10?1:0)}:item));
// setTotalPrice(cart.reduce((prev,curr)=> prev+curr))
  };

  const handleDecrement = (select_id) => { 
    const updatedCart=[...cart]
      setCart(updatedCart=> updatedCart.map((item)=>select_id===item.id?{...item,quantity:item.quantity-(item.quantity>1?1:0)}:item));
    };
      
  return (
    <>

< MdProductionQuantityLimits/> {totalQty}<br/>

      <Link to="/">
        Home <ImHome />
      </Link>

      <div>
        Total Price :{totalPrice}
        {  cart && 
        cart.map((select) => {
          return (
            <div key={select.id}>
              {/* <h4>Id: {select.id}</h4> */}
              <h5>Name: {select.name}</h5>
              <h5>Price: {select.price}</h5>
              <h5>Cost: {(select.price)*(select.quantity)}</h5>
              <h5>Author: {select.author}</h5>
              <img className="cart_image" src={select.image} alt="s" />
              <br />
              <div className="qty_div">
                <h5>Quantity: {select.quantity} </h5>
                <button onClick={()=>{handleIncrement(select.id)}}>+</button>
                <button onClick={()=>{handleDecrement(select.id)}}>-</button>
              </div>
              <button
                onClick={() => {deleteEvent(select.id);}}> Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Cart;
