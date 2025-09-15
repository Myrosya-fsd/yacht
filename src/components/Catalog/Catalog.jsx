import Container from "../Container/Container.jsx";
import styles from "./Catalog.module.css";

function Catalog() {
  return (
    <section id="catalog" className={styles.catalog}>
      <Container>
        <h2 className={styles.title}>
          Choose your dream yacht and sail away into the sunset
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <picture className={styles.img}>
              <source
                srcSet="
                        /catalog/img_yaht_1440_1x.jpg 1x,
                        /catalog/img_yaht_1440_2x.jpg 2x
                      "
                media="(min-width: 1440px)"
              />
              <source
                srcSet="
                        /catalog/img_yaht_1280_1x.jpg 1x,
                        /catalog/img_yaht_1280_2x.jpg 2x
                        "
                media="(min-width: 1280px)"
              />
              <source
                srcSet="
                        /catalog/img_yaht_tab_1x.jpg 1x,
                        /catalog/img_yaht_tab_2x.jpg 2x
                      "
                media="(min-width: 768px)"
              />
              <source
                srcSet="
                        /catalog/img_yaht_mob_1x.jpg 1x,
                        /catalog/img_yaht_mob_2x.jpg  2x
                      "
                media="(max-width: 767px)"
              />
              <img
                className={styles.img}
                src="/catalog/img_yaht_1440_1x.jpg"
                alt="Yacht"
              />
            </picture>
            <div className={styles.bloxs}>
              <h3 className={styles.subtitle}>ARROW</h3>
              <p className={styles.subtitleText}>LUXURY YAHTS</p>
            </div>
            <hr className={styles.typeDivider} />
            <div className={styles.bloxs}>
              <p className={styles.info}>LENGTH </p>
              <p className={styles.text}>48m(155ft) </p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>BUILDER </p>
              <p className={styles.text}>Admiral</p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>BUILT </p>
              <p className={styles.text}>2021</p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>GUESTS </p>
              <p className={styles.text}>11 in 5 cabins</p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>PRICE</p>
              <p className={styles.text}>€33,500,000</p>
            </div>
          </li>
          <li className={styles.item}>
            <picture className={styles.img}>
              <source
                srcSet="
                        /catalog/img_yaht_2_1440_1x.jpg 1x,
                        /catalog/img_yaht_2_1440_2x.jpg 2x
                      "
                media="(min-width: 1440px)"
              />
              <source
                srcSet="
                        /catalog/img_yaht_2_1280_1x.jpg 1x,
                        /catalog/img_yaht_2_1280_2x.jpg 2x
                        "
                media="(min-width: 1280px)"
              />
              <source
                srcSet="
                        /catalog/img_yaht_2_tab_1x.jpg 1x,
                        /catalog/img_yaht_2_tab_2x.jpg 2x
                      "
                media="(min-width: 768px)"
              />
              <img
                className={styles.img}
                src="/catalog/img_yaht_2_1440_1x.jpg"
                alt="Yacht"
              />
            </picture>
            <div className={styles.bloxs}>
              <h3 className={styles.subtitle}>BENETTI OASIS 40M BO122</h3>
              <p className={styles.subtitleText}>LUXURY YAHTS </p>
            </div>
            <hr className={styles.typeDivider} />
            <div className={styles.bloxs}>
              <p className={styles.info}>LENGTH </p>
              <p className={styles.text}>41m (133ft)</p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>SHIPYARD</p>
              <p className={styles.text}>Benetti </p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>BUILT </p>
              <p className={styles.text}>2025</p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>GUESTS </p>
              <p className={styles.text}>10 in 5 cabins</p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>PRICE</p>
              <p className={styles.text}>€23,210,000</p>
            </div>
          </li>
          <li className={`${styles.item} ${styles.item2}`}>
            <picture className={styles.img}>
              <source
                srcSet="
                        /catalog/img_yaht_3_1440_1x.jpg 1x,
                        /catalog/img_yaht_3_1440_2x.jpg 2x
                      "
                media="(min-width: 1440px)"
              />
              <source
                srcSet="
                        /catalog/img_yaht_3_1280_1x.jpg 1x,
                        /catalog/img_yaht_3_1280_2x.jpg 2x
                      "
                media="(min-width: 1280px)"
              />
              <img
                className={styles.img}
                src="/catalog/img_yaht_3_1440_1x.jpg"
                alt="Yacht"
              />
            </picture>
            <div className={styles.bloxs}>
              <h3 className={styles.subtitle}>BELLE ANNA</h3>
              <p className={styles.subtitleText}>LUXURY YAHTS</p>
            </div>
            <hr className={styles.typeDivider} />
            <div className={styles.bloxs}>
              <p className={styles.info}>LENGTH </p>
              <p className={styles.text}>50m(155ft) </p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>BUILDER </p>
              <p className={styles.text}>ISA</p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>BUILT </p>
              <p className={styles.text}>2012</p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>GUESTS </p>
              <p className={styles.text}>12 in 6 cabins</p>
            </div>
            <div className={styles.bloxs}>
              <p className={styles.info}>PRICE</p>
              <p className={styles.text}>€21,000,000</p>
            </div>
          </li>
        </ul>
        <a href="#rent" className={styles.link}>
          Yacht rental
        </a>
      </Container>
    </section>
  );
}

export default Catalog;
