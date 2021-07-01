import "./App.css";
import React from "react";
import Products from "./produtos/Products";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const [isAll, setIsAll] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  const handleProduct = async (product) => {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${product}`
    );
    const json = await response.json();
    setProduct(json);
    setLoading(false);
    setIsAll(false);
  };

  return (
    <div className="all">
      <div className="menu">
        <div className="title">
          <span>Meus Produtos</span>
        </div>
        <div className="options">
          <span className="tablet" onClick={() => handleProduct("tablet")}>
            TABLET
          </span>
          <span
            className="smartphone"
            onClick={() => handleProduct("smartphone")}
          >
            SMARTPHONE
          </span>
          <span className="notebook" onClick={() => handleProduct("notebook")}>
            NOTEBOOK
          </span>
        </div>
      </div>

      <div className="prod">
        {(product || products.length > 0) && (
          <Products product={product} products={products} isAll={isAll} />
        )}
        {loading && <p>Carregando...</p>}
      </div>
    </div>
  );
}

export default App;
