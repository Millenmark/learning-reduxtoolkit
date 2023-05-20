import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addToCart, removeFromCart } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { products, cart, total } = useSelector((state) => state.xxx);

  const handlePurchase = (e) => {
    let name = e.target.options[e.target.selectedIndex].text;
    let price = parseFloat(e.target.value);
    let itemObj = { name, price };
    dispatch(addToCart(itemObj));
  };

  const handleDelete = (index, price) => {
    let deleteItem = { index, price };
    dispatch(removeFromCart(deleteItem));
  };

  return (
    <>
      <div>
        <h1>Products</h1>
        <select onChange={(e) => handlePurchase(e)}>
          {products.map((product, index) => (
            <option key={index} value={product.price}>
              {product.name}: ${product.price}
            </option>
          ))}
        </select>
        <hr />
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <li
            key={index}
            onClick={() => handleDelete(index, item.price)}
            style={{ cursor: "pointer" }}
          >
            {item.name}
          </li>
        ))}
        <hr />
        <h2>Total</h2>
        <p>{total}</p>
      </div>
    </>
  );
}

export default App;
