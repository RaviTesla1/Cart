// import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
// import { useSearchParams } from "react-router-dom"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch,useSelector} from "react-redux";
import { remove } from "../store/cartSlice.";




const Cart = () => {
    const product = useSelector(state => state.cart)

    const dispatch = useDispatch();

   const removeCart = (id) =>{
       dispatch(remove(id));
   }
  

    const Cards = product.map((product) => (
        <div className="col-md-12"   style={{marginBottom:"24px"}}>
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
                <Button variant="primary"  className="btn btn-danger"  onClick={ ()=> removeCart(product.id)}>Remove </Button>
              </div>

            </Card.Body>

                    <Card.Body>
                    
             </Card.Body>
           
          </Card>

          
        </div>
      ));




  return (
    <>
    <div   className="row">
        {Cards}
    </div>
   
    </>
  )
}

export default Cart