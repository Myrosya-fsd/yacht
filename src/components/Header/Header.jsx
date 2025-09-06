import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <section id="logo">
        <a href="#logo">
          <svg className={`${styles.icon} icon-logo`}>
            <use xlinkHref="/symbol-defs.svg#icon-logo" />
          </svg>
        </a>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#about">About </a>
          </li>
          <li className={styles.item}>
            <a href="#catalog">Yachts</a>
          </li>
          <li className={styles.item}>
            <a href="#reviews">Reviews</a>
          </li>
        </ul>
        <ul className={styles.linrsList}>
          <li className={styles.itemLink}>
            <svg className={`${styles.iconSoc} icon-ph_instagram-logo-fill`}>
              <use xlinkHref="/symbol-defs.svg#icon-ph_instagram-logo-fill" />
            </svg>
          </li>
          <li className={styles.itemLink}>
            <svg
              className={`${styles.iconSoc} icon-entypo-social_youtube-with-circle`}
            >
              <use xlinkHref="/symbol-defs.svg#icon-entypo-social_youtube-with-circle" />
            </svg>
          </li>
          <li className={styles.itemLink}>
            <svg className={`${styles.iconSoc} icon-ic_outline-facebook`}>
              <use xlinkHref="/symbol-defs.svg#icon-ic_outline-facebook" />
            </svg>
          </li>
        </ul>
      </section>
    </>
  );
}
export default Header;
