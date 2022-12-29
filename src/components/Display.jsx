import { useStateContext } from "../context/StateContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import "./book-store.css"
import { AiOutlineShoppingCart} from 'react-icons/ai'


function Display() {
const { showbooks, setShowbook, cart, setCart } = useStateContext();
  // console.log(cart);

  const addedCart = (Kitab) => {
    const index = cart.findIndex((book) => book.id === Kitab.id);
    // console.log(index);

    if (index === -1) {
      const updateCart = cart.concat({ ...Kitab, quantity: 1 });
      setCart(updateCart);
    } else {
      cart[index].quantity += 1;
      const updateCart = [...cart];
      setCart(updateCart);
    }

    
  };

  return (
    <div className="main-disp">

<div>   
      <Link to="/cart"> Cart<AiOutlineShoppingCart/></Link>

      {showbooks &&
        showbooks.map((Kitab) => {
          return (
            <div key={Kitab.id}>
              <h2>Id: {Kitab.id}</h2>
              <h5>Name: {Kitab.name}</h5>
              <h5>Price: {Kitab.price}</h5>
              <h5>Author: {Kitab.author}</h5>
              <img src={Kitab.image} alt="s"  />
              <br />
              <button onClick={() => addedCart(Kitab)}>Add To Cart</button>
              {/* <button onClick={()=>console.log(Kitab)}>Add To Cart</button> */}
            </div>
          );
        })}
        </div>

<div className="main-disp-sub">       

<Cart/>


  </div>

    </div>
  );
}

export default Display;
