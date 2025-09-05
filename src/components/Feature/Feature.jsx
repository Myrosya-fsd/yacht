import Container from "../Container/Container.jsx";
import styles from "./Feature.module.css";

function Feature() {
  return (
    <>
      <Container>
        <section className={styles.feature}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.number}>01</p>
              <hr className={styles.typeDivider} />
              <p className={styles.text}>
                Swimming and water sports: try your hand at water skiing
              </p>
            </li>
            <li className={styles.item}>
              <p className={styles.number}>02</p>
              <hr className={styles.typeDivider} />
              <p className={styles.text}>
                Fishing: try to catch your own dinner
              </p>
            </li>
            <li className={styles.item}>
              <p className={styles.number}>03</p>
              <hr className={styles.typeDivider} />
              <p className={styles.text}>
                Sightseeing tours: take a shore or island tour, enjoy the views
                and sunsets from the water
              </p>
            </li>
            <li className={styles.item}>
              <p className={styles.number}>04</p>
              <hr className={styles.typeDivider} />
              <p className={styles.text}>
                Rest and relaxation: read a book or listen to music while
                enjoying the outdoor atmosphere.
              </p>
            </li>
          </ul>
          <picture className={styles.img}>
            <source
              srcSet="
             /feature/Photo_1440_1x_.jpg 1x,
             /feature/Photo_1440_2x_.jpg 2x
               "
              media="(min-width: 1440px)"
            />
            <source
              srcSet="
             /feature/Photo_1280_1x_.jpg 1x,
             /feature/Photo_1280_2x_.jpg 2x
               "
              media="(min-width: 1280px)"
            />
            <source
              srcSet="
             /feature/Photo_tab_1x_.jpg 1x,
             /feature/Photo_tab_2x_.jpg 2x
              "
              media="(min-width: 768px)"
            />
            <source
              srcSet="
             /feature/Photo_mob_1x_.jpg 1x,
             /feature/Photo_mob_2x_.jpg  2x
               "
              media="(max-width: 767px)"
            />
            <img
              className={styles.img}
              src="/feature/Photo_1440_1x_.jpg"
              alt="Yacht"
            />
          </picture>
        </section>
      </Container>
    </>
  );
}

export default Feature;
