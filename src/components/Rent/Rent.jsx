import Container from "../Container/Container.jsx";
import styles from "./Rent.module.css";
import MyForm from "../MyForm/MyForm.jsx";

function Rent() {
  return (
    <>
      <Container>
        <section id="rent" className={styles.rent}>
          <div className={styles.partRent}>
            <h2 className={styles.title}>Rent a yacht now</h2>
            <MyForm />
          </div>
          <picture className={styles.img}>
            <source
              srcSet="
                     /rent/Photo_1440_1x__.png 1x,
                     /rent/Photo_1440_2x__.png 2x
                       "
              media="(min-width: 1440px)"
            />
            <source
              srcSet="
                     /rent/Photo_1280_1x__.png 1x,
                     /rent/Photo_1280_2x__.png 2x
                       "
              media="(min-width: 1280px)"
            />
            <source
              srcSet="
                     /rent/Photo_tab_1x__.jpg 1x,
                     /rent/Photo_tab_2x__.jpg 2x
                      "
              media="(min-width: 768px)"
            />
            <source
              srcSet="
                     /rent/Photo_mob_1x__.jpg 1x,
                     /rent/Photo_mob_2x__.jpg  2x
                       "
              media="(max-width: 767px)"
            />
            <img
              className={styles.img}
              src="/rent/Photo_1440_1x__.png"
              alt="Yacht"
            />
          </picture>
        </section>
      </Container>
    </>
  );
}

export default Rent;
