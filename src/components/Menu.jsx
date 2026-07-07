import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Menu() {

  const menuItems = [
    {
      name: "Espresso",
      image: "/img1.jpg",
      price: "$3",
      description: "Rich espresso with bold flavor."
    },
    {
      name: "Cappuccino",
      image: "/img2.jpg",
      price: "$4",
      description: "Creamy milk foam with espresso."
    },
    {
      name: "Latte",
      image: "/img3.jpg",
      price: "$4.5",
      description: "Smooth milk blended with coffee."
    },
    {
      name: "Mocha",
      image: "/img4.jpg",
      price: "$5",
      description: "Chocolate flavored coffee delight."
    }
  ];

  return (

    <section className="menu">

      <h2>Our Menu</h2>

      <div className="menu-items">

        {menuItems.map((item,index)=>(

          <Card key={index} className="menu-item">

            <Card.Img
              variant="top"
              src={item.image}
            />

            <Card.Body>

              <Card.Title>{item.name}</Card.Title>

              <Card.Text className="card-description">
                {item.description}
              </Card.Text>

              <Card.Text>
                <h3>Price: {item.price}</h3>
              </Card.Text>

            </Card.Body>

          </Card>

        ))}

      </div>

    </section>

  );
}