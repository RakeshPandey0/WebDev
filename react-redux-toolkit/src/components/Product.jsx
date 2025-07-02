import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function Product(props) {
  const dispatch = useDispatch();
  return (
    <Card
      style={{
        margin: "5px",
        border: "solid 0.5px",
        borderRadius: "5px",
        padding: "3px",
      }}
    >
      <Card.Img variant="top" alt="image here" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}<br/>
          ${props.price}
        </Card.Text>
        <Button
          onClick={(e) =>
            dispatch(addItem({ title: props.title, price: props.price }))
          }
          variant="primary"
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
