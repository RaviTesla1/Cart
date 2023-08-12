import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice.";


const Products = () => {
    const dispatch = useDispatch();

  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [list]);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");

    const json = await data.json();
    setList(json);
  };

  const addToCart = (product) =>{
    dispatch(add(product))
  }

  const Cards = list.map((product) => (
    <div className="col-md-3"   style={{marginBottom:"24px"}}>
      <Card className="h-100"  key={product.id}>
        <div className="text-center  pt-3">
          <Card.Img
            variant="top"
            src={product?.image}
            style={{ width: "130px", height: "100px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR : {product.price}</Card.Text>
          <div className="text-center">
            <Button variant="primary"   onClick={()=> addToCart(product)}>Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1  style={{textAlign:"center"}}>Products Dashboard</h1>
      <div className="row">{Cards}</div>
    </div>
  );
};

export default Products;
