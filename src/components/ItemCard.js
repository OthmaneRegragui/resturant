import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "../styles/ItemCard.css";
function ItemCard({ idx, name, image, description, price }) {
  return (
    <Col>
      <Card className="cardItem" key={idx}>
        <Card.Img height={300} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button className="buttonCard" size="lg" rows={3} >{price}</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}
export default ItemCard;
