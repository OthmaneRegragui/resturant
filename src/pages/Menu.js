import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import ItemCard from "../components/ItemCard";
import products from "../assets/menu/json/data.json";

function Menu() {
  return (
    <Card>
      <Card.Header>Menu</Card.Header>
      <Card.Body>
        <Row xs={1} md={4} className="g-4">
          {products.map((p) => (
            <ItemCard
              key={crypto.randomUUID()}
              idx={p.idx}
              name={p.name}
              image={p.image}
              description={p.description}
              price={p.price}
            />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}
export default Menu;
