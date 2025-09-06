import Container from "../Container/Container.jsx";
import styles from "./Reviews.module.css";

function Reviews() {
  return (
    <>
      <Container>
        <section className={styles.reviews}>
          <h2 className={styles.title}>
            YachtJet take pride in providing the best possible service and
            experience to our customers
          </h2>
          <p className={styles.text}>
            Our customers have enjoyed unforgettable moments on our yachts.
            Don't just take our word for it - read on to find out what they have
            to say about their journey with us.
          </p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img
                className={styles.card}
                srcset="./reviews/image_1_1x.png 1x, ./reviews/image_1_2x.png 2x"
                src="./reviews/image_1_1x"
                alt="yang man"
                width="56"
              />
              <h3 className={styles.name}>John Wax</h3>
              <p className={styles.textReview}>
                I rented the Lagoon 620 with my family for a week-long vacation
                and it was the best decision ever. The yacht was spacious,
                comfortable, and luxurious, and the crew took care of
                everything.
              </p>
            </li>
            <li className={styles.item}>
              <img
                className={styles.card}
                srcset="./reviews/image_2_1x.png 1x, ./reviews/image_2_2x.png 2x"
                src="./reviews/image_2_1x"
                alt="yang man"
                width="56"
              />
              <h3 className={styles.name}>Victoria Romashenko</h3>
              <p className={styles.textReview}>
                The Sunseeker Manhattan 66 was the perfect choice for our
                romantic getaway. The yacht was beautifully designed, with all
                the amenities we needed, and the crew was attentive and
                friendly.
              </p>
            </li>
            <li className={styles.item}>
              <img
                className={styles.card}
                srcset="./reviews/image_3_1x.png 1x, ./reviews/image_3_2x.png 2x"
                src="./reviews/image_3_1x"
                alt="yang man"
                width="56"
              />
              <h3 className={styles.name}>Ihor Trachuk</h3>
              <p className={styles.textReview}>
                The Azimut 80 was the most luxurious yacht I've ever been on.
                The cabins were spacious and elegant, and the outdoor areas were
                perfect for relaxing and entertaining. Worth every penny!
              </p>
            </li>
          </ul>
        </section>
      </Container>
    </>
  );
}
export default Reviews;
