import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./Reducers/Product-reducers";

function Products() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app);

  useEffect(() => {
    let getData = async () => {
      try {
        let ProductRes = await axios.get(
          "https://659ca3b9633f9aee7907c3bc.mockapi.io/products"
        );
        dispatch(setProducts(ProductRes.data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(data.products);
  return (
    <div className="row">
      {data.products.map((dt) => {
        return (
          <div className="col-lg-4 mt-4">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={dt.image}
                class="card-img-top"
                alt="..."
                style={{ height: "300px" }}
              />
              <div class="card-body">
                <h5 class="card-title">{dt.name}</h5>
                <p class="card-text">{dt.price}</p>
                <a href="#" class="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
