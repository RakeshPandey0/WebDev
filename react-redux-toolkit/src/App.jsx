// import "./App.css";
import NavBar from "./components/AppBar";
import Product from "./components/Product";
import Products from "./Products.json";
function App() {
  return (
    <>
      <NavBar />
      <div
        className="product-card-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 items per row
          gap: "20px", // spacing between items
          padding: "20px", // optional padding
        }}
      >
        {Products.map((product, index) => (
          <div key={index}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
