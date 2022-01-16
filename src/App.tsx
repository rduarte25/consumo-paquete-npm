import "./App.css";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "radm-product-card";

function App() {
  const product = {
    id: "1",
    title: "Coffee Mug - Card",
    image: "./coffee-mug.png",
  };
  return (
    <div className="App App-header">
      <ProductCard
        product={product}
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({
          handleReset,
          handleIncrease,
          count,
          isMaxCountReached,
          maxCount,
        }) => (
          <>
            <ProductImage image={product.image} />
            <ProductTitle title={product.title} />
            <ProductButtons />
            {count}
            <button onClick={() => handleReset()}>Reset</button>
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default App;
