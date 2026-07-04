import Card from 'react-bootstrap/Card';

export default function Menu() {
    const menuItems = [
        { name: 'Espresso', image:'/img1.jpg', price: '$3' },
        { name: 'Cappuccino', image:'/img2.jpg', price: '$4' },
        { name: 'Latte', image:'/img3.jpg', price: '$4.5' },
        { name: 'Mocha', image:'/img4.jpg', price: '$5' },
    ];
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <div className="menu-items">
                {menuItems.map((item, index) => (
                    <Card key={index} className="menu-item">
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                <strong>{item.price}</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
