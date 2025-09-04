import Container from "../Container/Container.jsx";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <Container>
      <section className={styles.hero}>
        <div>
          <h1 className={styles.title}>
            Explore the High Seas with Our Luxury Yacht Rentals
          </h1>
          <p className={styles.text}>
            Experience the freedom and luxury of yachting on the open seas.
            Choose from our top-of-the-line yachts and embark on an
            unforgettable journey surrounded by breathtaking views and
            state-of-the-art amenities.
          </p>
          <a href="#rent" className={styles.link}>
            Yacht rental
          </a>
        </div>
      </section>
    </Container>
  );
}
export default Hero;
