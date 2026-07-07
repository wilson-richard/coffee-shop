import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <section className="home">

      <h1>Welcome to CoffeeHub</h1>

      <p>
        Discover freshly brewed coffee, handcrafted beverages, and delicious
        snacks made with love.
      </p>

      <button onClick={() => navigate("/menu")}>
        Explore Menu
      </button>

    </section>
  );
}