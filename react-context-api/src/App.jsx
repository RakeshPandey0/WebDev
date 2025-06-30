import "./App.css";
import { Item } from "./components/Item";
import { Cart } from "./components/Cart";
function App() {
  return (
    <>
      <Item name="MacBook" price={1000} />
      <Item name="Iphone" price={2000} />
      <Item name="Watch" price={3000} />

      <h2>Cart</h2>
      <Cart />
    </>
  );
}

export default App;
