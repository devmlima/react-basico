import React from "react";
import "./Products.css";
function Products({ product, products, isAll }) {
  console.log(products);
  return (
    <div>
      <div className="container">
        {isAll &&
          products.map((p) => {
            return (
              <div>
                <h1>{p.nome}</h1>
                <p>R$ {p.preco}</p>
                <img src={p.fotos[0].src} alt={p.fotos[0].titulo} />
              </div>
            );
          })}
      </div>

      <div>
        {!isAll && (
          <div>
            <h1>{product.nome}</h1>
            <p>R$ {product.preco}</p>
            <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
